type Env = {
  PAYPAL_CLIENT_ID?: string;
  PAYPAL_CLIENT_SECRET?: string;
  PAYPAL_ENV?: string;
  REPORT_PRICE_EUR?: string;
};

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' }
  });

async function getAccessToken(env: Env) {
  if (!env.PAYPAL_CLIENT_ID || !env.PAYPAL_CLIENT_SECRET) {
    throw new Error('PAYPAL_NOT_CONFIGURED');
  }

  const base =
    env.PAYPAL_ENV === 'live'
      ? 'https://api-m.paypal.com'
      : 'https://api-m.sandbox.paypal.com';

  const auth = btoa(`${env.PAYPAL_CLIENT_ID}:${env.PAYPAL_CLIENT_SECRET}`);
  const response = await fetch(`${base}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      authorization: `Basic ${auth}`,
      'content-type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials'
  });

  if (!response.ok) {
    throw new Error('PAYPAL_AUTH_FAILED');
  }

  const data = (await response.json()) as { access_token: string };
  return { base, token: data.access_token };
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const { base, token } = await getAccessToken(env);
    const price = env.REPORT_PRICE_EUR || '49.00';
    const origin = new URL(request.url).origin;

    let payload: { reportId?: string } = {};
    try {
      payload = (await request.json()) as { reportId?: string };
    } catch {
      payload = {};
    }

    const response = await fetch(`${base}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
        'content-type': 'application/json',
        'paypal-request-id': crypto.randomUUID()
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [
          {
            reference_id: payload.reportId || 'REGMETRIC-REPORT',
            description: 'RegMetric Professional Compliance Report PDF',
            amount: {
              currency_code: 'EUR',
              value: price
            }
          }
        ],
        payment_source: {
          paypal: {
            experience_context: {
              brand_name: 'RegMetric',
              shipping_preference: 'NO_SHIPPING',
              user_action: 'PAY_NOW',
              return_url: `${origin}/report-payment-success/`,
              cancel_url: `${origin}/reports/?payment=cancelled`
            }
          }
        }
      })
    });

    const data = (await response.json()) as {
      id?: string;
      links?: Array<{ rel: string; href: string }>;
    };

    if (!response.ok || !data.id) {
      return json({ error: 'PAYPAL_ORDER_FAILED', details: data }, 502);
    }

    const approveUrl = data.links?.find((link) => link.rel === 'payer-action' || link.rel === 'approve')?.href;

    if (!approveUrl) {
      return json({ error: 'PAYPAL_APPROVAL_URL_MISSING' }, 502);
    }

    return json({ orderId: data.id, approveUrl, price, currency: 'EUR' });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'UNKNOWN_ERROR';

    if (message === 'PAYPAL_NOT_CONFIGURED') {
      return json({
        error: 'PAYPAL_NOT_CONFIGURED',
        message: 'PayPal API credentials have not been configured on Cloudflare.'
      }, 503);
    }

    return json({ error: message }, 500);
  }
};

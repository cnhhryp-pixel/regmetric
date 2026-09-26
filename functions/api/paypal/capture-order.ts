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

  if (!response.ok) throw new Error('PAYPAL_AUTH_FAILED');

  const data = (await response.json()) as { access_token: string };
  return { base, token: data.access_token };
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const body = (await request.json()) as { orderId?: string };
    if (!body.orderId) return json({ error: 'ORDER_ID_REQUIRED' }, 400);

    const { base, token } = await getAccessToken(env);
    const response = await fetch(
      `${base}/v2/checkout/orders/${encodeURIComponent(body.orderId)}/capture`,
      {
        method: 'POST',
        headers: {
          authorization: `Bearer ${token}`,
          'content-type': 'application/json',
          'paypal-request-id': crypto.randomUUID()
        }
      }
    );

    const data = (await response.json()) as any;

    if (!response.ok) {
      return json({ error: 'PAYPAL_CAPTURE_FAILED', details: data }, 502);
    }

    const expected = env.REPORT_PRICE_EUR || '49.00';
    const capture =
      data.purchase_units?.[0]?.payments?.captures?.[0];
    const paid =
      data.status === 'COMPLETED' &&
      capture?.status === 'COMPLETED' &&
      capture?.amount?.currency_code === 'EUR' &&
      capture?.amount?.value === expected;

    if (!paid) {
      return json({
        error: 'PAYMENT_NOT_VERIFIED',
        status: data.status,
        captureStatus: capture?.status,
        amount: capture?.amount
      }, 402);
    }

    return json({
      paid: true,
      orderId: data.id,
      amount: capture.amount.value,
      currency: capture.amount.currency_code,
      payerEmail: data.payer?.email_address || null
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'UNKNOWN_ERROR';
    return json({ error: message }, message === 'PAYPAL_NOT_CONFIGURED' ? 503 : 500);
  }
};

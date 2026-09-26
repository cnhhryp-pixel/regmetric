type Env = {
  PAYPAL_CLIENT_ID?: string;
  PAYPAL_CLIENT_SECRET?: string;
  PAYPAL_ENV?: string;
  REPORT_PRICE_EUR?: string;
};

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store'
    }
  });

export const onRequestGet: PagesFunction<Env> = async ({ env }) => {
  const configured = Boolean(
    env.PAYPAL_CLIENT_ID &&
    env.PAYPAL_CLIENT_SECRET
  );

  const environment = env.PAYPAL_ENV === 'live' ? 'live' : 'sandbox';
  const price = env.REPORT_PRICE_EUR || '49.00';

  if (!configured) {
    return json({
      configured: false,
      credentialsValid: false,
      environment,
      price,
      currency: 'EUR'
    });
  }

  try {
    const base =
      environment === 'live'
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

    return json({
      configured: true,
      credentialsValid: response.ok,
      environment,
      price,
      currency: 'EUR'
    });
  } catch {
    return json({
      configured: true,
      credentialsValid: false,
      environment,
      price,
      currency: 'EUR'
    });
  }
};

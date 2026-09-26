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

  return json({
    configured,
    environment: env.PAYPAL_ENV === 'live' ? 'live' : 'sandbox',
    price: env.REPORT_PRICE_EUR || '49.00',
    currency: 'EUR'
  });
};

type Env = {
  PAYPAL_CLIENT_ID?: string;
  PAYPAL_CLIENT_SECRET?: string;
  PAYPAL_ENV?: string;
  REPORT_PRICE_EUR?: string;
};

type ReportPayload = {
  productName: string;
  companyName: string;
  preparedFor: string;
  categoryLabel: string;
  roleLabel: string;
  reportDate: string;
  reportId: string;
  regulations: string[];
  evidence: string[];
  risks: string[];
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

function canonicalReport(report: ReportPayload) {
  return JSON.stringify({
    productName: report.productName || '',
    companyName: report.companyName || '',
    preparedFor: report.preparedFor || '',
    categoryLabel: report.categoryLabel || '',
    roleLabel: report.roleLabel || '',
    reportDate: report.reportDate || '',
    reportId: report.reportId || '',
    regulations: report.regulations || [],
    evidence: report.evidence || [],
    risks: report.risks || []
  });
}

async function reportHash(report: ReportPayload) {
  const bytes = new TextEncoder().encode(canonicalReport(report));
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

function verifyPaidOrder(data: any, expectedAmount: string, expectedReportId: string, expectedHash: string) {
  const unit = data.purchase_units?.[0];
  const capture = unit?.payments?.captures?.[0];

  const paid =
    data.status === 'COMPLETED' &&
    capture?.status === 'COMPLETED' &&
    capture?.amount?.currency_code === 'EUR' &&
    capture?.amount?.value === expectedAmount &&
    unit?.reference_id === expectedReportId &&
    unit?.custom_id === expectedHash;

  return { paid, capture, unit };
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const body = (await request.json()) as {
      orderId?: string;
      report?: ReportPayload;
    };

    if (!body.orderId) return json({ error: 'ORDER_ID_REQUIRED' }, 400);
    if (!body.report?.reportId) return json({ error: 'REPORT_PAYLOAD_REQUIRED' }, 400);

    const { base, token } = await getAccessToken(env);
    const expected = env.REPORT_PRICE_EUR || '49.00';
    const expectedHash = await reportHash(body.report);

    const orderResponse = await fetch(
      `${base}/v2/checkout/orders/${encodeURIComponent(body.orderId)}`,
      { headers: { authorization: `Bearer ${token}` } }
    );

    const currentOrder = (await orderResponse.json()) as any;

    if (orderResponse.ok) {
      const existing = verifyPaidOrder(
        currentOrder,
        expected,
        body.report.reportId,
        expectedHash
      );

      if (existing.paid) {
        return json({
          paid: true,
          orderId: currentOrder.id,
          reportId: existing.unit.reference_id,
          amount: existing.capture.amount.value,
          currency: existing.capture.amount.currency_code,
          payerEmail: currentOrder.payer?.email_address || null,
          alreadyCaptured: true
        });
      }
    }

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

    const verified = verifyPaidOrder(
      data,
      expected,
      body.report.reportId,
      expectedHash
    );

    if (!verified.paid) {
      return json({
        error: 'PAYMENT_NOT_VERIFIED',
        message: 'Payment or report binding could not be verified.',
        status: data.status,
        captureStatus: verified.capture?.status,
        amount: verified.capture?.amount
      }, 402);
    }

    return json({
      paid: true,
      orderId: data.id,
      reportId: verified.unit.reference_id,
      amount: verified.capture.amount.value,
      currency: verified.capture.amount.currency_code,
      payerEmail: data.payer?.email_address || null,
      alreadyCaptured: false
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'UNKNOWN_ERROR';
    return json({ error: message }, message === 'PAYPAL_NOT_CONFIGURED' ? 503 : 500);
  }
};

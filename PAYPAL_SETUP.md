# RegMetric PayPal Paid PDF Setup

RegMetric uses Cloudflare Pages Functions for server-side PayPal order creation and payment verification.

## Cloudflare Pages environment variables

Add these variables in the RegMetric Cloudflare Pages project:

- `PAYPAL_CLIENT_ID` — PayPal REST app client ID
- `PAYPAL_CLIENT_SECRET` — PayPal REST app secret
- `PAYPAL_ENV` — use `sandbox` while testing, then `live`
- `REPORT_PRICE_EUR` — default `49.00`

Do not commit the PayPal client secret to GitHub.

## Flow

1. Customer builds a report on `/reports/`.
2. Free browser printing remains available with a preliminary watermark.
3. Paid PDF starts a server-created PayPal order.
4. PayPal returns the customer to `/report-payment-success/`.
5. RegMetric captures and verifies the payment server-side.
6. Only a verified EUR payment matching `REPORT_PRICE_EUR` unlocks the professional PDF download.

## Testing

Start with:

- `PAYPAL_ENV=sandbox`
- PayPal sandbox buyer/seller accounts
- `REPORT_PRICE_EUR=49.00`

After successful sandbox testing, replace the credentials with the live REST app and set:

- `PAYPAL_ENV=live`

The paid PDF is generated in the customer's browser after successful server-side payment verification.


## Configuration check

After deployment, open:

`https://regmetric.com/api/paypal/status`

Expected sandbox response after credentials are configured:

```json
{
  "configured": true,
  "environment": "sandbox",
  "price": "49.00",
  "currency": "EUR"
}
```

The endpoint never returns the PayPal client secret.

The Reports page also checks this endpoint automatically:

- **PayPal Sandbox ready** — credentials are present and sandbox mode is active.
- **PayPal Live ready** — live credentials are present.
- **PayPal setup required** — the paid PDF button stays disabled until Cloudflare environment variables are configured.

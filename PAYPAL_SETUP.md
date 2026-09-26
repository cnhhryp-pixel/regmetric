# RegMetric PayPal Paid PDF Setup

RegMetric uses Cloudflare Pages Functions for server-side PayPal order creation and payment verification.

## RegMetric PayPal account

Live PayPal account supplied for this project:

- **cnhhryp@gmail.com**

Use this account to log in to the PayPal Developer Dashboard and create or select the REST API app used for the live RegMetric checkout.

> PayPal requires a PayPal Business account for going live with REST API integrations. If this account is not currently a Business account, complete that PayPal account step before switching RegMetric to live mode.

## Get the PayPal API credentials

1. Log in to the PayPal Developer Dashboard with **cnhhryp@gmail.com**.
2. Open **Apps & Credentials**.
3. Create a REST API app for RegMetric, or use an appropriate existing app.
4. Copy the app's **Client ID** and **Client Secret**.
5. Keep the Client Secret private. Do not paste it into GitHub files or public chat messages.

For Sandbox testing, use the app's **Sandbox** Client ID and Secret and a PayPal Sandbox buyer account. Do not treat the live account email as a Sandbox buyer.

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
6. RegMetric also verifies that the paid PayPal order is bound to the exact report payload.
7. Only a verified EUR payment matching `REPORT_PRICE_EUR` unlocks the professional PDF download.

## Testing

Start with:

- `PAYPAL_ENV=sandbox`
- PayPal Sandbox app credentials
- PayPal Sandbox buyer account
- `REPORT_PRICE_EUR=49.00`

After successful Sandbox testing, switch to the live REST app created under **cnhhryp@gmail.com** and set:

- `PAYPAL_ENV=live`

The paid PDF is generated in the customer's browser after successful server-side payment verification.

## Configuration check

After deployment, open:

`https://regmetric.com/api/paypal/status`

Expected Sandbox response after valid credentials are configured:

```json
{
  "configured": true,
  "credentialsValid": true,
  "environment": "sandbox",
  "price": "49.00",
  "currency": "EUR"
}
```

The endpoint never returns the PayPal Client ID or Client Secret.

The Reports page also checks this endpoint automatically:

- **PayPal Sandbox verified** — Sandbox credentials successfully authenticated.
- **PayPal Live verified** — Live credentials successfully authenticated.
- **PayPal credentials rejected** — variables exist, but PayPal rejected the credential pair or the environment does not match.
- **PayPal setup required** — Client ID / Secret are still missing.

## Live switch checklist

Before changing to `PAYPAL_ENV=live`:

- Confirm the live REST app belongs to the intended PayPal merchant account: **cnhhryp@gmail.com**.
- Confirm the live Client ID and Client Secret are stored only in Cloudflare environment variables.
- Confirm `REPORT_PRICE_EUR=49.00`.
- Confirm `/api/paypal/status` reports `credentialsValid: true` and `environment: "live"`.
- Run one low-risk live checkout and verify the payment appears in the intended PayPal account before promoting the paid PDF publicly.

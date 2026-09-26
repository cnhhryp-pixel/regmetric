'use client';

import { useEffect, useMemo, useState } from 'react';

const PAYPAL_PAYMENT_LINK = 'https://www.paypal.com/ncp/payment/HJHHHNVMFJ6XE';
const VERIFICATION_EMAIL = 'cnhhryp@gmail.com';

type PendingReport = {
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
  expectedAmount?: string;
  currency?: string;
};

export default function ManualPaymentVerification() {
  const [report, setReport] = useState<PendingReport | null>(null);
  const [transactionId, setTransactionId] = useState('');
  const [payerEmail, setPayerEmail] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const raw = window.localStorage.getItem('regmetric_pending_paid_report');

    if (!raw) return;

    try {
      setReport(JSON.parse(raw) as PendingReport);
    } catch {
      setReport(null);
    }
  }, []);

  const details = useMemo(() => {
    if (!report) return '';

    return [
      'RegMetric Payment Verification',
      `Report ID: ${report.reportId}`,
      `Product: ${report.productName}`,
      `Company: ${report.companyName || '-'}`,
      `Prepared for: ${report.preparedFor || '-'}`,
      `Expected payment: EUR ${report.expectedAmount || '49.00'}`,
      `PayPal Transaction ID: ${transactionId || '[enter transaction ID]'}`,
      `Payer PayPal email: ${payerEmail || '[enter payer email]'}`
    ].join('\n');
  }, [report, transactionId, payerEmail]);

  const validate = () => {
    if (!report) {
      setError('Report draft not found. Return to Reports and rebuild the report.');
      return false;
    }

    if (transactionId.trim().length < 6) {
      setError('Enter the PayPal Transaction ID from the payment receipt.');
      return false;
    }

    if (!payerEmail.includes('@')) {
      setError('Enter the PayPal payer email used for the payment.');
      return false;
    }

    setError('');
    return true;
  };

  const handleEmail = () => {
    if (!validate()) return;

    const subject = encodeURIComponent(
      `RegMetric Payment Verification - ${report?.reportId || 'Report'}`
    );
    const body = encodeURIComponent(details);

    window.localStorage.setItem(
      'regmetric_manual_payment_verification',
      JSON.stringify({
        reportId: report?.reportId,
        transactionId: transactionId.trim(),
        payerEmail: payerEmail.trim(),
        submittedAt: new Date().toISOString()
      })
    );

    window.location.href =
      `mailto:${VERIFICATION_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleCopy = async () => {
    if (!validate()) return;

    try {
      await navigator.clipboard.writeText(details);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setError('Could not copy automatically. Please use the email button instead.');
    }
  };

  return (
    <div className="manual-payment-card">
      {!report ? (
        <div className="empty-state">
          <h2>No saved report draft found</h2>
          <p>
            Build the report first so RegMetric can attach the correct Report ID
            to your payment verification request.
          </p>
          <a className="button button-primary" href="/reports">Return to Reports</a>
        </div>
      ) : (
        <>
          <div className="verification-report-summary">
            <div><span>Report ID</span><strong>{report.reportId}</strong></div>
            <div><span>Product</span><strong>{report.productName}</strong></div>
            <div><span>Payment</span><strong>EUR {report.expectedAmount || '49.00'}</strong></div>
          </div>

          <div className="verification-steps">
            <div><span>01</span><div><strong>Pay with PayPal</strong><p>Complete the €49 payment using the RegMetric PayPal Payment Link.</p></div></div>
            <div><span>02</span><div><strong>Enter payment details</strong><p>Use the Transaction ID and payer email shown in your PayPal receipt.</p></div></div>
            <div><span>03</span><div><strong>Send for verification</strong><p>The payment is checked manually against the RegMetric PayPal account before the professional PDF is delivered.</p></div></div>
          </div>

          <a
            className="button button-secondary verification-pay-button"
            href={PAYPAL_PAYMENT_LINK}
            target="_blank"
            rel="noreferrer"
          >
            Open PayPal Payment Link
          </a>

          <div className="form-grid verification-form">
            <div className="field">
              <label htmlFor="paypal-transaction-id">PayPal Transaction ID</label>
              <input
                id="paypal-transaction-id"
                value={transactionId}
                onChange={(event) => setTransactionId(event.target.value)}
                placeholder="e.g. 9AB12345CD678901E"
              />
            </div>

            <div className="field">
              <label htmlFor="payer-email">PayPal payer email</label>
              <input
                id="payer-email"
                type="email"
                value={payerEmail}
                onChange={(event) => setPayerEmail(event.target.value)}
                placeholder="name@example.com"
              />
            </div>
          </div>

          {error && <div className="verification-error">{error}</div>}

          <div className="verification-actions">
            <button className="button button-primary" type="button" onClick={handleEmail}>
              Send Verification Request
            </button>
            <button className="button button-secondary" type="button" onClick={handleCopy}>
              {copied ? 'Copied' : 'Copy Verification Details'}
            </button>
          </div>

          <div className="manual-verification-note">
            <strong>Manual verification</strong>
            <span>
              No PayPal API credentials are required. After the transaction is
              confirmed in PayPal, the watermark-free professional PDF can be
              delivered to the verified payer.
            </span>
          </div>
        </>
      )}
    </div>
  );
}

import ManualPaymentVerification from '../../components/ManualPaymentVerification';

export const metadata = {
  title: 'PayPal Payment Verification',
  description: 'Submit your PayPal Transaction ID and payer email for RegMetric professional report verification.',
  robots: { index: false, follow: false },
};

export default function PaymentVerificationPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <span className="pill">Professional Report</span>
          <h1>Verify your PayPal payment.</h1>
          <p>
            After paying through the RegMetric PayPal Payment Link, submit the
            PayPal Transaction ID and payer email so the professional report can
            be matched to the payment.
          </p>
        </div>
      </section>

      <section className="section container narrow">
        <ManualPaymentVerification />
      </section>
    </main>
  );
}

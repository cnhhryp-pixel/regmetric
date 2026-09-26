import PaidReportDownload from '../../components/PaidReportDownload';

export const metadata = {
  title: 'Report Payment Confirmation',
  description: 'Verify your RegMetric report payment and download the professional PDF.',
  robots: { index: false, follow: false },
};

export default function ReportPaymentSuccessPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <span className="pill">Professional Report</span>
          <h1>Payment confirmation</h1>
          <p>
            RegMetric verifies the PayPal transaction before enabling the
            watermark-free professional PDF download.
          </p>
        </div>
      </section>

      <section className="section container narrow">
        <PaidReportDownload />
      </section>
    </main>
  );
}

export const metadata = {
  title: 'Compliance Reports | RegMetric',
  description: 'Generate structured product compliance reports for global market preparation.',
};

const features = [
  'Product compliance summary',
  'Applicable regulations overview',
  'Risk identification',
  'Professional report format'
];

export default function ReportsPage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Compliance Reports</p>
        <h1>Turn Compliance Analysis Into Professional Reports</h1>
        <p>
          RegMetric helps companies organize regulatory information into clear
          compliance documents for internal review and market preparation.
        </p>
      </section>

      <section className="card-grid">
        <div className="card"><h2>Free Report Preview</h2><p>Review compliance findings and key regulatory information.</p></div>
        <div className="card"><h2>Professional Report</h2><p>Generate structured reports with expanded compliance details.</p></div>
        <div className="card"><h2>Enterprise Workflow</h2><p>Support teams managing multiple products and markets.</p></div>
      </section>

      <section className="card" style={{marginTop:'40px'}}>
        <h2>Report Includes</h2>
        {features.map((feature) => <p key={feature}>✓ {feature}</p>)}
      </section>
    </main>
  );
}

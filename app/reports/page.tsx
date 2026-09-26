import ReportPreview from '../../components/ReportPreview';
import { BreadcrumbSchema } from '../../components/SeoSchemas';
import ReportPaymentStatus from '../../components/ReportPaymentStatus';

export const metadata = {
  title: 'Product Compliance Reports',
  description: 'Preview how RegMetric organizes product scope, regulatory areas, evidence, risks and next actions into a structured compliance report.',
  alternates: { canonical: '/reports' },
};

const included = [
  'Product and market summary',
  'Potentially relevant regulatory areas',
  'Evidence and documentation checklist',
  'Potential gaps and risk themes',
  'Recommended next actions',
  'Internal review notes and follow-up items'
];

export default function ReportsPage() {
  return (
    <main>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Reports', path: '/reports' }]} />
      <section className="page-hero">
        <div className="container narrow">
          <span className="pill">Compliance Reports</span>
          <h1>Turn scattered compliance research into a report your team can use.</h1>
          <p>
            RegMetric report workflows organize product scope, likely regulatory
            areas, evidence, gaps and next actions into a clearer review format.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="/assessment">Run Assessment First</a>
            <a className="button button-secondary" href="/search">Search Regulations</a>
          </div>
        </div>
      </section>

      <section className="section container">
        <ReportPaymentStatus />
        <div className="section-heading">
          <div>
            <span className="eyebrow">Interactive preview</span>
            <h2>See how a preliminary report is structured.</h2>
          </div>
          <p>
            Change the product category and supply-chain role to preview how the
            report sections adapt.
          </p>
        </div>

        <ReportPreview />
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Report structure</span>
              <h2>Designed for internal review and follow-up.</h2>
            </div>
          </div>

          <div className="list-grid">
            {included.map((item) => (
              <div className="list-item" key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="workflow">
          <div className="workflow-copy">
            <span className="eyebrow">From screen to report</span>
            <h2>Keep the workflow connected.</h2>
            <p>
              Start with search, narrow the scope with an assessment, then organize
              the findings into a report instead of repeating research manually.
            </p>
          </div>

          <div className="workflow-steps">
            <div><span>01</span><strong>Search</strong><p>Find relevant product, industry and regulation pages.</p></div>
            <div><span>02</span><strong>Assess</strong><p>Add product category and supply-chain role.</p></div>
            <div><span>03</span><strong>Review</strong><p>Check likely requirements, evidence and gaps.</p></div>
            <div><span>04</span><strong>Report</strong><p>Organize the findings into a reusable internal document.</p></div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="cta-panel compact">
          <div>
            <h2>Start with a preliminary product assessment.</h2>
            <p>Build the scope first, then use the report workflow to organize the result.</p>
          </div>
          <a className="button button-light" href="/assessment">Start Assessment</a>
        </div>
      </section>
    </main>
  );
}

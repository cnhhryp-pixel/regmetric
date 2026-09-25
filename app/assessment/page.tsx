import AssessmentTool from '../../components/AssessmentTool';
import { BreadcrumbSchema } from '../../components/SeoSchemas';

export const metadata = {
  title: 'Free Product Compliance Assessment',
  description: 'Run a preliminary product compliance assessment for EU market-entry research.',
  alternates: { canonical: '/assessment' },
};

export default function AssessmentPage() {
  return (
    <main>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Assessment', path: '/assessment' }]} />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Assessment', path: '/assessment' }]} />
      <section className="page-hero">
        <div className="container narrow">
          <span className="pill">Free Preliminary Assessment</span>
          <h1>Turn a product idea into a structured compliance starting point.</h1>
          <p>
            Choose a product category and your supply-chain role to identify
            likely regulatory research areas and practical next actions.
          </p>
        </div>
      </section>

      <section className="section container">
        <AssessmentTool />
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">What this tool does</span>
              <h2>Organizes early compliance research before deeper review.</h2>
            </div>
            <p>
              It is designed for initial scoping. A final conformity decision
              still depends on the exact product, intended use and applicable law.
            </p>
          </div>

          <div className="card-grid feature-grid">
            <div className="card">
              <span className="card-badge">Scope</span>
              <h3>Product category</h3>
              <p>Start with the closest product family instead of searching regulations one by one.</p>
            </div>
            <div className="card">
              <span className="card-badge">Role</span>
              <h3>Supply-chain position</h3>
              <p>See different focus areas for manufacturers, importers and distributors.</p>
            </div>
            <div className="card">
              <span className="card-badge">Map</span>
              <h3>Likely compliance areas</h3>
              <p>Jump directly into related regulation guides and product research pages.</p>
            </div>
            <div className="card">
              <span className="card-badge">Action</span>
              <h3>Next-step checklist</h3>
              <p>Get a practical sequence for documentation, evidence and market-entry preparation.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

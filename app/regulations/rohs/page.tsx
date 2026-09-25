export const metadata = {
  title: 'EU RoHS Compliance Guide | RegMetric',
  description: 'Understand EU RoHS restricted-substance requirements, supplier evidence and documentation for electrical and electronic products.',
};

const evidence = [
  'Bills of materials and component information',
  'Supplier declarations and material data',
  'Test reports where appropriate',
  'Internal restricted-substance specifications',
  'Change-control records for suppliers and components',
  'Technical documentation linking evidence to the finished product'
];

export default function RoHSPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <span className="pill">Electrical & Electronic Products</span>
          <h1>RoHS compliance starts with materials and supplier evidence.</h1>
          <p>
            RoHS restricts certain hazardous substances in electrical and
            electronic equipment. Good compliance work usually depends on strong
            component, material and supplier-documentation control.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="content-layout">
          <article className="article">
            <h2>Which products may be affected?</h2>
            <p>
              Many electrical and electronic products can fall within RoHS scope.
              The analysis should begin with product classification, intended use,
              exemptions and component/material composition.
            </p>

            <h2>What should a RoHS file contain?</h2>
            <div className="list-grid">
              {evidence.map((item) => <div className="list-item" key={item}>{item}</div>)}
            </div>

            <h2>Common weak points</h2>
            <div className="card-grid regulation-grid">
              <div className="card"><h3>Supplier gaps</h3><p>Declarations are missing, outdated or not linked to the exact component purchased.</p></div>
              <div className="card"><h3>Material changes</h3><p>A component or coating changes without triggering a new compliance review.</p></div>
              <div className="card"><h3>Evidence mismatch</h3><p>Test evidence covers a material sample but not the actual finished-product configuration.</p></div>
              <div className="card"><h3>Scope confusion</h3><p>Teams assume RoHS applies or does not apply without first confirming product classification.</p></div>
            </div>

            <h2>Related research</h2>
            <div className="related-links">
              <a href="/industries/electronics">Electronics <span>→</span></a>
              <a href="/regulations/ce-marking">CE Marking <span>→</span></a>
              <a href="/regulations/reach">REACH <span>→</span></a>
              <a href="/assessment">Assessment <span>→</span></a>
            </div>
          </article>

          <aside className="sidebar-card">
            <span className="card-badge">Practical focus</span>
            <h3>Build traceable supplier evidence.</h3>
            <p>
              RoHS work becomes easier when each material or component can be
              traced to current supplier documentation.
            </p>
            <a className="button button-primary" href="/assessment">Start Assessment</a>
          </aside>
        </div>
      </section>
    </main>
  );
}

export const metadata = {
  title: 'EU Toy Compliance Guide | RegMetric',
  description: 'Explore EU toy compliance research areas including CE marking, product safety, materials, testing, warnings and technical documentation.',
};

export default function IndustryPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <span className="pill">Toy Compliance</span>
          <h1>Structure EU safety and conformity research for toy products.</h1>
          <p>Toy compliance depends on the product, intended age group, materials, foreseeable use and any electronic or chemical features. A useful workflow connects design risks, testing, technical documentation and consumer information.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="/assessment">Start Assessment</a>
            <a className="button button-secondary" href="/products/toys">Toy Product Guide</a>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="content-layout">
          <article className="article">
            <h2>Compliance areas to investigate</h2>
            <div className="regulation-stack">
              <a className="regulation-row" href="/regulations/ce-marking" key="CE Marking"><div><strong>CE Marking</strong><p>Map the applicable conformity process and evidence for the toy.</p></div><span>→</span></a>
                <a className="regulation-row" href="/regulations/gpsr" key="GPSR"><div><strong>GPSR</strong><p>Review broader product-safety, traceability and market-surveillance themes.</p></div><span>→</span></a>
                <a className="regulation-row" href="/regulations/reach" key="REACH"><div><strong>REACH</strong><p>Check materials, coatings and chemical information supplied upstream.</p></div><span>→</span></a>
            </div>

            <h2>Evidence worth preparing early</h2>
            <div className="list-grid">
              <div className="list-item" key="Age grading">Age grading</div>
              <div className="list-item" key="Product specification">Product specification</div>
              <div className="list-item" key="Safety assessment">Safety assessment</div>
              <div className="list-item" key="Test evidence">Test evidence</div>
              <div className="list-item" key="Material information">Material information</div>
              <div className="list-item" key="Warnings & labels">Warnings & labels</div>
            </div>

            <h2>Frequently asked questions</h2>
            <div className="faq-list">
              <details className="faq-item"><summary>Why does age grading matter?</summary><p>Intended age can change foreseeable hazards, warnings, testing needs and the way the product should be assessed.</p></details>
              <details className="faq-item"><summary>What if a toy contains electronics?</summary><p>Electronic functions can introduce additional compliance areas beyond toy-specific safety requirements.</p></details>
              <details className="faq-item"><summary>Are supplier declarations enough?</summary><p>They can support the file, but the right evidence depends on the exact material, component and risk being assessed.</p></details>
            </div>
          </article>

          <aside className="sidebar-card">
            <span className="card-badge">Research workflow</span>
            <h3>Move from industry to product-specific scope.</h3>
            <p>
              Use this industry guide to identify research areas, then run the
              preliminary assessment with your exact product and supply-chain role.
            </p>
            <a className="button button-primary" href="/assessment">Start Assessment</a>
            <div className="sidebar-links">
              <a href="/products/toys">Toy Product Guide →</a>
              <a href="/regulations">EU Regulations →</a>
              <a href="/search">Compliance Search →</a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

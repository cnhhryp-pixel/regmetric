export const metadata = {
  title: 'EU Machinery Compliance Guide | RegMetric',
  description: 'Explore EU machinery compliance research including CE marking, risk assessment, technical documentation, instructions and conformity evidence.',
};

export default function IndustryPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <span className="pill">Machinery Compliance</span>
          <h1>Build an EU compliance path for machinery and industrial equipment.</h1>
          <p>Machinery compliance starts with intended use, foreseeable misuse and the hazards created across the product lifecycle. The conformity route, technical file and instructions should follow from that scope.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="/assessment">Start Assessment</a>
            <a className="button button-secondary" href="/products/machinery">Machinery Product Guide</a>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="content-layout">
          <article className="article">
            <h2>Compliance areas to investigate</h2>
            <div className="regulation-stack">
              <a className="regulation-row" href="/regulations/ce-marking" key="CE Marking"><div><strong>CE Marking</strong><p>Confirm the conformity route and supporting evidence required for the machine.</p></div><span>→</span></a>
                <a className="regulation-row" href="/regulations/reach" key="REACH"><div><strong>REACH</strong><p>Review material and chemical information for components, coatings and fluids.</p></div><span>→</span></a>
            </div>

            <h2>Evidence worth preparing early</h2>
            <div className="list-grid">
              <div className="list-item" key="Risk assessment">Risk assessment</div>
              <div className="list-item" key="Drawings & schematics">Drawings & schematics</div>
              <div className="list-item" key="Safety functions">Safety functions</div>
              <div className="list-item" key="Standards list">Standards list</div>
              <div className="list-item" key="Test evidence">Test evidence</div>
              <div className="list-item" key="Instructions & declarations">Instructions & declarations</div>
            </div>

            <h2>Frequently asked questions</h2>
            <div className="faq-list">
              <details className="faq-item"><summary>What should be assessed before testing?</summary><p>Define the machine, intended use, limits, users and foreseeable hazards so testing supports the actual conformity case.</p></details>
              <details className="faq-item"><summary>Why is the risk assessment important?</summary><p>It connects identified hazards to design controls, protective measures, instructions and evidence.</p></details>
              <details className="faq-item"><summary>Do supplier components need documentation?</summary><p>Yes, component evidence can be important where those components support safety or conformity claims for the complete machine.</p></details>
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
              <a href="/products/machinery">Machinery Product Guide →</a>
              <a href="/regulations">EU Regulations →</a>
              <a href="/search">Compliance Search →</a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

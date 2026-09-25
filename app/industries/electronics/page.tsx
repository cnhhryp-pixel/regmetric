export const metadata = {
  title: 'EU Electronics Compliance Guide | RegMetric',
  description: 'Explore EU compliance research areas for electronics, electrical products and connected devices, including CE marking, RoHS, REACH and product safety.',
};

export default function IndustryPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <span className="pill">Electronics Compliance</span>
          <h1>EU compliance research for electronics and electrical products.</h1>
          <p>Electronics can sit at the intersection of product safety, electrical safety, electromagnetic compatibility, substances and market-access rules. Start with the exact product design and intended use before deciding which requirements apply.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="/assessment">Start Assessment</a>
            <a className="button button-secondary" href="/products/electronics">Electronics Product Guide</a>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="content-layout">
          <article className="article">
            <h2>Compliance areas to investigate</h2>
            <div className="regulation-stack">
              <a className="regulation-row" href="/regulations/ce-marking" key="CE Marking"><div><strong>CE Marking</strong><p>Confirm which CE-marking legislation applies to the finished product.</p></div><span>→</span></a>
                <a className="regulation-row" href="/regulations/rohs" key="RoHS"><div><strong>RoHS</strong><p>Review restricted-substance evidence for components and materials.</p></div><span>→</span></a>
                <a className="regulation-row" href="/regulations/reach" key="REACH"><div><strong>REACH</strong><p>Check chemical and material information across the supply chain.</p></div><span>→</span></a>
                <a className="regulation-row" href="/regulations/gpsr" key="GPSR"><div><strong>GPSR</strong><p>Consider general product-safety duties where they remain relevant.</p></div><span>→</span></a>
            </div>

            <h2>Evidence worth preparing early</h2>
            <div className="list-grid">
              <div className="list-item" key="Product specification">Product specification</div>
              <div className="list-item" key="Bill of materials">Bill of materials</div>
              <div className="list-item" key="Risk assessment">Risk assessment</div>
              <div className="list-item" key="Test reports">Test reports</div>
              <div className="list-item" key="Supplier declarations">Supplier declarations</div>
              <div className="list-item" key="Labels & instructions">Labels & instructions</div>
            </div>

            <h2>Frequently asked questions</h2>
            <div className="faq-list">
              <details className="faq-item"><summary>Does every electronic product need CE marking?</summary><p>No single rule covers every electronic product. Product function, voltage, radio capability and intended use help determine which EU legislation is relevant.</p></details>
              <details className="faq-item"><summary>Are RoHS and REACH the same thing?</summary><p>No. They address different substance and chemical-compliance questions and can both be relevant to the same product.</p></details>
              <details className="faq-item"><summary>When should testing start?</summary><p>After the product scope and applicable requirements are mapped clearly enough to know what evidence the test program needs to support.</p></details>
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
              <a href="/products/electronics">Electronics Product Guide →</a>
              <a href="/regulations">EU Regulations →</a>
              <a href="/search">Compliance Search →</a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

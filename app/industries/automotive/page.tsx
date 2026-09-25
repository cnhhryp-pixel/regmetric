export const metadata = {
  title: 'EU Automotive Product Compliance Guide | RegMetric',
  description: 'Explore EU automotive component compliance research covering product classification, material requirements, supplier evidence and customer documentation.',
};

export default function IndustryPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <span className="pill">Automotive Compliance</span>
          <h1>Organize EU compliance research for automotive parts and components.</h1>
          <p>Automotive products can be affected by sector-specific approval rules, material requirements and customer-specific specifications. The first task is to classify the part and understand how it is used in the vehicle.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="/assessment">Start Assessment</a>
            <a className="button button-secondary" href="/products/automotive">Automotive Product Guide</a>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="content-layout">
          <article className="article">
            <h2>Compliance areas to investigate</h2>
            <div className="regulation-stack">
              <a className="regulation-row" href="/regulations/reach" key="REACH"><div><strong>REACH</strong><p>Review substance and material information for components, coatings and assemblies.</p></div><span>→</span></a>
                <div className="regulation-row" key="Product classification"><div><strong>Product classification</strong><p>Determine whether sector-specific approval or other vehicle rules may apply.</p></div></div>
                <div className="regulation-row" key="Customer requirements"><div><strong>Customer requirements</strong><p>Map OEM, tier-customer and contractual documentation expectations separately from law.</p></div></div>
            </div>

            <h2>Evidence worth preparing early</h2>
            <div className="list-grid">
              <div className="list-item" key="Component specification">Component specification</div>
              <div className="list-item" key="Material declarations">Material declarations</div>
              <div className="list-item" key="Supplier approvals">Supplier approvals</div>
              <div className="list-item" key="Test records">Test records</div>
              <div className="list-item" key="Traceability records">Traceability records</div>
              <div className="list-item" key="Customer requirements">Customer requirements</div>
            </div>

            <h2>Frequently asked questions</h2>
            <div className="faq-list">
              <details className="faq-item"><summary>Does every automotive part need the same approval route?</summary><p>No. The product function, installation location and relationship to regulated vehicle systems can change the applicable pathway.</p></details>
              <details className="faq-item"><summary>Why separate legal and customer requirements?</summary><p>OEM or customer requirements can be stricter or simply different from legal market-access obligations.</p></details>
              <details className="faq-item"><summary>What supplier evidence is useful?</summary><p>Specifications, material declarations, traceability records and test or approval evidence tied to the actual supplied part.</p></details>
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
              <a href="/products/automotive">Automotive Product Guide →</a>
              <a href="/regulations">EU Regulations →</a>
              <a href="/search">Compliance Search →</a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

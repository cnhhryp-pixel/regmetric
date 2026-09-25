export const metadata = {
  title: 'EU Consumer Product Compliance Guide | RegMetric',
  description: 'Explore EU consumer-product compliance research including GPSR, REACH, product-specific rules, traceability, documentation and supplier evidence.',
};

export default function IndustryPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <span className="pill">Consumer Product Compliance</span>
          <h1>Create a practical EU compliance starting point for consumer products.</h1>
          <p>General consumer products can be affected by GPSR, chemical requirements and product-specific legislation. Good scoping separates general safety duties from any rules that apply specifically to the product category.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="/assessment">Start Assessment</a>
            <a className="button button-secondary" href="/products">Product Guides</a>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="content-layout">
          <article className="article">
            <h2>Compliance areas to investigate</h2>
            <div className="regulation-stack">
              <a className="regulation-row" href="/regulations/gpsr" key="GPSR"><div><strong>GPSR</strong><p>Review general product-safety, traceability and post-market themes.</p></div><span>→</span></a>
                <a className="regulation-row" href="/regulations/reach" key="REACH"><div><strong>REACH</strong><p>Check chemical and material information across the supply chain.</p></div><span>→</span></a>
                <div className="regulation-row" key="Product-specific rules"><div><strong>Product-specific rules</strong><p>Confirm whether the product category has additional sector legislation.</p></div></div>
            </div>

            <h2>Evidence worth preparing early</h2>
            <div className="list-grid">
              <div className="list-item" key="Product description">Product description</div>
              <div className="list-item" key="Risk information">Risk information</div>
              <div className="list-item" key="Supplier records">Supplier records</div>
              <div className="list-item" key="Material declarations">Material declarations</div>
              <div className="list-item" key="Traceability data">Traceability data</div>
              <div className="list-item" key="Warnings & instructions">Warnings & instructions</div>
            </div>

            <h2>Frequently asked questions</h2>
            <div className="faq-list">
              <details className="faq-item"><summary>Is GPSR the only rule for consumer products?</summary><p>Not necessarily. Product-specific EU legislation can apply alongside or instead of parts of the general safety framework.</p></details>
              <details className="faq-item"><summary>What should importers collect from suppliers?</summary><p>Enough current product, safety, traceability and material information to support their own obligations and checks.</p></details>
              <details className="faq-item"><summary>Why review online product information?</summary><p>Distance-selling and online listings can form part of the product-information and traceability workflow.</p></details>
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
              <a href="/products">Product Guides →</a>
              <a href="/regulations">EU Regulations →</a>
              <a href="/search">Compliance Search →</a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

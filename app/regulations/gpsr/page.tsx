export const metadata = {
  title: 'EU GPSR Compliance Guide | RegMetric',
  description: 'Understand the EU General Product Safety Regulation, key obligations, documentation, traceability and market-entry considerations.',
};

const checklist = [
  'Define the product, intended user and foreseeable risks.',
  'Confirm whether product-specific EU legislation also applies.',
  'Prepare or collect product safety and technical documentation.',
  'Check traceability, manufacturer/importer information and responsible-person details.',
  'Review warnings, instructions and online listing information.',
  'Plan incident handling, complaints and corrective-action procedures.'
];

export default function GPSRPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <span className="pill">EU Product Safety</span>
          <h1>EU GPSR compliance guide for consumer products.</h1>
          <p>
            The General Product Safety Regulation creates a broad safety framework
            for consumer products placed on the EU market, especially where no
            more specific product law fully covers the risk.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="content-layout">
          <article className="article">
            <h2>Who should pay attention to GPSR?</h2>
            <p>
              Manufacturers, importers, distributors and online marketplaces can
              all have responsibilities depending on how a product reaches EU
              consumers. The exact duty depends on the economic-operator role,
              product category and supply-chain structure.
            </p>

            <h2>Core compliance themes</h2>
            <div className="card-grid regulation-grid">
              <div className="card">
                <h3>Safety assessment</h3>
                <p>Review foreseeable hazards, intended use and reasonable misuse before market entry.</p>
              </div>
              <div className="card">
                <h3>Technical information</h3>
                <p>Maintain enough product and safety evidence to support the compliance position.</p>
              </div>
              <div className="card">
                <h3>Traceability</h3>
                <p>Make manufacturer, importer and product-identification information easy to trace.</p>
              </div>
              <div className="card">
                <h3>Post-market action</h3>
                <p>Prepare for complaints, incidents, recalls and corrective action where necessary.</p>
              </div>
            </div>

            <h2>Practical GPSR checklist</h2>
            <ol className="checklist">
              {checklist.map((item) => <li key={item}>{item}</li>)}
            </ol>

            <h2>Related research paths</h2>
            <div className="related-links">
              <a href="/industries/consumer-products">Consumer Products <span>→</span></a>
              <a href="/industries/toys">Toys <span>→</span></a>
              <a href="/regulations/reach">REACH <span>→</span></a>
              <a href="/assessment">Free Assessment <span>→</span></a>
            </div>
          </article>

          <aside className="sidebar-card">
            <span className="card-badge">Use RegMetric</span>
            <h3>Check your product context</h3>
            <p>
              Product category, intended use and your role in the EU supply chain
              can change the compliance path.
            </p>
            <a className="button button-primary" href="/assessment">Start Assessment</a>
          </aside>
        </div>
      </section>
    </main>
  );
}

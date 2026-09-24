export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">EU Product Compliance Intelligence Platform</p>
            <h1>Analyze regulations. Identify risks. Generate compliance reports.</h1>
            <p>
              RegMetric helps manufacturers, importers and global brands understand
              product compliance requirements before entering the European market.
            </p>
            <div className="hero-actions">
              <a className="header-cta" href="/assessment">Start Free Compliance Check</a>
              <a href="/regulations">Explore Regulations</a>
            </div>
          </div>

          <div className="dashboard-card">
            <h3>Compliance Dashboard</h3>
            <p>Product: Smart Electronics Device</p>
            <p>Market: European Union</p>
            <div className="score">82%</div>
            <p>Compliance Score</p>
            <div className="tags">
              <span>GPSR</span>
              <span>CE</span>
              <span>RoHS</span>
              <span>REACH</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <h2>Compliance Tools</h2>
        <div className="card-grid">
          <div className="card"><h3>Product Compliance Checker</h3><p>Find regulations related to your products.</p></div>
          <div className="card"><h3>Regulation Database</h3><p>Search compliance requirements by market.</p></div>
          <div className="card"><h3>Risk Assessment</h3><p>Identify potential compliance gaps.</p></div>
          <div className="card"><h3>Compliance Reports</h3><p>Create professional compliance summaries.</p></div>
        </div>
      </section>

      <section className="container trust-section">
        <h2>Built for Global Businesses</h2>
        <p>Manufacturers · Importers · Distributors · Global Brands</p>
      </section>
    </main>
  );
}

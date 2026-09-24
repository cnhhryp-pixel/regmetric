export default function Home() {
  return (
    <main>
      <section className="hero" style={{padding:'100px 24px'}}>
        <div className="container">
          <h1>RegMetric</h1>
          <h2>EU Product Compliance Intelligence Platform</h2>
          <p>
            Analyze regulations, identify compliance risks, and generate actionable
            reports before entering global markets.
          </p>
          <div style={{marginTop:'32px'}}>
            <a href="/assessment"><button>Start Free Compliance Check</button></a>
            <a href="/regulations"><button style={{marginLeft:'12px'}}>Explore Regulations</button></a>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="card-grid">
          <div className="card"><h3>Compliance Overview</h3><p>Product: Smart Electronics Device</p><p>Market: European Union</p></div>
          <div className="card"><h3>Compliance Score</h3><p><strong>82%</strong></p><p>Potential compliance readiness</p></div>
          <div className="card"><h3>Applicable Regulations</h3><p>✓ GPSR</p><p>✓ CE · ✓ RoHS · ✓ REACH</p></div>
        </div>
      </section>

      <section className="container" style={{paddingBottom:'80px'}}>
        <h2>Compliance Tools</h2>
        <div className="card-grid">
          <div className="card"><h3>Product Compliance Checker</h3><p>Find applicable regulations for your products.</p></div>
          <div className="card"><h3>Regulation Database</h3><p>Search EU compliance requirements.</p></div>
          <div className="card"><h3>Risk Assessment</h3><p>Understand compliance exposure.</p></div>
          <div className="card"><h3>Compliance Reports</h3><p>Generate professional assessment reports.</p></div>
        </div>
      </section>

      <section className="container" style={{paddingBottom:'80px'}}>
        <h2>Built for Global Businesses</h2>
        <p>Manufacturers · Importers · Distributors · Global Brands</p>
      </section>
    </main>
  );
}

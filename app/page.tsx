export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>AI-Powered Regulatory Intelligence Platform</h1>
          <p>
            Identify EU compliance requirements, discover applicable regulations,
            and create professional compliance reports for your products.
          </p>
          <div style={{marginTop:'32px'}}>
            <a href="/assessment"><button>Start Free Assessment</button></a>
            <a href="/regulations"><button style={{marginLeft:'12px'}}>Explore Regulations</button></a>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="card-grid">
          <div className="card"><h3>Compliance Risk Score</h3><p><strong>72 / 100</strong></p><p>Current compliance exposure analysis.</p></div>
          <div className="card"><h3>Applicable Regulations</h3><p><strong>8</strong></p><p>Relevant EU requirements identified.</p></div>
          <div className="card"><h3>Required Actions</h3><p><strong>5</strong></p><p>Recommended compliance steps.</p></div>
        </div>
      </section>

      <section className="container" style={{paddingBottom:'80px'}}>
        <h2>Core Compliance Tools</h2>
        <div className="card-grid">
          <div className="card"><h3>Product Compliance Checker</h3><p>Check EU regulations before entering the market.</p></div>
          <div className="card"><h3>EU Regulation Database</h3><p>Search compliance requirements and regulatory information.</p></div>
          <div className="card"><h3>Compliance Reports</h3><p>Create structured assessment reports.</p></div>
        </div>
      </section>
    </main>
  );
}

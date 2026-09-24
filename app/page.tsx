export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>RegMetric</h1>
          <h2>AI-Powered Regulatory Intelligence Platform</h2>
          <p>
            Identify compliance risks, discover applicable regulations,
            and generate professional compliance reports.
          </p>
          <div style={{marginTop: '32px'}}>
            <button>Start Free Assessment</button>
            <button style={{marginLeft:'12px'}}>Explore Regulations</button>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="card" style={{marginBottom:'30px'}}>
          <h2>Compliance Overview</h2>
          <p>Risk Score: <strong>72 / 100</strong></p>
          <p>Applicable Regulations: <strong>8</strong></p>
          <p>Required Actions: <strong>5</strong></p>
        </div>
      </section>

      <section className="container">
        <h2>Core Compliance Tools</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Product Compliance Checker</h3>
            <p>Analyze product requirements and identify relevant regulations.</p>
          </div>
          <div className="card">
            <h3>EU Regulation Database</h3>
            <p>Explore EU regulations and compliance requirements.</p>
          </div>
          <div className="card">
            <h3>Compliance Reports</h3>
            <p>Generate professional compliance assessment reports.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

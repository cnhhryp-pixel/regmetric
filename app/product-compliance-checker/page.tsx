export default function ProductComplianceChecker() {
  return (
    <main className="container" style={{padding:'80px 24px'}}>
      <h1>Product Compliance Checker</h1>
      <p>Identify potential EU compliance requirements for your products before market entry.</p>

      <div className="card-grid">
        <div className="card">
          <h3>Step 1: Product Category</h3>
          <p>Electronics, machinery, toys, medical devices, automotive and consumer products.</p>
        </div>
        <div className="card">
          <h3>Step 2: Target Market</h3>
          <p>European Union, United Kingdom, United States or global markets.</p>
        </div>
        <div className="card">
          <h3>Step 3: Compliance Analysis</h3>
          <p>Review applicable regulations, documentation needs and compliance actions.</p>
        </div>
      </div>

      <div className="card" style={{marginTop:'32px'}}>
        <h2>Compliance Analysis Preview</h2>
        <p>Applicable regulations may include CE Marking, GPSR, RoHS and REACH depending on product details.</p>
        <p>Risk Level: Medium</p>
      </div>
    </main>
  );
}

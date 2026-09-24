export default function AssessmentPage() {
  return (
    <main className="container" style={{padding:'80px 24px'}}>
      <h1>Free Compliance Assessment</h1>
      <p>Evaluate potential EU regulatory requirements for your product.</p>
      <div className="card-grid">
        <div className="card"><h3>Step 1</h3><p>Select product category</p></div>
        <div className="card"><h3>Step 2</h3><p>Select target market</p></div>
        <div className="card"><h3>Step 3</h3><p>Generate compliance overview</p></div>
      </div>
      <div className="card" style={{marginTop:'32px'}}>
        <h2>Request Assessment</h2>
        <p>Name, company, email and product details will be collected for the assessment workflow.</p>
      </div>
    </main>
  );
}

export default function ElectronicsCompliance() {
  return (
    <main className="container" style={{padding:'80px 24px'}}>
      <h1>Electronics Compliance in the EU</h1>
      <p>
        Electronic products entering the European market may need to meet
        multiple compliance requirements depending on product type and usage.
      </p>

      <div className="card-grid">
        <div className="card">
          <h3>Common regulations</h3>
          <p>RoHS, EMC, LVD, CE marking and other applicable requirements.</p>
        </div>
        <div className="card">
          <h3>Required documentation</h3>
          <p>Technical files, declarations, test reports and supplier information.</p>
        </div>
        <div className="card">
          <h3>Compliance workflow</h3>
          <p>Identify requirements, prepare documents and assess market readiness.</p>
        </div>
      </div>
    </main>
  );
}

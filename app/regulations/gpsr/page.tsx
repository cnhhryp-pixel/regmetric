export default function GPSRPage() {
  return (
    <main className="container" style={{padding:'80px 24px'}}>
      <h1>EU GPSR Compliance Guide</h1>
      <p>
        The General Product Safety Regulation (GPSR) establishes product safety
        requirements for consumer products placed on the European Union market.
      </p>

      <div className="card-grid">
        <div className="card">
          <h3>Who needs GPSR compliance?</h3>
          <p>Manufacturers, importers, distributors and online marketplaces supplying consumer products in the EU.</p>
        </div>
        <div className="card">
          <h3>Key requirements</h3>
          <p>Product safety assessment, technical documentation, traceability and responsible economic operators.</p>
        </div>
        <div className="card">
          <h3>Compliance checklist</h3>
          <p>Review product information, risk assessment, documentation and market monitoring procedures.</p>
        </div>
      </div>
    </main>
  );
}

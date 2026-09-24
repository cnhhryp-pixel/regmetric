export default function REACHPage() {
  return (
    <main className="container" style={{padding:'80px 24px'}}>
      <h1>EU REACH Compliance Guide</h1>
      <p>
        REACH regulates chemicals and substances placed on the European Union market
        and creates obligations for companies supplying products in the EU.
      </p>
      <div className="card-grid">
        <div className="card">
          <h3>Who needs REACH compliance?</h3>
          <p>Manufacturers, importers and suppliers handling products containing regulated substances.</p>
        </div>
        <div className="card">
          <h3>Key requirements</h3>
          <p>Substance identification, SVHC review, documentation and supplier communication.</p>
        </div>
        <div className="card">
          <h3>Compliance checklist</h3>
          <p>Review materials, chemical declarations and required compliance documents.</p>
        </div>
      </div>
    </main>
  );
}

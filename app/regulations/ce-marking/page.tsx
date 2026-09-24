export default function CEMarkingPage() {
  return (
    <main className="container" style={{padding:'80px 24px'}}>
      <h1>CE Marking Compliance Guide</h1>
      <p>
        CE marking shows that certain products meet European Union health, safety
        and environmental protection requirements.
      </p>
      <div className="card-grid">
        <div className="card">
          <h3>Who needs CE marking?</h3>
          <p>Manufacturers placing applicable products on the European market.</p>
        </div>
        <div className="card">
          <h3>Key requirements</h3>
          <p>Identify applicable directives, complete conformity assessment and prepare technical documentation.</p>
        </div>
        <div className="card">
          <h3>Compliance checklist</h3>
          <p>Review standards, testing reports, declarations and product labeling requirements.</p>
        </div>
      </div>
    </main>
  );
}

export default function NotFound() {
  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <span className="pill">404</span>
          <h1>This compliance page could not be found.</h1>
          <p>
            The page may have moved or the URL may be outdated. Continue with one
            of the main RegMetric research paths below.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="/search">Compliance Search</a>
            <a className="button button-secondary" href="/regulations">Regulations</a>
            <a className="button button-secondary" href="/industries">Industries</a>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="card-grid regulation-grid">
          <a className="card interactive-card" href="/assessment">
            <span className="card-badge">Tool</span>
            <h2>Free Assessment</h2>
            <p>Generate a preliminary product compliance starting point.</p>
            <span className="card-link">Start assessment →</span>
          </a>

          <a className="card interactive-card" href="/products">
            <span className="card-badge">Guides</span>
            <h2>Product Guides</h2>
            <p>Browse electronics, toys, machinery and automotive guides.</p>
            <span className="card-link">Browse products →</span>
          </a>
        </div>
      </section>
    </main>
  );
}

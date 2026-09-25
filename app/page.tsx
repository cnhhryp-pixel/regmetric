const tools = [
  {
    title: 'Compliance Search',
    text: 'Start with a product, regulation or industry and find the most relevant compliance paths.',
    href: '/search',
    badge: 'Search'
  },
  {
    title: 'Product Compliance Assessment',
    text: 'Turn product and market information into a structured compliance review workflow.',
    href: '/assessment',
    badge: 'Assess'
  },
  {
    title: 'EU Regulation Database',
    text: 'Browse key EU product rules including GPSR, CE marking, RoHS and REACH.',
    href: '/regulations',
    badge: 'Research'
  },
  {
    title: 'Compliance Reports',
    text: 'Organize findings, risks and required actions into a clear report structure.',
    href: '/reports',
    badge: 'Report'
  }
];

const industries = [
  ['Electronics', '/industries/electronics'],
  ['Toys', '/industries/toys'],
  ['Machinery', '/industries/machinery'],
  ['Automotive', '/industries/automotive'],
  ['Medical Devices', '/industries/medical-devices'],
  ['Consumer Products', '/industries/consumer-products']
];

export default function Home() {
  return (
    <main>
      <section className="hero home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="pill">EU Product Compliance Intelligence</span>
            <h1>Know which rules apply before your product enters the EU.</h1>
            <p className="hero-lead">
              RegMetric brings product categories, EU regulations, risk assessment
              and reporting into one practical workflow for compliance teams.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="/assessment">Start Free Assessment</a>
              <a className="button button-secondary" href="/search">Search Compliance Rules</a>
            </div>

            <div className="hero-proof">
              <span>Manufacturers</span>
              <span>Importers</span>
              <span>Distributors</span>
              <span>Compliance Teams</span>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-top">
              <div>
                <span className="small-label">Sample compliance overview</span>
                <h3>Smart Electronics Device</h3>
              </div>
              <span className="status-dot">EU Market</span>
            </div>

            <div className="score-row">
              <div>
                <span className="small-label">Readiness score</span>
                <div className="score">82%</div>
              </div>
              <div className="score-copy">
                <strong>4 regulation areas identified</strong>
                <span>Review documentation before market entry.</span>
              </div>
            </div>

            <div className="tags">
              <a href="/regulations/gpsr">GPSR</a>
              <a href="/regulations/ce-marking">CE Marking</a>
              <a href="/regulations/rohs">RoHS</a>
              <a href="/regulations/reach">REACH</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Core platform</span>
            <h2>From product question to compliance action</h2>
          </div>
          <p>
            Use the tools individually or follow the full workflow from discovery
            to assessment and reporting.
          </p>
        </div>

        <div className="card-grid feature-grid">
          {tools.map((tool) => (
            <a className="card interactive-card" href={tool.href} key={tool.title}>
              <span className="card-badge">{tool.badge}</span>
              <h3>{tool.title}</h3>
              <p>{tool.text}</p>
              <span className="card-link">Open tool →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Explore by industry</span>
              <h2>Start with the type of product you sell</h2>
            </div>
            <a className="text-link" href="/industries">View all industries →</a>
          </div>

          <div className="industry-links">
            {industries.map(([name, href]) => (
              <a href={href} key={name}>{name}<span>→</span></a>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="workflow">
          <div className="workflow-copy">
            <span className="eyebrow">Simple workflow</span>
            <h2>Build a clearer compliance picture in four steps</h2>
            <p>
              RegMetric is designed to turn scattered regulatory research into a
              repeatable product compliance process.
            </p>
          </div>

          <div className="workflow-steps">
            <div><span>01</span><strong>Describe the product</strong><p>Choose category, use case and target market.</p></div>
            <div><span>02</span><strong>Map regulations</strong><p>Review likely EU rules and compliance areas.</p></div>
            <div><span>03</span><strong>Assess gaps</strong><p>Identify documentation and readiness issues.</p></div>
            <div><span>04</span><strong>Create a report</strong><p>Organize findings and next actions.</p></div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="cta-panel">
          <div>
            <span className="eyebrow">Start with your product</span>
            <h2>Get a structured compliance starting point.</h2>
            <p>Use the free assessment to identify likely regulatory areas and next steps.</p>
          </div>
          <a className="button button-light" href="/assessment">Start Free Assessment</a>
        </div>
      </section>
    </main>
  );
}

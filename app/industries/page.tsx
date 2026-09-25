export const metadata = {
  title: 'Industries | RegMetric Compliance Intelligence',
  description: 'Explore product compliance requirements across electronics, toys, machinery, automotive, medical devices and consumer products.',
};

const industries = [
  ['Electronics', 'Connected devices, electrical equipment and electronics.', '/industries/electronics', 'CE · RoHS · EMC · LVD'],
  ['Toys', 'Safety, testing and conformity requirements for toy products.', '/industries/toys', 'Toy Safety · CE · GPSR'],
  ['Machinery', 'Industrial equipment, machinery safety and technical files.', '/industries/machinery', 'Machinery · CE'],
  ['Automotive', 'Components, materials and product compliance considerations.', '/industries/automotive', 'Safety · Materials'],
  ['Medical Devices', 'Structured regulatory research for healthcare products.', '/industries/medical-devices', 'Market access · Documentation'],
  ['Consumer Products', 'General product safety and consumer-goods obligations.', '/industries/consumer-products', 'GPSR · REACH']
];

export default function IndustriesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <span className="pill">Industry Compliance Guides</span>
          <h1>Find compliance requirements by product industry.</h1>
          <p>
            Start with the industry closest to your product, then explore likely
            EU regulations, documentation needs and assessment workflows.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="card-grid industry-grid">
          {industries.map(([name, text, href, regs]) => (
            <a className="card interactive-card" href={href} key={name}>
              <span className="card-badge">Industry</span>
              <h2>{name}</h2>
              <p>{text}</p>
              <div className="meta-line">{regs}</div>
              <span className="card-link">Explore guide →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="cta-panel compact">
          <div>
            <h2>Not sure which industry applies?</h2>
            <p>Start with Compliance Search or use the free assessment workflow.</p>
          </div>
          <div className="hero-actions">
            <a className="button button-light" href="/search">Search</a>
            <a className="button button-ghost-light" href="/assessment">Assessment</a>
          </div>
        </div>
      </section>
    </main>
  );
}

import { BreadcrumbSchema, FaqSchema } from '../../../components/SeoSchemas';

export const metadata = {
  title: 'EU Medical Device Compliance Research',
  description: 'Explore early EU medical-device compliance research areas including intended purpose, classification, technical documentation, risk management and market-access planning.',
  alternates: { canonical: '/industries/medical-devices' },
};

export default function IndustryPage() {
  return (
    <main>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Industries', path: '/industries' }, { name: 'Medical Devices', path: '/industries/medical-devices' }]} />
      <FaqSchema items={[{question:"Why is intended purpose so important?",answer:"It is a foundational input to whether a product is a medical device and how the regulatory pathway is determined."},{question:"Can a general compliance checklist replace classification work?",answer:"No. Classification and product-specific requirements should be established before relying on a generic checklist."},{question:"Does RegMetric provide a final medical-device determination?",answer:"No. The site is an early research aid; specialist review may be appropriate for classification and conformity decisions."}]} />
      <section className="page-hero">
        <div className="container narrow">
          <span className="pill">Medical Device Research</span>
          <h1>Start EU medical-device compliance research with intended purpose and classification.</h1>
          <p>Medical-device compliance is highly product-specific. Intended medical purpose, classification, evidence and quality processes can materially change the market-access route, so early scoping should be conservative and well documented.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="/assessment">Start Assessment</a>
            <a className="button button-secondary" href="/products">All Product Guides</a>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="content-layout">
          <article className="article">
            <h2>Compliance areas to investigate</h2>
            <div className="regulation-stack">
              <div className="regulation-row" key="Intended purpose"><div><strong>Intended purpose</strong><p>Document what the product is intended to do medically and for whom.</p></div></div>
                <div className="regulation-row" key="Classification"><div><strong>Classification</strong><p>Determine the likely regulatory class before planning the conformity route.</p></div></div>
                <a className="regulation-row" href="/regulations/reach" key="REACH"><div><strong>REACH</strong><p>Material and chemical obligations can still matter for devices and accessories.</p></div><span>→</span></a>
            </div>

            <h2>Evidence worth preparing early</h2>
            <div className="list-grid">
              <div className="list-item" key="Intended-purpose statement">Intended-purpose statement</div>
              <div className="list-item" key="Classification rationale">Classification rationale</div>
              <div className="list-item" key="Risk-management records">Risk-management records</div>
              <div className="list-item" key="Technical documentation">Technical documentation</div>
              <div className="list-item" key="Clinical/performance evidence">Clinical/performance evidence</div>
              <div className="list-item" key="Labels & instructions">Labels & instructions</div>
            </div>

            <h2>Frequently asked questions</h2>
            <div className="faq-list">
              <details className="faq-item"><summary>Why is intended purpose so important?</summary><p>It is a foundational input to whether a product is a medical device and how the regulatory pathway is determined.</p></details>
              <details className="faq-item"><summary>Can a general compliance checklist replace classification work?</summary><p>No. Classification and product-specific requirements should be established before relying on a generic checklist.</p></details>
              <details className="faq-item"><summary>Does RegMetric provide a final medical-device determination?</summary><p>No. The site is an early research aid; specialist review may be appropriate for classification and conformity decisions.</p></details>
            </div>
          </article>

          <aside className="sidebar-card">
            <span className="card-badge">Research workflow</span>
            <h3>Move from industry to product-specific scope.</h3>
            <p>
              Use this industry guide to identify research areas, then run the
              preliminary assessment with your exact product and supply-chain role.
            </p>
            <a className="button button-primary" href="/assessment">Start Assessment</a>
            <div className="sidebar-links">
              <a href="/products">All Product Guides →</a>
              <a href="/regulations">EU Regulations →</a>
              <a href="/search">Compliance Search →</a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

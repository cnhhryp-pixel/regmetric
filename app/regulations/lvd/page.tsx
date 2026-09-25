import { BreadcrumbSchema, FaqSchema } from '../../../components/SeoSchemas';

export const metadata = {
  title: 'EU Low Voltage Directive Compliance Guide',
  description: 'Explore EU Low Voltage Directive compliance research for electrical equipment under Directive 2014/35/EU.',
  alternates: { canonical: '/regulations/lvd' },
};

const faqs = [
  {
    question: 'What is the Low Voltage Directive?',
    answer: 'Directive 2014/35/EU covers electrical equipment designed for use within certain voltage limits and sets safety-focused market requirements.'
  },
  {
    question: 'Is LVD the only rule that may apply to electrical equipment?',
    answer: 'No. EMC, RoHS, REACH, radio-equipment rules and product-specific legislation may also be relevant depending on the product.'
  },
  {
    question: 'What evidence should teams organize early?',
    answer: 'Typical work includes product specifications, safety design information, standards, test evidence, instructions, labels and conformity documentation.'
  }
];

export default function LVDPage() {
  return (
    <main>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Regulations', path: '/regulations' }, { name: 'LVD', path: '/regulations/lvd' }]} />
      <FaqSchema items={faqs} />

      <section className="page-hero">
        <div className="container narrow">
          <span className="pill">Electrical Safety</span>
          <h1>EU Low Voltage Directive compliance research.</h1>
          <p>
            Directive 2014/35/EU addresses electrical equipment designed for use
            within certain voltage limits. Start with scope, intended use and
            safety evidence before deciding the final conformity route.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="/assessment">Start Assessment</a>
            <a className="button button-secondary" href="/industries/electronics">Electronics Guide</a>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="content-layout">
          <article className="article">
            <h2>Research areas</h2>
            <div className="list-grid">
              <div className="list-item">Product scope and voltage characteristics</div>
              <div className="list-item">Electrical, thermal and mechanical safety risks</div>
              <div className="list-item">Applicable harmonised standards</div>
              <div className="list-item">Test and design evidence</div>
              <div className="list-item">Instructions, markings and warnings</div>
              <div className="list-item">Technical documentation and declaration workflow</div>
            </div>

            <h2>Frequently asked questions</h2>
            <div className="faq-list">
              {faqs.map((item) => (
                <details className="faq-item" key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>

            <h2>Related research</h2>
            <div className="related-links">
              <a href="/regulations/ce-marking">CE Marking <span>→</span></a>
              <a href="/regulations/emc">EMC <span>→</span></a>
              <a href="/regulations/rohs">RoHS <span>→</span></a>
              <a href="/products/electronics">Electronics Product Guide <span>→</span></a>
            </div>
          </article>

          <aside className="sidebar-card">
            <span className="card-badge">Official reference</span>
            <h3>Directive 2014/35/EU</h3>
            <p>
              Check the latest consolidated legal text and current harmonised
              standards before relying on a final compliance conclusion.
            </p>
            <a className="text-link" href="https://single-market-economy.ec.europa.eu/single-market/goods/european-standards/harmonised-standards/low-voltage-lvd_en">European Commission reference →</a>
          </aside>
        </div>
      </section>
    </main>
  );
}

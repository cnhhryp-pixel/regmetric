import { BreadcrumbSchema, FaqSchema } from '../../../components/SeoSchemas';

export const metadata = {
  title: 'EU EMC Directive Compliance Guide',
  description: 'Explore EU electromagnetic compatibility compliance research for electrical and electronic equipment under Directive 2014/30/EU.',
  alternates: { canonical: '/regulations/emc' },
};

const faqs = [
  {
    question: 'What does EMC compliance focus on?',
    answer: 'The core question is whether equipment controls electromagnetic disturbance well enough to operate as intended without causing unacceptable interference.'
  },
  {
    question: 'Is EMC relevant only to wireless products?',
    answer: 'No. Many electrical and electronic products can create or be affected by electromagnetic disturbance even when they do not contain radio functions.'
  },
  {
    question: 'Does EMC testing replace the rest of the compliance process?',
    answer: 'No. Testing is evidence within a broader conformity process that also depends on product scope, technical documentation and the applicable EU legislation.'
  }
];

export default function EMCPage() {
  return (
    <main>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Regulations', path: '/regulations' }, { name: 'EMC', path: '/regulations/emc' }]} />
      <FaqSchema items={faqs} />

      <section className="page-hero">
        <div className="container narrow">
          <span className="pill">Electrical & Electronic Equipment</span>
          <h1>EU EMC Directive compliance research.</h1>
          <p>
            Directive 2014/30/EU addresses electromagnetic compatibility for
            equipment. Product teams should connect design controls, standards,
            testing and technical documentation rather than treating EMC as a
            standalone laboratory exercise.
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
            <h2>What to investigate</h2>
            <div className="list-grid">
              <div className="list-item">Product scope and intended electromagnetic environment</div>
              <div className="list-item">Emissions and immunity characteristics</div>
              <div className="list-item">Applicable harmonised standards</div>
              <div className="list-item">Test configuration and operating modes</div>
              <div className="list-item">Technical documentation and risk rationale</div>
              <div className="list-item">EU declaration and CE-marking workflow where applicable</div>
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
              <a href="/regulations/lvd">Low Voltage Directive <span>→</span></a>
              <a href="/regulations/rohs">RoHS <span>→</span></a>
              <a href="/products/electronics">Electronics Product Guide <span>→</span></a>
            </div>
          </article>

          <aside className="sidebar-card">
            <span className="card-badge">Official reference</span>
            <h3>Directive 2014/30/EU</h3>
            <p>
              Use the latest official EU text and current harmonised-standard
              references when finalising a conformity position.
            </p>
            <a className="text-link" href="https://single-market-economy.ec.europa.eu/single-market/goods/european-standards/harmonised-standards/electromagnetic-compatibility-emc_en">European Commission reference →</a>
          </aside>
        </div>
      </section>
    </main>
  );
}

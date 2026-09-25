import { BreadcrumbSchema, FaqSchema } from '../../../components/SeoSchemas';

export const metadata = {
  title: 'EU Radio Equipment Directive Compliance Guide',
  description: 'Explore Directive 2014/53/EU compliance research for Bluetooth, Wi-Fi and other radio equipment, including safety, EMC, spectrum and documentation.',
  alternates: { canonical: '/regulations/red' },
};

const faqs = [
  {
    question: 'What products can fall under the Radio Equipment Directive?',
    answer: 'Products that intentionally emit or receive radio waves for communication or radiodetermination can fall within Directive 2014/53/EU, depending on the exact design and intended use.'
  },
  {
    question: 'Does RED include safety and electromagnetic compatibility requirements?',
    answer: 'Yes. The essential requirements include protection of health and safety and an adequate level of electromagnetic compatibility, as well as efficient use of radio spectrum.'
  },
  {
    question: 'Is Bluetooth equipment automatically compliant because the module is certified?',
    answer: 'No. Module evidence can support the assessment, but the finished radio equipment and its integration still need to be assessed against the applicable requirements.'
  }
];

export default function REDPage() {
  return (
    <main>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Regulations', path: '/regulations' }, { name: 'RED', path: '/regulations/red' }]} />
      <FaqSchema items={faqs} />

      <section className="page-hero">
        <div className="container narrow">
          <span className="pill">Wireless & Radio Equipment</span>
          <h1>EU Radio Equipment Directive compliance research.</h1>
          <p>
            Directive 2014/53/EU applies to radio equipment and covers essential
            requirements including safety, electromagnetic compatibility and
            effective use of radio spectrum. Bluetooth and Wi-Fi functions are a
            common reason to investigate RED.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="/products/bluetooth-speaker">Bluetooth Speaker Guide</a>
            <a className="button button-secondary" href="/assessment">Start Assessment</a>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="content-layout">
          <article className="article">
            <h2>Core research areas</h2>
            <div className="list-grid">
              <div className="list-item">Radio function and frequency bands</div>
              <div className="list-item">Health and safety essential requirements</div>
              <div className="list-item">Electromagnetic compatibility</div>
              <div className="list-item">Efficient use of radio spectrum</div>
              <div className="list-item">Standards and test evidence</div>
              <div className="list-item">Technical documentation and EU declaration</div>
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
              <a href="/regulations/rohs">RoHS <span>→</span></a>
              <a href="/regulations/reach">REACH <span>→</span></a>
              <a href="/regulations/batteries">Batteries Regulation <span>→</span></a>
            </div>
          </article>

          <aside className="sidebar-card">
            <span className="card-badge">Official reference</span>
            <h3>Directive 2014/53/EU</h3>
            <p>
              Use the latest consolidated EU text and current harmonised-standard
              references for a final conformity position.
            </p>
            <a className="text-link" href="https://eur-lex.europa.eu/eli/dir/2014/53/oj">EUR-Lex reference →</a>
          </aside>
        </div>
      </section>
    </main>
  );
}

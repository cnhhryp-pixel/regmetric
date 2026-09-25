import { BreadcrumbSchema, FaqSchema } from '../../../components/SeoSchemas';

export const metadata = {
  title: 'EU Machinery Regulation 2023/1230 Guide',
  description: 'Explore transition planning and compliance research for Regulation (EU) 2023/1230 on machinery, which generally applies from 20 January 2027.',
  alternates: { canonical: '/regulations/machinery-regulation' },
};

const faqs = [
  {
    question: 'When does Regulation (EU) 2023/1230 generally apply?',
    answer: 'The Regulation generally applies from 20 January 2027, although some provisions have earlier application dates.'
  },
  {
    question: 'Why should companies prepare before 2027?',
    answer: 'Products launching near the transition can require updated scope analysis, technical documentation, risk assessment and conformity-planning decisions.'
  },
  {
    question: 'Does the Machinery Regulation cover partly completed machinery?',
    answer: 'Yes. The Regulation contains rules for machinery, related products and partly completed machinery, with different obligations depending on the product status.'
  }
];

export default function MachineryRegulationPage() {
  return (
    <main>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Regulations', path: '/regulations' }, { name: 'Machinery Regulation', path: '/regulations/machinery-regulation' }]} />
      <FaqSchema items={faqs} />

      <section className="page-hero">
        <div className="container narrow">
          <span className="pill">Transition Planning</span>
          <h1>Prepare for Regulation (EU) 2023/1230 on machinery.</h1>
          <p>
            The Machinery Regulation is in force and generally applies from
            20 January 2027. For products entering development or launching
            around the transition, scope and documentation planning should start
            before the application date.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="/assessment">Start Assessment</a>
            <a className="button button-secondary" href="/industries/machinery">Machinery Guide</a>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="content-layout">
          <article className="article">
            <h2>Transition questions to review</h2>
            <div className="list-grid">
              <div className="list-item">Product scope and classification</div>
              <div className="list-item">Launch and placing-on-market timeline</div>
              <div className="list-item">Risk assessment and essential requirements</div>
              <div className="list-item">Technical documentation structure</div>
              <div className="list-item">Conformity-assessment route</div>
              <div className="list-item">Instructions, declarations and digital information</div>
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
              <a href="/regulations/reach">REACH <span>→</span></a>
              <a href="/products/machinery">Machinery Product Guide <span>→</span></a>
            </div>
          </article>

          <aside className="sidebar-card">
            <span className="card-badge">Current transition</span>
            <h3>General application: 20 January 2027</h3>
            <p>
              Some provisions apply earlier, so use the current consolidated EU
              text when planning the transition.
            </p>
            <a className="text-link" href="https://eur-lex.europa.eu/eli/reg/2023/1230/en">EUR-Lex reference →</a>
          </aside>
        </div>
      </section>
    </main>
  );
}

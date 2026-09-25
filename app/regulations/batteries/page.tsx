import { BreadcrumbSchema, FaqSchema } from '../../../components/SeoSchemas';

export const metadata = {
  title: 'EU Batteries Regulation Compliance Guide',
  description: 'Explore Regulation (EU) 2023/1542 compliance research for batteries and waste batteries, including safety, sustainability, labeling and lifecycle obligations.',
  alternates: { canonical: '/regulations/batteries' },
};

const faqs = [
  {
    question: 'Which EU law now governs batteries and waste batteries?',
    answer: 'Regulation (EU) 2023/1542 is the current EU framework for batteries and waste batteries.'
  },
  {
    question: 'Is battery compliance only about product safety?',
    answer: 'No. The framework also addresses sustainability, information, lifecycle and waste-management obligations, with requirements that depend on battery type and timing.'
  },
  {
    question: 'Should a company use one checklist for every battery?',
    answer: 'No. Portable, industrial, electric-vehicle and other battery categories can face different requirements, so classification should come first.'
  }
];

export default function BatteriesPage() {
  return (
    <main>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Regulations', path: '/regulations' }, { name: 'Batteries', path: '/regulations/batteries' }]} />
      <FaqSchema items={faqs} />

      <section className="page-hero">
        <div className="container narrow">
          <span className="pill">Battery Lifecycle Compliance</span>
          <h1>EU Batteries Regulation compliance research.</h1>
          <p>
            Regulation (EU) 2023/1542 covers batteries and waste batteries across
            the lifecycle. Product teams should classify the battery first, then
            map the safety, sustainability, information and end-of-life duties
            relevant to that category.
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
            <h2>Areas to investigate</h2>
            <div className="list-grid">
              <div className="list-item">Battery category and intended application</div>
              <div className="list-item">Safety and performance evidence</div>
              <div className="list-item">Material and restricted-substance information</div>
              <div className="list-item">Labeling and product-information duties</div>
              <div className="list-item">Supply-chain and sustainability data</div>
              <div className="list-item">Producer and waste-battery responsibilities</div>
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
              <a href="/regulations/weee">WEEE <span>→</span></a>
              <a href="/regulations/rohs">RoHS <span>→</span></a>
              <a href="/regulations/reach">REACH <span>→</span></a>
              <a href="/products/electronics">Electronics Product Guide <span>→</span></a>
            </div>
          </article>

          <aside className="sidebar-card">
            <span className="card-badge">Official reference</span>
            <h3>Regulation (EU) 2023/1542</h3>
            <p>
              Battery obligations phase in over time. Verify the current legal
              text and the dates relevant to the battery category you sell.
            </p>
            <a className="text-link" href="https://environment.ec.europa.eu/topics/waste-and-recycling/batteries_en">European Commission reference →</a>
          </aside>
        </div>
      </section>
    </main>
  );
}

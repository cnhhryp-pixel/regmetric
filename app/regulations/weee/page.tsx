import { BreadcrumbSchema, FaqSchema } from '../../../components/SeoSchemas';

export const metadata = {
  title: 'EU WEEE Compliance Guide',
  description: 'Explore EU WEEE producer, registration, reporting, collection and recycling compliance research for electrical and electronic equipment.',
  alternates: { canonical: '/regulations/weee' },
};

const faqs = [
  {
    question: 'What does WEEE compliance address?',
    answer: 'WEEE rules address waste electrical and electronic equipment, including collection, treatment, recovery and recycling responsibilities.'
  },
  {
    question: 'Can producer obligations differ by EU country?',
    answer: 'Yes. Registration, reporting and implementation are handled through national systems, so market-by-market checks are important.'
  },
  {
    question: 'Is WEEE the same as RoHS?',
    answer: 'No. WEEE focuses on waste and end-of-life responsibilities, while RoHS restricts certain hazardous substances in electrical and electronic equipment.'
  }
];

export default function WEEEPage() {
  return (
    <main>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Regulations', path: '/regulations' }, { name: 'WEEE', path: '/regulations/weee' }]} />
      <FaqSchema items={faqs} />

      <section className="page-hero">
        <div className="container narrow">
          <span className="pill">Waste & Recycling</span>
          <h1>EU WEEE compliance for electrical and electronic equipment.</h1>
          <p>
            Directive 2012/19/EU covers waste electrical and electronic equipment.
            Businesses placing EEE on EU markets should investigate producer
            registration, reporting, financing and end-of-life responsibilities.
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
            <h2>Operational questions to map</h2>
            <div className="list-grid">
              <div className="list-item">Which EU countries receive the product?</div>
              <div className="list-item">Who is treated as the producer in each market?</div>
              <div className="list-item">Which national registrations are required?</div>
              <div className="list-item">What sales or weight data must be reported?</div>
              <div className="list-item">How are collection and recycling obligations financed?</div>
              <div className="list-item">What take-back or marking duties apply?</div>
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
              <a href="/regulations/rohs">RoHS <span>→</span></a>
              <a href="/regulations/reach">REACH <span>→</span></a>
              <a href="/regulations/batteries">Batteries Regulation <span>→</span></a>
              <a href="/industries/electronics">Electronics <span>→</span></a>
            </div>
          </article>

          <aside className="sidebar-card">
            <span className="card-badge">Official reference</span>
            <h3>WEEE Directive 2012/19/EU</h3>
            <p>
              National implementation matters. Check the country-specific
              registration and reporting system for every market you enter.
            </p>
            <a className="text-link" href="https://environment.ec.europa.eu/topics/waste-and-recycling/waste-electrical-and-electronic-equipment-weee_en">European Commission reference →</a>
          </aside>
        </div>
      </section>
    </main>
  );
}

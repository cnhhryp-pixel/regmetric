import { BreadcrumbSchema } from '../../components/SeoSchemas';

export const metadata = {
  title: 'EU Regulations Database',
  description: 'Explore European product compliance regulations including GPSR, CE marking, RoHS, REACH, EMC and LVD requirements.',
  alternates: { canonical: '/regulations' },
};

const regulations = [
  {
    name: 'GPSR',
    title: 'General Product Safety Regulation',
    description: 'General safety, traceability and responsible-person requirements for consumer products in the EU.',
    href: '/regulations/gpsr',
    group: 'Product Safety'
  },
  {
    name: 'CE Marking',
    title: 'Conformity & Market Access',
    description: 'Understand when CE marking applies and how conformity assessment and technical documentation fit together.',
    href: '/regulations/ce-marking',
    group: 'Market Access'
  },
  {
    name: 'RoHS',
    title: 'Restriction of Hazardous Substances',
    description: 'Review restricted-substance requirements affecting many electrical and electronic products.',
    href: '/regulations/rohs',
    group: 'Environmental'
  },
  {
    name: 'REACH',
    title: 'Chemical Compliance',
    description: 'Explore chemical substance, communication and supply-chain obligations for products sold in Europe.',
    href: '/regulations/reach',
    group: 'Chemical'
  }
];

const upcoming = [
  'EMC — Electromagnetic Compatibility',
  'LVD — Low Voltage Directive',
  'WEEE — Electrical & Electronic Waste',
  'Battery Regulation — Batteries & lifecycle requirements',
  'Machinery Regulation — Machinery safety & conformity',
  'Digital Product Passport — Product data & traceability'
];

export default function Regulations() {
  return (
    <main>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Regulations', path: '/regulations' }]} />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Regulations', path: '/regulations' }]} />
      <section className="page-hero">
        <div className="container narrow">
          <span className="pill">EU Regulation Database</span>
          <h1>Understand the rules that may apply to your product.</h1>
          <p>
            Browse key EU product regulations, then move into product-specific
            assessment and reporting when you need a more structured review.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Core guides</span>
            <h2>Popular product compliance regulations</h2>
          </div>
          <a className="text-link" href="/search">Search by product →</a>
        </div>

        <div className="card-grid regulation-grid">
          {regulations.map((item) => (
            <a className="card interactive-card" href={item.href} key={item.name}>
              <span className="card-badge">{item.group}</span>
              <h2>{item.name}</h2>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="card-link">Read compliance guide →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Coverage roadmap</span>
              <h2>Additional EU compliance areas</h2>
            </div>
          </div>
          <div className="list-grid">
            {upcoming.map((item) => <div className="list-item" key={item}>{item}</div>)}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="cta-panel compact">
          <div>
            <h2>Need a product-specific answer?</h2>
            <p>Move from regulation research to a structured product assessment.</p>
          </div>
          <a className="button button-light" href="/assessment">Start Assessment</a>
        </div>
      </section>
    </main>
  );
}

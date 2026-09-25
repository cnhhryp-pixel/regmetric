import { BreadcrumbSchema } from '../../components/SeoSchemas';

export const metadata = {
  title: 'EU Regulations Database',
  description: 'Explore European product compliance regulations including GPSR, CE marking, RoHS, REACH, EMC, LVD, WEEE, Batteries, Radio Equipment and Machinery Regulation requirements.',
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
  },
  {
    name: 'EMC',
    title: 'Electromagnetic Compatibility',
    description: 'Research electromagnetic emissions, immunity, testing and technical documentation under Directive 2014/30/EU.',
    href: '/regulations/emc',
    group: 'Electronics'
  },
  {
    name: 'LVD',
    title: 'Low Voltage Directive',
    description: 'Research electrical safety, standards and conformity evidence for products in scope of Directive 2014/35/EU.',
    href: '/regulations/lvd',
    group: 'Electrical Safety'
  },
  {
    name: 'WEEE',
    title: 'Waste Electrical & Electronic Equipment',
    description: 'Review producer registration, reporting, collection and recycling obligations for electrical and electronic equipment.',
    href: '/regulations/weee',
    group: 'Waste & Recycling'
  },
  {
    name: 'Batteries',
    title: 'EU Batteries Regulation',
    description: 'Explore Regulation (EU) 2023/1542 requirements across safety, sustainability, information and waste-battery obligations.',
    href: '/regulations/batteries',
    group: 'Battery Lifecycle'
  },
  {
    name: 'Machinery Regulation',
    title: 'Regulation (EU) 2023/1230',
    description: 'Prepare machinery compliance workflows for the Regulation that generally applies from 20 January 2027.',
    href: '/regulations/machinery-regulation',
    group: 'Machinery'
  },
  {
    name: 'RED',
    title: 'Radio Equipment Directive',
    description: 'Research safety, EMC, radio-spectrum and documentation requirements for Bluetooth, Wi-Fi and other radio equipment.',
    href: '/regulations/red',
    group: 'Wireless'
  }
];

export default function Regulations() {
  return (
    <main>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Regulations', path: '/regulations' }]} />

      <section className="page-hero">
        <div className="container narrow">
          <span className="pill">EU Regulation Database</span>
          <h1>Understand the rules that may apply to your product.</h1>
          <p>
            Browse practical compliance guides, then move into product-specific
            assessment and reporting when you need a more structured review.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Core guides</span>
            <h2>EU product compliance regulations and frameworks</h2>
          </div>
          <a className="text-link" href="/search">Search by product →</a>
        </div>

        <div className="card-grid industry-grid">
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

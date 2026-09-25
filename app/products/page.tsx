import { BreadcrumbSchema } from '../../components/SeoSchemas';

export const metadata = {
  title: 'Product Compliance Guides',
  description: 'Browse product compliance guides for electronics, toys, machinery and automotive components.',
  alternates: { canonical: '/products' },
};

const guides = [
  {
    name: 'Electronics',
    href: '/products/electronics',
    text: 'Electronics, electrical equipment and connected devices.',
    tags: 'CE · RoHS · REACH · Product Safety'
  },
  {
    name: 'Toys',
    href: '/products/toys',
    text: 'Toy safety, conformity, testing and technical documentation.',
    tags: 'CE · GPSR · REACH'
  },
  {
    name: 'Machinery',
    href: '/products/machinery',
    text: 'Industrial machinery, risk assessment and conformity evidence.',
    tags: 'CE · Machinery · REACH'
  },
  {
    name: 'Automotive Components',
    href: '/products/automotive',
    text: 'Automotive parts, material information and sector-specific research.',
    tags: 'REACH · Materials · Approvals'
  }
];

export default function ProductsPage() {
  return (
    <main>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Products', path: '/products' }]} />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Products', path: '/products' }]} />
      <section className="page-hero">
        <div className="container narrow">
          <span className="pill">Product Compliance Guides</span>
          <h1>Start compliance research with the product you actually sell.</h1>
          <p>
            Browse product-focused guides that connect common EU compliance
            topics, evidence and next-step questions.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="card-grid regulation-grid">
          {guides.map((guide) => (
            <a className="card interactive-card" href={guide.href} key={guide.name}>
              <span className="card-badge">Product Guide</span>
              <h2>{guide.name}</h2>
              <p>{guide.text}</p>
              <div className="meta-line">{guide.tags}</div>
              <span className="card-link">Open guide →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Need another category?</span>
              <h2>Use Compliance Search or start from an industry.</h2>
            </div>
            <p>
              Additional product categories can be researched through industry
              guides and the preliminary assessment workflow.
            </p>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="/search">Compliance Search</a>
            <a className="button button-secondary" href="/industries">Browse Industries</a>
            <a className="button button-secondary" href="/assessment">Start Assessment</a>
          </div>
        </div>
      </section>
    </main>
  );
}

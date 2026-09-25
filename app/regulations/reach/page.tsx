import { BreadcrumbSchema } from '../../../components/SeoSchemas';

export const metadata = {
  title: 'EU REACH Compliance Guide',
  description: 'Understand EU REACH substance, SVHC, supplier communication and product-material compliance considerations.',
  alternates: { canonical: '/regulations/reach' },
};

const questions = [
  'What substances or materials are present in the product?',
  'Are any substances restricted or subject to authorization?',
  'Are SVHC communication duties relevant?',
  'Do supplier declarations cover the exact materials and components used?',
  'Could packaging, coatings, adhesives or accessories create additional obligations?',
  'Is the supply chain prepared to update information when substances or thresholds change?'
];

export default function REACHPage() {
  return (
    <main>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Regulations', path: '/regulations' }, { name: 'REACH', path: '/regulations/reach' }]} />
      <section className="page-hero">
        <div className="container narrow">
          <span className="pill">Chemical Compliance</span>
          <h1>REACH compliance connects product materials to supply-chain information.</h1>
          <p>
            REACH can affect products, materials and substances supplied in the
            EU. For product companies, the practical challenge is often knowing
            what is in the product and whether supplier information is complete.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="content-layout">
          <article className="article">
            <h2>Who should review REACH?</h2>
            <p>
              Manufacturers and importers should consider REACH whenever products
              contain materials, chemicals, coatings, adhesives or other
              substances that may trigger restrictions, information duties or
              additional supply-chain obligations.
            </p>

            <h2>Questions to ask suppliers</h2>
            <ol className="checklist">
              {questions.map((item) => <li key={item}>{item}</li>)}
            </ol>

            <h2>Useful documentation</h2>
            <div className="card-grid regulation-grid">
              <div className="card"><h3>Material declarations</h3><p>Structured information about substances and composition.</p></div>
              <div className="card"><h3>Supplier statements</h3><p>Current declarations tied to the purchased component or material.</p></div>
              <div className="card"><h3>Test evidence</h3><p>Targeted analytical evidence where supplier information is insufficient.</p></div>
              <div className="card"><h3>Change records</h3><p>Evidence that changes in materials or suppliers trigger a new review.</p></div>
            </div>

            <h2>Related research</h2>
            <div className="related-links">
              <a href="/regulations/rohs">RoHS <span>→</span></a>
              <a href="/industries/consumer-products">Consumer Products <span>→</span></a>
              <a href="/industries/electronics">Electronics <span>→</span></a>
              <a href="/assessment">Assessment <span>→</span></a>
            </div>
          </article>

          <aside className="sidebar-card">
            <span className="card-badge">Supply chain</span>
            <h3>Ask for product-specific evidence.</h3>
            <p>
              Generic supplier statements may not be enough if they cannot be
              linked to the exact material or component used in your product.
            </p>
            <a className="button button-primary" href="/search">Search Compliance</a>
          </aside>
        </div>
      </section>
    </main>
  );
}

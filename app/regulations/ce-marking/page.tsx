import { BreadcrumbSchema } from '../../../components/SeoSchemas';

export const metadata = {
  title: 'CE Marking Compliance Guide',
  description: 'Understand when CE marking applies, conformity assessment, technical documentation and declaration requirements for EU market access.',
  alternates: { canonical: '/regulations/ce-marking' },
};

const steps = [
  ['1', 'Identify applicable legislation', 'Determine which EU product legislation actually requires CE marking for the product.'],
  ['2', 'Map essential requirements', 'Translate the applicable legislation into design, safety and performance requirements.'],
  ['3', 'Choose the conformity route', 'Determine whether self-assessment is permitted or a notified body is involved.'],
  ['4', 'Build technical documentation', 'Collect drawings, specifications, test evidence, risk information and standards used.'],
  ['5', 'Prepare the declaration', 'Complete the required EU declaration and keep supporting records available.'],
  ['6', 'Apply marking and labels', 'Place CE marking and other required identification information correctly.']
];

export default function CEMarkingPage() {
  return (
    <main>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Regulations', path: '/regulations' }, { name: 'CE Marking', path: '/regulations/ce-marking' }]} />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Regulations', path: '/regulations' }, { name: 'CE Marking', path: '/regulations/ce-marking' }]} />
      <section className="page-hero">
        <div className="container narrow">
          <span className="pill">EU Market Access</span>
          <h1>CE marking: from product scope to conformity evidence.</h1>
          <p>
            CE marking is not a generic quality mark. It is used for products
            covered by specific EU legislation and signals that the applicable
            conformity process has been completed.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="content-layout">
          <article className="article">
            <h2>When does CE marking apply?</h2>
            <p>
              CE marking applies only when the product falls within EU legislation
              that requires it. Electronics, machinery, toys and some other
              regulated product groups commonly use CE marking, but the exact
              scope depends on product characteristics and intended use.
            </p>

            <h2>Typical CE marking workflow</h2>
            <div className="timeline">
              {steps.map(([number, title, text]) => (
                <div className="timeline-item" key={number}>
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </div>
              ))}
            </div>

            <h2>Common evidence to prepare</h2>
            <div className="list-grid">
              <div className="list-item">Product specifications & drawings</div>
              <div className="list-item">Risk assessment</div>
              <div className="list-item">Test reports & standards</div>
              <div className="list-item">EU declaration documentation</div>
              <div className="list-item">Labels & instructions</div>
              <div className="list-item">Supplier evidence</div>
            </div>

            <h2>Related compliance pages</h2>
            <div className="related-links">
              <a href="/industries/electronics">Electronics <span>→</span></a>
              <a href="/industries/machinery">Machinery <span>→</span></a>
              <a href="/industries/toys">Toys <span>→</span></a>
              <a href="/assessment">Free Assessment <span>→</span></a>
            </div>
          </article>

          <aside className="sidebar-card">
            <span className="card-badge">Important</span>
            <h3>CE does not apply to every product.</h3>
            <p>
              Start by confirming product scope and applicable legislation before
              arranging testing or preparing declarations.
            </p>
            <a className="button button-primary" href="/search">Search Compliance</a>
          </aside>
        </div>
      </section>
    </main>
  );
}

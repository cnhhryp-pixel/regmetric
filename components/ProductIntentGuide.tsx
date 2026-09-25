import { BreadcrumbSchema, FaqSchema } from './SeoSchemas';

type ResearchArea = {
  name: string;
  note: string;
  href?: string;
};

type Faq = {
  question: string;
  answer: string;
};

type ProductIntentGuideProps = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  researchAreas: ResearchArea[];
  evidence: string[];
  questions: string[];
  faqs: Faq[];
  officialNote?: {
    title: string;
    text: string;
    href: string;
    label: string;
  };
};

export default function ProductIntentGuide({
  slug,
  eyebrow,
  title,
  intro,
  researchAreas,
  evidence,
  questions,
  faqs,
  officialNote
}: ProductIntentGuideProps) {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Products', path: '/products' },
          { name: title, path: `/products/${slug}` }
        ]}
      />
      <FaqSchema items={faqs} />

      <section className="page-hero">
        <div className="container narrow">
          <span className="pill">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="/assessment">Start Assessment</a>
            <a className="button button-secondary" href="/search">Search Regulations</a>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="content-layout">
          <article className="article">
            <h2>Potentially relevant compliance areas</h2>
            <div className="regulation-stack">
              {researchAreas.map((area) =>
                area.href ? (
                  <a className="regulation-row" href={area.href} key={area.name}>
                    <div>
                      <strong>{area.name}</strong>
                      <p>{area.note}</p>
                    </div>
                    <span>→</span>
                  </a>
                ) : (
                  <div className="regulation-row" key={area.name}>
                    <div>
                      <strong>{area.name}</strong>
                      <p>{area.note}</p>
                    </div>
                  </div>
                )
              )}
            </div>

            <h2>Evidence worth preparing</h2>
            <div className="list-grid">
              {evidence.map((item) => (
                <div className="list-item" key={item}>{item}</div>
              ))}
            </div>

            <h2>Questions that change the compliance path</h2>
            <ol className="checklist">
              {questions.map((item) => <li key={item}>{item}</li>)}
            </ol>

            <h2>Frequently asked questions</h2>
            <div className="faq-list">
              {faqs.map((item) => (
                <details className="faq-item" key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </article>

          <aside className="sidebar-card">
            <span className="card-badge">Initial screening</span>
            <h3>Product details determine the final scope.</h3>
            <p>
              Use this guide to identify research areas, then verify the exact
              product specification, intended use, power characteristics and
              supply-chain role before making a conformity decision.
            </p>
            <a className="button button-primary" href="/assessment">Start Assessment</a>

            {officialNote && (
              <div className="sidebar-links">
                <strong>{officialNote.title}</strong>
                <span>{officialNote.text}</span>
                <a href={officialNote.href}>{officialNote.label} →</a>
              </div>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
}

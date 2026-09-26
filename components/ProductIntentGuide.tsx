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

const productLabels: Record<string, string> = {
  'bluetooth-speaker': 'Bluetooth Speaker',
  'bluetooth-headphones': 'Bluetooth Headphones',
  smartwatch: 'Smartwatch',
  'smart-plug': 'Smart Plug',
  'wifi-camera': 'Wi-Fi Camera',
  'power-adapter': 'Power Adapter',
  'usb-charger': 'USB Charger',
  'wireless-charger': 'Wireless Charger',
  'power-bank': 'Power Bank',
  'battery-powered-device': 'Battery-Powered Device',
  'led-light': 'LED Light',
  'led-driver': 'LED Driver',
  'desk-lamp': 'Desk Lamp',
  'smart-bulb': 'Smart Bulb',
  'electronic-toy': 'Electronic Toy',
  'portable-fan': 'Portable Fan',
  'hair-dryer': 'Hair Dryer',
  'kitchen-appliance': 'Kitchen Appliance',
  'air-fryer': 'Air Fryer',
  'electric-kettle': 'Electric Kettle',
  'electric-power-tool': 'Electric Power Tool',
  'cordless-drill': 'Cordless Drill',
  'angle-grinder': 'Angle Grinder',
  'electric-scooter': 'Electric Scooter',
  'ebike-charger': 'E-Bike Charger'
};

const relatedGroups = [
  ['bluetooth-speaker', 'bluetooth-headphones', 'smartwatch', 'smart-plug', 'wifi-camera'],
  ['power-adapter', 'usb-charger', 'wireless-charger', 'ebike-charger'],
  ['power-bank', 'battery-powered-device', 'electric-scooter', 'cordless-drill'],
  ['led-light', 'led-driver', 'desk-lamp', 'smart-bulb'],
  ['electronic-toy', 'portable-fan', 'hair-dryer', 'kitchen-appliance', 'air-fryer', 'electric-kettle'],
  ['electric-power-tool', 'cordless-drill', 'angle-grinder', 'electric-scooter']
];

function relatedProducts(slug: string) {
  const group = relatedGroups.find((items) => items.includes(slug)) || [];
  return group
    .filter((item) => item !== slug)
    .slice(0, 4)
    .map((item) => ({
      name: productLabels[item] || item,
      href: `/products/${item}`
    }));
}

function inferCategory(slug: string) {
  if (['electronic-toy'].includes(slug)) return 'toys';
  if (['electric-power-tool', 'cordless-drill', 'angle-grinder', 'electric-scooter'].includes(slug)) return 'machinery';
  if (['hair-dryer', 'portable-fan', 'kitchen-appliance', 'air-fryer', 'electric-kettle'].includes(slug)) return 'consumer-products';
  return 'electronics';
}

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
  const related = relatedProducts(slug);
  const assessmentHref = `/assessment?product=${encodeURIComponent(
    productLabels[slug] || title.replace(' EU Compliance Guide', '')
  )}&source=${encodeURIComponent(slug)}&category=${inferCategory(slug)}`;

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
            <a className="button button-primary" href={assessmentHref}>Assess This Product</a>
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

            {related.length > 0 && (
              <>
                <h2>Related product compliance guides</h2>
                <div className="related-product-grid">
                  {related.map((item) => (
                    <a href={item.href} key={item.href}>
                      <span>{item.name}</span>
                      <strong>→</strong>
                    </a>
                  ))}
                </div>
              </>
            )}

            <div className="guide-conversion">
              <div>
                <span className="eyebrow">Continue the workflow</span>
                <h2>Turn this guide into a product-specific assessment.</h2>
                <p>Your product name and category will be carried into the assessment automatically.</p>
              </div>
              <a className="button button-light" href={assessmentHref}>Continue to Assessment</a>
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
            <a className="button button-primary" href={assessmentHref}>Assess This Product</a>

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

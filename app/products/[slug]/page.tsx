import { BreadcrumbSchema } from '../../../components/SeoSchemas';

const products: Record<string, {
  title:string;
  description:string;
  market:string;
  regulations:{name:string; href?:string; note:string}[];
  documents:string[];
  questions:string[];
}> = {
  electronics: {
    title: 'Electronics Compliance Guide',
    description: 'Understand the main EU compliance research areas for electronic products and connected devices.',
    market: 'Electronics / Electrical Products',
    regulations: [
      { name: 'CE Marking', href: '/regulations/ce-marking', note: 'Check which CE-marking legislation applies to the product.' },
      { name: 'RoHS', href: '/regulations/rohs', note: 'Review restricted-substance evidence for electrical and electronic equipment.' },
      { name: 'REACH', href: '/regulations/reach', note: 'Review chemical and material information across the supply chain.' },
      { name: 'GPSR', href: '/regulations/gpsr', note: 'Consider general product-safety duties where relevant.' }
    ],
    documents: ['Product specifications', 'Risk assessment', 'Test reports', 'Supplier material evidence', 'Instructions & labels', 'Declarations'],
    questions: ['How is the product powered?', 'Does it transmit radio signals?', 'Who is the intended user?', 'Which EU countries will receive it?']
  },
  toys: {
    title: 'Toy Compliance Guide',
    description: 'Explore EU safety, conformity, testing and documentation considerations for toy products.',
    market: 'Toys / Children’s Products',
    regulations: [
      { name: 'CE Marking', href: '/regulations/ce-marking', note: 'Toy products commonly require a CE conformity process.' },
      { name: 'GPSR', href: '/regulations/gpsr', note: 'General product-safety and market-surveillance duties can also matter.' },
      { name: 'REACH', href: '/regulations/reach', note: 'Materials, coatings and chemicals may create additional obligations.' }
    ],
    documents: ['Product description', 'Age grading', 'Safety assessment', 'Test reports', 'Technical documentation', 'Warnings & labels'],
    questions: ['What is the intended age range?', 'Are small parts present?', 'Which materials contact the child?', 'Are batteries or electronics included?']
  },
  machinery: {
    title: 'Machinery Compliance Guide',
    description: 'Identify EU safety, conformity and technical-documentation research areas for machinery and industrial equipment.',
    market: 'Machinery / Industrial Equipment',
    regulations: [
      { name: 'CE Marking', href: '/regulations/ce-marking', note: 'Confirm the applicable machinery conformity route and related legislation.' },
      { name: 'REACH', href: '/regulations/reach', note: 'Material and chemical obligations may apply to parts, coatings and fluids.' }
    ],
    documents: ['Risk assessment', 'Drawings & schematics', 'Standards list', 'Test evidence', 'Instructions', 'Declaration documentation'],
    questions: ['What is the intended function?', 'Is the machine complete or partly completed?', 'What hazards are foreseeable?', 'Which safety functions are critical?']
  },
  automotive: {
    title: 'Automotive Product Compliance Guide',
    description: 'Support automotive suppliers with a structured starting point for EU product and material compliance research.',
    market: 'Automotive Components',
    regulations: [
      { name: 'REACH', href: '/regulations/reach', note: 'Material and substance information is often a core supply-chain requirement.' },
      { name: 'Product-specific vehicle rules', note: 'Determine whether the component falls under vehicle type-approval or sector-specific rules.' }
    ],
    documents: ['Component specification', 'Material declarations', 'Test evidence', 'Supplier approvals', 'Traceability records', 'Customer-specific requirements'],
    questions: ['Is the item safety-critical?', 'Is it part of a type-approved system?', 'Which OEM/customer specifications apply?', 'What materials and coatings are used?']
  }
};

export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products[slug];
  return {
    title: product ? product.title : 'Product Compliance Guide',
    description: product?.description || 'Explore product compliance requirements.',
    alternates: { canonical: `/products/${slug}` }
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products[slug];

  if (!product) {
    return <main className="container section"><h1>Product Not Found</h1></main>;
  }

  return (
    <main>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Products', path: '/products' }, { name: product.title, path: `/products/${slug}` }]} />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Products', path: '/products' }, { name: product.title, path: `/products/${slug}` }]} />
      <section className="page-hero">
        <div className="container narrow">
          <span className="pill">Product Compliance Guide</span>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>
      </section>

      <section className="section container">
        <div className="content-layout">
          <article className="article">
            <h2>Likely compliance research areas</h2>
            <div className="regulation-stack">
              {product.regulations.map((regulation) => (
                regulation.href ? (
                  <a href={regulation.href} className="regulation-row" key={regulation.name}>
                    <div><strong>{regulation.name}</strong><p>{regulation.note}</p></div><span>→</span>
                  </a>
                ) : (
                  <div className="regulation-row" key={regulation.name}>
                    <div><strong>{regulation.name}</strong><p>{regulation.note}</p></div>
                  </div>
                )
              ))}
            </div>

            <h2>Documents worth preparing</h2>
            <div className="list-grid">
              {product.documents.map((item) => <div className="list-item" key={item}>{item}</div>)}
            </div>

            <h2>Questions that change the compliance path</h2>
            <ol className="checklist">
              {product.questions.map((item) => <li key={item}>{item}</li>)}
            </ol>

            <div className="cta-panel compact">
              <div>
                <h2>Turn this guide into a product-specific assessment.</h2>
                <p>Add product details and your supply-chain role to generate a more structured starting point.</p>
              </div>
              <a className="button button-light" href="/assessment">Start Assessment</a>
            </div>
          </article>

          <aside className="sidebar-card">
            <span className="card-badge">Category</span>
            <h3>{product.market}</h3>
            <p>
              Use this page for early research, then verify the exact legal scope
              against the final product specification and intended use.
            </p>
            <a className="text-link" href="/search">Search other products →</a>
          </aside>
        </div>
      </section>
    </main>
  );
}

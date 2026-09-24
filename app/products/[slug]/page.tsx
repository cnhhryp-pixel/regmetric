const products: Record<string, {title:string; description:string; regulations:string;}> = {
  electronics: {
    title: 'Electronics Compliance Guide',
    description: 'Understand EU compliance requirements for electronic products and connected devices.',
    regulations: 'CE Marking, RoHS, EMC, LVD and product safety requirements.'
  },
  toys: {
    title: 'Toy Compliance Guide',
    description: 'Explore safety and regulatory requirements for toys entering international markets.',
    regulations: 'Toy Safety, CE Marking and product documentation requirements.'
  },
  machinery: {
    title: 'Machinery Compliance Guide',
    description: 'Identify compliance considerations for industrial machinery and equipment.',
    regulations: 'Machinery safety, CE conformity and technical documentation.'
  },
  automotive: {
    title: 'Automotive Product Compliance Guide',
    description: 'Support automotive suppliers with regulatory information and product risk assessment.',
    regulations: 'Material requirements, safety standards and market regulations.'
  }
};

export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({ slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug];

  if (!product) {
    return <main className="container"><h1>Product Not Found</h1></main>;
  }

  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Product Compliance</p>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
      </section>

      <section className="card-grid">
        <div className="card">
          <h2>Applicable Regulations</h2>
          <p>{product.regulations}</p>
        </div>
        <div className="card">
          <h2>Compliance Assessment</h2>
          <p>Check your product requirements with RegMetric assessment tools.</p>
          <a className="header-cta" href="/assessment">Start Assessment</a>
        </div>
      </section>
    </main>
  );
}

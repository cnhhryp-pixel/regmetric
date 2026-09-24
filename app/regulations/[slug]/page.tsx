const regulations: Record<string, {title:string; description:string; products:string; requirements:string}> = {
  gpsr: {
    title: 'EU GPSR Compliance Guide',
    description: 'General Product Safety Regulation requirements for products placed on the European Union market.',
    products: 'Consumer products, online marketplace products and general goods.',
    requirements: 'Product safety assessment, technical documentation and responsible business information.'
  },
  'ce-marking': {
    title: 'CE Marking Compliance Guide',
    description: 'Understand conformity requirements for products requiring CE marking before EU market access.',
    products: 'Electronics, machinery, toys and regulated products.',
    requirements: 'Conformity assessment, applicable standards and technical files.'
  },
  rohs: {
    title: 'RoHS Compliance Guide',
    description: 'Restriction of hazardous substances requirements for electrical and electronic products.',
    products: 'Electronic equipment and electrical components.',
    requirements: 'Material compliance checks and restricted substance documentation.'
  },
  reach: {
    title: 'REACH Compliance Guide',
    description: 'Chemical substance requirements for products supplied in the European market.',
    products: 'Products containing chemical substances or materials.',
    requirements: 'Substance information, supplier communication and compliance records.'
  }
};

export function generateStaticParams() {
  return Object.keys(regulations).map((slug) => ({ slug }));
}

export default async function RegulationDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const regulation = regulations[slug];

  if (!regulation) {
    return <main className="container"><h1>Regulation Not Found</h1></main>;
  }

  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">EU Regulation</p>
        <h1>{regulation.title}</h1>
        <p>{regulation.description}</p>
      </section>

      <section className="card-grid">
        <div className="card">
          <h2>Applicable Products</h2>
          <p>{regulation.products}</p>
        </div>
        <div className="card">
          <h2>Key Requirements</h2>
          <p>{regulation.requirements}</p>
        </div>
      </section>

      <section className="card">
        <h2>Check Your Product Compliance</h2>
        <p>Use RegMetric assessment tools to identify potential compliance requirements.</p>
        <a className="header-cta" href="/assessment">Start Assessment</a>
      </section>
    </main>
  );
}

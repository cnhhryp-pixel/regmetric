import { industries } from '../../../data/complianceData';

export function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return {
    title: `${slug.replace(/-/g, ' ')} Compliance Requirements | RegMetric`,
    description: `Explore regulatory requirements, standards and compliance guidance for ${slug.replace(/-/g, ' ')} products.`,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const name = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Industry Compliance</p>
        <h1>{name} Compliance Guide</h1>
        <p>
          Identify applicable EU regulations, documentation requirements and
          compliance considerations for {name.toLowerCase()} products.
        </p>
      </section>

      <section className="card-grid">
        <div className="card">
          <h2>Regulatory Overview</h2>
          <p>
            RegMetric helps businesses discover relevant product regulations
            before entering regulated markets.
          </p>
        </div>
        <div className="card">
          <h2>Compliance Assessment</h2>
          <p>
            Analyze product risks and generate structured compliance reports.
          </p>
          <a className="header-cta" href="/assessment">
            Start Assessment
          </a>
        </div>
      </section>
    </main>
  );
}

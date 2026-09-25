import ComplianceSearch from '../../components/ComplianceSearch';
import { BreadcrumbSchema } from '../../components/SeoSchemas';

export const metadata = {
  title: 'Compliance Search',
  description: 'Search product compliance requirements by product name, regulation and industry.',
  alternates: { canonical: '/search' },
};

export default function SearchPage() {
  return (
    <main>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Compliance Search', path: '/search' }]} />
      <section className="page-hero">
        <div className="container narrow">
          <span className="pill">Compliance Search</span>
          <h1>Find the right compliance path faster.</h1>
          <p>
            Search across regulations, industries and product guides. Use the
            results as a starting point for deeper assessment and reporting.
          </p>
        </div>
      </section>

      <section className="section container">
        <ComplianceSearch />
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">How to use it</span>
              <h2>Search broad first, then narrow the compliance scope.</h2>
            </div>
            <p>
              Product details, intended use and supply-chain role can change which
              requirements actually apply.
            </p>
          </div>

          <div className="workflow-steps">
            <div>
              <span>01</span>
              <strong>Start with a product</strong>
              <p>Try a plain-language product name such as Bluetooth speaker or toy.</p>
            </div>
            <div>
              <span>02</span>
              <strong>Open related guides</strong>
              <p>Review likely regulation, industry and product-guide pages.</p>
            </div>
            <div>
              <span>03</span>
              <strong>Run an assessment</strong>
              <p>Add product category and your role in the EU supply chain.</p>
            </div>
            <div>
              <span>04</span>
              <strong>Document next steps</strong>
              <p>Use the report workflow to organize findings and required actions.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

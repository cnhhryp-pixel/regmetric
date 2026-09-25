export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="/" className="brand">
            <span className="brand-mark">R</span>
            <span>RegMetric</span>
          </a>
          <p>
            Regulatory intelligence tools for manufacturers, importers,
            distributors and compliance teams entering the European market.
          </p>
        </div>

        <div>
          <h4>Platform</h4>
          <a href="/search">Compliance Search</a>
          <a href="/assessment">Risk Assessment</a>
          <a href="/reports">Compliance Reports</a>
        </div>

        <div>
          <h4>Explore</h4>
          <a href="/regulations">EU Regulations</a>
          <a href="/industries">Industries</a>
          <a href="/products/electronics">Product Guides</a>
        </div>

        <div>
          <h4>Popular Guides</h4>
          <a href="/regulations/gpsr">GPSR</a>
          <a href="/regulations/ce-marking">CE Marking</a>
          <a href="/regulations/rohs">RoHS</a>
          <a href="/regulations/reach">REACH</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 RegMetric. Product compliance intelligence.</span>
        <span>Information is provided for guidance and does not replace professional legal advice.</span>
      </div>
    </footer>
  );
}

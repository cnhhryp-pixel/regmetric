export default function SiteHeader() {
  return (
    <header className="container" style={{paddingTop:'24px'}}>
      <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <strong>RegMetric</strong>
        <div style={{display:'flex',gap:'20px'}}>
          <a href="/product-compliance-checker">Tools</a>
          <a href="/regulations">Regulations</a>
          <a href="/industries">Industries</a>
          <a href="/compliance-report">Reports</a>
        </div>
      </nav>
    </header>
  );
}

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="/" className="brand" aria-label="RegMetric home">
          <span className="brand-mark">R</span>
          <span>RegMetric</span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="/search">Compliance Search</a>
          <a href="/regulations">Regulations</a>
          <a href="/industries">Industries</a>
          <a href="/products/electronics">Products</a>
          <a href="/reports">Reports</a>
        </nav>

        <a href="/assessment" className="header-cta">Start Free Assessment</a>
      </div>
    </header>
  );
}

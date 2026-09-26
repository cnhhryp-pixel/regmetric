export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="/" className="brand" aria-label="RegMetric home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 64 64" role="img">
              <path d="M18 46V18h15.5c8.2 0 13.5 4.5 13.5 11.3 0 4.9-2.6 8.4-7.1 10.1L48 46h-9.6l-6.5-5.8H26V46h-8Zm8-13h7.1c3.7 0 5.8-1.4 5.8-4.1 0-2.6-2.1-4-5.8-4H26v8.1Z" fill="currentColor"/>
              <circle cx="49" cy="17" r="5" className="brand-mark-dot"/>
              <path d="M46.7 17.2l1.6 1.6 3.2-3.7" className="brand-mark-check"/>
            </svg>
          </span>
          <span>RegMetric</span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="/search">Compliance Search</a>
          <a href="/regulations">Regulations</a>
          <a href="/industries">Industries</a>
          <a href="/products">Products</a>
          <a href="/reports">Reports</a>
        </nav>

        <a href="/assessment" className="header-cta">Start Free Assessment</a>
      </div>
    </header>
  );
}

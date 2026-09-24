export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="/" className="brand">RegMetric</a>
        <nav className="nav-links">
          <a href="/">Platform</a>
          <a href="/regulations">Regulations</a>
          <a href="/assessment">Solutions</a>
          <a href="/reports">Resources</a>
        </nav>
        <a href="/assessment" className="header-cta">Start Free Assessment</a>
      </div>
    </header>
  );
}

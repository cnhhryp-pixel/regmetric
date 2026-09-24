export default function Header() {
  return (
    <header className="border-b border-gray-200 px-6 py-4 flex justify-between items-center">
      <div className="font-bold text-xl">RegMetric</div>
      <nav className="flex gap-6 text-sm">
        <a href="/">Home</a>
        <a href="/compliance-checker">Compliance Checker</a>
        <a href="/regulations">Regulations</a>
        <a href="/reports">Reports</a>
      </nav>
    </header>
  );
}

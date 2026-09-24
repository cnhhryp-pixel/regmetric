export default function ComplianceChecker() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Product Compliance Checker</h1>
      <p className="mt-4">Check applicable EU regulations and compliance risks for your products.</p>
      <div className="mt-8 space-y-4 max-w-xl">
        <input className="border p-3 w-full" placeholder="Product name" />
        <input className="border p-3 w-full" placeholder="Industry" />
        <input className="border p-3 w-full" placeholder="Target market" />
        <button className="bg-black text-white px-6 py-3">Analyze Risk</button>
      </div>
    </main>
  );
}

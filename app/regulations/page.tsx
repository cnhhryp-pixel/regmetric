const regulations = [
  'CBAM',
  'Digital Product Passport',
  'EU AI Act',
  'GPSR',
  'Battery Regulation',
  'REACH',
  'RoHS',
  'EUDR'
];

export default function Regulations() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">EU Regulations Database</h1>
      <div className="mt-6 grid gap-4">
        {regulations.map((item) => (
          <div key={item} className="border p-4 rounded">{item}</div>
        ))}
      </div>
    </main>
  );
}

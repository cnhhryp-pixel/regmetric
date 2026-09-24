export default function Industries() {
  const industries = [
    'Electronics',
    'Machinery',
    'Toys & Children Products',
    'Medical Devices',
    'Consumer Products',
    'Automotive'
  ];

  return (
    <main className="container" style={{padding:'80px 24px'}}>
      <h1>Industries</h1>
      <p>Explore regulatory intelligence solutions for different product categories and markets.</p>
      <div className="card-grid">
        {industries.map((item) => (
          <div className="card" key={item}>
            <h3>{item}</h3>
            <p>Discover applicable compliance requirements and regulatory considerations.</p>
          </div>
        ))}
      </div>
    </main>
  );
}

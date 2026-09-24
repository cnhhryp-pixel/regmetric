export const metadata = {
  title: 'Industries | RegMetric Compliance Intelligence',
  description: 'Explore product compliance requirements across electronics, toys, machinery, automotive and consumer products.',
};

const industries = [
  ['Electronics', 'Compliance intelligence for connected devices, electronics and electrical products.'],
  ['Toys', 'Understand safety and regulatory requirements for toys entering global markets.'],
  ['Machinery', 'Identify compliance considerations for industrial equipment and machinery.'],
  ['Automotive', 'Support automotive suppliers with regulatory information and risk assessment.'],
  ['Medical Devices', 'Organize compliance requirements for healthcare-related products.'],
  ['Consumer Products', 'Manage product compliance information for everyday consumer goods.'],
];

export default function IndustriesPage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Industries</p>
        <h1>Compliance Intelligence Across Global Industries</h1>
        <p>RegMetric helps companies identify regulatory requirements before launching products in international markets.</p>
      </section>

      <section className="card-grid">
        {industries.map(([name, text]) => (
          <div className="card" key={name}>
            <h2>{name}</h2>
            <p>{text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

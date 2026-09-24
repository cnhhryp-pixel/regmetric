export const metadata = {
  title: 'Compliance Search | RegMetric',
  description: 'Search product compliance requirements by product name, regulation and industry.',
};

const examples = [
  {
    query: 'Bluetooth Speaker',
    result: 'CE, RoHS, EMC, GPSR'
  },
  {
    query: 'Children Toy',
    result: 'Toy Safety, CE, GPSR'
  },
  {
    query: 'Industrial Machine',
    result: 'Machinery Regulation, CE'
  }
];

export default function SearchPage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Compliance Search</p>
        <h1>Find Product Compliance Requirements Faster</h1>
        <p>
          Search regulations, product categories and compliance requirements
          through the RegMetric intelligence platform.
        </p>

        <div className="card">
          <input
            placeholder="Search product, regulation or industry..."
            style={{width:'100%',padding:'16px',fontSize:'16px'}}
          />
        </div>
      </section>

      <section className="card-grid">
        {examples.map((item) => (
          <div className="card" key={item.query}>
            <h2>{item.query}</h2>
            <p>{item.result}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

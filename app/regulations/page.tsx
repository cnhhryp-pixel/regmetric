export const metadata = {
  title: 'EU Regulations Database | RegMetric',
  description: 'Search European product compliance regulations including GPSR, CE, RoHS, REACH, EMC and LVD requirements.',
};

const regulations = [
  {
    name: 'GPSR',
    title: 'General Product Safety Regulation',
    description: 'Product safety requirements for consumer products entering the European Union market.'
  },
  {
    name: 'CE Marking',
    title: 'CE Compliance Requirements',
    description: 'Conformity assessment and market access requirements for regulated products.'
  },
  {
    name: 'RoHS',
    title: 'Restriction of Hazardous Substances',
    description: 'Requirements limiting hazardous materials in electrical and electronic products.'
  },
  {
    name: 'REACH',
    title: 'Chemical Compliance Regulation',
    description: 'Chemical substance obligations for products supplied in Europe.'
  },
  {
    name: 'EMC',
    title: 'Electromagnetic Compatibility',
    description: 'Requirements for electronic equipment electromagnetic performance.'
  },
  {
    name: 'LVD',
    title: 'Low Voltage Directive',
    description: 'Electrical safety requirements for applicable low voltage equipment.'
  }
];

export default function Regulations() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">EU Compliance Database</p>
        <h1>Search Product Regulations and Compliance Requirements</h1>
        <p>Explore major European regulations and understand product obligations before entering the market.</p>
      </section>

      <section className="card-grid">
        {regulations.map((item) => (
          <div className="card" key={item.name}>
            <h2>{item.name}</h2>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

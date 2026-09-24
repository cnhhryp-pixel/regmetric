const regulations = [
  {
    name: 'EU GPSR - General Product Safety Regulation',
    description: 'Product safety requirements for consumer products placed on the EU market.'
  },
  {
    name: 'CE Marking Requirements',
    description: 'Conformity assessment and market access requirements for applicable products.'
  },
  {
    name: 'RoHS Compliance',
    description: 'Restriction of hazardous substances requirements for electrical and electronic products.'
  },
  {
    name: 'REACH Regulation',
    description: 'Chemical substance compliance obligations for products supplied in Europe.'
  },
  {
    name: 'EMC Directive',
    description: 'Electromagnetic compatibility requirements for electronic equipment.'
  },
  {
    name: 'Low Voltage Directive (LVD)',
    description: 'Electrical safety requirements for certain low voltage equipment.'
  }
];

export default function Regulations() {
  return (
    <main className="container" style={{padding:'80px 24px'}}>
      <h1>EU Regulations Database</h1>
      <p>Explore European product compliance regulations, requirements and guidance.</p>
      <div className="card-grid">
        {regulations.map((item) => (
          <div className="card" key={item.name}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

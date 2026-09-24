export const metadata = {
  title: 'Free Product Compliance Assessment | RegMetric',
  description: 'Check product compliance requirements and generate a regulatory overview for EU markets.',
};

const steps = [
  {
    title: 'Step 1 - Product Category',
    text: 'Choose your product type and identify relevant compliance areas.'
  },
  {
    title: 'Step 2 - Target Market',
    text: 'Select destination markets and regulatory regions.'
  },
  {
    title: 'Step 3 - Compliance Analysis',
    text: 'Generate a compliance overview with potential requirements.'
  },
  {
    title: 'Step 4 - Report',
    text: 'Receive a structured compliance report for further review.'
  }
];

export default function AssessmentPage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Free Compliance Assessment</p>
        <h1>Check Product Compliance Before Entering Global Markets</h1>
        <p>
          Identify potential regulatory requirements for your products and create
          a structured compliance overview.
        </p>
      </section>

      <section className="card-grid">
        {steps.map((step) => (
          <div className="card" key={step.title}>
            <h2>{step.title}</h2>
            <p>{step.text}</p>
          </div>
        ))}
      </section>

      <section className="card" style={{marginTop:'40px'}}>
        <h2>Request Your Assessment</h2>
        <p>
          Submit product information, company details and contact information
          to prepare a compliance analysis workflow.
        </p>
        <a className="header-cta" href="mailto:contact@regmetric.com">
          Start Assessment
        </a>
      </section>
    </main>
  );
}

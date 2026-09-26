import ProductIntentGuide from '../../../components/ProductIntentGuide';

export const metadata = {
  title: 'Cordless Drill EU Compliance Guide',
  description: 'Explore EU compliance research for cordless drills, including machinery, batteries, EMC, RoHS, REACH, WEEE and charger requirements.',
  alternates: { canonical: '/products/cordless-drill' },
};

export default function CordlessDrillPage() {
  return (
    <ProductIntentGuide
      slug="cordless-drill"
      eyebrow="Cordless Power Tool Compliance"
      title="Cordless Drill EU Compliance Guide"
      intro="A cordless drill combines machinery hazards, a motor controller, rechargeable battery pack and charger. The product, battery and charger should be scoped together but documented as distinct compliance elements."
      researchAreas={[
        { name: 'EU machinery framework', href: '/regulations/machinery-regulation', note: 'Review rotating-part hazards, intended use, foreseeable misuse and the applicable machinery conformity pathway.' },
        { name: 'EU Batteries Regulation', href: '/regulations/batteries', note: 'The rechargeable battery pack can create battery-specific lifecycle, information and end-of-life obligations.' },
        { name: 'EMC Directive', href: '/regulations/emc', note: 'Motor control electronics can create emissions and immunity considerations.' },
        { name: 'RoHS', href: '/regulations/rohs', note: 'Review restricted substances in electronics, wiring, connectors and components.' },
        { name: 'REACH', href: '/regulations/reach', note: 'Review plastics, coatings, lubricants and other material information.' },
        { name: 'WEEE', href: '/regulations/weee', note: 'The electrical tool and supplied charger can create producer and end-of-life obligations.' }
      ]}
      evidence={[
        'Machine risk assessment',
        'Motor, gearbox and chuck specifications',
        'Battery-pack specifications and safety evidence',
        'Charger specifications and test evidence',
        'EMC / material compliance evidence',
        'Instructions, warnings and declaration documentation'
      ]}
      questions={[
        'What is the maximum torque and speed range?',
        'Which battery chemistry and voltage are used?',
        'Is the battery pack removable and interchangeable?',
        'Is a charger supplied with the drill?',
        'Are impact or hammer functions included?'
      ]}
      faqs={[
        { question: 'Does the battery pack need its own compliance evidence?', answer: 'Yes. The battery pack can have battery-specific obligations and safety evidence separate from the drill body.' },
        { question: 'Should the charger be assessed as a separate product?', answer: 'Yes. A supplied charger can have its own electrical-safety, EMC, substance and ecodesign requirements.' },
        { question: 'Why is the risk assessment important for a cordless drill?', answer: 'The drill creates mechanical, electrical and foreseeable misuse hazards that should be connected to guards, controls, instructions and conformity evidence.' }
      ]}
    />
  );
}

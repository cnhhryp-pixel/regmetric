import ProductIntentGuide from '../../../components/ProductIntentGuide';

export const metadata = {
  title: 'Electric Scooter EU Compliance Guide',
  description: 'Explore EU compliance research for electric scooters, including machinery, batteries, EMC, RoHS, REACH and product-classification considerations.',
  alternates: { canonical: '/products/electric-scooter' },
};

export default function ElectricScooterPage() {
  return (
    <ProductIntentGuide
      slug="electric-scooter"
      eyebrow="Electric Mobility Compliance"
      title="Electric Scooter EU Compliance Guide"
      intro="Electric scooters combine a vehicle-like use case with battery, motor, charger, electronics and mechanical hazards. The compliance route depends heavily on product classification, maximum speed, intended use and whether national road-use rules are also relevant."
      researchAreas={[
        { name: 'EU machinery framework', href: '/regulations/machinery-regulation', note: 'Potentially relevant depending on product classification and intended use; the exact legal pathway should be verified before conformity planning.' },
        { name: 'EU Batteries Regulation', href: '/regulations/batteries', note: 'The traction battery and its lifecycle, information and end-of-life obligations should be reviewed separately.' },
        { name: 'EMC Directive', href: '/regulations/emc', note: 'Motor controllers, displays and charging electronics can create electromagnetic compatibility considerations.' },
        { name: 'RoHS', href: '/regulations/rohs', note: 'Review restricted-substance evidence for electronic assemblies, cables and components.' },
        { name: 'REACH', href: '/regulations/reach', note: 'Review plastics, rubber, coatings, adhesives and other materials across the supply chain.' },
        { name: 'National road-use rules', note: 'Road-use, speed, registration or equipment rules can differ by country and are separate from product-conformity analysis.' }
      ]}
      evidence={[
        'Product classification and intended-use statement',
        'Motor and controller specifications',
        'Battery-pack and charging-system evidence',
        'Mechanical and braking risk assessment',
        'EMC / electrical evidence as applicable',
        'Warnings, instructions and traceability information'
      ]}
      questions={[
        'What is the maximum design speed and rated motor power?',
        'Is the scooter intended for public-road use, private land or both?',
        'Is the battery removable or integrated?',
        'Which charger is supplied with the product?',
        'Are lights, displays, Bluetooth or app functions included?'
      ]}
      faqs={[
        { question: 'Do all electric scooters follow the same EU compliance route?', answer: 'No. Product classification, speed, intended use and national road-use rules can materially change the applicable framework.' },
        { question: 'Does the scooter battery need separate compliance review?', answer: 'Yes. The traction battery can create battery-specific obligations in addition to the finished-product compliance work.' },
        { question: 'Should the charger be assessed separately?', answer: 'Yes. A supplied charger or external power supply can have its own electrical-safety, EMC, substance and ecodesign scope.' }
      ]}
      officialNote={{
        title: 'Classification first',
        text: 'Electric scooters can sit across product-safety and mobility frameworks, so final classification and intended use should be verified before relying on a single checklist.',
        href: 'https://single-market-economy.ec.europa.eu/sectors/mechanical-engineering/machinery_en',
        label: 'European Commission machinery'
      }}
    />
  );
}

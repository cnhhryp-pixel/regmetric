import ProductIntentGuide from '../../../components/ProductIntentGuide';

export const metadata = {
  title: 'E-Bike Charger EU Compliance Guide',
  description: 'Explore EU compliance research for e-bike battery chargers, including LVD, EMC, RoHS, REACH, WEEE and external-power-supply requirements.',
  alternates: { canonical: '/products/ebike-charger' },
};

export default function EbikeChargerPage() {
  return (
    <ProductIntentGuide
      slug="ebike-charger"
      eyebrow="E-Bike Charger Compliance"
      title="E-Bike Charger EU Compliance Guide"
      intro="E-bike chargers combine mains input, battery-charging control, thermal management and a defined battery interface. The final compliance scope depends on charger ratings, battery chemistry, communication with the battery pack and whether the charger is sold separately or bundled."
      researchAreas={[
        { name: 'Low Voltage Directive', href: '/regulations/lvd', note: 'Potentially relevant for mains-voltage electrical safety depending on charger design and ratings.' },
        { name: 'EMC Directive', href: '/regulations/emc', note: 'Switching electronics and charging control can create emissions and immunity requirements.' },
        { name: 'RoHS', href: '/regulations/rohs', note: 'Review restricted-substance evidence for PCB assemblies, cables, connectors and enclosure materials.' },
        { name: 'REACH', href: '/regulations/reach', note: 'Review plastics, coatings, adhesives and other chemical or material information.' },
        { name: 'WEEE', href: '/regulations/weee', note: 'Battery chargers can create producer-registration, reporting and end-of-life obligations.' },
        { name: 'External power supply / charger ecodesign', note: 'Check whether the charger falls within current or newer EU ecodesign requirements for charging equipment.' }
      ]}
      evidence={[
        'AC input and DC output ratings',
        'Battery chemistry and charging profile',
        'Electrical safety and EMC test evidence',
        'Thermal protection and fault behavior',
        'RoHS / REACH supplier documentation',
        'Labels, instructions and declaration documentation'
      ]}
      questions={[
        'What battery voltage, chemistry and capacity is the charger designed for?',
        'Does the charger communicate with the battery-management system?',
        'Is the charger sold independently or only with a specific e-bike?',
        'What is the maximum charging power?',
        'Which connector and polarity controls are used?'
      ]}
      faqs={[
        { question: 'Can an e-bike charger be treated like a generic USB charger?', answer: 'Usually not. Battery voltage, charging profile, connector design and fault controls are product-specific and can materially change the safety assessment.' },
        { question: 'Does the battery itself need separate compliance work?', answer: 'Yes. The battery pack and the charger have different compliance questions and evidence, even when sold together.' },
        { question: 'Can ecodesign rules apply to e-bike chargers?', answer: 'Potentially. Scope should be checked against the current and newer EU ecodesign rules for external power supplies and battery chargers.' }
      ]}
    />
  );
}

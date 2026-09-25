import ProductIntentGuide from '../../../components/ProductIntentGuide';

export const metadata = {
  title: 'Portable Fan EU Compliance Guide',
  description: 'Explore EU compliance research for portable and rechargeable fans, including Batteries Regulation, RoHS, REACH, WEEE and RED where wireless functions are present.',
  alternates: { canonical: '/products/portable-fan' },
};

export default function PortableFanPage() {
  return (
    <ProductIntentGuide
      slug="portable-fan"
      eyebrow="Portable Appliance Compliance"
      title="Portable Fan EU Compliance Guide"
      intro="Portable fans can be USB powered, rechargeable, mains powered or connected. Battery design, charging architecture, guards, moving parts and any wireless features all affect the compliance path."
      researchAreas={[
        { name: 'EU Batteries Regulation', href: '/regulations/batteries', note: 'Potentially relevant when the fan includes a rechargeable or replaceable battery.' },
        { name: 'RoHS', href: '/regulations/rohs', note: 'Review restricted-substance evidence for motors, electronics, cables and PCB assemblies.' },
        { name: 'REACH', href: '/regulations/reach', note: 'Review plastics, coatings, adhesives and other material information.' },
        { name: 'WEEE', href: '/regulations/weee', note: 'Electrical fans can create producer-registration, reporting and end-of-life obligations.' },
        { name: 'Radio Equipment Directive', href: '/regulations/red', note: 'Potentially relevant if the fan includes Bluetooth, Wi-Fi or another intentional radio function.' }
      ]}
      evidence={[
        'Motor and blade specifications',
        'Guard and mechanical-safety information',
        'Battery and charging specifications',
        'Electrical / EMC evidence as applicable',
        'Material declarations',
        'Warnings and instructions'
      ]}
      questions={[
        'Is the fan mains powered, USB powered or battery powered?',
        'Is the battery removable or built in?',
        'How are moving blades guarded?',
        'Is oscillation or automatic movement included?',
        'Does the fan include app control or wireless connectivity?'
      ]}
      faqs={[
        { question: 'Does a rechargeable portable fan need battery compliance review?', answer: 'Yes. A built-in or supplied rechargeable battery can create battery-specific obligations in addition to the finished-product requirements.' },
        { question: 'Do blade guards matter for compliance?', answer: 'Yes. Access to moving parts and foreseeable use are important safety considerations for portable fans.' },
        { question: 'What changes if the fan has app control?', answer: 'Intentional radio functionality can introduce the Radio Equipment Directive in addition to the electrical, battery and material requirements.' }
      ]}
    />
  );
}

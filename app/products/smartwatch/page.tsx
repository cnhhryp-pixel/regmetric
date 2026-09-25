import ProductIntentGuide from '../../../components/ProductIntentGuide';

export const metadata = {
  title: 'Smartwatch EU Compliance Guide',
  description: 'Explore EU compliance research for smartwatches and wearable devices, including RED, Batteries Regulation, RoHS, REACH and WEEE.',
  alternates: { canonical: '/products/smartwatch' },
};

export default function SmartwatchPage() {
  return (
    <ProductIntentGuide
      slug="smartwatch"
      eyebrow="Wearable Device Compliance"
      title="Smartwatch EU Compliance Guide"
      intro="Smartwatches combine radio functions, a rechargeable battery, electronics, materials and wearable-user contact. The final compliance path depends on wireless technologies, charging design, intended claims and the finished-product configuration."
      researchAreas={[
        { name: 'Radio Equipment Directive (RED)', href: '/regulations/red', note: 'Bluetooth, Wi-Fi, cellular or other intentional radio functions make RED a primary conformity framework.' },
        { name: 'EU Batteries Regulation', href: '/regulations/batteries', note: 'The rechargeable battery can introduce battery-specific lifecycle, information and end-of-life obligations.' },
        { name: 'RoHS', href: '/regulations/rohs', note: 'Review restricted-substance evidence for electronic assemblies and materials.' },
        { name: 'REACH', href: '/regulations/reach', note: 'Review materials that may contact skin, plus coatings, straps, adhesives and other components.' },
        { name: 'WEEE', href: '/regulations/weee', note: 'Wearable electronics can create producer-registration, reporting and recycling duties.' }
      ]}
      evidence={[
        'Radio module and antenna specifications',
        'Finished-product RED test evidence',
        'Battery and charging specifications',
        'Material declarations for case and strap',
        'Risk and technical documentation',
        'Labels, instructions and EU declaration'
      ]}
      questions={[
        'Which radio technologies are enabled: Bluetooth, Wi-Fi, NFC or cellular?',
        'What battery chemistry and charging method are used?',
        'Are health or medical claims made for any function?',
        'Which materials are in prolonged skin contact?',
        'Is a wireless charger or external power supply supplied with the watch?'
      ]}
      faqs={[
        { question: 'Does a Bluetooth smartwatch fall under RED?', answer: 'A smartwatch that intentionally transmits or receives radio waves can fall within the Radio Equipment Directive, depending on the exact design and intended use.' },
        { question: 'Does the battery create separate compliance work?', answer: 'Yes. The EU Batteries Regulation addresses batteries across the lifecycle, so battery classification and product integration should be reviewed separately from RED.' },
        { question: 'What if the smartwatch makes medical claims?', answer: 'Medical or diagnostic claims can change the regulatory pathway significantly and may require separate medical-device classification analysis.' }
      ]}
      officialNote={{
        title: 'Radio framework',
        text: 'Directive 2014/53/EU remains the EU radio-equipment framework for products using Bluetooth, Wi-Fi and other radio functions.',
        href: 'https://eur-lex.europa.eu/eli/dir/2014/53/oj',
        label: 'EUR-Lex RED'
      }}
    />
  );
}

import ProductIntentGuide from '../../../components/ProductIntentGuide';

export const metadata = {
  title: 'Bluetooth Speaker EU Compliance Guide',
  description: 'Explore EU compliance research for Bluetooth speakers, including RED, RoHS, REACH, batteries, WEEE and product documentation.',
  alternates: { canonical: '/products/bluetooth-speaker' },
};

export default function BluetoothSpeakerPage() {
  return (
    <ProductIntentGuide
      slug="bluetooth-speaker"
      eyebrow="Bluetooth Speaker Compliance"
      title="Bluetooth Speaker EU Compliance Guide"
      intro="A Bluetooth speaker combines radio functionality, electronics, materials and often a rechargeable battery. The final compliance scope depends on the complete product, not only the Bluetooth module."
      researchAreas={[
        { name: 'Radio Equipment Directive (RED)', href: '/regulations/red', note: 'Bluetooth radio functionality makes RED a primary research path for the finished product.' },
        { name: 'RoHS', href: '/regulations/rohs', note: 'Review restricted-substance evidence for electronic components, solder, cables and other materials.' },
        { name: 'REACH', href: '/regulations/reach', note: 'Check chemical and material information for plastics, coatings, adhesives and accessories.' },
        { name: 'EU Batteries Regulation', href: '/regulations/batteries', note: 'Potentially relevant when the speaker contains a rechargeable or replaceable battery.' },
        { name: 'WEEE', href: '/regulations/weee', note: 'Electrical and electronic equipment can create producer, registration and recycling obligations.' }
      ]}
      evidence={[
        'Radio and antenna specifications',
        'Finished-product radio test evidence',
        'Battery specification and safety information',
        'Bill of materials and supplier declarations',
        'Technical documentation',
        'Labels, instructions and EU declaration'
      ]}
      questions={[
        'Which Bluetooth and other radio functions are integrated?',
        'Does the product also include Wi-Fi, NFC or another transmitter?',
        'Is the battery rechargeable, replaceable or built in?',
        'Which charger or external power supply is provided?',
        'Will the same hardware and firmware be sold across all EU markets?'
      ]}
      faqs={[
        { question: 'Is Bluetooth module approval enough for an EU Bluetooth speaker?', answer: 'No. Module evidence can help, but the finished speaker and the way the module is integrated still need product-level compliance assessment.' },
        { question: 'Does a Bluetooth speaker need LVD as a separate directive?', answer: 'Radio equipment is primarily assessed under RED for its radio-related conformity framework, including safety and EMC essential requirements. Other legislation can still apply depending on the product.' },
        { question: 'What changes if the speaker has a rechargeable battery?', answer: 'Battery type and design can introduce additional requirements under the EU Batteries Regulation and can affect documentation, labeling and lifecycle obligations.' }
      ]}
      officialNote={{
        title: 'Key legal reference',
        text: 'Radio Equipment Directive 2014/53/EU is the core EU radio-equipment framework to review for Bluetooth functionality.',
        href: 'https://eur-lex.europa.eu/eli/dir/2014/53/oj',
        label: 'EUR-Lex RED'
      }}
    />
  );
}

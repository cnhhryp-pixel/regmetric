import ProductIntentGuide from '../../../components/ProductIntentGuide';

export const metadata = {
  title: 'Bluetooth Headphones EU Compliance Guide',
  description: 'Explore EU compliance research for Bluetooth headphones and earbuds, including RED, Batteries Regulation, RoHS, REACH and WEEE.',
  alternates: { canonical: '/products/bluetooth-headphones' },
};

export default function BluetoothHeadphonesPage() {
  return (
    <ProductIntentGuide
      slug="bluetooth-headphones"
      eyebrow="Wireless Audio Compliance"
      title="Bluetooth Headphones EU Compliance Guide"
      intro="Bluetooth headphones and true-wireless earbuds combine radio functions, rechargeable batteries, electronics and user-contact materials. Charging cases add another battery and power subsystem to the finished-product assessment."
      researchAreas={[
        { name: 'Radio Equipment Directive (RED)', href: '/regulations/red', note: 'Bluetooth radio functionality makes RED a primary conformity framework for the finished product.' },
        { name: 'EU Batteries Regulation', href: '/regulations/batteries', note: 'Earbuds, headphones and charging cases can contain multiple rechargeable batteries that need battery-specific review.' },
        { name: 'RoHS', href: '/regulations/rohs', note: 'Review restricted-substance evidence for electronics, cables and materials.' },
        { name: 'REACH', href: '/regulations/reach', note: 'Review plastics, coatings, ear tips and other user-contact materials.' },
        { name: 'WEEE', href: '/regulations/weee', note: 'Wireless audio devices can create producer-registration and end-of-life obligations.' }
      ]}
      evidence={[
        'Bluetooth and antenna specifications',
        'Radio test evidence',
        'Battery specifications for earbuds and case',
        'Charging-interface information',
        'Material declarations',
        'Technical documentation and EU declaration'
      ]}
      questions={[
        'Are the products headphones, earbuds or a headset with microphone?',
        'Does the charging case contain its own battery?',
        'Are other radio features such as NFC enabled?',
        'Which materials contact the ear or skin?',
        'Is a wall charger bundled with the product?'
      ]}
      faqs={[
        { question: 'Is Bluetooth certification the same as EU RED compliance?', answer: 'No. Bluetooth ecosystem qualifications and module evidence do not replace the finished-product conformity assessment required under applicable EU legislation.' },
        { question: 'Does the charging case need to be included in the compliance file?', answer: 'Yes. The charging case is part of the supplied system and can introduce battery, charging, EMC and material considerations.' },
        { question: 'Do wireless earbuds create WEEE obligations?', answer: 'They can, because they are electrical and electronic equipment; national producer-registration and reporting requirements should be checked market by market.' }
      ]}
      officialNote={{
        title: 'Wireless product reference',
        text: 'Directive 2014/53/EU is the core EU radio-equipment framework to investigate for Bluetooth wireless audio products.',
        href: 'https://eur-lex.europa.eu/eli/dir/2014/53/oj',
        label: 'EUR-Lex RED'
      }}
    />
  );
}

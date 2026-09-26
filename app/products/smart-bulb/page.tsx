import ProductIntentGuide from '../../../components/ProductIntentGuide';

export const metadata = {
  title: 'Smart Bulb EU Compliance Guide',
  description: 'Explore EU compliance research for Wi-Fi and Bluetooth smart bulbs, including RED, RoHS, REACH, WEEE and lighting ecodesign requirements.',
  alternates: { canonical: '/products/smart-bulb' },
};

export default function SmartBulbPage() {
  return (
    <ProductIntentGuide
      slug="smart-bulb"
      eyebrow="Connected Lighting Compliance"
      title="Smart Bulb EU Compliance Guide"
      intro="Smart bulbs combine a light source, power electronics and intentional radio functionality. Compliance work should connect radio, lighting performance, materials, waste obligations and the complete finished-product configuration."
      researchAreas={[
        { name: 'Radio Equipment Directive (RED)', href: '/regulations/red', note: 'Wi-Fi, Bluetooth, Zigbee or other intentional radio functions make RED a primary conformity framework.' },
        { name: 'RoHS', href: '/regulations/rohs', note: 'Review restricted-substance evidence for LEDs, drivers, radio modules and PCB assemblies.' },
        { name: 'REACH', href: '/regulations/reach', note: 'Review plastics, coatings, adhesives and other material information.' },
        { name: 'WEEE', href: '/regulations/weee', note: 'Smart bulbs can create producer-registration and end-of-life obligations.' },
        { name: 'Lighting ecodesign and energy labelling', note: 'In-scope light sources can be subject to EU ecodesign and energy-labelling requirements.' }
      ]}
      evidence={[
        'Radio module and antenna specifications',
        'Finished-product RED test evidence',
        'Electrical and photometric specifications',
        'Energy-performance data',
        'Material declarations',
        'Labels, product information and EU declaration'
      ]}
      questions={[
        'Which radio protocols are enabled?',
        'What lamp base, rated voltage and power are used?',
        'Is the product classified as an in-scope light source?',
        'What dimming and standby modes are supported?',
        'Are firmware variants or regional radio settings used?'
      ]}
      faqs={[
        { question: 'Does a Wi-Fi smart bulb fall under RED?', answer: 'A smart bulb that intentionally uses Wi-Fi, Bluetooth, Zigbee or another radio technology can fall within the Radio Equipment Directive.' },
        { question: 'Can energy-labelling rules apply to smart bulbs?', answer: 'Yes. In-scope light sources can be subject to EU energy-labelling requirements, so classification should be confirmed before packaging and online listing data are finalized.' },
        { question: 'Does the radio module certification cover the complete bulb?', answer: 'No. Module evidence can support the conformity assessment, but the finished smart bulb and integration still need product-level review.' }
      ]}
      officialNote={{
        title: 'Connected lighting',
        text: 'Smart bulbs can combine RED with lighting-specific ecodesign and energy-labelling obligations, so both radio and light-source classifications should be checked.',
        href: 'https://energy-efficient-products.ec.europa.eu/product-list/light-sources_en',
        label: 'European Commission lighting'
      }}
    />
  );
}

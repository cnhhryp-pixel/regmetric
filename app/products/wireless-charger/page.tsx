import ProductIntentGuide from '../../../components/ProductIntentGuide';

export const metadata = {
  title: 'Wireless Charger EU Compliance Guide',
  description: 'Explore EU compliance research for wireless chargers and charging pads, including EMC, RoHS, REACH, WEEE and Regulation (EU) 2025/2052 ecodesign requirements.',
  alternates: { canonical: '/products/wireless-charger' },
};

export default function WirelessChargerPage() {
  return (
    <ProductIntentGuide
      slug="wireless-charger"
      eyebrow="Wireless Charger Compliance"
      title="Wireless Charger EU Compliance Guide"
      intro="Wireless chargers use electromagnetic fields to transfer power and can create a different compliance profile from conventional plug-in power adapters. Product design, supplied power adapter, charging protocol and intended use all matter."
      researchAreas={[
        { name: 'EMC Directive', href: '/regulations/emc', note: 'Review electromagnetic emissions, immunity and the operating modes used during conformity testing.' },
        { name: 'RoHS', href: '/regulations/rohs', note: 'Review restricted-substance evidence for electronics, coils, cables and housings.' },
        { name: 'REACH', href: '/regulations/reach', note: 'Check material and chemical information for plastics, coatings, adhesives and other materials.' },
        { name: 'WEEE', href: '/regulations/weee', note: 'Electrical and electronic equipment can create producer and end-of-life obligations.' },
        { name: 'Wireless charger ecodesign', note: 'Regulation (EU) 2025/2052 creates ecodesign requirements for wireless chargers and charging pads, generally applying from 14 December 2028.' }
      ]}
      evidence={[
        'Wireless charging specification',
        'Power-input and output data',
        'EMC test evidence',
        'Standby power measurements',
        'Material and supplier declarations',
        'Labels, instructions and technical documentation'
      ]}
      questions={[
        'Is the product a charging pad, stand or embedded wireless charger?',
        'Is an external power supply bundled with the charger?',
        'What is the maximum wireless charging power?',
        'Which interoperability or charging protocols are supported?',
        'Will the product be placed on the market after the 2028 ecodesign transition?'
      ]}
      faqs={[
        { question: 'Are wireless chargers included in Regulation (EU) 2025/2052?', answer: 'Yes. The Commission identifies wireless chargers and wireless charging pads as products covered by the newer ecodesign framework.' },
        { question: 'What does the newer ecodesign framework address for wireless chargers?', answer: 'The Commission highlights standby power and common-charger interoperability requirements among the areas covered.' },
        { question: 'Is the bundled wall adapter assessed separately?', answer: 'It can have its own external-power-supply compliance scope, so the charger and supplied adapter should both be reviewed.' }
      ]}
      officialNote={{
        title: 'New ecodesign framework',
        text: 'Regulation (EU) 2025/2052 includes wireless chargers and charging pads, with new requirements generally applying from 14 December 2028.',
        href: 'https://energy-efficient-products.ec.europa.eu/product-list/external-power-supplies/eps-regulation-20252052-new_en',
        label: 'European Commission guidance'
      }}
    />
  );
}

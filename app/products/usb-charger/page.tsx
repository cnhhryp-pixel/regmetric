import ProductIntentGuide from '../../../components/ProductIntentGuide';

export const metadata = {
  title: 'USB Charger EU Compliance Guide',
  description: 'Explore EU compliance research for USB chargers and USB-C power supplies, including LVD, EMC, RoHS, WEEE and upcoming common-charger ecodesign requirements.',
  alternates: { canonical: '/products/usb-charger' },
};

export default function UsbChargerPage() {
  return (
    <ProductIntentGuide
      slug="usb-charger"
      eyebrow="USB Charger Compliance"
      title="USB Charger EU Compliance Guide"
      intro="USB chargers and USB-C power supplies can combine electrical-safety, EMC, material, waste and energy-efficiency requirements. The exact scope depends on input/output ratings, charging protocol, intended equipment and whether the product is an external power supply."
      researchAreas={[
        { name: 'Low Voltage Directive', href: '/regulations/lvd', note: 'Potentially relevant for electrical-safety conformity depending on the mains input and product design.' },
        { name: 'EMC Directive', href: '/regulations/emc', note: 'Review conducted and radiated emissions, immunity and the finished-product test configuration.' },
        { name: 'RoHS', href: '/regulations/rohs', note: 'Review restricted-substance evidence for PCB assemblies, cables, housings and components.' },
        { name: 'REACH', href: '/regulations/reach', note: 'Check material and chemical information across the supply chain.' },
        { name: 'WEEE', href: '/regulations/weee', note: 'Electrical equipment can create producer-registration, reporting and end-of-life obligations.' },
        { name: 'External power supply ecodesign', note: 'Current rules and the newer Regulation (EU) 2025/2052 should be checked for in-scope USB chargers and external power supplies.' }
      ]}
      evidence={[
        'Input/output electrical ratings',
        'USB-C / USB-PD protocol specification',
        'Safety and EMC test reports',
        'Efficiency and no-load power data',
        'RoHS / REACH supplier evidence',
        'Markings, instructions and EU declaration'
      ]}
      questions={[
        'Is the product an external power supply or another charger type?',
        'What is the maximum output power?',
        'Does it support USB Power Delivery or programmable power supply modes?',
        'Are multiple ports able to operate simultaneously?',
        'Will the charger still be sold after the newer ecodesign framework applies?'
      ]}
      faqs={[
        { question: 'Are USB chargers covered by EU ecodesign rules?', answer: 'Many external power supplies are already subject to EU ecodesign rules, and Regulation (EU) 2025/2052 creates a newer framework for external power supplies and certain charging devices.' },
        { question: 'When do the new common-charger ecodesign requirements generally apply?', answer: 'The European Commission states that the new Regulation (EU) 2025/2052 requirements generally apply from 14 December 2028.' },
        { question: 'Does USB-C automatically mean the charger is EU compliant?', answer: 'No. Connector format is only one design feature. Electrical safety, EMC, material, technical-documentation and other applicable requirements still need to be assessed.' }
      ]}
      officialNote={{
        title: 'Ecodesign transition',
        text: 'The Commission lists Regulation (EU) 2025/2052 for external power supplies, certain battery chargers, wireless chargers and USB Type-C cables, with new requirements generally applying from 14 December 2028.',
        href: 'https://energy-efficient-products.ec.europa.eu/product-list/external-power-supplies/eps-regulation-20252052-new_en',
        label: 'European Commission EPS'
      }}
    />
  );
}

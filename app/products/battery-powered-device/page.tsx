import ProductIntentGuide from '../../../components/ProductIntentGuide';

export const metadata = {
  title: 'Battery-Powered Product EU Compliance Guide',
  description: 'Explore EU compliance research for battery-powered products, including Batteries Regulation, product safety, RoHS, REACH, WEEE and radio rules where relevant.',
  alternates: { canonical: '/products/battery-powered-device' },
};

export default function BatteryPoweredDevicePage() {
  return (
    <ProductIntentGuide
      slug="battery-powered-device"
      eyebrow="Battery Product Compliance"
      title="Battery-Powered Product EU Compliance Guide"
      intro="A battery-powered product can trigger both product-level and battery-level obligations. The compliance path depends on the battery category, device function, electronics, charging method and whether radio features are present."
      researchAreas={[
        { name: 'EU Batteries Regulation', href: '/regulations/batteries', note: 'Classify the battery and investigate the safety, information, sustainability and waste obligations relevant to that category.' },
        { name: 'GPSR', href: '/regulations/gpsr', note: 'General product-safety requirements can be relevant for consumer products where product-specific legislation does not fully cover the risk.' },
        { name: 'RoHS', href: '/regulations/rohs', note: 'Potentially relevant where the finished product is electrical or electronic equipment.' },
        { name: 'REACH', href: '/regulations/reach', note: 'Review chemical and material information in the device, battery enclosure and accessories.' },
        { name: 'WEEE', href: '/regulations/weee', note: 'Electrical products can create producer registration, reporting and end-of-life obligations.' },
        { name: 'Radio Equipment Directive', href: '/regulations/red', note: 'Potentially relevant if the product contains Bluetooth, Wi-Fi or other intentional radio functions.' }
      ]}
      evidence={[
        'Battery cell and pack specification',
        'Battery safety evidence',
        'Charging architecture',
        'Product risk assessment',
        'Material and supplier documentation',
        'Labels, instructions and lifecycle information'
      ]}
      questions={[
        'What battery category and chemistry are used?',
        'Is the battery removable, replaceable or built in?',
        'How is the product charged?',
        'Does the device include wireless or radio functionality?',
        'Is the finished product electrical/electronic equipment for WEEE and RoHS purposes?'
      ]}
      faqs={[
        { question: 'Does every battery-powered device have the same EU battery obligations?', answer: 'No. Battery category, capacity, application and product architecture can change which obligations are relevant.' },
        { question: 'Is the Batteries Regulation only about waste batteries?', answer: 'No. Regulation (EU) 2023/1542 covers batteries across the lifecycle, including product, sustainability, information and end-of-life topics.' },
        { question: 'Can a battery-powered product also fall under RED?', answer: 'Yes. If it intentionally transmits or receives radio waves, radio-equipment requirements can be relevant in addition to battery obligations.' }
      ]}
      officialNote={{
        title: 'Current battery framework',
        text: 'Regulation (EU) 2023/1542 is the EU framework for batteries and waste batteries, with requirements phased in over time.',
        href: 'https://environment.ec.europa.eu/topics/waste-and-recycling/batteries_en',
        label: 'European Commission batteries'
      }}
    />
  );
}

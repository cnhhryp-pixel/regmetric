import ProductIntentGuide from '../../../components/ProductIntentGuide';

export const metadata = {
  title: 'Power Adapter EU Compliance Guide',
  description: 'Explore EU compliance research for external power adapters and power supplies, including LVD, EMC, RoHS, REACH, WEEE and ecodesign requirements.',
  alternates: { canonical: '/products/power-adapter' },
};

export default function PowerAdapterPage() {
  return (
    <ProductIntentGuide
      slug="power-adapter"
      eyebrow="Power Adapter Compliance"
      title="Power Adapter EU Compliance Guide"
      intro="External power supplies can combine electrical-safety, EMC, substance, waste and energy-efficiency obligations. Scope depends on input/output ratings, intended equipment and the exact adapter design."
      researchAreas={[
        { name: 'Low Voltage Directive', href: '/regulations/lvd', note: 'Potentially relevant for electrical equipment within the Directive voltage scope.' },
        { name: 'EMC Directive', href: '/regulations/emc', note: 'Review emissions, immunity and technical evidence for the finished adapter.' },
        { name: 'RoHS', href: '/regulations/rohs', note: 'Review restricted substances in components, PCB assemblies, cables and materials.' },
        { name: 'REACH', href: '/regulations/reach', note: 'Check material and chemical information across the supply chain.' },
        { name: 'WEEE', href: '/regulations/weee', note: 'Producer and end-of-life obligations may apply when placed on EU markets.' },
        { name: 'Ecodesign for external power supplies', note: 'Current and transitional ecodesign rules should be checked for in-scope external power supplies and charging devices.' }
      ]}
      evidence={[
        'Input and output electrical ratings',
        'Safety and EMC test reports',
        'Efficiency and no-load power data',
        'Bill of materials and RoHS/REACH evidence',
        'Technical documentation',
        'Markings, instructions and declaration'
      ]}
      questions={[
        'What is the rated AC input voltage and DC output?',
        'Is the device an external power supply, battery charger or another type of converter?',
        'What is the maximum output power?',
        'Does the product use USB-C or another interoperable charging interface?',
        'Which equipment is the adapter intended to power?'
      ]}
      faqs={[
        { question: 'Do external power supplies have EU ecodesign requirements?', answer: 'Many in-scope external power supplies are subject to EU ecodesign rules covering efficiency and related performance requirements.' },
        { question: 'Are the power-adapter ecodesign rules changing?', answer: 'Yes. Regulation (EU) 2025/2052 creates a newer framework for external power supplies and certain charging devices, with general application from 14 December 2028.' },
        { question: 'Does a power adapter only need electrical-safety testing?', answer: 'No. EMC, substance restrictions, technical documentation, markings and other product obligations can also be relevant.' }
      ]}
      officialNote={{
        title: 'Ecodesign transition',
        text: 'The Commission lists Regulation (EU) 2019/1782 for current in-scope EPS and Regulation (EU) 2025/2052 as the newer framework applying generally from 14 December 2028.',
        href: 'https://energy-efficient-products.ec.europa.eu/product-list/external-power-supplies_en',
        label: 'European Commission EPS'
      }}
    />
  );
}

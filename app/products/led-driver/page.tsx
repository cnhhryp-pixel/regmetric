import ProductIntentGuide from '../../../components/ProductIntentGuide';

export const metadata = {
  title: 'LED Driver EU Compliance Guide',
  description: 'Explore EU compliance research for LED drivers and separate control gear, including LVD, EMC, RoHS, REACH, WEEE and lighting ecodesign requirements.',
  alternates: { canonical: '/products/led-driver' },
};

export default function LedDriverPage() {
  return (
    <ProductIntentGuide
      slug="led-driver"
      eyebrow="LED Driver Compliance"
      title="LED Driver EU Compliance Guide"
      intro="LED drivers convert and regulate power for light sources and can sit at the intersection of electrical safety, EMC, material, waste and lighting-product requirements. Whether the driver is integrated or separate changes the analysis."
      researchAreas={[
        { name: 'Low Voltage Directive', href: '/regulations/lvd', note: 'Potentially relevant for mains-powered LED drivers within the Directive scope.' },
        { name: 'EMC Directive', href: '/regulations/emc', note: 'Switching power electronics can create emissions and immunity requirements that need finished-product evidence.' },
        { name: 'RoHS', href: '/regulations/rohs', note: 'Review restricted-substance evidence for components, PCB assemblies and housings.' },
        { name: 'REACH', href: '/regulations/reach', note: 'Review material and chemical information across the supply chain.' },
        { name: 'WEEE', href: '/regulations/weee', note: 'Separate electrical control gear can create producer and end-of-life obligations.' },
        { name: 'Lighting ecodesign', note: 'Separate control gear for light sources can fall within lighting-specific ecodesign rules rather than the newer external-power-supply framework.' }
      ]}
      evidence={[
        'Input/output electrical specifications',
        'Safety test evidence',
        'EMC emissions and immunity evidence',
        'Efficiency and standby data where relevant',
        'RoHS / REACH declarations',
        'Labels, technical documentation and declaration'
      ]}
      questions={[
        'Is the LED driver integrated into a luminaire or sold separately?',
        'What are the AC input and DC output characteristics?',
        'Is dimming or smart control functionality included?',
        'Is the driver intended for indoor, outdoor or industrial use?',
        'Which light-source and control-gear ecodesign rules apply to the intended system?'
      ]}
      faqs={[
        { question: 'Is an LED driver the same as an external power supply for ecodesign purposes?', answer: 'Not necessarily. The Commission specifically lists power supplies for light sources, known as separate control gears, outside the scope of Regulation (EU) 2025/2052, so lighting-specific rules should be checked.' },
        { question: 'Can an LED driver need both LVD and EMC assessment?', answer: 'Yes, depending on the product scope and design, electrical-safety and electromagnetic-compatibility requirements can both be relevant.' },
        { question: 'Does selling the driver separately matter?', answer: 'Yes. Separate control gear can have its own product and information obligations that differ from an integrated driver inside a luminaire.' }
      ]}
      officialNote={{
        title: 'Scope note',
        text: 'The Commission states that power supplies for light sources, or separate control gears, are outside the scope of Regulation (EU) 2025/2052.',
        href: 'https://energy-efficient-products.ec.europa.eu/product-list/external-power-supplies/eps-regulation-20252052-new_en',
        label: 'European Commission EPS scope'
      }}
    />
  );
}

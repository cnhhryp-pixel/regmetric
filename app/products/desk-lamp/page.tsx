import ProductIntentGuide from '../../../components/ProductIntentGuide';

export const metadata = {
  title: 'Desk Lamp EU Compliance Guide',
  description: 'Explore EU compliance research for desk lamps and luminaires, including LVD, EMC, RoHS, REACH, WEEE and lighting ecodesign considerations.',
  alternates: { canonical: '/products/desk-lamp' },
};

export default function DeskLampPage() {
  return (
    <ProductIntentGuide
      slug="desk-lamp"
      eyebrow="Desk Lamp Compliance"
      title="Desk Lamp EU Compliance Guide"
      intro="Desk lamps can combine mains or USB power, LED light sources, drivers, touch controls and sometimes wireless functions. The compliance path depends on power architecture, whether the light source is replaceable and the final luminaire design."
      researchAreas={[
        { name: 'Low Voltage Directive', href: '/regulations/lvd', note: 'Potentially relevant for mains-powered lamps and supplied power components.' },
        { name: 'EMC Directive', href: '/regulations/emc', note: 'LED drivers, touch controls and electronic dimmers can create EMC considerations.' },
        { name: 'RoHS', href: '/regulations/rohs', note: 'Review restricted-substance evidence for LEDs, drivers, cables and electronics.' },
        { name: 'REACH', href: '/regulations/reach', note: 'Review plastics, coatings, adhesives and other material information.' },
        { name: 'WEEE', href: '/regulations/weee', note: 'Lighting products can create producer-registration and end-of-life obligations.' },
        { name: 'Lighting ecodesign', note: 'Product classification should determine whether light-source or control-gear ecodesign and energy-labelling requirements are relevant.' }
      ]}
      evidence={[
        'Input power and driver specifications',
        'Electrical safety evidence',
        'EMC test evidence',
        'Light-source / control-gear information',
        'Material declarations',
        'Labels, instructions and declaration documentation'
      ]}
      questions={[
        'Is the lamp mains powered, USB powered or battery powered?',
        'Is the LED light source replaceable?',
        'Is the driver integrated or external?',
        'Are dimming, touch controls or wireless functions included?',
        'Is the lamp sold with an external power adapter?'
      ]}
      faqs={[
        { question: 'Does a desk lamp need lighting ecodesign review?', answer: 'Potentially. The answer depends on whether the product contains or is supplied with an in-scope light source or separate control gear.' },
        { question: 'Should a supplied power adapter be assessed separately?', answer: 'Yes. An external power supply can have its own electrical-safety, EMC, material and ecodesign compliance scope.' },
        { question: 'What if the desk lamp includes wireless charging?', answer: 'Wireless charging can introduce additional EMC and ecodesign considerations beyond the lamp itself.' }
      ]}
    />
  );
}

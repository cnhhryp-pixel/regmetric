import ProductIntentGuide from '../../../components/ProductIntentGuide';

export const metadata = {
  title: 'Hair Dryer EU Compliance Guide',
  description: 'Explore EU compliance research for hair dryers and personal-care electrical appliances, including LVD, EMC, RoHS, REACH and WEEE.',
  alternates: { canonical: '/products/hair-dryer' },
};

export default function HairDryerPage() {
  return (
    <ProductIntentGuide
      slug="hair-dryer"
      eyebrow="Personal Care Appliance Compliance"
      title="Hair Dryer EU Compliance Guide"
      intro="Hair dryers combine mains-voltage heating, airflow, thermal protection and handheld consumer use. Compliance research should connect electrical safety, EMC, materials, thermal protection and instructions."
      researchAreas={[
        { name: 'Low Voltage Directive', href: '/regulations/lvd', note: 'Potentially relevant to mains-voltage electrical safety for the finished appliance.' },
        { name: 'EMC Directive', href: '/regulations/emc', note: 'Motors, switching circuits and controls can create emissions and immunity considerations.' },
        { name: 'RoHS', href: '/regulations/rohs', note: 'Review restricted-substance evidence for electronics, wiring, solder and materials.' },
        { name: 'REACH', href: '/regulations/reach', note: 'Review plastics, coatings, flame-retardant materials and other chemical information.' },
        { name: 'WEEE', href: '/regulations/weee', note: 'Electrical personal-care appliances can create producer and end-of-life obligations.' }
      ]}
      evidence={[
        'Rated voltage and power',
        'Thermal-cutoff and overheating-protection data',
        'Electrical safety test evidence',
        'EMC test evidence',
        'Material declarations',
        'Warnings, instructions and EU declaration'
      ]}
      questions={[
        'What is the rated power and heating-element design?',
        'How is overheating controlled?',
        'Is the appliance intended for bathroom or wet-area use?',
        'Are ionizing or electronic control features included?',
        'Which plug and cord configuration is used for the EU market?'
      ]}
      faqs={[
        { question: 'Is overheating protection important for a hair dryer compliance file?', answer: 'Yes. Heating elements and airflow failure can create foreseeable thermal risks, so protective devices and their evidence are important to the safety case.' },
        { question: 'Can EMC be relevant to a simple hair dryer?', answer: 'Yes. Motors, electronic controls and switching components can create electromagnetic emissions and immunity considerations.' },
        { question: 'Does a hair dryer need WEEE review?', answer: 'It can, because it is electrical equipment; producer-registration and end-of-life obligations should be checked for the markets where it is sold.' }
      ]}
    />
  );
}

import ProductIntentGuide from '../../../components/ProductIntentGuide';

export const metadata = {
  title: 'Electric Kettle EU Compliance Guide',
  description: 'Explore EU compliance research for electric kettles, including LVD, EMC, RoHS, REACH, WEEE and food-contact material considerations.',
  alternates: { canonical: '/products/electric-kettle' },
};

export default function ElectricKettlePage() {
  return (
    <ProductIntentGuide
      slug="electric-kettle"
      eyebrow="Electric Kettle Compliance"
      title="Electric Kettle EU Compliance Guide"
      intro="Electric kettles combine mains-voltage heating, boiling-water hazards, automatic shutoff and food-contact materials. The compliance file should connect electrical safety, thermal controls, materials, labeling and instructions."
      researchAreas={[
        { name: 'Low Voltage Directive', href: '/regulations/lvd', note: 'Potentially relevant for mains-voltage electrical safety depending on the kettle design and ratings.' },
        { name: 'EMC Directive', href: '/regulations/emc', note: 'Electronic temperature controls or switching circuits can create EMC considerations.' },
        { name: 'RoHS', href: '/regulations/rohs', note: 'Review restricted-substance evidence for electrical and electronic components.' },
        { name: 'REACH', href: '/regulations/reach', note: 'Review plastics, seals, coatings and other material information.' },
        { name: 'WEEE', href: '/regulations/weee', note: 'Electrical kettles can create producer-registration and end-of-life obligations.' },
        { name: 'Food-contact materials', note: 'Potentially relevant to the vessel, lid, spout, seals and other parts intended to contact water.' }
      ]}
      evidence={[
        'Rated voltage and power',
        'Boil-dry and over-temperature protection evidence',
        'Electrical safety test reports',
        'Material and food-contact documentation',
        'RoHS / REACH declarations',
        'Warnings, instructions and declaration documentation'
      ]}
      questions={[
        'What heating power and capacity are used?',
        'How does boil-dry protection work?',
        'Which materials contact drinking water?',
        'Is temperature selection or keep-warm functionality included?',
        'Is the kettle cordless with a separate powered base?'
      ]}
      faqs={[
        { question: 'Why is boil-dry protection important?', answer: 'Loss of water can create foreseeable overheating and fire risks, so protective controls and supporting evidence are important to the safety case.' },
        { question: 'Can food-contact rules apply to an electric kettle?', answer: 'Yes. Materials intended to contact drinking water can create additional material-compliance questions beyond electrical requirements.' },
        { question: 'Does a simple kettle need EMC assessment?', answer: 'Potentially, especially where electronic controls or switching circuits are used; product scope should be checked against the applicable EMC requirements.' }
      ]}
    />
  );
}

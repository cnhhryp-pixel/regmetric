import ProductIntentGuide from '../../../components/ProductIntentGuide';

export const metadata = {
  title: 'Electronic Toy EU Compliance Guide',
  description: 'Explore EU compliance research for electronic toys, including CE marking, toy safety, RED where wireless, RoHS, REACH and battery obligations.',
  alternates: { canonical: '/products/electronic-toy' },
};

export default function ElectronicToyPage() {
  return (
    <ProductIntentGuide
      slug="electronic-toy"
      eyebrow="Electronic Toy Compliance"
      title="Electronic Toy EU Compliance Guide"
      intro="Electronic toys combine child-safety considerations with electronics, materials and sometimes batteries or radio functions. The intended age group and exact features determine the final compliance path."
      researchAreas={[
        { name: 'CE Marking', href: '/regulations/ce-marking', note: 'Toy products commonly follow a CE conformity process under applicable toy legislation.' },
        { name: 'GPSR', href: '/regulations/gpsr', note: 'General product-safety and market-surveillance duties can remain relevant depending on the product and risks.' },
        { name: 'REACH', href: '/regulations/reach', note: 'Materials, coatings, plastics and other substances should be reviewed across the supply chain.' },
        { name: 'RoHS', href: '/regulations/rohs', note: 'Potentially relevant for electrical and electronic content in the toy.' },
        { name: 'Radio Equipment Directive', href: '/regulations/red', note: 'Potentially relevant if the toy uses Bluetooth, Wi-Fi, remote radio control or other intentional radio functions.' },
        { name: 'EU Batteries Regulation', href: '/regulations/batteries', note: 'Potentially relevant when batteries are supplied with or built into the toy.' }
      ]}
      evidence={[
        'Age grading and intended use',
        'Toy safety and risk assessment',
        'Mechanical, chemical and electrical test evidence',
        'Battery and radio specifications where applicable',
        'Material and supplier documentation',
        'Warnings, labels and technical documentation'
      ]}
      questions={[
        'What is the intended age range?',
        'Are small parts or accessible batteries present?',
        'Does the toy contain Bluetooth, Wi-Fi or remote-control radio functions?',
        'Can the child access the battery compartment?',
        'Which materials and coatings may contact the child?'
      ]}
      faqs={[
        { question: 'Does adding electronics change toy compliance?', answer: 'Yes. Electronic functions can introduce additional electrical, substance, battery or radio-equipment compliance areas beyond the toy-safety assessment.' },
        { question: 'What if the toy has Bluetooth?', answer: 'Bluetooth functionality can make the Radio Equipment Directive an additional conformity framework for the finished product.' },
        { question: 'Why is age grading important?', answer: 'Age grading affects foreseeable use, hazard analysis, warnings and the safety evidence expected for the toy.' }
      ]}
      officialNote={{
        title: 'Start with product scope',
        text: 'For electronic toys, the toy-specific safety framework should be mapped together with electronics, battery and radio requirements where those features are present.',
        href: 'https://single-market-economy.ec.europa.eu/sectors/toys/toy-safety_en',
        label: 'European Commission toy safety'
      }}
    />
  );
}

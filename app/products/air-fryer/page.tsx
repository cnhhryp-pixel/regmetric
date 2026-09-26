import ProductIntentGuide from '../../../components/ProductIntentGuide';

export const metadata = {
  title: 'Air Fryer EU Compliance Guide',
  description: 'Explore EU compliance research for air fryers, including LVD, EMC, RoHS, REACH, WEEE and food-contact material considerations.',
  alternates: { canonical: '/products/air-fryer' },
};

export default function AirFryerPage() {
  return (
    <ProductIntentGuide
      slug="air-fryer"
      eyebrow="Air Fryer Compliance"
      title="Air Fryer EU Compliance Guide"
      intro="Air fryers combine high-power heating, airflow, electronic controls and food-contact components. Compliance research should connect electrical safety, thermal protection, EMC, materials and food-contact considerations."
      researchAreas={[
        { name: 'Low Voltage Directive', href: '/regulations/lvd', note: 'Potentially relevant to mains-voltage electrical safety depending on the appliance design and ratings.' },
        { name: 'EMC Directive', href: '/regulations/emc', note: 'Fans, switching electronics and digital controls can create emissions and immunity considerations.' },
        { name: 'RoHS', href: '/regulations/rohs', note: 'Review restricted-substance evidence for PCB assemblies, wiring and electronic controls.' },
        { name: 'REACH', href: '/regulations/reach', note: 'Review plastics, coatings, adhesives and other chemical or material information.' },
        { name: 'WEEE', href: '/regulations/weee', note: 'Electrical kitchen appliances can create producer-registration and end-of-life obligations.' },
        { name: 'Food-contact materials', note: 'Potentially relevant to baskets, trays, coatings and other components intended to contact food.' }
      ]}
      evidence={[
        'Rated voltage and power',
        'Heating and thermal-protection design',
        'Electrical safety and EMC test evidence',
        'Food-contact material documentation',
        'RoHS / REACH supplier declarations',
        'Warnings, instructions and declaration documentation'
      ]}
      questions={[
        'What is the maximum heating power and operating temperature?',
        'Which components contact food?',
        'What over-temperature or fan-failure protections are included?',
        'Are non-stick coatings used on baskets or trays?',
        'Does the product include Wi-Fi or app connectivity?'
      ]}
      faqs={[
        { question: 'Can food-contact requirements apply to an air fryer?', answer: 'Yes. Baskets, trays, coatings and other parts intended to contact food can create additional material-compliance questions beyond electrical safety.' },
        { question: 'Does an air fryer need EMC review?', answer: 'It can. Fans, digital controls and switching electronics can create electromagnetic compatibility considerations.' },
        { question: 'What changes if the air fryer has Wi-Fi?', answer: 'Intentional radio functionality can introduce the Radio Equipment Directive in addition to the appliance requirements.' }
      ]}
    />
  );
}

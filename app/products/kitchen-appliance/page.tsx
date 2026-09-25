import ProductIntentGuide from '../../../components/ProductIntentGuide';

export const metadata = {
  title: 'Kitchen Appliance EU Compliance Guide',
  description: 'Explore EU compliance research for small kitchen appliances, including LVD, EMC, RoHS, REACH, WEEE and product-specific requirements.',
  alternates: { canonical: '/products/kitchen-appliance' },
};

export default function KitchenAppliancePage() {
  return (
    <ProductIntentGuide
      slug="kitchen-appliance"
      eyebrow="Kitchen Appliance Compliance"
      title="Kitchen Appliance EU Compliance Guide"
      intro="Small kitchen appliances can combine mains-voltage electrical safety, heating, motors, moving parts and food-contact materials. The compliance path depends on the exact appliance type and its intended use."
      researchAreas={[
        { name: 'Low Voltage Directive', href: '/regulations/lvd', note: 'Potentially relevant for mains-powered electrical safety depending on the appliance design and ratings.' },
        { name: 'EMC Directive', href: '/regulations/emc', note: 'Motors, electronic controls, relays and switching circuits can create EMC considerations.' },
        { name: 'RoHS', href: '/regulations/rohs', note: 'Review restricted-substance evidence for electrical and electronic assemblies.' },
        { name: 'REACH', href: '/regulations/reach', note: 'Review plastics, coatings, seals, adhesives and other chemical or material information.' },
        { name: 'WEEE', href: '/regulations/weee', note: 'Electrical kitchen appliances can create producer-registration and end-of-life obligations.' },
        { name: 'Food-contact requirements', note: 'Potentially relevant when materials or components are intended to contact food or beverages.' }
      ]}
      evidence={[
        'Rated voltage and power',
        'Heating / motor specifications',
        'Electrical safety test evidence',
        'EMC test evidence',
        'Food-contact material information where relevant',
        'Instructions, warnings and declaration documentation'
      ]}
      questions={[
        'Does the appliance heat, cut, blend or pressurize?',
        'Which parts contact food or beverages?',
        'Are hot surfaces accessible during normal use?',
        'Does the product use a motor, heater or electronic controller?',
        'Is the product intended only for household use?'
      ]}
      faqs={[
        { question: 'Can food-contact requirements apply to kitchen appliances?', answer: 'Yes. Materials or components intended to contact food can create additional compliance questions beyond electrical and EMC requirements.' },
        { question: 'Do all kitchen appliances have the same compliance route?', answer: 'No. A blender, kettle, coffee machine and air fryer have different hazards and product characteristics, so the exact product should be scoped before testing.' },
        { question: 'Does WEEE apply to small kitchen appliances?', answer: 'It can. Electrical and electronic appliances can create producer-registration, reporting and end-of-life obligations in EU markets.' }
      ]}
    />
  );
}

import ProductIntentGuide from '../../../components/ProductIntentGuide';

export const metadata = {
  title: 'LED Light EU Compliance Guide',
  description: 'Explore EU compliance research for LED lights and light sources, including LVD, EMC, RoHS, REACH, WEEE, ecodesign and energy labelling.',
  alternates: { canonical: '/products/led-light' },
};

export default function LEDLightPage() {
  return (
    <ProductIntentGuide
      slug="led-light"
      eyebrow="LED Lighting Compliance"
      title="LED Light EU Compliance Guide"
      intro="LED lighting products can combine electrical safety, EMC, substance, waste, ecodesign and energy-labelling requirements. Product architecture and whether the item is a light source, luminaire or separate control gear matter."
      researchAreas={[
        { name: 'Low Voltage Directive', href: '/regulations/lvd', note: 'Potentially relevant to electrical-safety conformity depending on the product and voltage characteristics.' },
        { name: 'EMC Directive', href: '/regulations/emc', note: 'LED drivers and electronics can create emissions and immunity considerations.' },
        { name: 'RoHS', href: '/regulations/rohs', note: 'Review restricted-substance evidence for electronic and material content.' },
        { name: 'REACH', href: '/regulations/reach', note: 'Check materials, coatings, plastics, adhesives and other chemical information.' },
        { name: 'WEEE', href: '/regulations/weee', note: 'Lighting products can create electrical-equipment producer and end-of-life duties.' },
        { name: 'Ecodesign & energy labelling', note: 'In-scope light sources and separate control gears can be subject to Regulation (EU) 2019/2020 and related energy-labelling rules.' }
      ]}
      evidence={[
        'Photometric and electrical specifications',
        'Electrical safety evidence',
        'EMC test evidence',
        'Energy-performance data',
        'Material declarations',
        'Labels, technical documentation and declarations'
      ]}
      questions={[
        'Is the product a light source, luminaire or separate control gear?',
        'What are the input voltage and driver architecture?',
        'Is the light source replaceable?',
        'Does the product include smart or wireless functionality?',
        'Is an EU energy label or EPREL-related workflow relevant to the product type?'
      ]}
      faqs={[
        { question: 'Do LED light sources have EU ecodesign requirements?', answer: 'In-scope light sources and separate control gears are covered by EU ecodesign requirements, including Regulation (EU) 2019/2020.' },
        { question: 'Can an LED product also need energy labelling?', answer: 'Certain in-scope light sources are subject to EU energy-labelling rules, so product classification should be checked before artwork and listing data are finalized.' },
        { question: 'What if an LED light also has Bluetooth or Wi-Fi?', answer: 'Wireless functionality can introduce the Radio Equipment Directive in addition to lighting, material and environmental requirements.' }
      ]}
      officialNote={{
        title: 'Lighting rules',
        text: 'EU ecodesign and energy-labelling rules apply to in-scope light sources and related products, with classification depending on the product design.',
        href: 'https://energy-efficient-products.ec.europa.eu/sample-product-page_en',
        label: 'European Commission lighting'
      }}
    />
  );
}

import ProductIntentGuide from '../../../components/ProductIntentGuide';

export const metadata = {
  title: 'Power Bank EU Compliance Guide',
  description: 'Explore EU compliance research for power banks and portable battery packs, including Batteries Regulation, RoHS, REACH and WEEE.',
  alternates: { canonical: '/products/power-bank' },
};

export default function PowerBankPage() {
  return (
    <ProductIntentGuide
      slug="power-bank"
      eyebrow="Portable Battery Compliance"
      title="Power Bank EU Compliance Guide"
      intro="Power banks combine rechargeable battery cells, battery-management electronics, charging interfaces and an enclosure. Compliance work should separate the battery requirements from the finished electronic product requirements."
      researchAreas={[
        { name: 'EU Batteries Regulation', href: '/regulations/batteries', note: 'Battery classification, product information, lifecycle and waste obligations are central to the compliance review.' },
        { name: 'RoHS', href: '/regulations/rohs', note: 'Review restricted-substance evidence for the PCB, connectors, solder and other electronic components.' },
        { name: 'REACH', href: '/regulations/reach', note: 'Review enclosure materials, coatings, adhesives and other chemical information.' },
        { name: 'WEEE', href: '/regulations/weee', note: 'The electronic power-bank product can create producer, registration and end-of-life obligations.' },
        { name: 'Product safety', href: '/regulations/gpsr', note: 'General product-safety considerations may remain relevant depending on the product and risks not fully covered elsewhere.' }
      ]}
      evidence={[
        'Cell and pack specifications',
        'Battery-management-system information',
        'Battery safety test evidence',
        'USB charging and output specifications',
        'Material declarations',
        'Labels, instructions and technical documentation'
      ]}
      questions={[
        'What battery chemistry and rated capacity are used?',
        'Are the cells removable or permanently integrated?',
        'Which input and output charging protocols are supported?',
        'Does the power bank include wireless charging functionality?',
        'What safeguards exist for overcharge, short circuit and thermal events?'
      ]}
      faqs={[
        { question: 'Is a power bank only regulated as a battery?', answer: 'No. The battery itself has battery-specific obligations, while the complete power bank also contains electronics and can trigger separate product-level requirements.' },
        { question: 'Does a power bank need WEEE review?', answer: 'A power bank is electrical/electronic equipment, so producer-registration and waste-electronics obligations should be checked for the EU markets where it is sold.' },
        { question: 'What changes if the power bank includes wireless charging?', answer: 'Wireless charging can introduce additional EMC and future ecodesign considerations beyond the battery and electronic-product requirements.' }
      ]}
      officialNote={{
        title: 'Battery framework',
        text: 'Regulation (EU) 2023/1542 is the current EU framework for batteries and waste batteries, with requirements phased in over time.',
        href: 'https://environment.ec.europa.eu/topics/waste-and-recycling/batteries_en',
        label: 'European Commission batteries'
      }}
    />
  );
}

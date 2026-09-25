import ProductIntentGuide from '../../../components/ProductIntentGuide';

export const metadata = {
  title: 'Electric Power Tool EU Compliance Guide',
  description: 'Explore EU compliance research for drills, grinders, saws and other electric power tools, including machinery, EMC, RoHS, REACH, WEEE and battery requirements.',
  alternates: { canonical: '/products/electric-power-tool' },
};

export default function ElectricPowerToolPage() {
  return (
    <ProductIntentGuide
      slug="electric-power-tool"
      eyebrow="Power Tool Compliance"
      title="Electric Power Tool EU Compliance Guide"
      intro="Electric power tools combine machinery hazards, electrical systems, motors, moving parts and sometimes rechargeable batteries. Product classification, intended use, guarding, vibration, noise and battery design can all affect the compliance path."
      researchAreas={[
        { name: 'EU machinery framework', href: '/regulations/machinery-regulation', note: 'Power tools should be reviewed against the applicable machinery framework and the transition to Regulation (EU) 2023/1230.' },
        { name: 'EMC Directive', href: '/regulations/emc', note: 'Motors, electronics and speed controls can create emissions and immunity considerations.' },
        { name: 'RoHS', href: '/regulations/rohs', note: 'Review restricted-substance evidence for electrical and electronic components.' },
        { name: 'REACH', href: '/regulations/reach', note: 'Review plastics, coatings, lubricants and other material or chemical information.' },
        { name: 'WEEE', href: '/regulations/weee', note: 'Electrical tools can create producer-registration and end-of-life obligations.' },
        { name: 'EU Batteries Regulation', href: '/regulations/batteries', note: 'Potentially relevant for cordless tools and supplied rechargeable battery packs.' }
      ]}
      evidence={[
        'Intended-use and product classification',
        'Machine risk assessment',
        'Guarding and safety-function evidence',
        'Electrical and EMC test evidence',
        'Battery-pack evidence for cordless tools',
        'Instructions, warnings and declaration documentation'
      ]}
      questions={[
        'Is the tool corded or cordless?',
        'What rotating, cutting or impact hazards are present?',
        'Which guards and interlocks are used?',
        'Are vibration and noise significant for intended use?',
        'Is a battery pack and charger supplied with the tool?'
      ]}
      faqs={[
        { question: 'Do cordless power tools need battery compliance review?', answer: 'Yes. The battery pack and charging system can introduce additional battery and charger obligations beyond the machine-level compliance work.' },
        { question: 'Why is a risk assessment central for power tools?', answer: 'Power tools can create mechanical, electrical, thermal, vibration and noise hazards, so the product risk assessment helps connect those hazards to protective measures and evidence.' },
        { question: 'Should the charger be assessed separately?', answer: 'Yes. A supplied charger or external power supply can have its own electrical-safety, EMC, substance and ecodesign requirements.' }
      ]}
      officialNote={{
        title: 'Machinery transition',
        text: 'Regulation (EU) 2023/1230 generally applies from 20 January 2027, so products launching around the transition should be planned against the correct machinery framework.',
        href: 'https://eur-lex.europa.eu/eli/reg/2023/1230/en',
        label: 'EUR-Lex Machinery Regulation'
      }}
    />
  );
}

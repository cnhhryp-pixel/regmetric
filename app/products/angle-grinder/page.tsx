import ProductIntentGuide from '../../../components/ProductIntentGuide';

export const metadata = {
  title: 'Angle Grinder EU Compliance Guide',
  description: 'Explore EU compliance research for angle grinders, including machinery, EMC, RoHS, REACH, WEEE and battery requirements for cordless models.',
  alternates: { canonical: '/products/angle-grinder' },
};

export default function AngleGrinderPage() {
  return (
    <ProductIntentGuide
      slug="angle-grinder"
      eyebrow="Angle Grinder Compliance"
      title="Angle Grinder EU Compliance Guide"
      intro="Angle grinders create high-energy rotating hazards and can be corded or cordless. Guarding, wheel compatibility, speed control, side-handle design, vibration and battery configuration can all affect the compliance case."
      researchAreas={[
        { name: 'EU machinery framework', href: '/regulations/machinery-regulation', note: 'Review rotating-tool hazards, guarding, intended use and the applicable machinery conformity pathway.' },
        { name: 'EMC Directive', href: '/regulations/emc', note: 'Motor and electronic speed-control systems can create electromagnetic compatibility considerations.' },
        { name: 'RoHS', href: '/regulations/rohs', note: 'Review restricted substances in electronic controls, wiring and other components.' },
        { name: 'REACH', href: '/regulations/reach', note: 'Review plastics, rubber, coatings, lubricants and other material information.' },
        { name: 'WEEE', href: '/regulations/weee', note: 'Electrical grinders can create producer-registration and end-of-life obligations.' },
        { name: 'EU Batteries Regulation', href: '/regulations/batteries', note: 'Potentially relevant for cordless models and supplied battery packs.' }
      ]}
      evidence={[
        'Machine risk assessment',
        'Rated speed and compatible wheel specification',
        'Guard and side-handle design evidence',
        'Vibration / noise evidence where relevant',
        'Battery and charger evidence for cordless models',
        'Instructions, warnings and declaration documentation'
      ]}
      questions={[
        'What wheel diameters and maximum speeds are allowed?',
        'How is the guard retained and adjusted?',
        'Is restart protection or electronic braking included?',
        'Is the tool corded or cordless?',
        'Which vibration and noise characteristics are relevant to intended use?'
      ]}
      faqs={[
        { question: 'Why is wheel-speed compatibility important?', answer: 'A grinding wheel must be compatible with the tool speed and intended application; incorrect combinations can create serious mechanical hazards.' },
        { question: 'Do cordless grinders create extra compliance work?', answer: 'Yes. Battery packs and chargers add battery, charging and separate electrical-product compliance questions.' },
        { question: 'Is guarding a central part of the conformity file?', answer: 'Yes. Guard design and foreseeable access to the rotating wheel are key elements of the product risk assessment.' }
      ]}
    />
  );
}

import ProductIntentGuide from '../../../components/ProductIntentGuide';

export const metadata = {
  title: 'Wi-Fi Camera EU Compliance Guide',
  description: 'Explore EU compliance research for Wi-Fi cameras and connected security cameras, including RED, RoHS, REACH and WEEE.',
  alternates: { canonical: '/products/wifi-camera' },
};

export default function WifiCameraPage() {
  return (
    <ProductIntentGuide
      slug="wifi-camera"
      eyebrow="Connected Camera Compliance"
      title="Wi-Fi Camera EU Compliance Guide"
      intro="Wi-Fi cameras combine radio functions, imaging electronics, power systems and network connectivity. The final compliance path depends on radio technologies, power architecture, intended environment and the complete finished-product design."
      researchAreas={[
        { name: 'Radio Equipment Directive (RED)', href: '/regulations/red', note: 'Wi-Fi, Bluetooth or cellular radio functions make RED a primary conformity framework.' },
        { name: 'RoHS', href: '/regulations/rohs', note: 'Review restricted-substance evidence for camera electronics, PCB assemblies, cables and components.' },
        { name: 'REACH', href: '/regulations/reach', note: 'Review housings, coatings, adhesives and other material or chemical information.' },
        { name: 'WEEE', href: '/regulations/weee', note: 'Connected cameras can create producer-registration, reporting and recycling obligations.' },
        { name: 'Power-supply compliance', href: '/products/power-adapter', note: 'If an external power adapter is supplied, assess the adapter as its own regulated product as well.' }
      ]}
      evidence={[
        'Radio and antenna specifications',
        'Finished-product RED test evidence',
        'Power-input and adapter specifications',
        'Environmental / ingress-protection information where relevant',
        'Material declarations',
        'Technical documentation, labels and EU declaration'
      ]}
      questions={[
        'Which Wi-Fi bands and other radios are enabled?',
        'Is the camera battery powered, mains powered or PoE powered?',
        'Is the product intended for indoor or outdoor installation?',
        'Is an external power adapter included?',
        'Does the same hardware use different firmware or radio settings by market?'
      ]}
      faqs={[
        { question: 'Does a Wi-Fi security camera fall under RED?', answer: 'A camera with intentional Wi-Fi or other radio functionality can fall within the Radio Equipment Directive, depending on the exact product design.' },
        { question: 'Does the included power adapter need separate compliance evidence?', answer: 'Yes. A bundled external power supply can have its own electrical-safety, EMC, substance and ecodesign compliance scope.' },
        { question: 'Does outdoor use change the compliance review?', answer: 'It can. Environmental exposure, enclosure design, installation method and intended-use instructions can change the safety and evidence requirements.' }
      ]}
      officialNote={{
        title: 'Radio framework',
        text: 'Directive 2014/53/EU is the core EU framework to review for Wi-Fi radio equipment.',
        href: 'https://eur-lex.europa.eu/eli/dir/2014/53/oj',
        label: 'EUR-Lex RED'
      }}
    />
  );
}

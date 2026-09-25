import ProductIntentGuide from '../../../components/ProductIntentGuide';

export const metadata = {
  title: 'Smart Plug EU Compliance Guide',
  description: 'Explore EU compliance research for smart plugs and connected sockets, including RED, LVD, RoHS, REACH and WEEE.',
  alternates: { canonical: '/products/smart-plug' },
};

export default function SmartPlugPage() {
  return (
    <ProductIntentGuide
      slug="smart-plug"
      eyebrow="Connected Home Compliance"
      title="Smart Plug EU Compliance Guide"
      intro="Smart plugs combine mains-voltage electrical safety with radio connectivity, electronics and consumer-product use. The final compliance scope depends on switching design, load rating, radio technology and intended use."
      researchAreas={[
        { name: 'Radio Equipment Directive (RED)', href: '/regulations/red', note: 'Wi-Fi, Bluetooth, Zigbee or other intentional radio functions make RED a primary research path.' },
        { name: 'Low Voltage Directive', href: '/regulations/lvd', note: 'Mains-voltage electrical safety should be reviewed against the exact product design and ratings.' },
        { name: 'RoHS', href: '/regulations/rohs', note: 'Review restricted-substance evidence for PCB assemblies, relays, solder, cables and housings.' },
        { name: 'REACH', href: '/regulations/reach', note: 'Review plastics, flame-retardant materials, coatings and other chemical information.' },
        { name: 'WEEE', href: '/regulations/weee', note: 'Connected sockets can create producer-registration, reporting and end-of-life obligations.' }
      ]}
      evidence={[
        'Rated voltage, current and load specification',
        'Radio module and antenna specification',
        'Electrical safety and RED test evidence',
        'Relay and thermal-protection information',
        'Material declarations',
        'Labels, instructions and EU declaration'
      ]}
      questions={[
        'Which radio technologies are enabled?',
        'What is the maximum rated load and switching current?',
        'Is the product intended for indoor or outdoor use?',
        'Does the design include overload or over-temperature protection?',
        'Is energy-monitoring functionality included?'
      ]}
      faqs={[
        { question: 'Does a Wi-Fi smart plug fall under RED?', answer: 'A smart plug that intentionally uses Wi-Fi, Bluetooth or another radio technology can fall within the Radio Equipment Directive, depending on the final product configuration.' },
        { question: 'Does RED replace electrical-safety assessment?', answer: 'No. Radio conformity does not remove the need to assess mains-voltage safety and the other applicable product requirements.' },
        { question: 'Should the switching relay be part of the compliance review?', answer: 'Yes. Relay rating, heating, endurance and protective design can be important to the finished-product safety case.' }
      ]}
      officialNote={{
        title: 'Wireless framework',
        text: 'Directive 2014/53/EU is the core EU radio-equipment framework to investigate for connected smart plugs.',
        href: 'https://eur-lex.europa.eu/eli/dir/2014/53/oj',
        label: 'EUR-Lex RED'
      }}
    />
  );
}

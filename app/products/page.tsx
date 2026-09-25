import { BreadcrumbSchema } from '../../components/SeoSchemas';

export const metadata = {
  title: 'Product Compliance Guides',
  description: 'Browse EU product compliance guides for electronics, toys, machinery, automotive components, Bluetooth speakers, power adapters, LED lights and battery-powered devices.',
  alternates: { canonical: '/products' },
};

const guides = [
  {
    name: 'Electronics',
    href: '/products/electronics',
    text: 'Electronics, electrical equipment and connected devices.',
    tags: 'CE · RoHS · REACH · Product Safety'
  },
  {
    name: 'Bluetooth Speaker',
    href: '/products/bluetooth-speaker',
    text: 'Bluetooth speakers and other radio-enabled audio products.',
    tags: 'RED · RoHS · REACH · Batteries · WEEE'
  },
  {
    name: 'Bluetooth Headphones',
    href: '/products/bluetooth-headphones',
    text: 'Wireless headphones, earbuds and charging cases.',
    tags: 'RED · Batteries · RoHS · REACH · WEEE'
  },
  {
    name: 'Smartwatch',
    href: '/products/smartwatch',
    text: 'Wearable electronics with Bluetooth, Wi-Fi, NFC or cellular functions.',
    tags: 'RED · Batteries · RoHS · REACH · WEEE'
  },
  {
    name: 'Smart Plug',
    href: '/products/smart-plug',
    text: 'Connected sockets with Wi-Fi, Bluetooth or Zigbee control.',
    tags: 'RED · LVD · RoHS · REACH · WEEE'
  },
  {
    name: 'Wi-Fi Camera',
    href: '/products/wifi-camera',
    text: 'Connected indoor and outdoor security cameras.',
    tags: 'RED · RoHS · REACH · WEEE · Power Supply'
  },
  {
    name: 'Power Adapter',
    href: '/products/power-adapter',
    text: 'External power supplies, chargers and AC/DC adapters.',
    tags: 'LVD · EMC · RoHS · WEEE · Ecodesign'
  },
  {
    name: 'USB Charger',
    href: '/products/usb-charger',
    text: 'USB and USB-C chargers, external power supplies and charging devices.',
    tags: 'LVD · EMC · RoHS · WEEE · Ecodesign'
  },
  {
    name: 'Wireless Charger',
    href: '/products/wireless-charger',
    text: 'Wireless charging pads and charging stands.',
    tags: 'EMC · RoHS · REACH · WEEE · Ecodesign'
  },
  {
    name: 'LED Light',
    href: '/products/led-light',
    text: 'LED light sources, luminaires and related control gear.',
    tags: 'LVD · EMC · RoHS · WEEE · Ecodesign'
  },
  {
    name: 'LED Driver',
    href: '/products/led-driver',
    text: 'LED drivers and separate control gear for lighting products.',
    tags: 'LVD · EMC · RoHS · REACH · Lighting Ecodesign'
  },
  {
    name: 'Battery-Powered Device',
    href: '/products/battery-powered-device',
    text: 'Portable electronics and devices containing rechargeable or replaceable batteries.',
    tags: 'Batteries · RoHS · REACH · WEEE · RED'
  },
  {
    name: 'Power Bank',
    href: '/products/power-bank',
    text: 'Portable rechargeable battery packs and USB power banks.',
    tags: 'Batteries · RoHS · REACH · WEEE · Product Safety'
  },
  {
    name: 'Electronic Toy',
    href: '/products/electronic-toy',
    text: 'Electronic and connected toys with battery or radio features.',
    tags: 'CE · Toy Safety · RED · RoHS · Batteries'
  },
  {
    name: 'Portable Fan',
    href: '/products/portable-fan',
    text: 'USB, rechargeable and connected portable fans.',
    tags: 'Batteries · RoHS · REACH · WEEE · RED'
  },
  {
    name: 'Hair Dryer',
    href: '/products/hair-dryer',
    text: 'Mains-powered personal-care appliances with heating and motors.',
    tags: 'LVD · EMC · RoHS · REACH · WEEE'
  },
  {
    name: 'Kitchen Appliance',
    href: '/products/kitchen-appliance',
    text: 'Small household kitchen appliances with motors or heating.',
    tags: 'LVD · EMC · RoHS · REACH · WEEE'
  },
  {
    name: 'Electric Power Tool',
    href: '/products/electric-power-tool',
    text: 'Corded and cordless drills, grinders, saws and other power tools.',
    tags: 'Machinery · EMC · RoHS · Batteries · WEEE'
  },
  {
    name: 'Toys',
    href: '/products/toys',
    text: 'Toy safety, conformity, testing and technical documentation.',
    tags: 'CE · GPSR · REACH'
  },
  {
    name: 'Machinery',
    href: '/products/machinery',
    text: 'Industrial machinery, risk assessment and conformity evidence.',
    tags: 'CE · Machinery · REACH'
  },
  {
    name: 'Automotive Components',
    href: '/products/automotive',
    text: 'Automotive parts, material information and sector-specific research.',
    tags: 'REACH · Materials · Approvals'
  }
];

export default function ProductsPage() {
  return (
    <main>
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Products', path: '/products' }]} />
      <section className="page-hero">
        <div className="container narrow">
          <span className="pill">Product Compliance Guides</span>
          <h1>Start compliance research with the product you actually sell.</h1>
          <p>
            Browse product-focused guides that connect common EU compliance
            topics, evidence and next-step questions.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="card-grid industry-grid">
          {guides.map((guide) => (
            <a className="card interactive-card" href={guide.href} key={guide.name}>
              <span className="card-badge">Product Guide</span>
              <h2>{guide.name}</h2>
              <p>{guide.text}</p>
              <div className="meta-line">{guide.tags}</div>
              <span className="card-link">Open guide →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Need another category?</span>
              <h2>Use Compliance Search or start from an industry.</h2>
            </div>
            <p>
              Additional product categories can be researched through industry
              guides and the preliminary assessment workflow.
            </p>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="/search">Compliance Search</a>
            <a className="button button-secondary" href="/industries">Browse Industries</a>
            <a className="button button-secondary" href="/assessment">Start Assessment</a>
          </div>
        </div>
      </section>
    </main>
  );
}

'use client';

import { useMemo, useState } from 'react';

type SearchItem = {
  title: string;
  type: 'Regulation' | 'Industry' | 'Product Guide';
  description: string;
  href: string;
  keywords: string[];
  aliases?: string[];
  priority?: number;
};

const items: SearchItem[] = [
  {
    title: 'GPSR',
    type: 'Regulation',
    description: 'General Product Safety Regulation guidance for consumer products sold in the EU.',
    href: '/regulations/gpsr',
    keywords: ['general product safety', 'consumer products', 'safety', 'eu', 'marketplace', 'traceability'],
    aliases: ['general product safety regulation', 'product safety'],
    priority: 10
  },
  {
    title: 'CE Marking',
    type: 'Regulation',
    description: 'Conformity and market-access guidance for products that fall within CE-marking legislation.',
    href: '/regulations/ce-marking',
    keywords: ['ce', 'conformity', 'electronics', 'machinery', 'toys', 'eu', 'declaration'],
    aliases: ['ce mark', 'ce certification', 'ce conformity'],
    priority: 10
  },
  {
    title: 'RoHS',
    type: 'Regulation',
    description: 'Restricted-substance requirements relevant to many electrical and electronic products.',
    href: '/regulations/rohs',
    keywords: ['electronics', 'electrical', 'hazardous substances', 'materials', 'components', 'restricted substances'],
    aliases: ['restriction of hazardous substances'],
    priority: 9
  },
  {
    title: 'REACH',
    type: 'Regulation',
    description: 'Chemical substance and supply-chain information requirements for products and materials.',
    href: '/regulations/reach',
    keywords: ['chemicals', 'materials', 'svhc', 'substances', 'supply chain', 'chemical compliance'],
    aliases: ['reach regulation'],
    priority: 9
  },
  {
    title: 'EMC',
    type: 'Regulation',
    description: 'Electromagnetic compatibility requirements for electrical and electronic equipment.',
    href: '/regulations/emc',
    keywords: ['electromagnetic compatibility', 'emissions', 'immunity', 'electronics', 'interference'],
    aliases: ['emc directive', '2014/30/eu'],
    priority: 9
  },
  {
    title: 'Low Voltage Directive',
    type: 'Regulation',
    description: 'Electrical safety requirements for equipment in scope of Directive 2014/35/EU.',
    href: '/regulations/lvd',
    keywords: ['lvd', 'electrical safety', 'low voltage', 'electronics', '2014/35/eu'],
    aliases: ['lvd', 'low voltage directive'],
    priority: 9
  },
  {
    title: 'WEEE',
    type: 'Regulation',
    description: 'Waste electrical and electronic equipment producer, reporting and recycling obligations.',
    href: '/regulations/weee',
    keywords: ['weee', 'e waste', 'recycling', 'producer registration', 'electrical waste'],
    aliases: ['waste electrical electronic equipment'],
    priority: 8
  },
  {
    title: 'EU Batteries Regulation',
    type: 'Regulation',
    description: 'Battery safety, sustainability, information and end-of-life compliance research.',
    href: '/regulations/batteries',
    keywords: ['battery', 'batteries', '2023/1542', 'battery passport', 'waste batteries'],
    aliases: ['batteries regulation', 'eu battery regulation'],
    priority: 9
  },
  {
    title: 'Machinery Regulation',
    type: 'Regulation',
    description: 'Transition planning and conformity research for Regulation (EU) 2023/1230.',
    href: '/regulations/machinery-regulation',
    keywords: ['machinery regulation', '2023/1230', 'machine safety', '2027'],
    aliases: ['eu machinery regulation'],
    priority: 9
  },
  {
    title: 'Radio Equipment Directive',
    type: 'Regulation',
    description: 'EU radio-equipment requirements for Bluetooth, Wi-Fi and other intentional radio functions.',
    href: '/regulations/red',
    keywords: ['red', 'radio equipment directive', 'bluetooth', 'wifi', 'wireless', 'radio', '2014/53/eu'],
    aliases: ['red directive', 'radio equipment'],
    priority: 10
  },
  {
    title: 'Electronics',
    type: 'Industry',
    description: 'Explore common compliance areas for connected devices and electrical products.',
    href: '/industries/electronics',
    keywords: ['bluetooth', 'speaker', 'charger', 'adapter', 'device', 'electrical', 'electronics', 'wireless', 'battery device'],
    aliases: ['electrical products', 'connected device'],
    priority: 8
  },
  {
    title: 'Toys',
    type: 'Industry',
    description: 'Explore safety, conformity, testing and documentation considerations for toys.',
    href: '/industries/toys',
    keywords: ['children', 'kids', 'toy', 'play', 'small parts', 'age grading', 'safety'],
    aliases: ['children toys', 'kids toys'],
    priority: 8
  },
  {
    title: 'Machinery',
    type: 'Industry',
    description: 'Explore conformity, safety and technical-documentation topics for machinery.',
    href: '/industries/machinery',
    keywords: ['machine', 'industrial', 'equipment', 'factory', 'mechanical', 'production line'],
    aliases: ['industrial machine', 'industrial equipment'],
    priority: 8
  },
  {
    title: 'Automotive',
    type: 'Industry',
    description: 'Explore product compliance research paths for automotive parts and suppliers.',
    href: '/industries/automotive',
    keywords: ['car', 'vehicle', 'auto', 'parts', 'automotive', 'component'],
    aliases: ['car parts', 'vehicle parts'],
    priority: 7
  },
  {
    title: 'Medical Devices',
    type: 'Industry',
    description: 'Start regulatory research for healthcare and medical-device products.',
    href: '/industries/medical-devices',
    keywords: ['medical', 'healthcare', 'device', 'hospital', 'clinic', 'classification'],
    aliases: ['medical device', 'healthcare device'],
    priority: 7
  },
  {
    title: 'Consumer Products',
    type: 'Industry',
    description: 'Explore general product safety and material-compliance topics for consumer goods.',
    href: '/industries/consumer-products',
    keywords: ['consumer', 'household', 'general goods', 'retail', 'product safety', 'home products'],
    aliases: ['consumer goods', 'household products'],
    priority: 7
  },
  {
    title: 'Bluetooth Speaker EU Compliance',
    type: 'Product Guide',
    description: 'Product-specific EU compliance research for Bluetooth speakers and wireless audio devices.',
    href: '/products/bluetooth-speaker',
    keywords: ['bluetooth speaker', 'wireless speaker', 'speaker compliance', 'red', 'battery speaker'],
    aliases: ['bluetooth speaker compliance', 'wireless speaker compliance'],
    priority: 10
  },
  {
    title: 'Bluetooth Headphones EU Compliance',
    type: 'Product Guide',
    description: 'EU compliance research for Bluetooth headphones, earbuds and charging cases.',
    href: '/products/bluetooth-headphones',
    keywords: ['bluetooth headphones', 'wireless earbuds', 'earbuds', 'headset', 'charging case'],
    aliases: ['bluetooth earbuds compliance', 'wireless headphones compliance'],
    priority: 10
  },
  {
    title: 'Smartwatch EU Compliance',
    type: 'Product Guide',
    description: 'EU compliance research for smartwatches and wearable devices.',
    href: '/products/smartwatch',
    keywords: ['smartwatch', 'smart watch', 'wearable', 'fitness watch', 'bluetooth watch'],
    aliases: ['smartwatch compliance', 'wearable compliance'],
    priority: 10
  },
  {
    title: 'Smart Plug EU Compliance',
    type: 'Product Guide',
    description: 'EU compliance research for Wi-Fi, Bluetooth and Zigbee smart plugs.',
    href: '/products/smart-plug',
    keywords: ['smart plug', 'wifi plug', 'connected socket', 'zigbee plug'],
    aliases: ['smart plug compliance'],
    priority: 10
  },
  {
    title: 'Wi-Fi Camera EU Compliance',
    type: 'Product Guide',
    description: 'EU compliance research for Wi-Fi and connected security cameras.',
    href: '/products/wifi-camera',
    keywords: ['wifi camera', 'wi-fi camera', 'security camera', 'ip camera', 'connected camera'],
    aliases: ['wifi camera compliance', 'security camera compliance'],
    priority: 10
  },
  {
    title: 'Power Adapter EU Compliance',
    type: 'Product Guide',
    description: 'EU compliance research for external power supplies, chargers and power adapters.',
    href: '/products/power-adapter',
    keywords: ['power adapter', 'power supply', 'external power supply', 'charger', 'ac dc adapter'],
    aliases: ['adapter compliance', 'charger compliance'],
    priority: 9
  },
  {
    title: 'USB Charger EU Compliance',
    type: 'Product Guide',
    description: 'EU compliance research for USB and USB-C chargers and external power supplies.',
    href: '/products/usb-charger',
    keywords: ['usb charger', 'usb c charger', 'usb-c charger', 'pd charger', 'gan charger'],
    aliases: ['usb charger compliance', 'usb c charger compliance'],
    priority: 10
  },
  {
    title: 'Wireless Charger EU Compliance',
    type: 'Product Guide',
    description: 'EU compliance research for wireless charging pads and stands.',
    href: '/products/wireless-charger',
    keywords: ['wireless charger', 'wireless charging pad', 'qi charger', 'charging stand'],
    aliases: ['wireless charger compliance'],
    priority: 10
  },
  {
    title: 'LED Light EU Compliance',
    type: 'Product Guide',
    description: 'EU compliance research for LED lights, light sources, luminaires and control gear.',
    href: '/products/led-light',
    keywords: ['led light', 'led lamp', 'lighting', 'luminaire', 'light source'],
    aliases: ['led compliance', 'led lamp compliance'],
    priority: 9
  },
  {
    title: 'LED Driver EU Compliance',
    type: 'Product Guide',
    description: 'EU compliance research for LED drivers and separate lighting control gear.',
    href: '/products/led-driver',
    keywords: ['led driver', 'lighting driver', 'constant current driver', 'led power supply'],
    aliases: ['led driver compliance'],
    priority: 9
  },
  {
    title: 'Battery-Powered Product EU Compliance',
    type: 'Product Guide',
    description: 'EU compliance research for devices containing rechargeable or replaceable batteries.',
    href: '/products/battery-powered-device',
    keywords: ['battery powered device', 'battery product', 'rechargeable device', 'portable electronics'],
    aliases: ['battery device compliance', 'battery product compliance'],
    priority: 9
  },
  {
    title: 'Power Bank EU Compliance',
    type: 'Product Guide',
    description: 'EU compliance research for portable rechargeable battery packs and power banks.',
    href: '/products/power-bank',
    keywords: ['power bank', 'portable charger', 'battery pack', 'usb power bank'],
    aliases: ['powerbank compliance', 'power bank compliance'],
    priority: 10
  },
  {
    title: 'Electronic Toy EU Compliance',
    type: 'Product Guide',
    description: 'EU compliance research for toys containing electronics, batteries or wireless functions.',
    href: '/products/electronic-toy',
    keywords: ['electronic toy', 'battery toy', 'bluetooth toy', 'connected toy', 'remote control toy'],
    aliases: ['electronic toy compliance'],
    priority: 9
  },
  {
    title: 'Portable Fan EU Compliance',
    type: 'Product Guide',
    description: 'EU compliance research for USB, rechargeable and connected portable fans.',
    href: '/products/portable-fan',
    keywords: ['portable fan', 'usb fan', 'rechargeable fan', 'desk fan'],
    aliases: ['portable fan compliance'],
    priority: 9
  },
  {
    title: 'Hair Dryer EU Compliance',
    type: 'Product Guide',
    description: 'EU compliance research for hair dryers and personal-care electrical appliances.',
    href: '/products/hair-dryer',
    keywords: ['hair dryer', 'hairdryer', 'blow dryer', 'personal care appliance'],
    aliases: ['hair dryer compliance'],
    priority: 9
  },
  {
    title: 'Kitchen Appliance EU Compliance',
    type: 'Product Guide',
    description: 'EU compliance research for small kitchen appliances with heating, motors or food-contact materials.',
    href: '/products/kitchen-appliance',
    keywords: ['kitchen appliance', 'small appliance', 'blender', 'kettle', 'coffee machine', 'air fryer'],
    aliases: ['kitchen appliance compliance'],
    priority: 9
  },
  {
    title: 'Air Fryer EU Compliance',
    type: 'Product Guide',
    description: 'EU compliance research for air fryers, thermal controls and food-contact components.',
    href: '/products/air-fryer',
    keywords: ['air fryer', 'airfryer', 'countertop fryer', 'kitchen appliance'],
    aliases: ['air fryer compliance'],
    priority: 10
  },
  {
    title: 'Electric Kettle EU Compliance',
    type: 'Product Guide',
    description: 'EU compliance research for electric kettles, heating controls and food-contact materials.',
    href: '/products/electric-kettle',
    keywords: ['electric kettle', 'kettle', 'water boiler', 'hot water kettle'],
    aliases: ['electric kettle compliance'],
    priority: 10
  },
  {
    title: 'Desk Lamp EU Compliance',
    type: 'Product Guide',
    description: 'EU compliance research for desk lamps, LED drivers and light sources.',
    href: '/products/desk-lamp',
    keywords: ['desk lamp', 'table lamp', 'led desk lamp', 'reading lamp'],
    aliases: ['desk lamp compliance'],
    priority: 9
  },
  {
    title: 'Smart Bulb EU Compliance',
    type: 'Product Guide',
    description: 'EU compliance research for Wi-Fi, Bluetooth and Zigbee smart bulbs.',
    href: '/products/smart-bulb',
    keywords: ['smart bulb', 'wifi bulb', 'bluetooth bulb', 'zigbee bulb', 'smart light'],
    aliases: ['smart bulb compliance'],
    priority: 10
  },
  {
    title: 'Electric Power Tool EU Compliance',
    type: 'Product Guide',
    description: 'EU compliance research for drills, grinders, saws and other electric power tools.',
    href: '/products/electric-power-tool',
    keywords: ['power tool', 'electric drill', 'cordless drill', 'angle grinder', 'electric saw'],
    aliases: ['power tool compliance', 'electric tool compliance'],
    priority: 10
  },
  {
    title: 'Cordless Drill EU Compliance',
    type: 'Product Guide',
    description: 'EU compliance research for cordless drills, battery packs and chargers.',
    href: '/products/cordless-drill',
    keywords: ['cordless drill', 'battery drill', 'electric drill', 'power drill'],
    aliases: ['cordless drill compliance'],
    priority: 10
  },
  {
    title: 'Angle Grinder EU Compliance',
    type: 'Product Guide',
    description: 'EU compliance research for corded and cordless angle grinders.',
    href: '/products/angle-grinder',
    keywords: ['angle grinder', 'grinder', 'cordless grinder', 'power grinder'],
    aliases: ['angle grinder compliance'],
    priority: 10
  },
  {
    title: 'Electric Scooter EU Compliance',
    type: 'Product Guide',
    description: 'EU compliance research for electric scooters, batteries, motors and chargers.',
    href: '/products/electric-scooter',
    keywords: ['electric scooter', 'e scooter', 'escooter', 'mobility scooter'],
    aliases: ['electric scooter compliance', 'e scooter compliance'],
    priority: 10
  },
  {
    title: 'E-Bike Charger EU Compliance',
    type: 'Product Guide',
    description: 'EU compliance research for e-bike battery chargers.',
    href: '/products/ebike-charger',
    keywords: ['ebike charger', 'e bike charger', 'electric bicycle charger', 'battery charger'],
    aliases: ['ebike charger compliance', 'e-bike charger compliance'],
    priority: 10
  },
  {
    title: 'Electronics Product Guide',
    type: 'Product Guide',
    description: 'Product-focused overview of likely compliance research areas for electronics.',
    href: '/products/electronics',
    keywords: ['electronics', 'device', 'speaker', 'adapter', 'charger', 'wireless', 'bluetooth'],
    aliases: ['electronic product'],
    priority: 6
  },
  {
    title: 'Toy Product Guide',
    type: 'Product Guide',
    description: 'Product-focused overview for toys and children’s products.',
    href: '/products/toys',
    keywords: ['toy', 'children', 'kids', 'play'],
    aliases: ['toy product'],
    priority: 6
  },
  {
    title: 'Machinery Product Guide',
    type: 'Product Guide',
    description: 'Product-focused overview for industrial machinery and equipment.',
    href: '/products/machinery',
    keywords: ['machinery', 'machine', 'industrial', 'equipment'],
    aliases: ['machine product'],
    priority: 6
  },
  {
    title: 'Automotive Product Guide',
    type: 'Product Guide',
    description: 'Product-focused overview for automotive components and suppliers.',
    href: '/products/automotive',
    keywords: ['automotive', 'vehicle', 'car', 'parts', 'component'],
    aliases: ['automotive component'],
    priority: 6
  }
];

const quickSearches = ['Electric scooter', 'E-bike charger', 'Cordless drill', 'Angle grinder', 'Air fryer', 'Electric kettle', 'Smart bulb', 'Desk lamp'];

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/[–—/_,.-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function scoreItem(item: SearchItem, query: string) {
  const q = normalize(query);
  if (!q) return item.priority || 0;

  const title = normalize(item.title);
  const aliases = (item.aliases || []).map(normalize);
  const keywords = item.keywords.map(normalize);
  const description = normalize(item.description);
  const tokens = q.split(' ').filter(Boolean);

  let score = item.priority || 0;

  if (title === q) score += 100;
  if (aliases.includes(q)) score += 90;
  if (title.startsWith(q)) score += 60;
  if (title.includes(q)) score += 45;
  if (aliases.some((alias) => alias.includes(q))) score += 40;
  if (keywords.some((keyword) => keyword === q)) score += 38;
  if (keywords.some((keyword) => keyword.includes(q))) score += 28;
  if (description.includes(q)) score += 18;

  const searchable = [title, ...aliases, ...keywords, description].join(' ');
  const matchedTokens = tokens.filter((token) => searchable.includes(token));
  score += matchedTokens.length * 12;

  if (tokens.length > 0 && matchedTokens.length === tokens.length) score += 25;

  return score;
}

export default function ComplianceSearch() {
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<'All' | SearchItem['type']>('All');

  const results = useMemo(() => {
    const q = query.trim();

    return items
      .map((item) => ({ item, score: scoreItem(item, q) }))
      .filter(({ item, score }) => {
        const typeOk = typeFilter === 'All' || item.type === typeFilter;
        const queryOk = !q || score >= 24;
        return typeOk && queryOk;
      })
      .sort((a, b) => b.score - a.score)
      .map(({ item }) => item);
  }, [query, typeFilter]);

  return (
    <div className="search-tool">
      <div className="search-box">
        <label htmlFor="compliance-search">Product, regulation or industry</label>

        <div className="search-input-wrap">
          <span className="search-icon" aria-hidden="true">⌕</span>
          <input
            id="compliance-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try “Bluetooth speaker”, “CE marking” or “machinery”…"
            autoComplete="off"
          />
          {query && (
            <button type="button" className="clear-button" onClick={() => setQuery('')}>
              Clear
            </button>
          )}
        </div>

        <div className="search-filter-row">
          <div className="quick-searches" aria-label="Popular searches">
            {quickSearches.map((term) => (
              <button type="button" key={term} onClick={() => setQuery(term)}>
                {term}
              </button>
            ))}
          </div>

          <div className="type-filters" aria-label="Filter results by resource type">
            {(['All', 'Regulation', 'Industry', 'Product Guide'] as const).map((type) => (
              <button
                type="button"
                key={type}
                className={typeFilter === type ? 'active' : ''}
                onClick={() => setTypeFilter(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="search-summary">
        <strong>{results.length}</strong>
        <span>
          {query
            ? 'ranked results for “' + query + '”'
            : 'recommended resources'}
        </span>
      </div>

      <div className="search-results">
        {results.map((item) => (
          <a className="search-result" href={item.href} key={item.href}>
            <div>
              <div className="result-meta">
                <span className="card-badge">{item.type}</span>
                <span>Potential research path</span>
              </div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <span className="result-arrow">→</span>
          </a>
        ))}

        {results.length === 0 && (
          <div className="empty-state">
            <h2>No close resource match yet</h2>
            <p>
              Try a broader product name, category or regulation. For unusual
              products, the preliminary assessment is a better starting point.
            </p>
            <div className="hero-actions">
              <button className="button button-secondary" type="button" onClick={() => { setQuery(''); setTypeFilter('All'); }}>
                Reset Search
              </button>
              <a className="button button-primary" href="/assessment">Start Assessment</a>
            </div>
          </div>
        )}
      </div>

      <div className="search-disclaimer">
        Search results are research shortcuts, not a legal determination of which
        rules apply. Product specifications, intended use and market role can
        change the compliance scope.
      </div>
    </div>
  );
}

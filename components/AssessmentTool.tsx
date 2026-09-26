'use client';

import { useEffect, useMemo, useState } from 'react';

type Category =
  | 'electronics'
  | 'toys'
  | 'machinery'
  | 'automotive'
  | 'medical-devices'
  | 'consumer-products';

type Role = 'manufacturer' | 'importer' | 'distributor';

type RegulationItem = {
  name: string;
  href?: string;
  reason?: string;
};

type SignalKey =
  | 'radio'
  | 'battery'
  | 'electronic'
  | 'mains'
  | 'machinery'
  | 'lighting'
  | 'food'
  | 'toy'
  | 'charger';

type SignalDefinition = {
  label: string;
  regulations: RegulationItem[];
  actions: string[];
};

const categoryOptions: { value: Category; label: string }[] = [
  { value: 'electronics', label: 'Electronics / Electrical Products' },
  { value: 'toys', label: 'Toys / Children’s Products' },
  { value: 'machinery', label: 'Machinery / Industrial Equipment' },
  { value: 'automotive', label: 'Automotive Parts / Components' },
  { value: 'medical-devices', label: 'Medical / Healthcare Products' },
  { value: 'consumer-products', label: 'General Consumer Products' }
];

const roleOptions: { value: Role; label: string }[] = [
  { value: 'manufacturer', label: 'Manufacturer' },
  { value: 'importer', label: 'Importer' },
  { value: 'distributor', label: 'Distributor' }
];

const categoryData: Record<Category, {
  label: string;
  regulations: RegulationItem[];
  actions: string[];
}> = {
  electronics: {
    label: 'Electronics / Electrical Products',
    regulations: [
      { name: 'CE Marking', href: '/regulations/ce-marking' },
      { name: 'RoHS', href: '/regulations/rohs' },
      { name: 'REACH', href: '/regulations/reach' },
      { name: 'Product-safety requirements', href: '/regulations/gpsr' }
    ],
    actions: [
      'Define the product function, power source and intended use.',
      'Map applicable EU legislation before testing or documentation work.',
      'Collect supplier material information and technical evidence.',
      'Review labels, instructions, traceability and declaration requirements.'
    ]
  },
  toys: {
    label: 'Toys / Children’s Products',
    regulations: [
      { name: 'CE Marking', href: '/regulations/ce-marking' },
      { name: 'GPSR', href: '/regulations/gpsr' },
      { name: 'REACH', href: '/regulations/reach' },
      { name: 'Toy-specific safety requirements' }
    ],
    actions: [
      'Confirm intended age group, use and product classification.',
      'Review safety testing and conformity-assessment requirements.',
      'Prepare technical documentation and traceability information.',
      'Check warnings, labeling and instructions for the target market.'
    ]
  },
  machinery: {
    label: 'Machinery / Industrial Equipment',
    regulations: [
      { name: 'CE Marking', href: '/regulations/ce-marking' },
      { name: 'REACH', href: '/regulations/reach' },
      { name: 'EU machinery framework', href: '/regulations/machinery-regulation' }
    ],
    actions: [
      'Define machinery scope, intended use and foreseeable misuse.',
      'Identify applicable conformity and safety requirements.',
      'Prepare the technical file, risk assessment and instructions.',
      'Review declarations, marking and market-entry documentation.'
    ]
  },
  automotive: {
    label: 'Automotive Parts / Components',
    regulations: [
      { name: 'REACH', href: '/regulations/reach' },
      { name: 'Material and substance requirements' },
      { name: 'Sector-specific vehicle or component rules' }
    ],
    actions: [
      'Confirm whether the item is a vehicle component, accessory or standalone product.',
      'Map sector-specific approval and material requirements.',
      'Collect supplier specifications, test evidence and traceability data.',
      'Review market and customer-specific documentation needs.'
    ]
  },
  'medical-devices': {
    label: 'Medical / Healthcare Products',
    regulations: [
      { name: 'Medical-device-specific EU requirements' },
      { name: 'REACH', href: '/regulations/reach' },
      { name: 'Product and material safety requirements' }
    ],
    actions: [
      'Confirm intended medical purpose and product classification.',
      'Identify the applicable sector-specific regulatory pathway.',
      'Plan technical documentation, evidence and quality-system needs.',
      'Review labeling, traceability and post-market obligations.'
    ]
  },
  'consumer-products': {
    label: 'General Consumer Products',
    regulations: [
      { name: 'GPSR', href: '/regulations/gpsr' },
      { name: 'REACH', href: '/regulations/reach' },
      { name: 'Product-specific requirements where applicable' }
    ],
    actions: [
      'Define the product, intended consumer and foreseeable risks.',
      'Check whether product-specific EU legislation also applies.',
      'Prepare safety, traceability and supplier documentation.',
      'Review product information, labels and responsible-operator details.'
    ]
  }
};

const signalDefinitions: Record<SignalKey, SignalDefinition> = {
  radio: {
    label: 'Wireless / radio',
    regulations: [
      {
        name: 'Radio Equipment Directive (RED)',
        href: '/regulations/red',
        reason: 'Detected Bluetooth, Wi-Fi, Zigbee, NFC or another intentional radio feature.'
      }
    ],
    actions: [
      'Document radio technologies, frequency bands, antenna configuration and firmware variants.',
      'Confirm finished-product radio, EMC and safety evidence rather than relying only on module documentation.'
    ]
  },
  battery: {
    label: 'Battery powered',
    regulations: [
      {
        name: 'EU Batteries Regulation',
        href: '/regulations/batteries',
        reason: 'Detected a rechargeable, replaceable or integrated battery.'
      }
    ],
    actions: [
      'Classify the battery and document chemistry, capacity, removability and charging method.',
      'Collect battery safety, labeling, supplier and lifecycle information.'
    ]
  },
  electronic: {
    label: 'Electrical / electronic',
    regulations: [
      {
        name: 'RoHS',
        href: '/regulations/rohs',
        reason: 'Electrical/electronic content can create restricted-substance requirements.'
      },
      {
        name: 'REACH',
        href: '/regulations/reach',
        reason: 'Materials, coatings, plastics and other substances need supply-chain review.'
      },
      {
        name: 'WEEE',
        href: '/regulations/weee',
        reason: 'Electrical/electronic equipment can create producer and end-of-life obligations.'
      }
    ],
    actions: [
      'Build a bill of materials and collect current supplier material declarations.',
      'Check producer-registration and waste-electronics obligations in each EU market.'
    ]
  },
  mains: {
    label: 'Mains powered',
    regulations: [
      {
        name: 'Low Voltage Directive',
        href: '/regulations/lvd',
        reason: 'Detected a product type commonly connected to mains power; voltage scope still needs confirmation.'
      },
      {
        name: 'EMC Directive',
        href: '/regulations/emc',
        reason: 'Power electronics, motors, heaters or switching circuits can create EMC requirements.'
      }
    ],
    actions: [
      'Confirm rated input voltage, insulation, protective devices and electrical-safety test scope.',
      'Review EMC operating modes and the configuration used for conformity testing.'
    ]
  },
  machinery: {
    label: 'Machinery / moving tool',
    regulations: [
      {
        name: 'EU machinery framework',
        href: '/regulations/machinery-regulation',
        reason: 'Detected machinery, power-tool or powered mobility characteristics.'
      },
      {
        name: 'CE Marking',
        href: '/regulations/ce-marking',
        reason: 'Machinery conformity work commonly includes a CE-marking workflow when in scope.'
      }
    ],
    actions: [
      'Document intended use, foreseeable misuse, hazards, guarding and safety functions.',
      'Prepare a structured machinery risk assessment and technical-file plan.'
    ]
  },
  lighting: {
    label: 'Lighting product',
    regulations: [
      {
        name: 'Lighting ecodesign / energy labelling',
        reason: 'Detected a lamp, light source, bulb or LED control product; classification determines the exact requirements.'
      }
    ],
    actions: [
      'Confirm whether the product is a light source, luminaire or separate control gear.',
      'Collect photometric, energy-performance and product-information data where relevant.'
    ]
  },
  food: {
    label: 'Food-contact use',
    regulations: [
      {
        name: 'Food-contact material requirements',
        reason: 'Detected a kitchen or beverage appliance with components that may contact food or water.'
      }
    ],
    actions: [
      'Identify every material and coating intended to contact food or beverages.',
      'Collect supplier declarations and supporting material-compliance evidence.'
    ]
  },
  toy: {
    label: 'Toy / children’s product',
    regulations: [
      {
        name: 'Toy-specific safety requirements',
        reason: 'Detected a toy or children’s product.'
      }
    ],
    actions: [
      'Confirm intended age grading and foreseeable use.',
      'Review mechanical, chemical, electrical and warning requirements for the exact toy design.'
    ]
  },
  charger: {
    label: 'Charger / power supply',
    regulations: [
      {
        name: 'External power supply / charger ecodesign',
        reason: 'Detected a charger, adapter or external power-supply product; current and transitional ecodesign scope should be checked.'
      }
    ],
    actions: [
      'Document input/output ratings, charging protocols, efficiency and no-load or standby performance.',
      'Check whether the product falls within external-power-supply or charging-device ecodesign scope.'
    ]
  }
};

const productProfiles: Array<[string, SignalKey[]]> = [
  ['bluetooth speaker', ['radio', 'electronic']],
  ['bluetooth headphones', ['radio', 'battery', 'electronic']],
  ['wireless earbuds', ['radio', 'battery', 'electronic']],
  ['smartwatch', ['radio', 'battery', 'electronic']],
  ['smart watch', ['radio', 'battery', 'electronic']],
  ['smart plug', ['radio', 'mains', 'electronic']],
  ['wifi camera', ['radio', 'electronic']],
  ['wi-fi camera', ['radio', 'electronic']],
  ['smart bulb', ['radio', 'lighting', 'mains', 'electronic']],
  ['usb charger', ['charger', 'mains', 'electronic']],
  ['power adapter', ['charger', 'mains', 'electronic']],
  ['e-bike charger', ['charger', 'mains', 'electronic']],
  ['ebike charger', ['charger', 'mains', 'electronic']],
  ['wireless charger', ['charger', 'electronic']],
  ['power bank', ['battery', 'electronic']],
  ['cordless drill', ['battery', 'machinery', 'electronic']],
  ['angle grinder', ['machinery', 'electronic']],
  ['electric power tool', ['machinery', 'electronic']],
  ['electric scooter', ['battery', 'machinery', 'electronic']],
  ['air fryer', ['mains', 'electronic', 'food']],
  ['electric kettle', ['mains', 'electronic', 'food']],
  ['hair dryer', ['mains', 'electronic']],
  ['kitchen appliance', ['mains', 'electronic', 'food']],
  ['desk lamp', ['lighting', 'electronic']],
  ['led light', ['lighting', 'electronic']],
  ['led driver', ['lighting', 'mains', 'electronic']],
  ['electronic toy', ['toy', 'electronic']]
];

const fallbackPatterns: Array<[RegExp, SignalKey]> = [
  [/bluetooth|wi-?fi|zigbee|\bnfc\b|wireless|radio/, 'radio'],
  [/battery|rechargeable|power\s*bank|cordless/, 'battery'],
  [/charger|adapter|power\s*supply/, 'charger'],
  [/drill|grinder|power\s*tool|machine|machinery/, 'machinery'],
  [/\bled\b|lamp|bulb|light\s*source|luminaire/, 'lighting'],
  [/air\s*fryer|kettle|kitchen\s*appliance|coffee\s*machine|blender/, 'food'],
  [/toy|children'?s\s*product/, 'toy'],
  [/electronics?|electrical|camera|speaker|headphones|earbuds|smartwatch|smart\s*plug|smart\s*bulb|fan|dryer|kettle|fryer|lamp/, 'electronic'],
  [/mains|hair\s*dryer|electric\s*kettle|air\s*fryer|smart\s*plug|power\s*adapter|usb\s*charger|led\s*driver/, 'mains']
];

function detectSignals(productName: string): SignalKey[] {
  const value = productName.toLowerCase().replace(/[–—_]/g, ' ').replace(/\s+/g, ' ').trim();
  if (!value) return [];

  const detected = new Set<SignalKey>();

  for (const [phrase, signals] of productProfiles) {
    if (value.includes(phrase)) signals.forEach((signal) => detected.add(signal));
  }

  for (const [pattern, signal] of fallbackPatterns) {
    if (pattern.test(value)) detected.add(signal);
  }

  return Array.from(detected);
}

function dedupeRegulations(items: RegulationItem[]) {
  const seen = new Set<string>();

  return items.filter((item) => {
    const key = item.name.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function dedupeActions(items: string[]) {
  return Array.from(new Set(items));
}

export default function AssessmentTool() {
  const [category, setCategory] = useState<Category>('electronics');
  const [role, setRole] = useState<Role>('manufacturer');
  const [productName, setProductName] = useState('');
  const [generated, setGenerated] = useState(false);
  const [prefilled, setPrefilled] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const product = params.get('product');
    const requestedCategory = params.get('category');
    const requestedRole = params.get('role');
    const source = params.get('source');

    if (product) {
      setProductName(product);
      setPrefilled(true);
    }

    if (requestedCategory && requestedCategory in categoryData) {
      setCategory(requestedCategory as Category);
      setPrefilled(true);
    }

    if (requestedRole && roleOptions.some((item) => item.value === requestedRole)) {
      setRole(requestedRole as Role);
      setPrefilled(true);
    }

    if (product && source) {
      setGenerated(true);
    }
  }, []);

  const data = useMemo(() => categoryData[category], [category]);
  const detectedSignals = useMemo(() => detectSignals(productName), [productName]);

  const assessment = useMemo(() => {
    const signalRegulations = detectedSignals.flatMap(
      (signal) => signalDefinitions[signal].regulations
    );
    const signalActions = detectedSignals.flatMap(
      (signal) => signalDefinitions[signal].actions
    );

    return {
      regulations: dedupeRegulations([...data.regulations, ...signalRegulations]),
      actions: dedupeActions([...data.actions, ...signalActions])
    };
  }, [data, detectedSignals]);

  const roleAction = {
    manufacturer:
      'Focus on product design evidence, conformity assessment, technical documentation and declarations.',
    importer:
      'Confirm the non-EU manufacturer’s evidence, importer identification, traceability and market-entry documentation.',
    distributor:
      'Verify markings, instructions, traceability and obvious compliance issues before making the product available.'
  }[role];

  const reportHref = '/reports?' + new URLSearchParams({
    product: productName.trim() || data.label,
    category,
    role,
    regulations: assessment.regulations.map((item) => item.name).join('|'),
    source: 'assessment'
  }).toString();

  return (
    <div className="assessment-tool">
      <div className="assessment-form card">
        {prefilled && (
          <div className="prefill-note">
            <strong>Product guide connected.</strong>
            <span> Product context was carried into this assessment. Review or edit any field before relying on the preliminary result.</span>
          </div>
        )}

        <div className="form-grid">
          <div className="field field-wide">
            <label htmlFor="product-name">Product name or short description</label>
            <input
              id="product-name"
              value={productName}
              onChange={(event) => setProductName(event.target.value)}
              placeholder="e.g. Bluetooth speaker, USB charger, cordless drill"
            />
          </div>

          <div className="field">
            <label htmlFor="category">Product category</label>
            <select
              id="category"
              value={category}
              onChange={(event) => setCategory(event.target.value as Category)}
            >
              {categoryOptions.map((option) => (
                <option value={option.value} key={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="role">Your role in the EU supply chain</label>
            <select
              id="role"
              value={role}
              onChange={(event) => setRole(event.target.value as Role)}
            >
              {roleOptions.map((option) => (
                <option value={option.value} key={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>

        {detectedSignals.length > 0 && (
          <div className="detected-signals">
            <span className="signal-label">Detected product signals</span>
            <div>
              {detectedSignals.map((signal) => (
                <span className="signal-chip" key={signal}>
                  {signalDefinitions[signal].label}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="assessment-actions">
          <button
            className="button button-primary"
            type="button"
            onClick={() => setGenerated(true)}
          >
            Generate Preliminary Assessment
          </button>
          <span>No sign-up required for this preliminary screen.</span>
        </div>
      </div>

      {generated && (
        <div className="assessment-result">
          <div className="result-header">
            <div>
              <span className="card-badge">Preliminary result</span>
              <h2>{productName.trim() || data.label}</h2>
              <p>
                {data.label} · European Union ·{' '}
                {roleOptions.find((item) => item.value === role)?.label}
              </p>
            </div>
            <div className="risk-chip">{assessment.regulations.length} areas identified</div>
          </div>

          {detectedSignals.length > 0 && (
            <div className="signal-summary">
              <div>
                <strong>Why the result changed</strong>
                <p>
                  RegMetric detected product characteristics from the product name
                  and added extra research areas on top of the selected category.
                </p>
              </div>
              <div className="signal-summary-chips">
                {detectedSignals.map((signal) => (
                  <span key={signal}>{signalDefinitions[signal].label}</span>
                ))}
              </div>
            </div>
          )}

          <div className="result-grid">
            <div className="card">
              <h3>Regulatory areas to investigate</h3>
              <div className="result-links">
                {assessment.regulations.map((regulation) => (
                  regulation.href ? (
                    <a href={regulation.href} key={regulation.name} className="result-regulation">
                      <span>
                        <strong>{regulation.name}</strong>
                        {regulation.reason && <small>{regulation.reason}</small>}
                      </span>
                      <span>→</span>
                    </a>
                  ) : (
                    <div key={regulation.name} className="result-regulation">
                      <span>
                        <strong>{regulation.name}</strong>
                        {regulation.reason && <small>{regulation.reason}</small>}
                      </span>
                    </div>
                  )
                ))}
              </div>
            </div>

            <div className="card">
              <h3>Role-specific focus</h3>
              <p>{roleAction}</p>
              <a className="text-link" href={reportHref}>Open connected report →</a>
            </div>
          </div>

          <div className="card action-plan">
            <h3>Suggested next actions</h3>
            <ol>
              {assessment.actions.map((action) => <li key={action}>{action}</li>)}
            </ol>
          </div>

          <div className="assessment-report-cta">
            <div>
              <span className="eyebrow">Next step</span>
              <h3>Carry this assessment into a compliance report.</h3>
              <p>
                Product name, category, supply-chain role and identified
                regulatory areas will be transferred automatically.
              </p>
            </div>
            <a className="button button-primary" href={reportHref}>
              Build Report Preview
            </a>
          </div>

          <div className="assessment-note">
            This is a preliminary research aid, not a legal determination of
            product scope or conformity. The tool uses product-name signals to
            surface potentially relevant areas; exact specifications, intended
            use and applicable law still control the final result.
          </div>
        </div>
      )}
    </div>
  );
}

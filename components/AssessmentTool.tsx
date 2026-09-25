'use client';

import { useMemo, useState } from 'react';

type Category =
  | 'electronics'
  | 'toys'
  | 'machinery'
  | 'automotive'
  | 'medical-devices'
  | 'consumer-products';

type Role = 'manufacturer' | 'importer' | 'distributor';

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
  regulations: { name: string; href?: string }[];
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
      { name: 'Machinery-specific conformity requirements' }
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

export default function AssessmentTool() {
  const [category, setCategory] = useState<Category>('electronics');
  const [role, setRole] = useState<Role>('manufacturer');
  const [productName, setProductName] = useState('');
  const [generated, setGenerated] = useState(false);

  const data = useMemo(() => categoryData[category], [category]);

  const roleAction = {
    manufacturer:
      'Focus on product design evidence, conformity assessment, technical documentation and declarations.',
    importer:
      'Confirm the non-EU manufacturer’s evidence, importer identification, traceability and market-entry documentation.',
    distributor:
      'Verify markings, instructions, traceability and obvious compliance issues before making the product available.'
  }[role];

  return (
    <div className="assessment-tool">
      <div className="assessment-form card">
        <div className="form-grid">
          <div className="field field-wide">
            <label htmlFor="product-name">Product name or short description</label>
            <input
              id="product-name"
              value={productName}
              onChange={(event) => setProductName(event.target.value)}
              placeholder="e.g. Bluetooth speaker, toy set, hand-held machine"
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
            <div className="risk-chip">Review required</div>
          </div>

          <div className="result-grid">
            <div className="card">
              <h3>Regulatory areas to investigate</h3>
              <div className="result-links">
                {data.regulations.map((regulation) => (
                  regulation.href ? (
                    <a href={regulation.href} key={regulation.name}>
                      {regulation.name}<span>→</span>
                    </a>
                  ) : (
                    <div key={regulation.name}>{regulation.name}</div>
                  )
                ))}
              </div>
            </div>

            <div className="card">
              <h3>Role-specific focus</h3>
              <p>{roleAction}</p>
              <a className="text-link" href="/reports">See report workflow →</a>
            </div>
          </div>

          <div className="card action-plan">
            <h3>Suggested next actions</h3>
            <ol>
              {data.actions.map((action) => <li key={action}>{action}</li>)}
            </ol>
          </div>

          <div className="assessment-note">
            This is a preliminary research aid, not a legal determination of
            product scope or conformity. Product specifications and intended use
            can change which requirements apply.
          </div>
        </div>
      )}
    </div>
  );
}

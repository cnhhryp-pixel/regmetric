'use client';

import { useMemo, useState } from 'react';

type Category = 'electronics' | 'toys' | 'machinery' | 'consumer-products';
type Role = 'manufacturer' | 'importer' | 'distributor';

const categoryOptions: { value: Category; label: string }[] = [
  { value: 'electronics', label: 'Electronics / Electrical Products' },
  { value: 'toys', label: 'Toys / Children’s Products' },
  { value: 'machinery', label: 'Machinery / Industrial Equipment' },
  { value: 'consumer-products', label: 'General Consumer Products' }
];

const roleOptions: { value: Role; label: string }[] = [
  { value: 'manufacturer', label: 'Manufacturer' },
  { value: 'importer', label: 'Importer' },
  { value: 'distributor', label: 'Distributor' }
];

const reportData: Record<Category, {
  regulations: string[];
  evidence: string[];
  risks: string[];
}> = {
  electronics: {
    regulations: ['CE Marking', 'RoHS', 'REACH', 'Product Safety'],
    evidence: ['Product specifications', 'Risk assessment', 'Test reports', 'Supplier material evidence'],
    risks: ['Incorrect regulatory scope', 'Outdated supplier declarations', 'Missing technical evidence']
  },
  toys: {
    regulations: ['CE Marking', 'Toy Safety', 'GPSR', 'REACH'],
    evidence: ['Age grading', 'Safety assessment', 'Test reports', 'Warnings and labels'],
    risks: ['Incorrect age classification', 'Incomplete safety testing', 'Material-information gaps']
  },
  machinery: {
    regulations: ['CE Marking', 'Machinery-specific requirements', 'REACH'],
    evidence: ['Risk assessment', 'Drawings and schematics', 'Safety-function evidence', 'Instructions'],
    risks: ['Incomplete hazard analysis', 'Missing conformity evidence', 'Weak technical-file structure']
  },
  'consumer-products': {
    regulations: ['GPSR', 'REACH', 'Product-specific requirements'],
    evidence: ['Product description', 'Safety information', 'Traceability records', 'Supplier documentation'],
    risks: ['Product-specific rules overlooked', 'Weak traceability', 'Incomplete safety documentation']
  }
};

export default function ReportPreview() {
  const [category, setCategory] = useState<Category>('electronics');
  const [role, setRole] = useState<Role>('manufacturer');
  const [productName, setProductName] = useState('Bluetooth Speaker');

  const data = useMemo(() => reportData[category], [category]);
  const roleLabel = roleOptions.find((item) => item.value === role)?.label;

  return (
    <div className="report-builder">
      <div className="report-controls card">
        <div className="form-grid">
          <div className="field field-wide">
            <label htmlFor="report-product">Product name</label>
            <input
              id="report-product"
              value={productName}
              onChange={(event) => setProductName(event.target.value)}
              placeholder="e.g. Bluetooth speaker"
            />
          </div>

          <div className="field">
            <label htmlFor="report-category">Product category</label>
            <select
              id="report-category"
              value={category}
              onChange={(event) => setCategory(event.target.value as Category)}
            >
              {categoryOptions.map((item) => (
                <option value={item.value} key={item.value}>{item.label}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="report-role">Supply-chain role</label>
            <select
              id="report-role"
              value={role}
              onChange={(event) => setRole(event.target.value as Role)}
            >
              {roleOptions.map((item) => (
                <option value={item.value} key={item.value}>{item.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="report-preview">
        <div className="report-preview-header">
          <div>
            <span className="card-badge">Sample Report Preview</span>
            <h2>{productName.trim() || 'Unnamed Product'}</h2>
            <p>{categoryOptions.find((item) => item.value === category)?.label} · EU Market · {roleLabel}</p>
          </div>
          <span className="report-status">Preliminary</span>
        </div>

        <div className="report-section">
          <span>01</span>
          <div>
            <h3>Executive Summary</h3>
            <p>
              Preliminary review identifies several compliance areas that should
              be verified against the final product specification and intended use.
            </p>
          </div>
        </div>

        <div className="report-section">
          <span>02</span>
          <div>
            <h3>Regulatory Areas</h3>
            <div className="tags">
              {data.regulations.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </div>

        <div className="report-section">
          <span>03</span>
          <div>
            <h3>Evidence Checklist</h3>
            <ul className="report-list">
              {data.evidence.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>

        <div className="report-section">
          <span>04</span>
          <div>
            <h3>Potential Gaps</h3>
            <ul className="report-list">
              {data.risks.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>

        <div className="report-disclaimer">
          Preview only. Final applicability depends on the exact product,
          intended use, technical characteristics and applicable law.
        </div>
      </div>
    </div>
  );
}

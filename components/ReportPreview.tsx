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
    regulations: ['CE Marking', 'Machinery framework', 'REACH'],
    evidence: ['Risk assessment', 'Drawings and schematics', 'Safety-function evidence', 'Instructions'],
    risks: ['Incomplete hazard analysis', 'Missing conformity evidence', 'Weak technical-file structure']
  },
  automotive: {
    regulations: ['REACH', 'Material requirements', 'Sector-specific vehicle rules'],
    evidence: ['Component specification', 'Material declarations', 'Supplier approvals', 'Traceability records'],
    risks: ['Incorrect component classification', 'Missing material evidence', 'Customer or approval requirements overlooked']
  },
  'medical-devices': {
    regulations: ['Medical-device-specific requirements', 'REACH', 'Product and material safety'],
    evidence: ['Intended-purpose statement', 'Classification rationale', 'Risk-management records', 'Technical documentation'],
    risks: ['Incorrect classification', 'Insufficient clinical or performance evidence', 'Incomplete quality-system planning']
  },
  'consumer-products': {
    regulations: ['GPSR', 'REACH', 'Product-specific requirements'],
    evidence: ['Product description', 'Safety information', 'Traceability records', 'Supplier documentation'],
    risks: ['Product-specific rules overlooked', 'Weak traceability', 'Incomplete safety documentation']
  }
};

function dedupe(items: string[]) {
  return Array.from(new Set(items.filter(Boolean)));
}

function buildReportId(product: string) {
  const clean = product.toUpperCase().replace(/[^A-Z0-9]+/g, '').slice(0, 5) || 'REPORT';
  const date = new Date();
  const y = date.getFullYear().toString().slice(-2);
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `RM-${clean}-${y}${m}${d}`;
}

export default function ReportPreview() {
  const [category, setCategory] = useState<Category>('electronics');
  const [role, setRole] = useState<Role>('manufacturer');
  const [productName, setProductName] = useState('Bluetooth Speaker');
  const [companyName, setCompanyName] = useState('');
  const [preparedFor, setPreparedFor] = useState('');
  const [assessmentRegulations, setAssessmentRegulations] = useState<string[]>([]);
  const [connected, setConnected] = useState(false);
  const [reportDate, setReportDate] = useState('');
  const [reportId, setReportId] = useState('');
  const [downloadMessage, setDownloadMessage] = useState(false);
  const [checkoutState, setCheckoutState] = useState<'idle' | 'loading' | 'error'>('idle');
  const [checkoutError, setCheckoutError] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const product = params.get('product');
    const requestedCategory = params.get('category');
    const requestedRole = params.get('role');
    const regulations = params.get('regulations');
    const source = params.get('source');

    const initialProduct = product || 'Bluetooth Speaker';

    if (product) setProductName(product);

    if (requestedCategory && categoryOptions.some((item) => item.value === requestedCategory)) {
      setCategory(requestedCategory as Category);
    }

    if (requestedRole && roleOptions.some((item) => item.value === requestedRole)) {
      setRole(requestedRole as Role);
    }

    if (regulations) {
      setAssessmentRegulations(
        regulations
          .split('|')
          .map((item) => item.trim())
          .filter(Boolean)
      );
    }

    if (source === 'assessment') setConnected(true);

    const now = new Date();
    setReportDate(now.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }));
    setReportId(buildReportId(initialProduct));
  }, []);

  useEffect(() => {
    if (reportDate) setReportId(buildReportId(productName));
  }, [productName, reportDate]);

  const data = useMemo(() => reportData[category], [category]);
  const roleLabel = roleOptions.find((item) => item.value === role)?.label;
  const regulations = useMemo(
    () => dedupe([...assessmentRegulations, ...data.regulations]),
    [assessmentRegulations, data]
  );

  const handlePrint = () => {
    window.print();
  };

  const handlePaidDownload = async () => {
    setCheckoutState('loading');
    setCheckoutError('');
    setDownloadMessage(false);

    const pendingReport = {
      productName: productName.trim() || 'Unnamed Product',
      companyName,
      preparedFor,
      categoryLabel: categoryOptions.find((item) => item.value === category)?.label || category,
      roleLabel: roleLabel || role,
      reportDate,
      reportId,
      regulations,
      evidence: data.evidence,
      risks: data.risks
    };

    window.localStorage.setItem(
      'regmetric_pending_paid_report',
      JSON.stringify(pendingReport)
    );

    try {
      const response = await fetch('/api/paypal/create-order', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ reportId })
      });
      const result = await response.json();

      if (!response.ok || !result.approveUrl) {
        if (result.error === 'PAYPAL_NOT_CONFIGURED') {
          throw new Error('Paid PDF checkout is not configured yet. Add the PayPal API credentials in Cloudflare Pages settings.');
        }
        throw new Error(result.message || result.error || 'Could not start PayPal checkout.');
      }

      window.location.href = result.approveUrl;
    } catch (error) {
      setCheckoutState('error');
      setCheckoutError(
        error instanceof Error ? error.message : 'Could not start PayPal checkout.'
      );
    }
  };

  return (
    <div className="report-builder">
      <div className="report-controls card no-print">
        {connected && (
          <div className="prefill-note">
            <strong>Assessment connected.</strong>
            <span> Product context and identified regulatory areas were transferred into this report preview.</span>
          </div>
        )}

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
            <label htmlFor="report-company">Company / organization</label>
            <input
              id="report-company"
              value={companyName}
              onChange={(event) => setCompanyName(event.target.value)}
              placeholder="e.g. Example Trading Ltd."
            />
          </div>

          <div className="field">
            <label htmlFor="report-client">Prepared for</label>
            <input
              id="report-client"
              value={preparedFor}
              onChange={(event) => setPreparedFor(event.target.value)}
              placeholder="Client, team or contact"
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

        <div className="report-action-grid">
          <button className="button button-primary" type="button" onClick={handlePrint}>
            Print Free
          </button>
          <button
            className="button button-secondary"
            type="button"
            disabled={checkoutState === 'loading'}
            onClick={handlePaidDownload}
          >
            {checkoutState === 'loading' ? 'Opening PayPal…' : 'Download PDF · €49'}
          </button>
        </div>

        <div className="report-price-note">
          <strong>Professional PDF · €49</strong>
          <span>Watermark-free PDF download after verified PayPal payment. Free browser printing remains available above.</span>
        </div>

        {checkoutState === 'error' && (
          <div className="paid-download-note">
            <strong>Checkout could not start.</strong>
            <span>{checkoutError}</span>
          </div>
        )}

        {downloadMessage && (
          <div className="paid-download-note">
            <strong>Professional PDF</strong>
            <span>Payment is verified server-side before the PDF download is unlocked.</span>
          </div>
        )}

        <div className="report-control-actions">
          <a className="text-link" href="/assessment">← Back to Assessment</a>
          <span>Preview updates automatically.</span>
        </div>
      </div>

      <div className="report-preview printable-report">
        <div className="print-watermark">REGMETRIC · FREE PRINT · PRELIMINARY</div>

        <div className="report-document-head">
          <div className="report-brand">
            <span className="brand-mark">R</span>
            <div>
              <strong>RegMetric</strong>
              <small>Product Compliance Intelligence</small>
            </div>
          </div>

          <div className="report-meta">
            <div><span>Report ID</span><strong>{reportId || 'Generating…'}</strong></div>
            <div><span>Date</span><strong>{reportDate || '—'}</strong></div>
          </div>
        </div>

        <div className="report-preview-header">
          <div>
            <span className="card-badge">{connected ? 'Assessment Report Preview' : 'Sample Report Preview'}</span>
            <h2>{productName.trim() || 'Unnamed Product'}</h2>
            <p>{categoryOptions.find((item) => item.value === category)?.label} · EU Market · {roleLabel}</p>
          </div>
          <span className="report-status">Preliminary</span>
        </div>

        {(companyName || preparedFor) && (
          <div className="report-party-grid">
            <div>
              <span>Company / Organization</span>
              <strong>{companyName || '—'}</strong>
            </div>
            <div>
              <span>Prepared For</span>
              <strong>{preparedFor || '—'}</strong>
            </div>
          </div>
        )}

        <div className="report-section">
          <span>01</span>
          <div>
            <h3>Executive Summary</h3>
            <p>
              Preliminary review identifies {regulations.length} compliance areas
              that should be verified against the final product specification,
              intended use and market-entry model.
            </p>
          </div>
        </div>

        <div className="report-section">
          <span>02</span>
          <div>
            <h3>Regulatory Areas</h3>
            <div className="tags">
              {regulations.map((item) => <span key={item}>{item}</span>)}
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

        <div className="report-section">
          <span>05</span>
          <div>
            <h3>Recommended Follow-Up</h3>
            <ul className="report-list">
              <li>Confirm the exact legal scope against final product specifications.</li>
              <li>Map each requirement to current technical and supplier evidence.</li>
              <li>Record missing evidence, owners and target completion dates.</li>
              <li>Review labels, declarations and market-specific registrations before launch.</li>
            </ul>
          </div>
        </div>

        <div className="report-disclaimer">
          Preliminary research report generated by RegMetric. This document does
          not constitute legal advice or a final conformity determination.
        </div>
      </div>
    </div>
  );
}

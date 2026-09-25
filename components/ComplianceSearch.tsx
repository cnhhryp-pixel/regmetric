'use client';

import { useMemo, useState } from 'react';

type SearchItem = {
  title: string;
  type: string;
  description: string;
  href: string;
  keywords: string[];
};

const items: SearchItem[] = [
  {
    title: 'GPSR',
    type: 'Regulation',
    description: 'General Product Safety Regulation guidance for consumer products sold in the EU.',
    href: '/regulations/gpsr',
    keywords: ['general product safety', 'consumer products', 'safety', 'eu', 'marketplace']
  },
  {
    title: 'CE Marking',
    type: 'Regulation',
    description: 'Conformity and market-access guidance for products that fall within CE-marking legislation.',
    href: '/regulations/ce-marking',
    keywords: ['ce', 'conformity', 'electronics', 'machinery', 'toys', 'eu']
  },
  {
    title: 'RoHS',
    type: 'Regulation',
    description: 'Restricted-substance requirements relevant to many electrical and electronic products.',
    href: '/regulations/rohs',
    keywords: ['electronics', 'electrical', 'hazardous substances', 'materials', 'components']
  },
  {
    title: 'REACH',
    type: 'Regulation',
    description: 'Chemical substance and supply-chain information requirements for products and materials.',
    href: '/regulations/reach',
    keywords: ['chemicals', 'materials', 'svhc', 'substances', 'supply chain']
  },
  {
    title: 'Electronics',
    type: 'Industry',
    description: 'Explore common compliance areas for connected devices and electrical products.',
    href: '/industries/electronics',
    keywords: ['bluetooth', 'speaker', 'charger', 'device', 'electrical', 'electronics']
  },
  {
    title: 'Toys',
    type: 'Industry',
    description: 'Explore safety, conformity, testing and documentation considerations for toys.',
    href: '/industries/toys',
    keywords: ['children', 'kids', 'toy', 'en71', 'safety']
  },
  {
    title: 'Machinery',
    type: 'Industry',
    description: 'Explore conformity, safety and technical-documentation topics for machinery.',
    href: '/industries/machinery',
    keywords: ['machine', 'industrial', 'equipment', 'factory', 'mechanical']
  },
  {
    title: 'Automotive',
    type: 'Industry',
    description: 'Explore product compliance research paths for automotive parts and suppliers.',
    href: '/industries/automotive',
    keywords: ['car', 'vehicle', 'auto', 'parts', 'automotive']
  },
  {
    title: 'Medical Devices',
    type: 'Industry',
    description: 'Start regulatory research for healthcare and medical-device products.',
    href: '/industries/medical-devices',
    keywords: ['medical', 'healthcare', 'device', 'hospital', 'clinic']
  },
  {
    title: 'Consumer Products',
    type: 'Industry',
    description: 'Explore general product safety and material-compliance topics for consumer goods.',
    href: '/industries/consumer-products',
    keywords: ['consumer', 'household', 'general goods', 'retail', 'product safety']
  },
  {
    title: 'Electronics Product Guide',
    type: 'Product Guide',
    description: 'Product-focused overview of likely compliance research areas for electronics.',
    href: '/products/electronics',
    keywords: ['electronics', 'device', 'speaker', 'adapter', 'charger']
  },
  {
    title: 'Toy Product Guide',
    type: 'Product Guide',
    description: 'Product-focused overview for toys and children’s products.',
    href: '/products/toys',
    keywords: ['toy', 'children', 'kids', 'play']
  },
  {
    title: 'Machinery Product Guide',
    type: 'Product Guide',
    description: 'Product-focused overview for industrial machinery and equipment.',
    href: '/products/machinery',
    keywords: ['machinery', 'machine', 'industrial', 'equipment']
  },
  {
    title: 'Automotive Product Guide',
    type: 'Product Guide',
    description: 'Product-focused overview for automotive components and suppliers.',
    href: '/products/automotive',
    keywords: ['automotive', 'vehicle', 'car', 'parts']
  }
];

const quickSearches = ['Bluetooth speaker', 'Toy', 'Machinery', 'GPSR', 'RoHS', 'REACH'];

export default function ComplianceSearch() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) return items.slice(0, 8);

    return items.filter((item) => {
      const searchable = [item.title, item.type, item.description, ...item.keywords]
        .join(' ')
        .toLowerCase();

      return normalized
        .split(/\s+/)
        .filter(Boolean)
        .every((term) => searchable.includes(term));
    });
  }, [query]);

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
            placeholder="Try “Bluetooth speaker”, “GPSR” or “machinery”…"
            autoComplete="off"
          />
          {query && (
            <button type="button" className="clear-button" onClick={() => setQuery('')}>
              Clear
            </button>
          )}
        </div>

        <div className="quick-searches" aria-label="Popular searches">
          {quickSearches.map((term) => (
            <button type="button" key={term} onClick={() => setQuery(term)}>
              {term}
            </button>
          ))}
        </div>
      </div>

      <div className="search-summary">
        <strong>{results.length}</strong>
        <span>{query ? 'matching resources' : 'popular resources'}</span>
      </div>

      <div className="search-results">
        {results.map((item) => (
          <a className="search-result" href={item.href} key={item.href}>
            <div>
              <span className="card-badge">{item.type}</span>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <span className="result-arrow">→</span>
          </a>
        ))}

        {results.length === 0 && (
          <div className="empty-state">
            <h2>No exact resource found</h2>
            <p>
              Try a broader product category, regulation name or industry. You can
              also use the free assessment for a structured starting point.
            </p>
            <a className="button button-primary" href="/assessment">Start Assessment</a>
          </div>
        )}
      </div>
    </div>
  );
}

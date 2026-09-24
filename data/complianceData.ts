export const regulations = [
  {
    slug: 'gpsr',
    name: 'GPSR',
    category: 'Product Safety',
    description: 'General Product Safety Regulation requirements for products placed on the EU market.'
  },
  {
    slug: 'ce-marking',
    name: 'CE Marking',
    category: 'Conformity Assessment',
    description: 'European conformity marking requirements for applicable products.'
  },
  {
    slug: 'rohs',
    name: 'RoHS',
    category: 'Electronics',
    description: 'Restriction of hazardous substances requirements for electrical products.'
  },
  {
    slug: 'reach',
    name: 'REACH',
    category: 'Chemical Compliance',
    description: 'Chemical substance compliance requirements for products supplied in Europe.'
  }
];

export const productCategories = [
  {
    slug: 'electronics',
    name: 'Electronics',
    regulations: ['CE Marking', 'RoHS', 'EMC', 'LVD']
  },
  {
    slug: 'toys',
    name: 'Toys',
    regulations: ['Toy Safety', 'CE Marking', 'GPSR']
  },
  {
    slug: 'machinery',
    name: 'Machinery',
    regulations: ['Machinery Regulation', 'CE Marking']
  },
  {
    slug: 'automotive',
    name: 'Automotive',
    regulations: ['Material Requirements', 'Safety Standards']
  }
];

export const industries = [
  'Electronics',
  'Toys',
  'Machinery',
  'Automotive',
  'Medical Devices',
  'Consumer Products'
];

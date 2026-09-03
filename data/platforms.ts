export interface Platform {
  id: string;
  name: string;
  category: 'Major Retailer' | 'Global Distributor' | 'Registration Agency';
  description: string;
  reach: string;
  highlight: string;
  formats: string[];
}

export const publishingPlatforms: Platform[] = [
  {
    id: 'amazon-kdp',
    name: 'Amazon KDP',
    category: 'Major Retailer',
    description: 'Kindle publishing and print-on-demand options for paperback and hardcover editions.',
    reach: 'Amazon storefront availability in supported territories.',
    highlight: 'Direct Kindle & Print on Demand distribution',
    formats: ['Kindle eBook', 'Paperback', 'Hardcover']
  },
  {
    id: 'apple-books',
    name: 'Apple Books',
    category: 'Major Retailer',
    description: 'Digital book distribution through the Apple Books store on supported Apple devices.',
    reach: 'International eBook and audiobook storefronts.',
    highlight: 'Optimized Apple device typography & digital curation',
    formats: ['EPUB eBook', 'Audiobook']
  },
  {
    id: 'barnes-and-noble',
    name: 'Barnes & Noble',
    category: 'Major Retailer',
    description: 'US online catalogue distribution and NOOK digital editions.',
    reach: 'United States retail and digital availability.',
    highlight: 'NOOK eBook & US retail catalog availability',
    formats: ['NOOK eBook', 'Trade Paperback', 'Hardcover']
  },
  {
    id: 'kobo',
    name: 'Rakuten Kobo',
    category: 'Major Retailer',
    description: 'International eBook and audiobook distribution with a strong presence in Canada, Europe, and other markets.',
    reach: 'International digital storefront availability.',
    highlight: 'Strong UK, Commonwealth & European presence',
    formats: ['EPUB eBook', 'Audiobook']
  },
  {
    id: 'ingram',
    name: 'IngramSpark',
    category: 'Global Distributor',
    description: 'Wholesale catalogue and print distribution used by booksellers, libraries, and online retailers.',
    reach: 'International wholesale and library ordering networks.',
    highlight: 'Access to physical brick-and-mortar bookstore ordering systems',
    formats: ['Hardcover', 'Paperback', 'Large Print']
  },
  {
    id: 'isbn-agencies',
    name: 'Publishing Administration',
    category: 'Registration Agency',
    description: 'Support with ISBN assignment, bibliographic metadata, barcodes, and required deposit information.',
    reach: 'Preparation for library and trade database listing.',
    highlight: 'ISBN and metadata support where required',
    formats: ['All physical and digital editions']
  }
];

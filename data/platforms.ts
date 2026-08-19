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
    description: 'The world\'s dominant book marketplace. Direct placement on Kindle and on-demand paperback & hardcover retail.',
    reach: 'Over 80% of global eBook readership and millions of physical buyers.',
    highlight: 'Direct Kindle & Print on Demand distribution',
    formats: ['Kindle eBook', 'Paperback', 'Hardcover']
  },
  {
    id: 'apple-books',
    name: 'Apple Books',
    category: 'Major Retailer',
    description: 'Integrated directly into millions of iOS, iPadOS, and macOS devices across 50+ countries.',
    reach: 'Global premium digital readership across Apple hardware ecosystem.',
    highlight: 'Optimized Apple device typography & digital curation',
    formats: ['EPUB eBook', 'Audiobook']
  },
  {
    id: 'barnes-and-noble',
    name: 'Barnes & Noble',
    category: 'Major Retailer',
    description: 'America\'s iconic bookstore chain, offering both online catalog distribution and NOOK digital editions.',
    reach: 'Extensive US reader audience and physical bookstore distribution pipeline.',
    highlight: 'NOOK eBook & US retail catalog availability',
    formats: ['NOOK eBook', 'Trade Paperback', 'Hardcover']
  },
  {
    id: 'kobo',
    name: 'Kobo by Rakuten',
    category: 'Major Retailer',
    description: 'A major international eBook and audiobook retailer with strong dominance in the UK, Canada, Australia, and Europe.',
    reach: 'Millions of dedicated e-reading device owners worldwide.',
    highlight: 'Strong UK, Commonwealth & European presence',
    formats: ['EPUB eBook', 'Audiobook']
  },
  {
    id: 'ingram',
    name: 'Ingram Content Group',
    category: 'Global Distributor',
    description: 'The global standard for book distribution, connecting your title to 40,000+ bookstores, libraries, and universities.',
    reach: 'Worldwide physical wholesale and library distribution network in 150+ countries.',
    highlight: 'Access to physical brick-and-mortar bookstore ordering systems',
    formats: ['Hardcover', 'Paperback', 'Large Print']
  },
  {
    id: 'isbn-agencies',
    name: 'Official ISBN Support',
    category: 'Registration Agency',
    description: 'Direct registration through official national agencies (Nielsen in the UK, Bowker in the US) 100% registered to the author.',
    reach: 'Global bibliographic indexing across library and trade databases.',
    highlight: 'Author retains 100% legal title and copyright ownership',
    formats: ['All physical and digital editions']
  }
];

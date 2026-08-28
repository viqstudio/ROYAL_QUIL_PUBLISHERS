export type Genre = 
  | 'Fiction'
  | 'Non-Fiction'
  | 'Memoir'
  | 'Poetry'
  | 'Business'
  | 'Thriller'
  | 'Fantasy'
  | 'Self-Help'
  | 'Children\'s'
  | 'Romance';

export interface Book {
  id: string;
  title: string;
  author: string;
  genre: Genre;
  tagline: string;
  description: string;
  coverImage: string;
  year: number;
  featured: boolean;
  formats: string[];
  specs?: {
    pages?: number;
    trimSize?: string;
    binding?: string;
    isbn?: string;
  };
  reviewQuote?: string;
  reviewSource?: string;
}

export const books: Book[] = [
  {
    id: 'empire-borders-within',
    title: 'Empire: Borders Within',
    author: 'John Payne',
    genre: 'Thriller',
    tagline: 'A gripping tale of global power, hidden boundaries, and unified defiance.',
    description: 'A tense, high-stakes geopolitical thriller exploring global surveillance, hidden borders, and human resilience under extraordinary pressure.',
    coverImage: '/images/book-empire-borders-within.jpg',
    year: 2024,
    featured: true,
    formats: ['Hardcover', 'Paperback', 'eBook', 'Audiobook'],
    specs: {
      pages: 416,
      trimSize: '6 × 9 in / 152 × 229 mm',
      binding: 'Case Laminate Cloth with Foil Deboss',
      isbn: '978-1-915420-01-2',
    },
    reviewQuote: 'A towering geopolitical thriller demonstrating magnificent narrative tension and vision.',
    reviewSource: 'Literary Review Quarterly',
  },
  {
    id: 'the-rat-race',
    title: 'The Rat Race',
    author: 'William Murphy',
    genre: 'Non-Fiction',
    tagline: 'How It All Began And How It Will End.',
    description: 'An incisive, thought-provoking examination of societal cycles, economic mazes, and the architectural pressure points of modern human ambition.',
    coverImage: '/images/book-the-rat-race.jpg',
    year: 2024,
    featured: false,
    formats: ['Hardcover', 'Paperback', 'eBook'],
    specs: {
      pages: 368,
      trimSize: '5.5 × 8.5 in / 140 × 216 mm',
      binding: 'Matte Hardcover with Spot UV',
      isbn: '978-1-915420-04-3',
    },
    reviewQuote: 'Essential, chilling, and meticulously evidenced. A masterclass in modern commentary.',
    reviewSource: 'Economics & Society Journal',
  },
  {
    id: 'feel',
    title: 'Feel',
    author: 'Lily Mathers',
    genre: 'Children\'s',
    tagline: 'What Am I Feeling Right Now?',
    description: 'A beautifully illustrated emotional journey encouraging self-awareness, compassion, and gentle emotional literacy for young readers and families.',
    coverImage: '/images/book-feel.jpg',
    year: 2024,
    featured: false,
    formats: ['Hardcover', 'Paperback', 'eBook'],
    specs: {
      pages: 48,
      trimSize: '8 × 10 in / 203 × 254 mm',
      binding: 'Laminated Hardcover Board',
      isbn: '978-1-915420-07-4',
    },
    reviewQuote: 'A heartwarming, essential guide to helping children navigate their internal world.',
    reviewSource: 'Childhood & Family Digest',
  },
  {
    id: 'expression',
    title: 'Expression',
    author: 'Chris Walker & Linda Walker',
    genre: 'Memoir',
    tagline: 'The Different Perspectives of Love.',
    description: 'An evocative dual-perspective narrative capturing the multifaceted dimensions of love across youth, maturity, and lifelong companionship.',
    coverImage: '/images/book-expression.jpg',
    year: 2024,
    featured: false,
    formats: ['Hardcover', 'Paperback', 'eBook', 'Audiobook'],
    specs: {
      pages: 312,
      trimSize: '5.25 × 8 in / 133 × 203 mm',
      binding: 'Soft-Touch Matte with Gold Foil',
      isbn: '978-1-915420-11-1',
    },
    reviewQuote: 'A tender, deeply resonant exploration of connection across a lifetime.',
    reviewSource: 'European Memoir Review',
  },
  {
    id: 'would-i-could-i-should-i',
    title: 'Would I? Could I? Should I?',
    author: 'Wallace Murray',
    genre: 'Self-Help',
    tagline: 'A Dive Into The World Of Procrastination.',
    description: 'A pragmatic, psychologically grounded blueprint for confronting hesitation loops, conquering mental friction, and reclaiming decisive momentum.',
    coverImage: '/images/book-would-i-could-i-should-i.jpg',
    year: 2024,
    featured: false,
    formats: ['Hardcover', 'Paperback', 'eBook'],
    specs: {
      pages: 280,
      trimSize: '5.5 × 8.5 in / 140 × 216 mm',
      binding: 'Trade Paperback with French Flaps',
      isbn: '978-1-915420-15-9',
    },
    reviewQuote: 'Brilliantly actionable strategies for overcoming hesitation and achieving clarity.',
    reviewSource: 'Mind & Action Chronicle',
  },
  {
    id: 'sixth-title-reserved',
    title: '6th Title Reserved',
    author: 'Royal Quill Publishers',
    genre: 'Fiction',
    tagline: '6th Title Coming Soon — Currently in Editorial Production.',
    description: 'A forthcoming literary work currently undergoing final galley proofing, jacket wrap crafting, and print master validation at Royal Quill Publishers.',
    coverImage: '/images/upcoming-6.jpg',
    year: 2024,
    featured: false,
    formats: ['Hardcover', 'Paperback', 'eBook'],
    specs: {
      pages: 320,
      trimSize: '6 × 9 in / 152 × 229 mm',
      binding: 'Clothbound Hardcover',
      isbn: '978-1-915420-99-9',
    },
    reviewQuote: 'Currently in final production phase.',
    reviewSource: 'Royal Quill Publishing Announcement',
  },
];

export const portfolioGenres = [
  'All',
  'Fiction',
  'Non-Fiction',
  'Memoir',
  'Business',
  'Thriller',
  'Self-Help',
  'Children\'s',
  'Romance'
] as const;

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
  };
}

export const books: Book[] = [
  {
    id: 'empire-borders-within',
    title: 'Empire: Borders Within',
    author: 'John Payne',
    genre: 'Thriller',
    tagline: 'A gripping tale of global power, hidden boundaries, and unified defiance.',
    description: 'A geopolitical thriller about surveillance, hidden borders, and resistance under pressure.',
    coverImage: '/images/book-empire-borders-within.jpg',
    year: 2024,
    featured: true,
    formats: ['Hardcover', 'Paperback', 'eBook', 'Audiobook'],
    specs: {
      pages: 416,
      trimSize: '6 × 9 in / 152 × 229 mm',
      binding: 'Case Laminate Cloth with Foil Deboss',
    },
  },
  {
    id: 'the-rat-race',
    title: 'The Rat Race',
    author: 'William Murphy',
    genre: 'Non-Fiction',
    tagline: 'How It All Began And How It Will End.',
    description: 'A non-fiction examination of social and economic systems and the pressures they create.',
    coverImage: '/images/book-the-rat-race.jpg',
    year: 2024,
    featured: false,
    formats: ['Hardcover', 'Paperback', 'eBook'],
    specs: {
      pages: 368,
      trimSize: '5.5 × 8.5 in / 140 × 216 mm',
      binding: 'Matte Hardcover with Spot UV',
    },
  },
  {
    id: 'feel',
    title: 'Feel',
    author: 'Lily Mathers',
    genre: 'Children\'s',
    tagline: 'What Am I Feeling Right Now?',
    description: 'An illustrated book that helps children and families talk about feelings and emotional awareness.',
    coverImage: '/images/book-feel.jpg',
    year: 2024,
    featured: false,
    formats: ['Hardcover', 'Paperback', 'eBook'],
    specs: {
      pages: 48,
      trimSize: '8 × 10 in / 203 × 254 mm',
      binding: 'Laminated Hardcover Board',
    },
  },
  {
    id: 'expression',
    title: 'Expression',
    author: 'Chris Walker & Linda Walker',
    genre: 'Memoir',
    tagline: 'The Different Perspectives of Love.',
    description: 'A dual-perspective memoir about love, maturity, and lifelong companionship.',
    coverImage: '/images/book-expression.jpg',
    year: 2024,
    featured: false,
    formats: ['Hardcover', 'Paperback', 'eBook', 'Audiobook'],
    specs: {
      pages: 312,
      trimSize: '5.25 × 8 in / 133 × 203 mm',
      binding: 'Soft-Touch Matte with Gold Foil',
    },
  },
  {
    id: 'would-i-could-i-should-i',
    title: 'Would I? Could I? Should I?',
    author: 'Wallace Murray',
    genre: 'Self-Help',
    tagline: 'A Dive Into The World Of Procrastination.',
    description: 'A practical guide to understanding procrastination and making more deliberate decisions.',
    coverImage: '/images/book-would-i-could-i-should-i.jpg',
    year: 2024,
    featured: false,
    formats: ['Hardcover', 'Paperback', 'eBook'],
    specs: {
      pages: 280,
      trimSize: '5.5 × 8.5 in / 140 × 216 mm',
      binding: 'Trade Paperback with French Flaps',
    },
  },
  {
    id: 'we-love-jesus',
    title: 'We Love Jesus',
    author: 'David Addington',
    genre: 'Non-Fiction',
    tagline: 'An Interfaith Analysis of Jesus in Christianity and Islam.',
    description: 'An interfaith study of the historical and theological place of Jesus in Christianity and Islam.',
    coverImage: '/images/hero-book-we-love-jesus.jpg',
    year: 2024,
    featured: false,
    formats: ['Hardcover', 'Paperback', 'eBook', 'Audiobook'],
    specs: {
      pages: 340,
      trimSize: '6 × 9 in / 152 × 229 mm',
      binding: 'Hardcover Case Laminate',
    },
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

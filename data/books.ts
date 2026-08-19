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
    id: 'echoes-of-empire',
    title: 'Echoes of Empire',
    author: 'Dr. Amara Osei',
    genre: 'Fiction',
    tagline: 'A multigenerational epic across continents and revolutions.',
    description: 'A sweeping historical epic tracing five generations of a West African dynasty through the tides of colonialism, independence, and contemporary diaspora.',
    coverImage: '/images/book-echoes-of-empire.jpg',
    year: 2024,
    featured: true,
    formats: ['Hardcover', 'Paperback', 'eBook', 'Audiobook'],
    specs: {
      pages: 468,
      trimSize: '6 × 9 in / 152 × 229 mm',
      binding: 'Case Laminate Cloth with Foil Deboss',
      isbn: '978-1-915420-01-2',
    },
    reviewQuote: 'A towering literary achievement that demonstrates the supreme power of independent narrative ownership.',
    reviewSource: 'Literary Review Quarterly',
  },
  {
    id: 'the-silent-calculus',
    title: 'The Silent Calculus',
    author: 'Professor James Whitmore',
    genre: 'Non-Fiction',
    tagline: 'The invisible algorithms directing human choice.',
    description: 'An incisive, rigorous examination of how algorithmic decision-making quietly shapes criminal justice, institutional hiring, and civil liberties across modern democracies.',
    coverImage: '/images/book-the-silent-calculus.jpg',
    year: 2024,
    featured: true,
    formats: ['Hardcover', 'Paperback', 'eBook'],
    specs: {
      pages: 384,
      trimSize: '5.5 × 8.5 in / 140 × 216 mm',
      binding: 'Matte Hardcover with Spot UV',
      isbn: '978-1-915420-04-3',
    },
    reviewQuote: 'Essential, chilling, and meticulously evidenced. A masterclass in accessible academic publishing.',
    reviewSource: 'Technology & Policy Review',
  },
  {
    id: 'letters-to-no-one',
    title: 'Letters to No One',
    author: 'Isabella Marchetti',
    genre: 'Memoir',
    tagline: 'An intimate portrait of grief, resilience, and reclaiming a self.',
    description: 'A luminous, unflinching memoir exploring loss, creative solitude, and the quiet architecture of rebuilding a life in the Tuscan countryside after personal tragedy.',
    coverImage: '/images/book-letters-to-no-one.jpg',
    year: 2023,
    featured: true,
    formats: ['Hardcover', 'eBook', 'Audiobook'],
    specs: {
      pages: 296,
      trimSize: '5.25 × 8 in / 133 × 203 mm',
      binding: 'Linen Spine with French Flaps',
      isbn: '978-1-915420-07-4',
    },
    reviewQuote: 'Profoundly moving prose that lingers long after the final page.',
    reviewSource: 'European Memoir Digest',
  },
  {
    id: 'the-founders-compass',
    title: 'The Founder\'s Compass',
    author: 'Kwame Asante-Hughes',
    genre: 'Business',
    tagline: 'Navigating venture, capital, and legacy without losing your soul.',
    description: 'A pragmatic and philosophical field guide for first-generation founders confronting venture dynamics, board governance, and the psychology of scale.',
    coverImage: '/images/book-the-founders-compass.jpg',
    year: 2023,
    featured: false,
    formats: ['Hardcover', 'Paperback', 'eBook'],
    specs: {
      pages: 320,
      trimSize: '6 × 9 in / 152 × 229 mm',
      binding: 'Soft-Touch Matte Paperback',
      isbn: '978-1-915420-11-1',
    },
    reviewQuote: 'The rare business book that treats executive leadership with literary depth.',
    reviewSource: 'Venture & Growth Journal',
  },
  {
    id: 'midnight-in-nairobi',
    title: 'Midnight in Nairobi',
    author: 'Zara Kimani',
    genre: 'Thriller',
    tagline: 'Power, shadow diplomacy, and a detective running out of runway.',
    description: 'A high-velocity noir thriller set against the skyline of contemporary Nairobi, where a disgraced investigative detective uncovers a multi-billion-shilling conspiracy.',
    coverImage: '/images/book-midnight-in-nairobi.jpg',
    year: 2024,
    featured: false,
    formats: ['Paperback', 'eBook'],
    specs: {
      pages: 412,
      trimSize: '5 × 8 in / 127 × 203 mm',
      binding: 'High-Gloss Trade Paperback',
      isbn: '978-1-915420-15-9',
    },
    reviewQuote: 'Electrifying pace, brilliant sense of place, and unrelenting tension.',
    reviewSource: 'Global Noir Weekly',
  },
  {
    id: 'the-quantum-self',
    title: 'The Quantum Self',
    author: 'Dr. Priya Nair',
    genre: 'Self-Help',
    tagline: 'Bridging contemplative neuroscience and quantum principles.',
    description: 'A groundbreaking exploration uniting quantum probability models with cognitive neurobiology to unlock sustainable creative focus and emotional resilience.',
    coverImage: '/images/book-the-quantum-self.jpg',
    year: 2023,
    featured: false,
    formats: ['Hardcover', 'eBook', 'Audiobook'],
    specs: {
      pages: 340,
      trimSize: '5.5 × 8.5 in / 140 × 216 mm',
      binding: 'Embossed Hardcover',
      isbn: '978-1-915420-22-7',
    },
    reviewQuote: 'Transforms complex physics into actionable self-mastery.',
    reviewSource: 'Mind & Science Chronicle',
  },
  {
    id: 'gilded-wounds',
    title: 'Gilded Wounds',
    author: 'Marcus Delacroix',
    genre: 'Poetry',
    tagline: 'Lyrical reflections on displacement, inheritance, and grace.',
    description: 'A devastatingly beautiful collection of 64 poems traversing migration, urban alienation, and the enduring resonance of ancestral lineage.',
    coverImage: '/images/book-gilded-wounds.jpg',
    year: 2024,
    featured: false,
    formats: ['Hardcover', 'Paperback', 'eBook'],
    specs: {
      pages: 144,
      trimSize: '5 × 7.5 in / 127 × 190 mm',
      binding: 'Custom Cream Paper with Ribbon Bookmark',
      isbn: '978-1-915420-30-2',
    },
    reviewQuote: 'Every stanza is weighted with precision, melancholy, and rare light.',
    reviewSource: 'Contemporary Poetry Review',
  },
  {
    id: 'sovereign-mind',
    title: 'Sovereign Mind',
    author: 'Eleanor Voss',
    genre: 'Non-Fiction',
    tagline: 'Reclaiming mental autonomy in the hyper-connected era.',
    description: 'A research-backed blueprint for shielding your focus, deep thinking, and creative autonomy against algorithmic attention merchants and constant distraction.',
    coverImage: '/images/book-sovereign-mind.jpg',
    year: 2023,
    featured: false,
    formats: ['Hardcover', 'Paperback', 'eBook'],
    specs: {
      pages: 308,
      trimSize: '5.5 × 8.5 in / 140 × 216 mm',
      binding: 'Linen Cloth Hardcover',
      isbn: '978-1-915420-38-8',
    },
    reviewQuote: 'The antidote to digital overwhelm we have desperately needed.',
    reviewSource: 'The British Literary Post',
  },
];

export const portfolioGenres = [
  'All',
  'Fiction',
  'Non-Fiction',
  'Memoir',
  'Business',
  'Thriller',
  'Poetry',
  'Self-Help'
] as const;

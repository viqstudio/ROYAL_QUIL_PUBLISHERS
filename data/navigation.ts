export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export const mainNavigation: NavLink[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'All Services', href: '/services', description: 'View our complete publishing services' },
      { label: 'Ghostwriting', href: '/services/ghostwriting', description: 'Turn your ideas into a complete manuscript' },
      { label: 'Book Writing & Co-Authoring', href: '/services/book-writing', description: 'Collaborative manuscript development' },
      { label: 'Developmental & Line Editing', href: '/services/editing', description: 'Structural, line and copy editing' },
      { label: 'Proofreading', href: '/services/proofreading', description: 'Final review and error correction' },
      { label: 'Book Cover Design', href: '/services/cover-design', description: 'Custom cover design and typography' },
      { label: 'Book Formatting', href: '/services/formatting', description: 'Typesetting for print, Kindle and EPUB' },
      { label: 'Publishing & Distribution', href: '/services/publishing', description: 'Retail setup, metadata and distribution' },
      { label: 'Book Marketing & Launch', href: '/services/book-marketing', description: 'Amazon A+ content, reviews and PR' },
      { label: 'Author Website Design', href: '/services/author-website', description: 'Professional author web presence' },
      { label: 'Cinematic Book Trailers', href: '/services/book-trailer', description: 'Video trailers for promotion and launch' },
      { label: 'Audiobook Production', href: '/services/audiobook', description: 'Voice narration and audio production' },
      { label: 'Custom Book Printing', href: '/services/printing', description: 'Hardcover, paperback and print-on-demand' },
    ]
  },
  {
    label: 'Publishing',
    href: '/publishing',
  },
  {
    label: 'Our Work',
    href: '/portfolio',
  },
  {
    label: 'Process',
    href: '/process',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'FAQ',
    href: '/faq',
  }
];

export const footerServices = [
  { label: 'Ghostwriting', href: '/services/ghostwriting' },
  { label: 'Book Writing & Co-Authoring', href: '/services/book-writing' },
  { label: 'Developmental & Line Editing', href: '/services/editing' },
  { label: 'Proofreading', href: '/services/proofreading' },
  { label: 'Book Cover Design', href: '/services/cover-design' },
  { label: 'Book Formatting', href: '/services/formatting' },
  { label: 'Publishing & Distribution', href: '/services/publishing' },
  { label: 'Book Marketing & Launch', href: '/services/book-marketing' },
  { label: 'Author Website Design', href: '/services/author-website' },
  { label: 'Cinematic Book Trailers', href: '/services/book-trailer' },
  { label: 'Audiobook Production', href: '/services/audiobook' },
  { label: 'Custom Book Printing', href: '/services/printing' },
];

export const footerCompany = [
  { label: 'About', href: '/about' },
  { label: 'Our Process', href: '/process' },
  { label: 'Our Work', href: '/portfolio' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
];

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
      { label: 'All Services Overview', href: '/services', description: 'Explore our complete 6-pillar publishing framework' },
      { label: 'Ghostwriting', href: '/services/ghostwriting', description: 'Turn your ideas into a complete manuscript' },
      { label: 'Book Writing', href: '/services/book-writing', description: 'Co-authoring & manuscript developmental writing' },
      { label: 'Editing', href: '/services/editing', description: 'Structural, line, and copyediting' },
      { label: 'Proofreading', href: '/services/proofreading', description: 'Final typographical and galley verification' },
      { label: 'Book Cover Design', href: '/services/cover-design', description: 'Bespoke custom typography & jacket design' },
      { label: 'eBook & Print Formatting', href: '/services/formatting', description: 'Typesetting for print, Kindle, and EPUB' },
      { label: 'Global Publishing & ISBN', href: '/services/publishing', description: 'Amazon KDP, Apple, Kobo, and Bowker/Nielsen ISBN' },
      { label: 'Book Marketing', href: '/services/book-marketing', description: 'Amazon A+ content, ARC reviews, and PR' },
      { label: 'Author Website', href: '/services/author-website', description: 'Bespoke digital portfolios for authors' },
      { label: 'Book Trailer', href: '/services/book-trailer', description: 'Cinematic video trailers for social & launch' },
      { label: 'Audiobook Production', href: '/services/audiobook', description: 'Voice casting & studio narration for Audible' },
      { label: 'Book Printing', href: '/services/printing', description: 'Luxury hardcovers, offset runs & POD' },
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
    label: 'Our Process',
    href: '/process',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'FAQ',
    href: '/faq',
  },
  {
    label: 'Contact',
    href: '/contact',
  }
];

export const footerServices = [
  { label: 'Ghostwriting', href: '/services/ghostwriting' },
  { label: 'Book Writing', href: '/services/book-writing' },
  { label: 'Editing', href: '/services/editing' },
  { label: 'Proofreading', href: '/services/proofreading' },
  { label: 'Cover Design', href: '/services/cover-design' },
  { label: 'Formatting', href: '/services/formatting' },
  { label: 'Publishing & ISBN', href: '/services/publishing' },
  { label: 'Book Marketing', href: '/services/book-marketing' },
  { label: 'Author Websites', href: '/services/author-website' },
  { label: 'Book Trailers', href: '/services/book-trailer' },
  { label: 'Audiobooks', href: '/services/audiobook' },
  { label: 'Custom Printing', href: '/services/printing' },
];

export const footerCompany = [
  { label: 'About Royal Quill', href: '/about' },
  { label: 'Our 4-Stage Process', href: '/process' },
  { label: 'Featured Portfolio', href: '/portfolio' },
  { label: 'Author FAQs', href: '/faq' },
  { label: 'Contact & Consultations', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
];

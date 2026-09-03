import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Published Book Portfolio | Royal Quill Publishers',
  description: 'Explore books prepared for publication by the Royal Quill Publishers editorial, design and production team.',
  keywords: ['published book portfolio', 'self-publishing case studies', 'independent author success stories'],
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}

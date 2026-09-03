import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Self-Publishing FAQ | Royal Quill Publishers',
  description: 'Clear answers to common questions about self-publishing, author rights, formats, timelines and working with Royal Quill Publishers.',
  keywords: ['self-publishing FAQ', 'book publishing questions answered', 'how does self-publishing work'],
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}

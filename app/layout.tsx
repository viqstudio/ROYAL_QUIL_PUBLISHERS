import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import { ConsultationProvider } from '@/context/ConsultationContext';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ConsultationModal } from '@/components/features/ConsultationModal';
import '../styles/globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Royal Quill Publishers | Independent Book Publishing Services',
  description: 'Royal Quill Publishers provides professional writing, editing, design, publishing, and marketing support for independent authors.',
  keywords: [
    'book publishing',
    'self publishing UK',
    'book publishing services',
    'ghostwriting',
    'book editing',
    'book cover design',
    'book formatting',
    'Amazon KDP publishing',
    'audiobook production',
    'book printing'
  ],
  authors: [{ name: 'Royal Quill Publishers' }],
  metadataBase: new URL('https://royalquillpublishers.com'),
  openGraph: {
    title: 'Royal Quill Publishers | Professional Publishing for Independent Authors',
    description: 'Professional editorial, book design, publishing, and marketing services for independent authors.',
    siteName: 'Royal Quill Publishers',
    locale: 'en_GB',
    type: 'website',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <body>
        <ConsultationProvider>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <ConsultationModal />
        </ConsultationProvider>
      </body>
    </html>
  );
}

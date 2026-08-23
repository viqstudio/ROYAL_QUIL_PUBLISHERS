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
  title: 'Royal Quill Publishers | Premium Book Publishing & Author Services',
  description: 'Royal Quill Publishers helps independent authors transform ideas and manuscripts into professionally written, edited, designed, and published books — while retaining 100% ownership, rights, and royalties.',
  keywords: [
    'book publishing',
    'self publishing UK',
    'book publishing services UK',
    'ghostwriting services',
    'book editing',
    'book cover design',
    'book formatting',
    'Amazon KDP publishing',
    'audiobook production',
    'custom book printing'
  ],
  authors: [{ name: 'Royal Quill Publishers' }],
  metadataBase: new URL('https://royalquillpublishers.com'),
  openGraph: {
    title: 'Royal Quill Publishers | Your Story Deserves to Be a Published Book',
    description: 'Transform your manuscript into a professionally published book. You keep 100% ownership, rights, and royalties.',
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

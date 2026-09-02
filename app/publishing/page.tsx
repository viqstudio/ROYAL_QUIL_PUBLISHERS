import type { Metadata } from 'next';
import { publishingPlatforms } from '@/data/platforms';
import { PageHeader } from '@/components/layout/PageHeader';
import { PlatformLogo } from '@/components/ui/PlatformLogo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Publishing & Distribution | Royal Quill Publishers',
  description: 'Book publishing setup and distribution support for Amazon, Apple Books, Kobo, Barnes & Noble, and Ingram.',
};

export default function PublishingPage() {
  return (
    <div className={styles.publishingPage}>
      <PageHeader
        eyebrow="PUBLISHING & DISTRIBUTION"
        title="Prepare Your Book for Publication"
        subtitle="We prepare print and digital editions for the retail and distribution channels agreed for your book."
        imageSrc="/images/header-publishing.jpg"
        imageAlt="Publishing reference books, fountain pen, and manuscript desk"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Publishing' }]}
      />

      <section className={styles.platformNetworkSection}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="DISTRIBUTION CHANNELS"
            title="Retail and Wholesale Networks"
            subtitle="Available channels depend on your book format, target territories, and chosen distribution route."
          />

          <div className={styles.networkGrid}>
            {publishingPlatforms.map((platform) => (
              <article key={platform.id} className={styles.platformCard}>
                <PlatformLogo id={platform.id} />
                <div className={styles.platformHeader}>
                  <span className={styles.platformTag}>{platform.category}</span>
                  <h3 className={styles.platformTitle}>{platform.name}</h3>
                </div>
                <p className={styles.platformDesc}>{platform.description}</p>
                <div className={styles.formatsRow}>
                  {platform.formats.map((format) => <span key={format} className={styles.formatBadge}>{format}</span>)}
                </div>
              </article>
            ))}
          </div>

          <p className={styles.disclaimerText}>
            Platform names and trademarks belong to their respective owners and are shown to identify potential publication channels.
          </p>
        </div>
      </section>

      <section className={styles.comparisonSection}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="WHAT WE HANDLE"
            title="Publishing Administration and File Preparation"
            subtitle="The exact work is confirmed in your project scope before publication begins."
          />
          <div className={styles.supportGrid}>
            <article className={styles.supportCard}>
              <h3>Edition Preparation</h3>
              <p>Final file checks for paperback, hardcover, eBook, or audiobook editions included in your project.</p>
            </article>
            <article className={styles.supportCard}>
              <h3>Metadata & ISBN Support</h3>
              <p>Support with ISBN assignment where required, barcodes, descriptions, categories, keywords, and bibliographic data.</p>
            </article>
            <article className={styles.supportCard}>
              <h3>Retail Setup</h3>
              <p>Configuration of the selected retailer and distribution listings, followed by checks when the book goes live.</p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaHeading}>Ready to Prepare Your Book for Publication?</h2>
            <p className={styles.ctaText}>Tell us which formats and retail channels you are considering.</p>
            <Button variant="primary" size="lg" href="/contact">Discuss Your Book</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

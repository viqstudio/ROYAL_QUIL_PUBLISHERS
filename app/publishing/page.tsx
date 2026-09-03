import type { Metadata } from 'next';
import { publishingPlatforms } from '@/data/platforms';
import { PageHeader } from '@/components/layout/PageHeader';
import { PlatformLogo } from '@/components/ui/PlatformLogo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Independent Publishing Partner | Royal Quill Publishers',
  description: 'Publish your book independently with professional editorial, design, production and distribution support while retaining your rights.',
  keywords: ['independent publishing house', 'self-publishing partner', 'author rights retained', 'publish a book independently'],
};

const supportedPlatforms = publishingPlatforms.filter((platform) =>
  ['amazon-kdp', 'apple-books', 'barnes-and-noble', 'kobo', 'ingram'].includes(platform.id)
);

export default function PublishingPage() {
  return (
    <div className={styles.publishingPage}>
      <PageHeader
        eyebrow="INDEPENDENT PUBLISHING"
        title="A Publishing Partner, Not a Gatekeeper"
        subtitle="Professional editorial, design and production support without an acquisitions process or giving up ownership of your work."
        imageSrc="/images/header-publishing.jpg"
        imageAlt="Publishing reference books, fountain pen and manuscript desk"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Publishing' }]}
      />

      <section className={styles.comparisonSection}>
        <div className={styles.container}>
          <SectionHeading eyebrow="OUR APPROACH" title="Publishing Built Around Your Book" />
          <div className={styles.editorialCopy}>
            <p>Royal Quill Publishers exists to give independent authors access to the same standard of editorial, design and production support offered by traditional publishing houses, without asking authors to give up ownership of their work or wait for acceptance from an acquisitions team.</p>
            <p>Every book we work on is commissioned directly by its author. There is no submission process to be accepted or rejected. Instead, we review your manuscript, agree what support it needs, and build a project scope around your goals and budget.</p>
          </div>
        </div>
      </section>

      <section className={styles.platformNetworkSection}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="PUBLICATION SETUP"
            title="How Publishing With Us Works"
            subtitle="Once your manuscript, cover and interior are approved by you, we prepare the files for publication across the platforms selected for your project and coordinate the technical setup so your book goes live correctly on every chosen channel."
          />
          <h3 className={styles.formatsTitle}>Formats We Support</h3>
          <div className={styles.supportGrid}>
            <article className={styles.supportCard}>
              <h3>eBook</h3>
              <p>eBook editions formatted for Kindle and EPUB-compatible retailers.</p>
            </article>
            <article className={styles.supportCard}>
              <h3>Paperback & Hardcover</h3>
              <p>Paperback and hardcover editions formatted for print-on-demand and offset printing.</p>
            </article>
            <article className={styles.supportCard}>
              <h3>Audiobook</h3>
              <p>Audiobook editions produced for major audiobook platforms.</p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.comparisonSection}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="RETAIL & DISTRIBUTION PLATFORMS"
            title="Retail and Distribution Platforms"
            subtitle="We support publication across Amazon KDP, Apple Books, Barnes & Noble, Rakuten Kobo and IngramSpark, with platform availability depending on the format, territory and distribution route agreed for your book."
          />
          <div className={styles.networkGrid}>
            {supportedPlatforms.map((platform) => (
              <article key={platform.id} className={styles.platformCard}>
                <PlatformLogo id={platform.id} />
                <div className={styles.platformHeader}>
                  <span className={styles.platformTag}>{platform.category}</span>
                  <h3 className={styles.platformTitle}>{platform.name}</h3>
                </div>
                <div className={styles.formatsRow}>
                  {platform.formats.map((format) => <span key={format} className={styles.formatBadge}>{format}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.rightsSection}>
        <div className={styles.container}>
          <div className={styles.rightsPanel}>
            <span className={styles.rightsEyebrow}>AUTHOR CONTROL</span>
            <h2>Ownership and Royalties</h2>
            <p>Your manuscript remains your copyright throughout. Retailer accounts and royalty payments are set up on the terms agreed for your specific project, and full details are confirmed in writing before publication.</p>
          </div>
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaHeading}>Ready to Publish Independently?</h2>
            <p className={styles.ctaText}>Tell us about your manuscript, preferred formats and publishing goals.</p>
            <Button variant="primary" size="lg" href="/contact">Discuss Your Book</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from 'next';
import { publishingPlatforms } from '@/data/platforms';
import { PageHeader } from '@/components/layout/PageHeader';
import { PlatformLogo } from '@/components/ui/PlatformLogo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Global Publishing & Distribution | Royal Quill Publishers',
  description: 'Learn how Royal Quill Publishers connects your title to Amazon KDP, Apple Books, Kobo, Barnes & Noble, and Ingram Content Group while you retain 100% rights, ownership, and royalties.',
};

export default function PublishingPage() {
  return (
    <div className={styles.publishingPage}>
      {/* CINEMATIC PAGE HEADER */}
      <PageHeader
        eyebrow="GLOBAL DISTRIBUTION & METADATA"
        title="Publish Where Your Readers Already Are"
        subtitle="We connect your manuscript directly into Amazon, Apple Books, Barnes & Noble, Kobo, and Ingram — while registering official ISBNs in your name."
        imageSrc="/images/header-publishing.jpg"
        imageAlt="British Literature reference volumes, fountain pen, and editor desk"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Global Publishing & Distribution' },
        ]}
      />

      {/* PLATFORM NETWORK */}
      <section className={styles.platformNetworkSection}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="DISTRIBUTION ECOSYSTEM"
            title="The Retailers & Wholesale Networks We Deploy To"
            subtitle="Your book is prepared to exacting technical standards for immediate global availability."
          />

          <div className={styles.networkGrid}>
            {publishingPlatforms.map((platform) => (
              <div key={platform.id} className={styles.platformCard}>
                <PlatformLogo id={platform.id} />
                <div className={styles.platformHeader}>
                  <span className={styles.platformTag}>{platform.category}</span>
                  <h3 className={styles.platformTitle}>{platform.name}</h3>
                </div>
                <p className={styles.platformDesc}>{platform.description}</p>
                <div className={styles.reachBlock}>
                  <span className={styles.reachLabel}>Market Reach:</span>
                  <p className={styles.reachText}>{platform.reach}</p>
                </div>
                <div className={styles.formatsRow}>
                  {platform.formats.map((fmt, i) => (
                    <span key={i} className={styles.formatBadge}>{fmt}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.disclaimerText}>
            All platform names, logos, and trademarks are the property of their respective owners and are referenced solely to identify publication availability.
          </div>
        </div>
      </section>

      {/* ROYALTY & RIGHTS COMPARISON TABLE */}
      <section className={styles.comparisonSection}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="TRANSPARENT FINANCIAL COMPARISON"
            title="How Publishing Models Compare"
            subtitle="Compare royalty structures, copyright retention, and publishing control."
          />

          <div className={styles.tableWrapper}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th>Publishing Feature</th>
                  <th>Traditional Imprints</th>
                  <th>Vanity / Hybrid Presses</th>
                  <th className={styles.highlightHeader}>Royal Quill Publishers</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Author Royalty Share</strong></td>
                  <td>10% – 15% Net</td>
                  <td>20% – 50% Net</td>
                  <td className={styles.highlightCell}><strong>100% of Net Royalties</strong></td>
                </tr>
                <tr>
                  <td><strong>Manuscript Copyright</strong></td>
                  <td>Transferred to Publisher</td>
                  <td>Often Split or Restricted</td>
                  <td className={styles.highlightCell}><strong>100% Owned by Author</strong></td>
                </tr>
                <tr>
                  <td><strong>ISBN Legal Ownership</strong></td>
                  <td>Publisher Imprint</td>
                  <td>Press Imprint</td>
                  <td className={styles.highlightCell}><strong>Registered in Author&apos;s Name</strong></td>
                </tr>
                <tr>
                  <td><strong>Master File Handoff</strong></td>
                  <td>Publisher Withholds</td>
                  <td>Additional Fees Required</td>
                  <td className={styles.highlightCell}><strong>Full High-Res PDF & EPUB Handoff</strong></td>
                </tr>
                <tr>
                  <td><strong>Publishing Timeline</strong></td>
                  <td>18 – 24 Months</td>
                  <td>6 – 12 Months</td>
                  <td className={styles.highlightCell}><strong>8 – 16 Weeks Dedicated</strong></td>
                </tr>
                <tr>
                  <td><strong>Creative Sign-Off</strong></td>
                  <td>Publisher Dictates</td>
                  <td>Limited Iterations</td>
                  <td className={styles.highlightCell}><strong>Full Author Approval on All Drafts</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ISBN & LEGAL ADVISORY */}
      <section className={styles.isbnSection}>
        <div className={styles.container}>
          <div className={styles.isbnGrid}>
            <div className={styles.isbnTextCol}>
              <span className={styles.isbnEyebrow}>BIBLIOGRAPHIC STANDARDS</span>
              <h2 className={styles.isbnTitle}>Why Author-Owned ISBNs Matter</h2>
              <p className={styles.isbnBody}>
                An International Standard Book Number (ISBN) is the legal identifier of your published work. Many commercial publishing services register ISBNs under their own corporate name, legally defining themselves as the publisher of record and limiting where your book can be sold.
              </p>
              <p className={styles.isbnBody}>
                At Royal Quill Publishers, we register all ISBNs directly under your name or your private imprint through official national agencies (Nielsen in the UK, Bowker in the US). You own your book&apos;s legal identity permanently.
              </p>
            </div>

            <div className={styles.isbnCard}>
              <h3 className={styles.isbnCardHead}>Official Indexing Inclusions</h3>
              <ul className={styles.isbnList}>
                <li>Official Bowker / Nielsen Database Registration</li>
                <li>EAN-13 Barcodes with Embedded Price Codes</li>
                <li>BISAC / BIC Subject Category Taxonomy Optimization</li>
                <li>Library of Congress (LCCN) & British Library Legal Deposit</li>
                <li>Global Trade Item Numbers (GTIN)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className={styles.ctaBanner}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaHeading}>Begin Your Publishing Setup</h2>
            <p className={styles.ctaText}>
              Speak with our distribution strategists to configure your international publishing roadmap.
            </p>
            <Button variant="primary" size="lg" href="/contact">
              Start Your Publishing Journey
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

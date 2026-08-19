import type { Metadata } from 'next';
import { PageHeader } from '@/components/layout/PageHeader';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { BrandLogo } from '@/components/ui/BrandLogo';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Royal Quill Publisher | Our Heritage, Philosophy & Standards',
  description: 'Royal Quill Publisher is a premier self-publishing and book production house. We provide end-to-end publishing support to independent authors across the UK and US while ensuring authors retain 100% ownership and royalties.',
};

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      {/* CINEMATIC PAGE HEADER */}
      <PageHeader
        eyebrow="ESTABLISHED PUBLISHING HOUSE"
        title="Publishing Built on Craftsmanship, Transparency & Author Autonomy"
        subtitle="Bridging the gap between traditional publishing prestige and modern author sovereignty. 100% rights, 100% royalties, 100% ownership."
        imageSrc="/images/Illustration 1.jpg"
        imageAlt="Editorial manuscript and fine hardcover book"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Imprint' },
        ]}
      />

      {/* CORE PHILOSOPHY & STORY */}
      <section className={styles.philosophySection}>
        <div className={styles.container}>
          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyCol}>
              <span className={styles.sectionTag}>OUR ORIGIN & PURPOSE</span>
              <h2 className={styles.sectionHeading}>Why Royal Quill Publisher Was Founded</h2>
              <p className={styles.bodyText}>
                For decades, independent authors faced an impossible trade-off: surrender the majority of their royalties and intellectual rights to a corporate publishing conglomerate, or settle for automated, template-based self-publishing agencies.
              </p>
              <p className={styles.bodyText}>
                Royal Quill Publisher was established to eliminate that compromise. Over 5+ years of dedicated practice, we have assembled senior developmental editors, award-winning book designers, master typesetters, and publishing strategists.
              </p>
              <p className={styles.bodyText}>
                Our mission is straightforward: we provide the full production infrastructure of an established publishing house, while you retain 100% legal ownership of your manuscript, rights, and earnings.
              </p>
            </div>

            <div className={styles.pillarsBox}>
              <h3 className={styles.pillarsBoxTitle}>The Four Pillars of Our Imprint</h3>
              <div className={styles.pillarItem}>
                <span className={styles.pillarNum}>01</span>
                <div>
                  <h4 className={styles.pillarHead}>Uncompromising Literary Craft</h4>
                  <p className={styles.pillarDesc}>
                    Every manuscript is edited, designed, and typeset by seasoned publishing professionals.
                  </p>
                </div>
              </div>

              <div className={styles.pillarItem}>
                <span className={styles.pillarNum}>02</span>
                <div>
                  <h4 className={styles.pillarHead}>100% Author Autonomy</h4>
                  <p className={styles.pillarDesc}>
                    You maintain complete copyright, 100% royalties, and final creative approval.
                  </p>
                </div>
              </div>

              <div className={styles.pillarItem}>
                <span className={styles.pillarNum}>03</span>
                <div>
                  <h4 className={styles.pillarHead}>Global Distribution Reach</h4>
                  <p className={styles.pillarDesc}>
                    Your book is placed directly onto Amazon, Apple Books, Kobo, Barnes & Noble, and 40,000+ bookstores worldwide.
                  </p>
                </div>
              </div>

              <div className={styles.pillarItem}>
                <span className={styles.pillarNum}>04</span>
                <div>
                  <h4 className={styles.pillarHead}>Publishing Without Mystery</h4>
                  <p className={styles.pillarDesc}>
                    Transparent milestone schedules, clear scopes, and regular direct communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL COMMITMENT */}
      <section className={styles.standardsSection}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="PUBLISHING STANDARDS"
            title="How We Treat Every Manuscript"
            subtitle="Our standard operating cadence reflects the rigor of a prestigious literary press."
          />

          <div className={styles.standardsGrid}>
            <div className={styles.standardCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardNum}>01</span>
                <h3 className={styles.cardTitle}>Rigorous Editorial Integrity</h3>
              </div>
              <p className={styles.cardText}>
                We do not employ automated software or generic spellcheckers. Every developmental review, line edit, and proofreading pass is executed by seasoned human editors who respect your creative voice.
              </p>
            </div>

            <div className={styles.standardCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardNum}>02</span>
                <h3 className={styles.cardTitle}>Bespoke Visual Typography</h3>
              </div>
              <p className={styles.cardText}>
                We never use recycled cover templates. Our book covers and interior layouts are conceived from scratch to capture the spirit of your story and command shelf presence.
              </p>
            </div>

            <div className={styles.standardCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardNum}>03</span>
                <h3 className={styles.cardTitle}>Legal & Financial Transparency</h3>
              </div>
              <p className={styles.cardText}>
                All ISBNs are registered to you. Royalties are paid directly by retailers into your own bank account. We operate with zero hidden charges and zero claims on future rights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={styles.ctaBanner}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <div className={styles.ctaLogoWrap}>
              <BrandLogo variant="dark" size="md" href="/" />
            </div>
            <h2 className={styles.ctaTitle}>Ready to Publish with Royal Quill?</h2>
            <p className={styles.ctaText}>
              Share your manuscript details with our senior editorial team for a confidential, no-obligation evaluation.
            </p>
            <div className={styles.ctaBtns}>
              <Button variant="primary" size="lg" href="/contact">
                Schedule a Manuscript Consultation
              </Button>
              <Button variant="outline-light" size="lg" href="/services">
                Explore Publishing Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from 'next';
import { PageHeader } from '@/components/layout/PageHeader';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Royal Quill Publishers | Independent Book Publishing',
  description: 'Royal Quill Publishers provides professional writing, editing, design, production, and distribution support for independent authors.',
  keywords: ['independent publishing company', 'author-first publishing team', 'book publishing services company'],
};

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      {/* PAGE HEADER */}
      <PageHeader
        eyebrow="ABOUT ROYAL QUILL"
        title="An Independent Publishing Company for Authors"
        subtitle="Professional editorial and production support from first draft to finished, published edition."
        imageSrc="/images/header-about.jpg"
        imageAlt="Classic warm library study desk and fine literature volumes"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About' },
        ]}
      />

      {/* CORE PHILOSOPHY & STORY */}
      <section className={styles.philosophySection}>
        <div className={styles.container}>
          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyCol}>
              <span className={styles.sectionTag}>ROYAL QUILL PUBLISHERS</span>
              <h2 className={styles.sectionHeading}>Who We Are</h2>
              <p className={styles.bodyText}>
                Royal Quill Publishers is an independent publishing services company supporting authors through every stage of bringing a book to market, from the first draft to a finished, published edition. Our editorial and production team works across fiction, nonfiction, poetry, memoir and children&apos;s books.
              </p>
              <span className={styles.sectionTag}>HOW WE WORK</span>
              <h2 className={styles.sectionHeading}>Our Approach</h2>
              <p className={styles.bodyText}>
                We believe independent authors deserve the same standard of editorial care and production quality as traditionally published books, without having to give up ownership of their work to get it. Every project begins with a clear conversation about what your manuscript needs, followed by a written scope you approve before any work starts.
              </p>
            </div>

            <div className={styles.pillarsBox}>
              <h3 className={styles.pillarsBoxTitle}>What Sets Us Apart</h3>
              <div className={styles.pillarItem}>
                <span className={styles.pillarNum}>01</span>
                <div>
                  <p className={styles.pillarDesc}>You retain full copyright and creative control over your manuscript at every stage.</p>
                </div>
              </div>

              <div className={styles.pillarItem}>
                <span className={styles.pillarNum}>02</span>
                <div>
                  <p className={styles.pillarDesc}>You approve the text, cover and interior before anything is published.</p>
                </div>
              </div>

              <div className={styles.pillarItem}>
                <span className={styles.pillarNum}>03</span>
                <div>
                  <p className={styles.pillarDesc}>Services can be booked individually or combined into a complete publishing package.</p>
                </div>
              </div>

              <div className={styles.pillarItem}>
                <span className={styles.pillarNum}>04</span>
                <div>
                  <p className={styles.pillarDesc}>Clear, staged communication so you always know what is happening with your project.</p>
                </div>
              </div>
              <div className={styles.pillarItem}>
                <span className={styles.pillarNum}>05</span>
                <div>
                  <p className={styles.pillarDesc}>Experience across a wide range of genres, from thrillers and poetry to children&apos;s books and nonfiction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className={styles.standardsSection}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="OUR TEAM"
            title="Our Team"
          />
          <div className={styles.teamCard}>
            <p>Our editors, designers and production specialists work directly with authors throughout their project, rather than passing work between disconnected departments. This keeps communication consistent and ensures your manuscript is handled by people who understand it from the first edit through to publication.</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={styles.ctaBanner}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>Ready to Publish Your Book?</h2>
            <p className={styles.ctaText}>
              Share your manuscript details with our editorial team for a confidential evaluation.
            </p>
            <div className={styles.ctaBtns}>
              <Button variant="primary" size="lg" href="/contact">
                Discuss Your Book
              </Button>
              <Button variant="outline-light" size="lg" href="/services">
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

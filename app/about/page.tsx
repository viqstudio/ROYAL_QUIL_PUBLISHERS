import type { Metadata } from 'next';
import { PageHeader } from '@/components/layout/PageHeader';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { BrandLogo } from '@/components/ui/BrandLogo';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Royal Quill Publishers | Independent Book Publishing',
  description: 'Royal Quill Publishers provides professional writing, editing, design, production, and distribution support for independent authors.',
};

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      {/* PAGE HEADER */}
      <PageHeader
        eyebrow="ABOUT ROYAL QUILL"
        title="Professional Publishing Support for Independent Authors"
        subtitle="Experienced editorial, design, production, and distribution support with clear author approval at every stage."
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
              <span className={styles.sectionTag}>OUR APPROACH</span>
              <h2 className={styles.sectionHeading}>Why Royal Quill Publishers Exists</h2>
              <p className={styles.bodyText}>
                Publishing a book requires several specialist disciplines. A strong manuscript still needs careful editing, appropriate design, accurate production files, and a well-managed route to market.
              </p>
              <p className={styles.bodyText}>
                Royal Quill brings those disciplines together. Our editors, designers, typesetters, and publishing team work to an agreed scope and keep authors involved in the decisions that shape their book.
              </p>
              <p className={styles.bodyText}>
                Our purpose is straightforward: help authors prepare and publish books professionally without taking ownership of their manuscripts or creative work.
              </p>
            </div>

            <div className={styles.pillarsBox}>
              <h3 className={styles.pillarsBoxTitle}>Our Core Principles</h3>
              <div className={styles.pillarItem}>
                <span className={styles.pillarNum}>01</span>
                <div>
                  <h4 className={styles.pillarHead}>Professional Quality</h4>
                  <p className={styles.pillarDesc}>
                    Every manuscript is edited, designed, and typeset by experienced specialists.
                  </p>
                </div>
              </div>

              <div className={styles.pillarItem}>
                <span className={styles.pillarNum}>02</span>
                <div>
                  <h4 className={styles.pillarHead}>Author Rights</h4>
                  <p className={styles.pillarDesc}>
                    You retain the rights to your creative work and approve the manuscript, cover, and interior.
                  </p>
                </div>
              </div>

              <div className={styles.pillarItem}>
                <span className={styles.pillarNum}>03</span>
                <div>
                  <h4 className={styles.pillarHead}>Worldwide Distribution</h4>
                  <p className={styles.pillarDesc}>
                    Your book is distributed to Amazon, Apple Books, Kobo, Barnes & Noble, and international bookstores.
                  </p>
                </div>
              </div>

              <div className={styles.pillarItem}>
                <span className={styles.pillarNum}>04</span>
                <div>
                  <h4 className={styles.pillarHead}>Clear Communication</h4>
                  <p className={styles.pillarDesc}>
                    Transparent milestone schedules, clear scopes, and direct access to your team.
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
            eyebrow="OUR STANDARDS"
            title="How We Work With Every Author"
            subtitle="Care, precision, and respect for your voice at every step."
          />

          <div className={styles.standardsGrid}>
            <div className={styles.standardCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardNum}>01</span>
                <h3 className={styles.cardTitle}>Human Editorial Review</h3>
              </div>
              <p className={styles.cardText}>
                Developmental reviews, line edits, and proofreading passes are completed by publishing professionals who work with your voice and subject matter.
              </p>
            </div>

            <div className={styles.standardCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardNum}>02</span>
                <h3 className={styles.cardTitle}>Custom Design</h3>
              </div>
              <p className={styles.cardText}>
                Cover designs and interior layouts are developed for the book, its genre, and the formats in which it will be published.
              </p>
            </div>

            <div className={styles.standardCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardNum}>03</span>
                <h3 className={styles.cardTitle}>Full Transparency</h3>
              </div>
              <p className={styles.cardText}>
                The scope, schedule, review stages, publishing setup, and file handover are agreed before production begins.
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

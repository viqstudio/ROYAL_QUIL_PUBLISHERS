import type { Metadata } from 'next';
import { publishingRoadmap } from '@/data/process';
import { PageHeader } from '@/components/layout/PageHeader';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Our Publishing Process | Royal Quill Publishers',
  description: 'Learn how Royal Quill reviews, edits, designs, prepares, and publishes books through a clear five-stage process.',
};

export default function ProcessPage() {
  return (
    <div className={styles.processPage}>
      {/* PAGE HEADER */}
      <PageHeader
        eyebrow="HOW IT WORKS"
        title="Our Publishing Process"
        subtitle="Five practical stages from manuscript review and editing to design, publication, and author support."
        imageSrc="/images/header-process.jpg"
        imageAlt="Editorial evaluation desk with laptop, proofing annotations, and review book"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Process' },
        ]}
      />

      {/* DETAILED 5-STAGE BREAKDOWN */}
      <section className={styles.stagesSection}>
        <div className={styles.container}>
          <div className={styles.stagesList}>
            {publishingRoadmap.map((stage) => (
              <div key={stage.step} className={styles.stageBlock}>
                <div className={styles.stageTopRow}>
                  <div className={styles.stageNumBadge}>
                    <span>STAGE {stage.step}</span>
                  </div>
                  <span className={styles.durationPill}>Estimated Duration: {stage.duration}</span>
                </div>

                <div className={styles.stageMainGrid}>
                  <div className={styles.stageLeftCol}>
                    <h2 className={styles.stageName}>{stage.name}</h2>
                    <span className={styles.stageSubtitle}>{stage.subtitle}</span>
                    <p className={styles.stageDesc}>{stage.description}</p>
                  </div>

                  <div className={styles.stageRightCol}>
                    <div className={styles.actionsCard}>
                      <h4 className={styles.cardHeader}>Key Actions:</h4>
                      <ul className={styles.actionList}>
                        {stage.keyActions.map((act, i) => (
                          <li key={i}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#012258" strokeWidth="2.5">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENTS STRIP */}
      <section className={styles.commitmentsSection}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="OUR PRINCIPLES"
            title="What You Can Expect"
            subtitle="Clear communication and dedicated support throughout your publishing project."
          />

          <div className={styles.commitmentsGrid}>
            <div className={styles.commitCard}>
              <h3 className={styles.commitTitle}>Dedicated Point of Contact</h3>
              <p className={styles.commitDesc}>
                You work with a dedicated specialist who coordinates all editors, designers, typesetters, and distribution tasks.
              </p>
            </div>

            <div className={styles.commitCard}>
              <h3 className={styles.commitTitle}>Author Sign-Off</h3>
              <p className={styles.commitDesc}>
                We do not proceed to printing or digital distribution without your explicit approval on all text, cover design, and interior layouts.
              </p>
            </div>

            <div className={styles.commitCard}>
              <h3 className={styles.commitTitle}>Complete File Delivery</h3>
              <p className={styles.commitDesc}>
                Upon publication, you receive all print-ready press PDFs, high-resolution cover files, and validated EPUB masters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBanner}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaHeading}>Ready to Begin?</h2>
            <p className={styles.ctaText}>
              Schedule a free consultation with our team to discuss your manuscript.
            </p>
            <Button variant="primary" size="lg" href="/contact">
              Discuss Your Book
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from 'next';
import { publishingRoadmap } from '@/data/process';
import { PageHeader } from '@/components/layout/PageHeader';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Our 4-Stage Publishing Process | Royal Quill Publisher',
  description: 'Learn how Royal Quill Publisher takes your manuscript from initial discovery to global publication through our structured 4-stage process: Discover, Create, Refine, and Publish.',
};

export default function ProcessPage() {
  return (
    <div className={styles.processPage}>
      {/* CINEMATIC PAGE HEADER */}
      <PageHeader
        eyebrow="PUBLISHING METHODOLOGY"
        title="A Structured Journey from Manuscript to Shelf"
        subtitle="Our 4-stage process provides complete milestone clarity, predictable schedules, and rigorous editorial control at every phase."
        imageSrc="/images/Illustration 5.jpg"
        imageAlt="Manuscript editing, typesetting proofs, and finished hardcover book"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: '4-Stage Publishing Process' },
        ]}
      />

      {/* DETAILED 4-STAGE BREAKDOWN */}
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
                      <h4 className={styles.cardHeader}>Key Strategic Actions:</h4>
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

                      <div className={styles.deliverablesSubBox}>
                        <h4 className={styles.delivSubHead}>Milestone Deliverables:</h4>
                        <ul className={styles.delivSubList}>
                          {stage.deliverables.map((deliv, i) => (
                            <li key={i}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D21625" strokeWidth="2.5">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                              <span>{deliv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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
            eyebrow="OUR CADENCE"
            title="The Royal Quill Quality Pledge"
            subtitle="How we ensure seamless collaboration throughout your publishing journey."
          />

          <div className={styles.commitmentsGrid}>
            <div className={styles.commitCard}>
              <h3 className={styles.commitTitle}>Dedicated Publishing Strategist</h3>
              <p className={styles.commitDesc}>
                You work with a single dedicated point of contact who coordinates all writers, editors, cover designers, and distribution specialists on your behalf.
              </p>
            </div>

            <div className={styles.commitCard}>
              <h3 className={styles.commitTitle}>Iterative Feedback Cycles</h3>
              <p className={styles.commitDesc}>
                We do not proceed to manufacturing or platform release without your explicit sign-off on editorial text, jacket wraps, and galley layouts.
              </p>
            </div>

            <div className={styles.commitCard}>
              <h3 className={styles.commitTitle}>Full File Custody</h3>
              <p className={styles.commitDesc}>
                Upon publication, you receive an archive of all print-ready press PDFs, high-res cover art (CMYK & RGB), and validated EPUB 3 masters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBanner}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaHeading}>Ready to Begin Stage 01?</h2>
            <p className={styles.ctaText}>
              Schedule your complimentary discovery session with our senior editorial team.
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

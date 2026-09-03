import type { Metadata } from 'next';
import { publishingRoadmap } from '@/data/process';
import { PageHeader } from '@/components/layout/PageHeader';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Our Publishing Process | Royal Quill Publishers',
  description: 'Learn how Royal Quill reviews, edits, designs, prepares, and publishes books through a clear five-stage process.',
  keywords: ['book publishing process', 'how self-publishing works', 'self-publishing steps for authors'],
};

export default function ProcessPage() {
  return (
    <div className={styles.processPage}>
      {/* PAGE HEADER */}
      <PageHeader
        eyebrow="HOW IT WORKS"
        title="Our Publishing Process"
        subtitle="Each publishing project is scoped individually around the author's manuscript and goals, but every book follows the same clear stages from submission to launch."
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
                  <div className={styles.stageNumBadge}><span>STAGE {stage.step}</span></div>
                </div>

                <div className={styles.stageMainGrid}>
                  <div className={styles.stageLeftCol}>
                    <h2 className={styles.stageName}>{stage.name}</h2>
                    <p className={styles.stageDesc}>{stage.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT TIMELINE */}
      <section className={styles.commitmentsSection}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="TIMELINE"
            title="A Schedule Built Around Your Manuscript"
          />

          <div className={styles.timelineNote}>
            <p>Project timelines depend on manuscript length, the services commissioned and the number of revision rounds required. We provide an estimated timeline as part of your project scope, so you know what to expect before work begins.</p>
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

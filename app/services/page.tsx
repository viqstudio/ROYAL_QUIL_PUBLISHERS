import type { Metadata } from 'next';
import Link from 'next/link';
import { serviceCategories } from '@/data/services';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Publishing Services | Royal Quill Publishers',
  description: 'Explore Royal Quill writing, editing, cover design, formatting, publishing, distribution, marketing, audiobook, and printing services.',
};

export default function ServicesPage() {
  return (
    <div className={styles.servicesPage}>
      {/* PAGE HEADER */}
      <PageHeader
        eyebrow="OUR SERVICES"
        title="Publishing Services for Independent Authors"
        subtitle="Choose individual services or combine writing, editorial, design, production, and distribution support in one project."
        imageSrc="/images/header-services.jpg"
        imageAlt="Publishing reference volumes, fountain pen, and manuscript desk"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services' },
        ]}
      />

      {/* ALL CATEGORIES BREAKDOWN */}
      <section className={styles.pillarsSection}>
        <div className={styles.container}>
          <div className={styles.pillarsList}>
            {serviceCategories.map((category) => (
              <div key={category.id} id={category.id} className={styles.pillarBlock}>
                <div className={styles.pillarHeader}>
                  <div className={styles.pillarTitleGroup}>
                    <span className={styles.pillarNum}>CATEGORY {category.number}</span>
                    <h2 className={styles.pillarName}>{category.name}</h2>
                  </div>
                  <p className={styles.pillarSummary}>{category.summary}</p>
                </div>

                <div className={styles.subServicesGrid}>
                  {category.subServices.map((sub) => (
                    <div key={sub.id} className={styles.subServiceCard}>
                      <div className={styles.subHeader}>
                        <h3 className={styles.subTitle}>{sub.title}</h3>
                        <span className={styles.subTimeline}>{sub.timeline}</span>
                      </div>

                      <p className={styles.subDesc}>{sub.shortDescription}</p>

                      <div className={styles.cardActions}>
                        <Link href={`/services/${sub.slug}`} className={styles.detailLink}>
                          View Service Details →
                        </Link>
                        <Button variant="primary" size="sm" href={`/contact?service=${encodeURIComponent(sub.title)}`}>
                          Inquire
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON MATRIX */}
      <section className={styles.reassuranceSection}>
        <div className={styles.container}>
          <div className={styles.reassuranceBox}>
            <span className={styles.reassuranceEyebrow}>HOW WE WORK</span>
            <h2 className={styles.reassuranceTitle}>Clear, Professional Publishing Support</h2>
            <div className={styles.matrixGrid}>
              <div className={styles.matrixCard}>
                <h4 className={styles.matrixHead}>Clear Project Scope</h4>
                <ul className={styles.matrixList}>
                  <li>Services, responsibilities, costs, and review stages are agreed before work begins.</li>
                </ul>
              </div>

              <div className={styles.matrixCard}>
                <h4 className={styles.matrixHead}>Specialist Production</h4>
                <ul className={styles.matrixList}>
                  <li>Editors, designers, typesetters, and publishing specialists handle each part of the book.</li>
                </ul>
              </div>

              <div className={styles.matrixCard}>
                <h4 className={styles.matrixHead}>Author Approval</h4>
                <ul className={styles.matrixList}>
                  <li>You review and approve the manuscript, cover, and interior before publication.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.ctaBanner}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Discuss Your Book?</h2>
            <p className={styles.ctaSub}>
              Tell us about your manuscript and we will provide a clear scope, schedule, and estimate.
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

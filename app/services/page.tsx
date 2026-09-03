import type { Metadata } from 'next';
import Link from 'next/link';
import { serviceCategories } from '@/data/services';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Publishing Services | Royal Quill Publishers',
  description: 'Book publishing services for authors, including book editing and formatting services and flexible self-publishing packages.',
  keywords: ['book publishing services for authors', 'book editing and formatting services', 'self-publishing packages'],
};

export default function ServicesPage() {
  return (
    <div className={styles.servicesPage}>
      {/* PAGE HEADER */}
      <PageHeader
        eyebrow="OUR SERVICES"
        title="Publishing Services for Independent Authors"
        subtitle="Royal Quill Publishers offers a complete range of publishing services for independent authors, covering writing and development, editing and proofreading, design and formatting, and publishing, distribution and marketing. Every service can be commissioned on its own or combined into a full self-publishing package built around your manuscript."
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
                      </div>

                      <p className={styles.subDesc}>{sub.shortDescription}</p>

                      <div className={styles.cardActions}>
                        <Link href={`/services/${sub.slug}`} className={styles.detailLink}>
                          View Service Details →
                        </Link>
                        <Button variant="primary" size="sm" href={`/contact?service=${encodeURIComponent(sub.title)}`}>
                          Enquire
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

      {/* FINAL CTA */}
      <section className={styles.ctaBanner}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Not Sure Where to Start?</h2>
            <p className={styles.ctaSub}>
              Share the stage your manuscript is at and we will recommend the services that fit your book and your budget.
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

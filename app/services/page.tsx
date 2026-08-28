import type { Metadata } from 'next';
import Link from 'next/link';
import { serviceCategories } from '@/data/services';
import { PageHeader } from '@/components/layout/PageHeader';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Publishing Services Architecture | Royal Quill Publishers',
  description: 'Explore the complete 6-pillar publishing framework: Ghostwriting, Editing, Book Cover Design, Formatting, Global Distribution, ISBN Support, Marketing, Audiobooks, and Custom Printing.',
};

export default function ServicesPage() {
  return (
    <div className={styles.servicesPage}>
      {/* CINEMATIC PAGE HEADER */}
      <PageHeader
        eyebrow="THE PUBLISHING ARCHITECTURE"
        title="Everything Your Book Needs to Stand on Global Shelves"
        subtitle="Organized into six distinct, interconnected pillars of literary craft, visual design, and worldwide distribution."
        imageSrc="/images/header-services.jpg"
        imageAlt="British literature reference volumes, fountain pen, and editor desk"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services Architecture' },
        ]}
      />

      {/* ALL 6 PILLARS BREAKDOWN */}
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
                  <p className={styles.pillarTagline}>&ldquo;{category.tagline}&rdquo;</p>
                  <p className={styles.pillarSummary}>{category.summary}</p>
                </div>

                <div className={styles.subServicesGrid}>
                  {category.subServices.map((sub) => (
                    <div key={sub.id} className={styles.subServiceCard}>
                      <div className={styles.subHeader}>
                        <div className={styles.subTitleGroup}>
                          <ServiceIcon name={sub.slug} size="md" variant="light" />
                          <div>
                            <h3 className={styles.subTitle}>{sub.title}</h3>
                            <span className={styles.subCategoryTag}>PILLAR {category.number}</span>
                          </div>
                        </div>
                        <span className={styles.subTimeline}>{sub.timeline}</span>
                      </div>

                      <p className={styles.subDesc}>{sub.shortDescription}</p>

                      <div className={styles.idealBox}>
                        <span className={styles.idealLabel}>Ideal For:</span>
                        <p className={styles.idealText}>{sub.idealFor}</p>
                      </div>

                      <div className={styles.deliverablesSection}>
                        <span className={styles.delivTitle}>Core Deliverables:</span>
                        <ul className={styles.delivList}>
                          {sub.deliverables.map((item, idx) => (
                            <li key={idx}>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D21625" strokeWidth="2.5">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.cardActions}>
                        <Link href={`/services/${sub.slug}`} className={styles.detailLink}>
                          View Full Specifications & FAQs →
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

      {/* COMPARISON MATRIX / REASSURANCE */}
      <section className={styles.reassuranceSection}>
        <div className={styles.container}>
          <div className={styles.reassuranceBox}>
            <span className={styles.reassuranceEyebrow}>THE ROYAL QUILL STANDARD</span>
            <h2 className={styles.reassuranceTitle}>Why Independent Authors Choose Our Architecture</h2>
            <div className={styles.matrixGrid}>
              <div className={styles.matrixCard}>
                <h4 className={styles.matrixHead}>Traditional Publishing</h4>
                <ul className={styles.matrixList}>
                  <li className={styles.negative}>Takes 85–90% of book royalties</li>
                  <li className={styles.negative}>Requires copyright & rights transfer</li>
                  <li className={styles.negative}>18–24 month publishing queues</li>
                  <li className={styles.negative}>Author has minimal creative control</li>
                </ul>
              </div>

              <div className={styles.matrixCard}>
                <h4 className={styles.matrixHead}>Generic Online Services</h4>
                <ul className={styles.matrixList}>
                  <li className={styles.negative}>Template cover designs used repeatedly</li>
                  <li className={styles.negative}>Automated / outsourced cheap editing</li>
                  <li className={styles.negative}>Hidden ongoing fees & distribution cuts</li>
                  <li className={styles.negative}>Zero personal publishing strategist</li>
                </ul>
              </div>

              <div className={`${styles.matrixCard} ${styles.matrixCardFeatured}`}>
                <div className={styles.featuredBadge}>ROYAL QUILL PUBLISHERS</div>
                <h4 className={styles.matrixHeadFeatured}>Elite Imprint Partnership</h4>
                <ul className={styles.matrixList}>
                  <li className={styles.positive}><strong>100% Royalties</strong> paid directly to author</li>
                  <li className={styles.positive}><strong>100% Copyright</strong> & master source files owned by you</li>
                  <li className={styles.positive}><strong>Bespoke Human Craft</strong> across editing & design</li>
                  <li className={styles.positive}><strong>Dedicated Senior Strategist</strong> on your project</li>
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
            <h2 className={styles.ctaTitle}>Let&apos;s Build Your Publishing Blueprint</h2>
            <p className={styles.ctaSub}>
              Tell us which services your manuscript requires, and we will create a clear scope, schedule, and estimate.
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

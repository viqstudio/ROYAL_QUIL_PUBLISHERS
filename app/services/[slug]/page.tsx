import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allSubServices, serviceCategories } from '@/data/services';
import { PageHeader } from '@/components/layout/PageHeader';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import styles from './page.module.css';

interface Props {
  params: {
    slug: string;
  };
}

const serviceImageMap: Record<string, string> = {
  ghostwriting: '/images/service-ghostwriting.jpg',
  'book-writing': '/images/service-book-writing.jpg',
  editing: '/images/service-editing.png',
  proofreading: '/images/service-proofreading.jpg',
  'cover-design': '/images/service-cover-design.jpg',
  formatting: '/images/service-formatting.jpg',
  publishing: '/images/service-publishing.png',
  'book-marketing': '/images/service-book-marketing.jpg',
  'author-website': '/images/service-author-website.jpg',
  'book-trailer': '/images/service-book-trailer.jpg',
  audiobook: '/images/service-audiobook.jpg',
  printing: '/images/service-printing.jpg',
};

export async function generateStaticParams() {
  return allSubServices.map((sub) => ({
    slug: sub.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = allSubServices.find((s) => s.slug === params.slug);
  if (!service) {
    return { title: 'Service Not Found | Royal Quill Publishers' };
  }

  return {
    title: `${service.title} | Royal Quill Publishers`,
    description: service.shortDescription,
  };
}

export default function SubServiceDetailPage({ params }: Props) {
  const service = allSubServices.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  // Find parent category
  const parentCategory = serviceCategories.find((c) =>
    c.subServices.some((s) => s.slug === service.slug)
  );

  const headerImage = serviceImageMap[service.slug] || '/images/Illustration 2.jpg';

  return (
    <div className={styles.detailPage}>
      {/* CINEMATIC PAGE HEADER */}
      <PageHeader
        eyebrow={parentCategory ? `CATEGORY ${parentCategory.number} • ${parentCategory.name}` : 'PUBLISHING SERVICE'}
        title={service.title}
        subtitle={service.shortDescription}
        imageSrc={headerImage}
        imageAlt={`${service.title} - Royal Quill Publishers`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
      >
        <div className={styles.headerActionRow}>
          <Button
            variant="primary"
            size="md"
            href={`/contact?service=${encodeURIComponent(service.title)}`}
          >
            Inquire About {service.title}
          </Button>
          <div className={styles.timelinePill}>
            <span className={styles.pillLabel}>Estimated Cadence:</span>
            <span className={styles.pillVal}>{service.timeline}</span>
          </div>
        </div>
      </PageHeader>

      {/* OVERVIEW & IN-DEPTH DESCRIPTION */}
      <section className={styles.overviewSection}>
        <div className={styles.container}>
          <div className={styles.overviewGrid}>
            <div className={styles.textCol}>
              <div className={styles.serviceIconHeader}>
                <ServiceIcon name={service.slug} size="lg" variant="navy" />
                <div>
                  <span className={styles.sectionEyebrow}>SERVICE OVERVIEW</span>
                  <h2 className={styles.sectionHeading}>The Royal Quill Approach</h2>
                </div>
              </div>
              <p className={styles.fullDesc}>{service.fullDescription}</p>

              <div className={styles.idealBox}>
                <h4 className={styles.idealTitle}>Ideal Candidate Profile:</h4>
                <p className={styles.idealText}>{service.idealFor}</p>
              </div>
            </div>

            <div className={styles.deliverablesCol}>
              <div className={styles.deliverablesCard}>
                <span className={styles.delivEyebrow}>WHAT YOU RECEIVE</span>
                <h3 className={styles.delivHeading}>Master Deliverables</h3>
                <ul className={styles.delivList}>
                  {service.deliverables.map((item, idx) => (
                    <li key={idx}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D21625" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.guaranteeNote}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#012258" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span>100% Rights & Royalties Retained by You</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS IF PRESENT */}
      {service.faqs && service.faqs.length > 0 && (
        <section className={styles.faqSection}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="SPECIFIC QUESTIONS"
              title={`Frequently Asked About ${service.title}`}
              subtitle="Clear answers on our methodology, author rights, and revision cycles."
            />
            <div className={styles.faqWrapper}>
              <Accordion
                items={service.faqs.map((f, i) => ({
                  id: `service-faq-${i}`,
                  question: f.question,
                  answer: f.answer,
                }))}
              />
            </div>
          </div>
        </section>
      )}

      {/* CTA FOOTER */}
      <section className={styles.ctaBanner}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaHeading}>Ready to Begin with {service.title}?</h2>
            <p className={styles.ctaText}>
              Schedule a complimentary manuscript evaluation with our senior publishing team to discuss your project scope and timelines.
            </p>
            <Button
              variant="primary"
              size="lg"
              href={`/contact?service=${encodeURIComponent(service.title)}`}
            >
              Start Your Publishing Journey
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

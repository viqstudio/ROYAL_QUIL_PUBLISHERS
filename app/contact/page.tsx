import type { Metadata } from 'next';
import { PageHeader } from '@/components/layout/PageHeader';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { ContactForm } from '@/components/features/ContactForm';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact & Free Manuscript Consultation | Royal Quill Publisher',
  description: 'Schedule a complimentary manuscript evaluation and publishing consultation with a senior editor at Royal Quill Publisher. 100% author rights and confidentiality guaranteed.',
};

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      {/* CINEMATIC PAGE HEADER */}
      <PageHeader
        eyebrow="EDITORIAL CONSULTATIONS"
        title="Let's Talk About Your Book"
        subtitle="Share your manuscript details for a complimentary editorial evaluation and a customized publishing blueprint."
        imageSrc="/images/Illustration 7.jpg"
        imageAlt="Author writing desk, fine pens, and finished hardcover book"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Manuscript Consultation' },
        ]}
      />

      {/* FORM & CONTACT INFO SECTION */}
      <section className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* LEFT: FORM CARD */}
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>Manuscript Inquiry Form</h2>
                <p className={styles.formSub}>
                  Please provide details about your manuscript, target genre, and publishing timeline.
                </p>
              </div>
              <ContactForm theme="light" sourceContext="Contact Page" />
            </div>

            {/* RIGHT: EDITORIAL DESK INFO & GUARANTEES */}
            <div className={styles.infoCol}>
              <div className={styles.deskCard}>
                <div className={styles.deskLogoWrap}>
                  <BrandLogo variant="dark" size="md" href="/" />
                </div>
                <p className={styles.deskDesc}>
                  Our senior publishing strategists and editorial directors evaluate submissions across the United Kingdom and United States.
                </p>

                <div className={styles.contactDetailsList}>
                  <div className={styles.contactItem}>
                    <span className={styles.itemLabel}>Editorial Inquiries:</span>
                    <span className={styles.contactValue}>[EMAIL ADDRESS]</span>
                  </div>
                  <div className={styles.contactItem}>
                    <span className={styles.itemLabel}>Author Telephone Desk:</span>
                    <span className={styles.contactValue}>[PHONE NUMBER]</span>
                  </div>
                  <div className={styles.contactItem}>
                    <span className={styles.itemLabel}>Consultation Hours:</span>
                    <span className={styles.contactValue}>Monday – Friday: 09:00 – 18:00 GMT / EST</span>
                  </div>
                  <div className={styles.contactItem}>
                    <span className={styles.itemLabel}>Response Time Pledge:</span>
                    <span className={styles.contactValue}>Within 1 Business Day</span>
                  </div>
                </div>
              </div>

              {/* THREE REASSURANCES */}
              <div className={styles.reassurancesCard}>
                <h4 className={styles.reassureTitle}>Our Submission Guarantees</h4>
                <div className={styles.reassureItem}>
                  <div className={styles.reassureIcon}>01</div>
                  <div>
                    <h5 className={styles.reassureHeading}>100% Non-Disclosure Protection</h5>
                    <p className={styles.reassureText}>
                      Your intellectual property, manuscript excerpts, and conceptual ideas are strictly confidential from the moment you reach out.
                    </p>
                  </div>
                </div>

                <div className={styles.reassureItem}>
                  <div className={styles.reassureIcon}>02</div>
                  <div>
                    <h5 className={styles.reassureHeading}>No-Obligation Editorial Review</h5>
                    <p className={styles.reassureText}>
                      Our initial appraisal is provided complimentary with zero pressure or lock-in commitment.
                    </p>
                  </div>
                </div>

                <div className={styles.reassureItem}>
                  <div className={styles.reassureIcon}>03</div>
                  <div>
                    <h5 className={styles.reassureHeading}>100% Rights & Royalty Retention</h5>
                    <p className={styles.reassureText}>
                      You retain all creative rights, ISBN registrations, and sales proceeds permanently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

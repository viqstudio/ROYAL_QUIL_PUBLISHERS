import type { Metadata } from 'next';
import { PageHeader } from '@/components/layout/PageHeader';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { ContactForm } from '@/components/features/ContactForm';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact | Royal Quill Publishers',
  description: 'Contact Royal Quill Publishers to discuss writing, editing, design, publishing, or marketing support for your book.',
};

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      {/* PAGE HEADER */}
      <PageHeader
        eyebrow="GET IN TOUCH"
        title="Discuss Your Book"
        subtitle="Share your manuscript details and tell us which publishing services you are considering."
        imageSrc="/images/header-contact.jpg"
        imageAlt="Publishing desk overlooking London city skyline"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact' },
        ]}
      />

      {/* FORM & CONTACT INFO SECTION */}
      <section className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* LEFT: FORM CARD */}
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>Manuscript Enquiry</h2>
                <p className={styles.formSub}>
                  Please provide details about your manuscript, genre, and target timeline.
                </p>
              </div>
              <ContactForm theme="light" sourceContext="Contact Page" />
            </div>

            {/* RIGHT: DESK INFO & GUARANTEES */}
            <div className={styles.infoCol}>
              <div className={styles.deskCard}>
                <div className={styles.deskLogoWrap}>
                  <BrandLogo variant="dark" size="md" href="/" />
                </div>
                <p className={styles.deskDesc}>
                  Contact our publishing team about writing, editorial, design, production, or distribution support.
                </p>

                <div className={styles.contactDetailsList}>
                  <div className={styles.contactItem}>
                    <span className={styles.itemLabel}>Email:</span>
                    <a className={styles.contactValue} href="mailto:info@royalquillpublishers.com">info@royalquillpublishers.com</a>
                  </div>
                </div>
              </div>

              {/* THREE REASSURANCES */}
              <div className={styles.reassurancesCard}>
                <h4 className={styles.reassureTitle}>Our Promises to You</h4>
                <div className={styles.reassureItem}>
                  <div className={styles.reassureIcon}>01</div>
                  <div>
                    <h5 className={styles.reassureHeading}>Confidentiality</h5>
                    <p className={styles.reassureText}>
                      Your ideas and manuscript excerpts are kept strictly confidential from the moment you submit.
                    </p>
                  </div>
                </div>

                <div className={styles.reassureItem}>
                  <div className={styles.reassureIcon}>02</div>
                  <div>
                    <h5 className={styles.reassureHeading}>Clear Next Steps</h5>
                    <p className={styles.reassureText}>
                      We review your enquiry and explain the most relevant services before a project is agreed.
                    </p>
                  </div>
                </div>

                <div className={styles.reassureItem}>
                  <div className={styles.reassureIcon}>03</div>
                  <div>
                    <h5 className={styles.reassureHeading}>Author Rights</h5>
                    <p className={styles.reassureText}>
                      Royal Quill does not take ownership of your manuscript or creative work.
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

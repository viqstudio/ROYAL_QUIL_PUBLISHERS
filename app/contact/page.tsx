import type { Metadata } from 'next';
import { PageHeader } from '@/components/layout/PageHeader';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { ContactForm } from '@/components/features/ContactForm';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact | Royal Quill Publishers',
  description: 'Contact Royal Quill Publishers to discuss writing, editing, design, publishing, or marketing support for your book.',
  keywords: ['contact a book publisher', 'discuss your manuscript', 'book publishing enquiry'],
};

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      {/* PAGE HEADER */}
      <PageHeader
        eyebrow="GET IN TOUCH"
        title="Tell Us About Your Book"
        subtitle="Share the stage your manuscript is at, the services you are considering, and the formats you want to publish. Our team will review the information and explain the next step."
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
                  Complete the enquiry form with your full name, email address and a short description of your manuscript and the support you are looking for. We aim to respond to all enquiries promptly.
                </p>
              </div>
              <ContactForm theme="light" />
            </div>

            {/* RIGHT: DESK INFO & GUARANTEES */}
            <div className={styles.infoCol}>
              <div className={styles.deskCard}>
                <div className={styles.deskLogoWrap}>
                  <BrandLogo variant="dark" size="md" href="/" />
                </div>
                <h2 className={styles.deskTitle}>Author Editorial Desk</h2>
                <p className={styles.deskDesc}>
                  Speak with our publishing team about your manuscript and the support you are considering.
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
                <h3 className={styles.reassureTitle}>What You Can Expect</h3>
                <div className={styles.reassureItem}>
                  <div className={styles.reassureIcon}>01</div>
                  <div>
                    <p className={styles.reassureText}>Your enquiry is treated confidentially.</p>
                  </div>
                </div>

                <div className={styles.reassureItem}>
                  <div className={styles.reassureIcon}>02</div>
                  <div>
                    <p className={styles.reassureText}>You receive a clear project scope before any work begins.</p>
                  </div>
                </div>

                <div className={styles.reassureItem}>
                  <div className={styles.reassureIcon}>03</div>
                  <div>
                    <p className={styles.reassureText}>You remain in control of editorial and design approval throughout.</p>
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

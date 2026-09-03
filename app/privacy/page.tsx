import type { Metadata } from 'next';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | Royal Quill Publishers',
  description: 'Privacy Policy and data protection standards for Royal Quill Publishers.',
  keywords: ['privacy policy', 'data protection', 'UK GDPR compliance'],
};

export default function PrivacyPage() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <div className={styles.paperCard}>
          <div className={styles.header}>
            <span className={styles.eyebrow}>LEGAL POLICIES</span>
            <h1 className={styles.title}>Privacy Policy</h1>
          </div>

          <div className={styles.content}>
            <p>
              Royal Quill Publishers is committed to protecting the privacy of authors and visitors who use this website. This policy explains what information we collect, how it is used, and the choices available to you.
            </p>
            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly, such as your name, email address and manuscript details submitted through our enquiry form, along with standard technical information collected automatically when you visit our website, such as browser type and pages viewed.
            </p>
            <h2>How We Use Your Information</h2>
            <ul>
              <li>To respond to manuscript enquiries and discuss potential projects.</li>
              <li>To manage and deliver services for authors we work with.</li>
              <li>To improve our website and the services we offer.</li>
              <li>To meet our legal and accounting obligations.</li>
            </ul>
            <h2>Cookies</h2>
            <p>
              Our website may use cookies to support basic functionality and to understand how visitors use our site. You can manage or disable cookies through your browser settings at any time.
            </p>
            <h2>Sharing Your Information</h2>
            <p>
              We do not sell personal information. We may share information with trusted third parties who support our operations, such as printing and distribution partners, only where necessary to deliver the services you have requested.
            </p>
            <h2>Data Retention</h2>
            <p>
              We retain personal information only for as long as necessary to fulfil the purposes described in this policy, or as required by law.
            </p>
            <h2>Your Rights</h2>
            <p>
              Under UK data protection law, you have the right to access, correct or request deletion of your personal information, and to object to certain uses of it. To exercise these rights, contact us using the details below.
            </p>
            <h2>Contact Us</h2>
            <p>
              For any questions about this privacy policy, email <a href="mailto:info@royalquillpublishers.com">info@royalquillpublishers.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from 'next';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | Royal Quil Publisher',
  description: 'Privacy Policy and data protection standards for Royal Quil Publisher.',
};

export default function PrivacyPage() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <div className={styles.paperCard}>
          <div className={styles.header}>
            <span className={styles.eyebrow}>LEGAL POLICIES</span>
            <h1 className={styles.title}>Privacy Policy</h1>
            <span className={styles.updated}>Last Updated: August 2026</span>
          </div>

          <div className={styles.content}>
            <p>
              Royal Quil Publisher (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting the privacy, confidentiality, and intellectual property rights of independent authors and website visitors.
            </p>

            <div className={styles.highlightPledge}>
              Core Author Privacy Pledge: We treat all submitted manuscripts, outlines, book proposals, and creative materials with strict non-disclosure protection. We never share, sell, or license your writing.
            </div>

            <h2>1. Information We Collect</h2>
            <p>
              When you submit a consultation request or contact our publishing desk, we may collect:
            </p>
            <ul>
              <li>Personal contact information (Full Name, Email Address, Phone Number).</li>
              <li>Manuscript metadata (Genre, estimated word count, publication goals, project stage).</li>
              <li>Communication history related to your publishing consultation.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use your information exclusively to:
            </p>
            <ul>
              <li>Evaluate your manuscript and provide a customized publishing blueprint.</li>
              <li>Communicate directly with you regarding your publishing inquiries.</li>
              <li>Coordinate editorial, design, typesetting, and distribution milestones if you commission our services.</li>
            </ul>

            <h2>3. Manuscript Confidentiality & Non-Disclosure</h2>
            <p>
              All creative works, partial drafts, synopses, and notes submitted to Royal Quil Publisher remain the exclusive intellectual property of the author. We maintain rigorous security standards to safeguard your files from unauthorized access.
            </p>

            <h2>4. Third-Party Platforms</h2>
            <p>
              During the publishing phase, distribution platforms (such as Amazon KDP, Apple Books, and Ingram) will process your bibliographic metadata solely as instructed by you to enable retail listing.
            </p>

            <h2>5. Contact Us</h2>
            <p>
              If you have questions regarding this Privacy Policy or our data protection practices, please contact our administrative desk at [EMAIL ADDRESS].
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

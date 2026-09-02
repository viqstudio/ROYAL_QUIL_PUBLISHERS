import type { Metadata } from 'next';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Royal Quill Publishers',
  description: 'Terms and Conditions and Author Autonomy Charter for Royal Quill Publishers.',
};

export default function TermsPage() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <div className={styles.paperCard}>
          <div className={styles.header}>
            <span className={styles.eyebrow}>LEGAL POLICIES</span>
            <h1 className={styles.title}>Terms & Conditions</h1>
            <span className={styles.updated}>Last Updated: August 2026</span>
          </div>

          <div className={styles.content}>
            <p>
              Welcome to Royal Quill Publishers. By accessing our website or engaging our book production and publishing services, you agree to these Terms & Conditions.
            </p>

            <div className={styles.highlightPledge}>
              The 100% Author Autonomy Guarantee: Royal Quill Publishers operates strictly as a service and production partner. The author retains 100% of all copyright, trademark rights, subsidiary rights, and sales royalties permanently.
            </div>

            <h2>1. Author Intellectual Property Rights</h2>
            <p>
              Under no circumstances does Royal Quill Publishers claim or acquire any ownership interest, copyright assignment, or future equity in any manuscript, title, character, or creative work submitted or produced through our services.
            </p>
            <p>
              All final press-ready PDFs, interior layout files, jacket wrap artwork, and validated EPUB 3 masters are delivered to the author upon milestone completion.
            </p>

            <h2>2. Direct Royalty Collections</h2>
            <p>
              Royal Quill Publishers does not act as a financial intermediary for your book sales. Distribution channels (including Amazon KDP, Apple Books, Kobo, and Ingram) are configured so that all ongoing net royalty payments deposit directly into the author&apos;s designated bank account.
            </p>

            <h2>3. Editorial & Creative Approval</h2>
            <p>
              The author maintains final editorial and aesthetic sign-off on all manuscript revisions, cover art designs, and interior layouts before any publication or distribution steps are initiated.
            </p>

            <h2>4. Service Engagement & Transparency</h2>
            <p>
              All commissioned services (Ghostwriting, Editing, Design, Formatting, Publishing, Marketing, Audiobooks, Printing) are outlined in clear, transparent milestone scopes. Timelines provided are estimates based on standard editorial cadences and may vary based on author review cycles.
            </p>

            <h2>5. Inquiries & Contact</h2>
            <p>
              For questions about these terms or a service agreement, contact info@royalquillpublishers.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

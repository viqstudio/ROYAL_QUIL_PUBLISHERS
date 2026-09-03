import type { Metadata } from 'next';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Royal Quill Publishers',
  description: 'Terms and conditions governing the Royal Quill Publishers website and publishing services.',
  keywords: ['terms and conditions', 'publishing services agreement', 'book editing terms of service'],
};

export default function TermsPage() {
  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <div className={styles.paperCard}>
          <div className={styles.header}>
            <span className={styles.eyebrow}>LEGAL POLICIES</span>
            <h1 className={styles.title}>Terms & Conditions</h1>
          </div>

          <div className={styles.content}>
            <h2>Introduction</h2>
            <p>
              These terms and conditions govern the use of the Royal Quill Publishers website and the publishing services we provide to authors. By engaging our services, you agree to the terms set out below.
            </p>
            <h2>Our Services</h2>
            <p>
              Royal Quill Publishers provides writing, editing, design, formatting, publishing, distribution and marketing services to independent authors. The specific services included in any project are set out in a written scope agreed with the author before work begins.
            </p>
            <h2>Client Responsibilities</h2>
            <p>
              Authors are responsible for providing accurate manuscript content, responding to review requests within agreed timeframes, and confirming approval of edits, designs and formatted files at each stage of the project.
            </p>
            <h2>Intellectual Property</h2>
            <p>
              The author retains full copyright and ownership of their manuscript and any associated creative work at all times. Royal Quill Publishers does not acquire rights to any manuscript through the provision of its services.
            </p>
            <h2>Revisions and Approvals</h2>
            <p>
              Each service includes an agreed number of revision rounds, as set out in the project scope. Work proceeds to the next stage only once the author has approved the current stage in writing.
            </p>
            <h2>Payment Terms</h2>
            <p>
              Payment terms, including deposits, milestone payments and final balances, are agreed in writing before work begins and are confirmed in the project scope for each engagement.
            </p>
            <h2>Cancellation and Refunds</h2>
            <p>
              Cancellation and refund terms depend on the stage of work completed at the time of cancellation and are set out in the individual project agreement. Work already completed is generally non-refundable.
            </p>
            <h2>Limitation of Liability</h2>
            <p>
              Royal Quill Publishers provides professional publishing services with reasonable skill and care. We are not liable for outcomes outside our control, including retailer policy changes, third-party platform performance, or sales results after publication.
            </p>
            <h2>Governing Law</h2>
            <p>
              These terms are governed by the laws of England and Wales, and any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
            <h2>Contact Us</h2>
            <p>
              For any questions about these terms and conditions, email <a href="mailto:info@royalquillpublishers.com">info@royalquillpublishers.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

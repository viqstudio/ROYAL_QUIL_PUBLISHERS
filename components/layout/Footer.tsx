import React from 'react';
import Link from 'next/link';
import { footerServices, footerCompany } from '@/data/navigation';
import { BrandLogo } from '@/components/ui/BrandLogo';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* TOP REASSURANCE SEAL STRIP */}
        <div className={styles.topStrip}>
          <div className={styles.brandBlock}>
            <div className={styles.logoWrap}>
              <BrandLogo variant="dark" size="lg" href="/" />
            </div>
            <p className={styles.tagline}>
              Professional writing, editing, book design, publishing, and marketing support for independent authors.
            </p>
          </div>

          <div className={styles.sealBlock}>
            <div className={styles.sealText}>
              <span className={styles.sealTitle}>You retain 100% of your rights</span>
              <span className={styles.sealSub}>Royal Quill does not take ownership of your manuscript or intellectual property.</span>
            </div>
          </div>
        </div>

        {/* MAIN LINK COLUMNS */}
        <div className={styles.linksGrid}>
          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Publishing Services</h4>
            <ul className={styles.linkList}>
              {footerServices.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.footerLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Publishing & Author Services</h4>
            <ul className={styles.linkList}>
              {footerServices.slice(6).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.footerLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Publishing House</h4>
            <ul className={styles.linkList}>
              {footerCompany.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.footerLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Author Editorial Desk</h4>
            <div className={styles.contactCard}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Email:</span>
                <a className={styles.contactValue} href="mailto:info@royalquillpublishers.com">info@royalquillpublishers.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & LEGAL BAR */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © {currentYear} Royal Quill Publishers. All rights reserved.
          </div>
          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
            <span className={styles.divider}>•</span>
            <Link href="/terms" className={styles.legalLink}>Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

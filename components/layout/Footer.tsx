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
        {/* TOP BRAND & PROMISE STRIP */}
        <div className={styles.topStrip}>
          <div className={styles.brandBlock}>
            <div className={styles.logoWrap}>
              <BrandLogo variant="dark" size="lg" href="/" />
            </div>
            <p className={styles.tagline}>
              Professional publishing support for independent authors in the UK and US.
            </p>
          </div>

          <div className={styles.ownershipSeal}>
            <div className={styles.sealIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C0DFFD" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" stroke="#D21625" />
              </svg>
            </div>
            <div className={styles.sealText}>
              <span className={styles.sealHeading}>100% AUTHOR AUTONOMY</span>
              <span className={styles.sealSub}>You retain 100% of rights, ownership, and royalties.</span>
            </div>
          </div>
        </div>

        {/* MAIN LINK COLUMNS */}
        <div className={styles.linksGrid}>
          {/* COLUMN 1: EDITORIAL PILLARS */}
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

          {/* COLUMN 2: EXPANDED SERVICES */}
          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Growth & Production</h4>
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

          {/* COLUMN 3: COMPANY & PROCESS */}
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

          {/* COLUMN 4: EDITORIAL DESK & CONSULTATIONS */}
          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>Editorial Inquiries</h4>
            <p className={styles.contactIntro}>
              Our senior publishing strategists review manuscripts across the United Kingdom and United States.
            </p>
            <div className={styles.contactCard}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>General Inquiries:</span>
                <span className={styles.contactValue}>[EMAIL ADDRESS]</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Author Desk:</span>
                <span className={styles.contactValue}>[PHONE NUMBER]</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Primary Markets:</span>
                <span className={styles.contactValue}>London (UK) • New York (US)</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & LEGAL BAR */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © {currentYear} Royal Quil Publisher. All rights reserved. Registered publishing services imprint.
          </div>
          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
            <span className={styles.divider}>•</span>
            <Link href="/terms" className={styles.legalLink}>Terms & Conditions</Link>
            <span className={styles.divider}>•</span>
            <span className={styles.disclaimer}>Author retains 100% intellectual property.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

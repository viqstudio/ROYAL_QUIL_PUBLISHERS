import React from 'react';
import styles from './PlatformLogo.module.css';

export interface PlatformLogoProps {
  id: string;
  className?: string;
}

export const PlatformLogo: React.FC<PlatformLogoProps> = ({ id, className = '' }) => {
  switch (id) {
    case 'amazon-kdp':
      return (
        <div className={`${styles.logoCard} ${className}`} title="Amazon Kindle Direct Publishing">
          <svg viewBox="0 0 160 48" fill="none" className={styles.logoSvg}>
            {/* Amazon text & smile arrow */}
            <path
              d="M18.2 24.8c-3.1 0-5.8-1.2-5.8-5 0-4.2 3.3-5.2 7.1-5.2 2.8 0 4.1.3 4.1.3v1.8s-1.2-.3-3.7-.3c-3 0-4.8.7-4.8 2.8 0 1.9 1.4 2.8 3.5 2.8 2.2 0 3.8-1.2 4.4-2.5h2.1c-.8 2.8-3.4 5.3-6.9 5.3z"
              fill="#111827"
            />
            <path
              d="M32.5 12.8h2.3v1.8c1.1-1.4 2.8-2.1 4.7-2.1 2.3 0 3.8.9 4.4 2.5 1.1-1.6 3-2.5 5.2-2.5 3.1 0 5.4 1.9 5.4 6.2v8.6h-2.5v-7.8c0-2.8-1.1-4.2-3.3-4.2-2 0-3.6 1.4-3.6 4.1v7.9H42.6v-7.8c0-2.8-1.1-4.2-3.3-4.2-2 0-3.6 1.4-3.6 4.1v7.9h-2.5v-14.5h-.7z"
              fill="#111827"
            />
            <path
              d="M66.4 19.8c0-4.5 3.7-7.3 8.3-7.3 4.6 0 8.3 2.8 8.3 7.3 0 4.5-3.7 7.3-8.3 7.3-4.6 0-8.3-2.8-8.3-7.3zm14 0c0-3.3-2.3-5.1-5.7-5.1s-5.7 1.8-5.7 5.1c0 3.3 2.3 5.1 5.7 5.1s5.7-1.8 5.7-5.1z"
              fill="#111827"
            />
            <path
              d="M87.8 12.8h2.4v2.1c1.2-1.6 3.1-2.4 5.3-2.4 3.7 0 6.2 2.5 6.2 6.8v10h-2.5v-9.3c0-3.2-1.7-4.7-4.4-4.7-2.4 0-4.5 1.7-4.5 4.8v9.2h-2.5V12.8z"
              fill="#111827"
            />
            {/* KDP Badge */}
            <rect x="110" y="10" width="44" height="20" rx="3" fill="#D21625" />
            <text x="132" y="24" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
              KDP
            </text>
            {/* Amazon Smile Arc */}
            <path
              d="M15 32c22 10 58 10 82-2"
              stroke="#D21625"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path d="M96 28l4 2-1 4" fill="#D21625" />
          </svg>
        </div>
      );

    case 'apple-books':
      return (
        <div className={`${styles.logoCard} ${className}`} title="Apple Books">
          <div className={styles.appleBooksGroup}>
            <div className={styles.appleIconWrap}>
              <svg viewBox="0 0 32 32" fill="none" className={styles.appleSvg}>
                <rect width="32" height="32" rx="7" fill="#F97316" />
                <path
                  d="M8 12c3-1.5 6-1 8 1 2-2 5-2.5 8-1v10c-3-1.5-6-1-8 1-2-2-5-2.5-8-1V12z"
                  fill="#FFFFFF"
                />
                <line x1="16" y1="13" x2="16" y2="23" stroke="#F97316" strokeWidth="1.5" />
              </svg>
            </div>
            <div className={styles.platformTextGroup}>
              <span className={styles.appleTitle}>Apple Books</span>
              <span className={styles.platformSub}>iOS & macOS</span>
            </div>
          </div>
        </div>
      );

    case 'kobo':
      return (
        <div className={`${styles.logoCard} ${className}`} title="Kobo by Rakuten">
          <div className={styles.koboGroup}>
            <span className={styles.koboRakuten}>Rakuten</span>
            <span className={styles.koboBrand}>kobo</span>
          </div>
        </div>
      );

    case 'barnes-and-noble':
      return (
        <div className={`${styles.logoCard} ${className}`} title="Barnes & Noble">
          <div className={styles.bnGroup}>
            <span className={styles.bnText}>BARNES &amp; NOBLE</span>
            <span className={styles.bnSub}>NOOK &amp; US Retail</span>
          </div>
        </div>
      );

    case 'ingram':
      return (
        <div className={`${styles.logoCard} ${className}`} title="Ingram Content Group">
          <div className={styles.ingramGroup}>
            <span className={styles.ingramTitle}>INGRAM</span>
            <span className={styles.ingramSub}>Content Group • 40,000+ Stores</span>
          </div>
        </div>
      );

    case 'isbn-agencies':
      return (
        <div className={`${styles.logoCard} ${className}`} title="Official ISBN Support">
          <div className={styles.isbnGroup}>
            <span className={styles.isbnTag}>OFFICIAL REGISTRATION</span>
            <span className={styles.isbnTitle}>Nielsen (UK) • Bowker (US)</span>
          </div>
        </div>
      );

    default:
      return null;
  }
};

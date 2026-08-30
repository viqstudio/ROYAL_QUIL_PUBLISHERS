import React from 'react';
import Image from 'next/image';
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
          <Image
            src="/images/platform-amazon-kindle.png"
            alt="Amazon Kindle Direct Publishing"
            width={180}
            height={52}
            className={styles.platformImg}
            priority
          />
        </div>
      );

    case 'apple-books':
      return (
        <div className={`${styles.logoCard} ${className}`} title="Apple Books">
          <Image
            src="/images/platform-apple-books.png"
            alt="Apple Books"
            width={52}
            height={52}
            className={styles.platformIconImg}
            priority
          />
          <div className={styles.platformTextGroup}>
            <span className={styles.appleTitle}>Apple Books</span>
            <span className={styles.platformSub}>iOS & macOS</span>
          </div>
        </div>
      );

    case 'kobo':
      return (
        <div className={`${styles.logoCard} ${className}`} title="Kobo by Rakuten">
          <Image
            src="/images/platform-kobo.png"
            alt="Rakuten Kobo"
            width={52}
            height={52}
            className={styles.platformIconImg}
            priority
          />
          <div className={styles.platformTextGroup}>
            <span className={styles.koboBrand}>Rakuten Kobo</span>
            <span className={styles.platformSub}>Global eBook & eReader Network</span>
          </div>
        </div>
      );

    case 'barnes-and-noble':
      return (
        <div className={`${styles.logoCard} ${className}`} title="Barnes & Noble">
          <Image
            src="/images/platform-barnes-noble.png"
            alt="Barnes & Noble"
            width={180}
            height={52}
            className={styles.platformImg}
            priority
          />
        </div>
      );

    case 'ingram':
      return (
        <div className={`${styles.logoCard} ${className}`} title="IngramSpark Content Group">
          <Image
            src="/images/platform-ingramspark.jpg"
            alt="IngramSpark Content Group"
            width={180}
            height={48}
            className={styles.platformImg}
            priority
          />
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

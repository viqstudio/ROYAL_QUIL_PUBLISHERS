import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './BrandLogo.module.css';

export interface BrandLogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'light',
  size = 'md',
  href = '/',
  className = '',
}) => {
  const isDarkBg = variant === 'dark';

  const logoImage = isDarkBg ? (
    <Image
      src="/images/royal-quill-logo-dark.png"
      alt="Royal Quill Publishers"
      width={220}
      height={68}
      priority
      className={`${styles.logoImg} ${styles[`size_${size}`]}`}
    />
  ) : (
    <div className={styles.lightLogoGroup}>
      <Image
        src="/images/royal-quill-logo-light.png"
        alt="Royal Quill Publishers Emblem"
        width={56}
        height={56}
        priority
        className={styles.lightEmblemImg}
      />
      <div className={styles.lightTextGroup}>
        <span className={styles.lightTitle}>ROYAL QUILL</span>
        <span className={styles.lightSubtitle}>PUBLISHERS</span>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={`${styles.logoLink} ${className}`} aria-label="Royal Quill Publishers Home">
        {logoImage}
      </Link>
    );
  }

  return <div className={`${styles.logoWrap} ${className}`}>{logoImage}</div>;
};

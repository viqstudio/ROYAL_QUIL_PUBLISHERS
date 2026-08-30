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
  const logoContent = (
    <div className={`${styles.logoGroup} ${styles[`theme_${variant}`]} ${styles[`size_${size}`]}`}>
      <Image
        src="/images/royal-quill-logo-emblem.png"
        alt="Royal Quill Publishers Emblem"
        width={56}
        height={56}
        priority
        className={styles.emblemImg}
      />
      <div className={styles.textGroup}>
        <span className={styles.titleText}>ROYAL QUILL</span>
        <span className={styles.subText}>PUBLISHERS</span>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={`${styles.logoLink} ${className}`} aria-label="Royal Quill Publishers Home">
        {logoContent}
      </Link>
    );
  }

  return <div className={`${styles.logoWrap} ${className}`}>{logoContent}</div>;
};

import React from 'react';
import styles from './SectionHeading.module.css';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
}) => {
  return (
    <div className={`${styles.container} ${styles[`align_${align}`]} ${styles[`theme_${theme}`]} ${className}`}>
      {eyebrow && (
        <div className={styles.eyebrowWrapper}>
          <span className={styles.eyebrow}>{eyebrow}</span>
        </div>
      )}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};

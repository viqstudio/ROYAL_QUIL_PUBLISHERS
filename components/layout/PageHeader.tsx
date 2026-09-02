import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './PageHeader.module.css';

export interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  imageSrc?: string;
  imageAlt?: string;
  breadcrumbs?: { label: string; href?: string }[];
  children?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  imageSrc,
  imageAlt = 'Royal Quill Publishing Header',
  breadcrumbs,
  children,
}) => {
  return (
    <div className={`${styles.headerWrapper} ${imageSrc ? styles.hasImage : ''}`}>
      {imageSrc && (
        <div className={styles.bgImageWrap}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className={styles.bgImage}
          />
          <div className={styles.imageOverlay} />
        </div>
      )}

      <div className={styles.container}>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className={styles.breadcrumbs} aria-label="Breadcrumbs">
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {crumb.href ? (
                  <Link href={crumb.href} className={styles.crumbLink}>
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={styles.crumbActive}>{crumb.label}</span>
                )}
                {idx < breadcrumbs.length - 1 && <span className={styles.crumbDivider}>/</span>}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className={styles.content}>
          <div className={styles.eyebrowWrapper}>
            <span className={styles.bookmarkRibbon} />
            <span className={styles.eyebrow}>{eyebrow}</span>
          </div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
          {children && <div className={styles.extraContent}>{children}</div>}
        </div>
      </div>
    </div>
  );
};

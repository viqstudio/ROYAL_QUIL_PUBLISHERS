import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './PageHeader.module.css';

export interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt?: string;
  breadcrumbs?: { label: string; href?: string }[];
  children?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  breadcrumbs,
  children,
}) => {
  return (
    <div className={styles.headerWrapper}>
      {/* BACKGROUND PRINT TEXTURE */}
      <div className={styles.texturePattern} />

      {/* BACKGROUND IMAGE WITH CINEMATIC FADE OVERLAY */}
      <div className={styles.imageBackdrop}>
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          priority
          sizes="100vw"
          className={styles.headerImg}
        />
        <div className={styles.fadeGradient} />
      </div>

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
            <span className={styles.accentPip} />
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

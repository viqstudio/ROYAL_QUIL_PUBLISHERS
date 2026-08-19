import React from 'react';
import Image from 'next/image';
import styles from './HeroBookVisual.module.css';

export const HeroBookVisual: React.FC = () => {
  return (
    <div className={styles.visualWrapper}>
      {/* BACKGROUND AMBIENT GLOW & TEXTURE */}
      <div className={styles.ambientGlow} />

      {/* STACKED PHYSICAL HARDCOVER BOOKS COMPOSITION */}
      <div className={styles.bookComposition}>
        {/* SUPPORTING BOOK 2 (BACKGROUND ANGLE) */}
        <div className={`${styles.bookItem} ${styles.bookBack}`}>
          <div className={styles.bookCover}>
            <Image
              src="/images/book-the-silent-calculus.jpg"
              alt="The Silent Calculus by Professor James Whitmore"
              width={260}
              height={390}
              className={styles.coverImage}
              priority
            />
            <div className={styles.spineEffect} />
            <div className={styles.pageThickness} />
          </div>
        </div>

        {/* SUPPORTING BOOK 3 (SIDE ANGLE) */}
        <div className={`${styles.bookItem} ${styles.bookSide}`}>
          <div className={styles.bookCover}>
            <Image
              src="/images/book-letters-to-no-one.jpg"
              alt="Letters to No One by Isabella Marchetti"
              width={240}
              height={360}
              className={styles.coverImage}
              priority
            />
            <div className={styles.spineEffect} />
            <div className={styles.pageThickness} />
          </div>
        </div>

        {/* PRIMARY FEATURED HARDCOVER BOOK (FOREGROUND HERO) */}
        <div className={`${styles.bookItem} ${styles.bookFront}`}>
          <div className={styles.bookCover}>
            <Image
              src="/images/book-echoes-of-empire.jpg"
              alt="Echoes of Empire by Dr. Amara Osei — Hardcover Edition"
              width={300}
              height={450}
              className={styles.coverImage}
              priority
            />
            <div className={styles.spineEffect} />
            <div className={styles.goldEmbossFoil} />
            <div className={styles.pageThickness} />
            <div className={styles.bookSheen} />
          </div>

          {/* EDITORIAL SPECIFICATION TAG */}
          <div className={styles.specBadge}>
            <div className={styles.specPip} />
            <div className={styles.specInfo}>
              <span className={styles.specTitle}>Hardcover Case Laminate</span>
              <span className={styles.specSub}>100% Author Owned • Distributed Globally</span>
            </div>
          </div>
        </div>
      </div>

      {/* REALISTIC DESK BASE SHADOW */}
      <div className={styles.groundShadow} />
    </div>
  );
};

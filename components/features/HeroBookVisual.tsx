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
        {/* LEFT BOOK: THE RAT RACE */}
        <div className={`${styles.bookItem} ${styles.bookLeft}`}>
          <div className={styles.bookCover}>
            <Image
              src="/images/hero-book-rat-race.jpg"
              alt="The Rat Race by William Murphy"
              width={250}
              height={375}
              className={styles.coverImage}
              priority
            />
            <div className={styles.spineEffect} />
            <div className={styles.pageThickness} />
            <div className={styles.bookSheen} />
          </div>
        </div>

        {/* RIGHT BOOK: WE LOVE JESUS */}
        <div className={`${styles.bookItem} ${styles.bookRight}`}>
          <div className={styles.bookCover}>
            <Image
              src="/images/hero-book-we-love-jesus.jpg"
              alt="We Love Jesus by David Addington"
              width={250}
              height={375}
              className={styles.coverImage}
              priority
            />
            <div className={styles.spineEffect} />
            <div className={styles.pageThickness} />
            <div className={styles.bookSheen} />
          </div>
        </div>

        {/* CENTER PRIMARY FEATURED BOOK: EMPIRE BORDERS WITHIN */}
        <div className={`${styles.bookItem} ${styles.bookCenter}`}>
          <div className={styles.bookCover}>
            <Image
              src="/images/hero-book-empire.jpg"
              alt="Empire: Borders Within by John Payne — Featured Hardcover Edition"
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
        </div>
      </div>

      {/* REALISTIC DESK BASE SHADOW */}
      <div className={styles.groundShadow} />
    </div>
  );
};

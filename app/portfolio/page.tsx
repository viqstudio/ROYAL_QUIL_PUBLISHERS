'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { books, Book, portfolioGenres } from '@/data/books';
import { PageHeader } from '@/components/layout/PageHeader';
import { BookInspectorModal } from '@/components/features/BookInspectorModal';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

export default function PortfolioPage() {
  const [activeGenre, setActiveGenre] = useState('All');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const filteredBooks = activeGenre === 'All'
    ? books
    : books.filter((b) => b.genre === activeGenre);

  return (
    <div className={styles.portfolioPage}>
      {/* CINEMATIC PAGE HEADER */}
      <PageHeader
        eyebrow="THE LITERARY CATALOGUE"
        title="Books We're Proud to Put Our Name Behind"
        subtitle="A curated showcase of recent titles across fiction, non-fiction, memoir, business, and poetry. Every author retains 100% rights."
        imageSrc="/images/Illustration 4.jpg"
        imageAlt="Fine book covers and editorial compositions"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Portfolio Catalogue' },
        ]}
      />

      {/* FILTER & GALLERY */}
      <section className={styles.gallerySection}>
        <div className={styles.container}>
          {/* GENRE FILTER TABS */}
          <div className={styles.filterBar}>
            {portfolioGenres.map((g) => (
              <button
                key={g}
                type="button"
                className={`${styles.filterBtn} ${activeGenre === g ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveGenre(g)}
              >
                {g}
              </button>
            ))}
          </div>

          {/* GRID OF BOOKS */}
          <div className={styles.booksGrid}>
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className={styles.bookCard}
                onClick={() => setSelectedBook(book)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedBook(book)}
              >
                <div className={styles.coverWrapper}>
                  <Image
                    src={book.coverImage}
                    alt={book.title}
                    width={320}
                    height={480}
                    className={styles.coverImg}
                  />
                  <div className={styles.spineEffect} />
                  <div className={styles.hoverOverlay}>
                    <span className={styles.inspectText}>Inspect Title & Specs →</span>
                  </div>
                </div>

                <div className={styles.cardDetails}>
                  <div className={styles.metaRow}>
                    <span className={styles.genreTag}>{book.genre}</span>
                    <span className={styles.yearText}>{book.year}</span>
                  </div>
                  <h3 className={styles.bookTitle}>{book.title}</h3>
                  <p className={styles.bookAuthor}>By {book.author}</p>
                  <p className={styles.bookTagline}>&ldquo;{book.tagline}&rdquo;</p>
                  <div className={styles.formatsRow}>
                    {book.formats.map((fmt, i) => (
                      <span key={i} className={styles.formatTag}>{fmt}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className={styles.ctaBanner}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaHeading}>Your Book Deserves a Place on This Shelf</h2>
            <p className={styles.ctaText}>
              Speak with our senior team to transform your raw manuscript into an award-caliber published book.
            </p>
            <Button variant="primary" size="lg" href="/contact">
              Start Your Publishing Journey
            </Button>
          </div>
        </div>
      </section>

      {/* INSPECTOR MODAL */}
      <BookInspectorModal
        book={selectedBook}
        isOpen={Boolean(selectedBook)}
        onClose={() => setSelectedBook(null)}
      />
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { faqs, faqCategories } from '@/data/faqs';
import { PageHeader } from '@/components/layout/PageHeader';
import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqs.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.faqPage}>
      {/* CINEMATIC PAGE HEADER */}
      <PageHeader
        eyebrow="TRANSPARENT ADVISORY"
        title="Frequently Asked Author Questions"
        subtitle="Direct, transparent answers regarding 100% rights ownership, royalty structures, editorial workflows, and global distribution."
        imageSrc="/images/header-about.jpg"
        imageAlt="Classic warm library study desk and fine literature volumes"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Author FAQs' },
        ]}
      />

      {/* FILTER & SEARCH BAR */}
      <section className={styles.faqBodySection}>
        <div className={styles.container}>
          <div className={styles.filterControls}>
            {/* SEARCH INPUT */}
            <div className={styles.searchWrapper}>
              <svg className={styles.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Search topics (e.g. royalties, copyright, ISBN, timelines)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className={styles.clearBtn}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* CATEGORY CHIPS */}
            <div className={styles.categoryChips}>
              {faqCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`${styles.categoryChip} ${activeCategory === cat ? styles.chipActive : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* FAQS ACCORDION */}
          <div className={styles.accordionContainer}>
            {filteredFaqs.length > 0 ? (
              <Accordion items={filteredFaqs} allowMultiple={true} />
            ) : (
              <div className={styles.emptyState}>
                <h3 className={styles.emptyTitle}>No matching questions found</h3>
                <p className={styles.emptyDesc}>
                  Try clearing your search or contact our senior publishing desk directly for a personalized answer.
                </p>
                <Button variant="primary" size="md" href="/contact">
                  Ask an Editorial Strategist
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* STILL HAVE QUESTIONS CTA */}
      <section className={styles.ctaBanner}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaHeading}>Have a Specific Question About Your Manuscript?</h2>
            <p className={styles.ctaText}>
              Our publishing strategists are available for confidential consultations to review your project needs.
            </p>
            <Button variant="primary" size="lg" href="/contact">
              Contact Our Editorial Desk
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

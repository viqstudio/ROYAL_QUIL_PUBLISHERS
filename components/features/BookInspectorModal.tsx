'use client';

import React from 'react';
import Image from 'next/image';
import { Book } from '@/data/books';
import { Modal } from '@/components/ui/Modal';
import { useConsultation } from '@/context/ConsultationContext';
import styles from './BookInspectorModal.module.css';

export interface BookInspectorModalProps {
  book: Book | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BookInspectorModal: React.FC<BookInspectorModalProps> = ({
  book,
  isOpen,
  onClose,
}) => {
  const { openConsultation } = useConsultation();

  if (!book) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="lg">
      <div className={styles.modalContent}>
        <div className={styles.coverSide}>
          <div className={styles.bookFrame}>
            <Image
              src={book.coverImage}
              alt={book.title}
              width={340}
              height={510}
              className={styles.coverImg}
            />
            <div className={styles.spineGlow} />
          </div>
          <span className={styles.rightsPledge}>
            Published by Royal Quil • Author Retains 100% Rights
          </span>
        </div>

        <div className={styles.detailsSide}>
          <div className={styles.metaRow}>
            <span className={styles.genreBadge}>{book.genre}</span>
            <span className={styles.yearText}>Published {book.year}</span>
          </div>

          <h3 className={styles.bookTitle}>{book.title}</h3>
          <p className={styles.authorName}>By {book.author}</p>

          <p className={styles.tagline}>&ldquo;{book.tagline}&rdquo;</p>
          <p className={styles.description}>{book.description}</p>

          {book.reviewQuote && (
            <div className={styles.reviewBox}>
              <p className={styles.quoteText}>&ldquo;{book.reviewQuote}&rdquo;</p>
              <span className={styles.quoteSource}>— {book.reviewSource}</span>
            </div>
          )}

          {book.specs && (
            <div className={styles.specsGrid}>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Page Count</span>
                <span className={styles.specVal}>{book.specs.pages} Pages</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Trim Size</span>
                <span className={styles.specVal}>{book.specs.trimSize}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Binding</span>
                <span className={styles.specVal}>{book.specs.binding}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Formats</span>
                <span className={styles.specVal}>{book.formats.join(', ')}</span>
              </div>
            </div>
          )}

          <div className={styles.ctaRow}>
            <button
              type="button"
              className={styles.inquireBtn}
              onClick={() => {
                onClose();
                openConsultation({ genre: book.genre });
              }}
            >
              Publish a Book Like This →
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

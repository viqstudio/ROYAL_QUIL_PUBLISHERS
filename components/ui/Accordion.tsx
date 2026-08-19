'use client';

import React, { useState } from 'react';
import styles from './Accordion.module.css';

export interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  theme?: 'light' | 'dark';
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  theme = 'light',
  className = '',
}) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || '']);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds(prev => 
        prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds(prev => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`${styles.accordion} ${styles[`theme_${theme}`]} ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIds.includes(item.id);
        const itemNumber = (index + 1).toString().padStart(2, '0');

        return (
          <div
            key={item.id}
            className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
          >
            <button
              type="button"
              className={styles.trigger}
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
            >
              <div className={styles.titleGroup}>
                <span className={styles.itemNumber}>{itemNumber}</span>
                <span className={styles.question}>{item.question}</span>
              </div>
              <span className={styles.iconWrapper} aria-hidden="true">
                <svg
                  className={`${styles.icon} ${isOpen ? styles.iconRotated : ''}`}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </span>
            </button>
            <div
              id={`faq-answer-${item.id}`}
              className={styles.contentWrapper}
              style={{
                maxHeight: isOpen ? '500px' : '0px',
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className={styles.content}>
                <p className={styles.answerText}>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

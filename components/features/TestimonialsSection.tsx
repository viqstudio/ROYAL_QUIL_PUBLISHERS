import React from 'react';
import { testimonials } from '@/data/testimonials';
import styles from './TestimonialsSection.module.css';

export const TestimonialsSection: React.FC = () => (
  <section className={styles.section} aria-labelledby="testimonials-heading">
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>AUTHOR EXPERIENCES</span>
        <h2 id="testimonials-heading" className={styles.heading}>What Our Authors Say</h2>
        <p className={styles.introduction}>
          Authors work directly with our editorial and production team throughout their project.
        </p>
      </header>

      <div className={styles.grid}>
        {testimonials.map((testimonial) => (
          <article key={testimonial.id} className={styles.card}>
            <span className={styles.quoteMark} aria-hidden="true">&ldquo;</span>
            <blockquote className={styles.quote}>
              <p>{testimonial.quote}</p>
              <footer className={styles.attribution}>
                <strong>{testimonial.author}</strong>
                <cite>{testimonial.bookTitle}</cite>
              </footer>
            </blockquote>
          </article>
        ))}
      </div>
    </div>
  </section>
);

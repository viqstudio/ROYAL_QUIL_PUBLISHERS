'use client';

import React, { useState } from 'react';
import styles from './ContactForm.module.css';

export interface ContactFormProps {
  theme?: 'light' | 'dark';
  className?: string;
  sourceContext?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  theme = 'light',
  className = '',
  sourceContext,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    genre: '',
    stage: 'complete',
    aboutBook: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className={`${styles.successCard} ${styles[`theme_${theme}`]} ${className}`}>
        <div className={styles.successIcon}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3 className={styles.successHeading}>Manuscript Inquiry Received</h3>
        <p className={styles.successMessage}>
          Thank you, <strong>{formData.fullName}</strong>. A senior Royal Quil publishing strategist will review your book details and reach out to <strong>{formData.email}</strong> within 1 business day.
        </p>
        <div className={styles.ownershipPledge}>
          <span>100% Author Copyright & Intellectual Property Protection Guaranteed.</span>
        </div>
        <button
          type="button"
          className={styles.resetButton}
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: '',
              email: '',
              phone: '',
              genre: '',
              stage: 'complete',
              aboutBook: '',
            });
          }}
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${styles[`theme_${theme}`]} ${className}`}
    >
      {sourceContext && (
        <input type="hidden" name="sourceContext" value={sourceContext} />
      )}

      <div className={styles.gridRow}>
        <div className={styles.field}>
          <label htmlFor="form-fullName" className={styles.label}>
            Full Name <span className={styles.req}>*</span>
          </label>
          <input
            id="form-fullName"
            name="fullName"
            type="text"
            required
            placeholder="e.g. Jonathan Vance"
            value={formData.fullName}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="form-email" className={styles.label}>
            Email Address <span className={styles.req}>*</span>
          </label>
          <input
            id="form-email"
            name="email"
            type="email"
            required
            placeholder="e.g. j.vance@example.co.uk"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.gridRow}>
        <div className={styles.field}>
          <label htmlFor="form-phone" className={styles.label}>
            Phone Number (UK or US)
          </label>
          <input
            id="form-phone"
            name="phone"
            type="tel"
            placeholder="+44 7... or +1 212..."
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="form-genre" className={styles.label}>
            Manuscript Genre <span className={styles.req}>*</span>
          </label>
          <select
            id="form-genre"
            name="genre"
            required
            value={formData.genre}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="" disabled>Select your genre</option>
            <option value="Fiction">Fiction (Literary / Historical / Contemporary)</option>
            <option value="Romance">Romance</option>
            <option value="Thriller / Mystery">Thriller / Mystery / Crime</option>
            <option value="Fantasy / Sci-Fi">Fantasy & Science Fiction</option>
            <option value="Children's / YA">Children&apos;s & Young Adult</option>
            <option value="Memoir / Biography">Memoir & Biography</option>
            <option value="Business / Leadership">Business & Leadership</option>
            <option value="Self-Help / Wellness">Self-Help & Personal Growth</option>
            <option value="Poetry">Poetry</option>
            <option value="Non-Fiction">General Non-Fiction</option>
            <option value="Other">Other Category</option>
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="form-stage" className={styles.label}>
          Current Manuscript Stage
        </label>
        <select
          id="form-stage"
          name="stage"
          value={formData.stage}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="complete">Complete Manuscript Ready for Production</option>
          <option value="editing-needed">Draft Complete (Seeking Developmental / Line Editing)</option>
          <option value="partial">Partial Draft In Progress (50%+)</option>
          <option value="ghostwriting">Concept / Outline (Seeking Ghostwriting or Co-Writing)</option>
          <option value="republishing">Previously Published Title (Seeking New Edition / Formats)</option>
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="form-aboutBook" className={styles.label}>
          Brief About Your Book <span className={styles.req}>*</span>
        </label>
        <textarea
          id="form-aboutBook"
          name="aboutBook"
          required
          rows={4}
          placeholder="Describe your book's premise, target readers, estimated word count, or specific publishing goals..."
          value={formData.aboutBook}
          onChange={handleChange}
          className={styles.textarea}
        />
      </div>

      <div className={styles.termsNote}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" stroke="#D21625" />
        </svg>
        <span>
          Royal Quil Publisher is a collaborative publishing partner. <strong>You retain 100% ownership, copyright, and royalties.</strong>
        </span>
      </div>

      <button
        type="submit"
        disabled={loading}
        className={styles.submitButton}
      >
        {loading ? 'Submitting Inquiry...' : 'Start My Publishing Journey'}
      </button>
    </form>
  );
};

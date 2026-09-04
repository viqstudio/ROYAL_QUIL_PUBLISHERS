'use client';

import React, { useState, useEffect } from 'react';
import styles from './ContactForm.module.css';

export const GOOGLE_SCRIPT_WEB_APP_URL =
  'https://script.google.com/macros/s/AKfycbwZ525U2pMgBHGRRBbPwMfbMdCfx_Q-NKVi9i-IxPNOd_80oFedN9EN7rVqyYgbyJkR/exec';

export interface ContactFormProps {
  theme?: 'light' | 'dark';
  className?: string;
  sourceContext?: string;
  prefilledGenre?: string;
  onSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  theme = 'light',
  className = '',
  sourceContext,
  prefilledGenre,
  onSuccess,
}) => {
  const [mounted, setMounted] = useState(false);
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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && prefilledGenre) {
      setFormData((prev) => ({ ...prev, genre: prefilledGenre }));
    }
  }, [mounted, prefilledGenre]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setErrorMessage(null);

    // Exact fields specified for the Google Apps Script Web App
    const payload = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      bookGenre: formData.genre.trim(),
      manuscriptStatus: formData.stage.trim(),
      bookBrief: formData.aboutBook.trim(),
    };

    try {
      let isSuccess = false;
      let errorMsg: string | null = null;

      // 1. Primary path: Server-side route handler (handles redirects cleanly & prevents CORS issues)
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        const result = await res.json().catch(() => null);

        if (res.ok && (!result || result.success !== false)) {
          isSuccess = true;
        } else if (result?.message) {
          // Explicit message from Google Apps Script (e.g. Sheet tab naming notice)
          throw new Error(result.message);
        } else {
          errorMsg = 'Could not record enquiry via primary endpoint.';
        }
      } catch (apiErr: any) {
        // If it's a specific message from Google Apps Script, rethrow to display directly
        if (apiErr?.message && !apiErr.message.includes('fetch') && !apiErr.message.includes('Network')) {
          throw apiErr;
        }
        errorMsg = apiErr?.message;
      }

      // 2. Resilient fallback path: Direct invocation to Google Apps Script Web App
      if (!isSuccess) {
        try {
          await fetch(GOOGLE_SCRIPT_WEB_APP_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });
          isSuccess = true;
        } catch (fallbackErr: any) {
          throw new Error(
            errorMsg ||
              fallbackErr?.message ||
              'Unable to send enquiry. Please try again or email info@royalquillpublishers.com.'
          );
        }
      }

      if (isSuccess) {
        setSubmitted(true);
        if (onSuccess) {
          onSuccess();
        }
      }
    } catch (err: any) {
      setErrorMessage(
        err?.message ||
          'We encountered an issue submitting your enquiry. Please verify your details and try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) {
    return (
      <div className={`${styles.form} ${styles[`theme_${theme}`]} ${className}`}>
        <div className={styles.gridRow}>
          <div className={styles.field}>
            <label className={styles.label}>Full Name <span className={styles.req}>*</span></label>
            <input type="text" required placeholder="e.g. Eleanor Vance" className={styles.input} disabled />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Email Address <span className={styles.req}>*</span></label>
            <input type="email" required placeholder="e.g. author@example.com" className={styles.input} disabled />
          </div>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className={`${styles.successCard} ${styles[`theme_${theme}`]} ${className}`}>
        <div className={styles.successIcon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className={styles.successHeading}>Enquiry Received</h3>
        <p className={styles.successMessage}>
          Thank you. We&apos;ll review your details and get back to you within 24 hours.
        </p>
        <button
          type="button"
          className={styles.resetButton}
          onClick={() => {
            setSubmitted(false);
            setErrorMessage(null);
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
          Submit Another Enquiry
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
        <div className={styles.sourceNote}>
          Enquiry about: <strong>{sourceContext}</strong>
        </div>
      )}

      {errorMessage && (
        <div className={styles.errorBanner} role="alert">
          {errorMessage}
        </div>
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
            placeholder="e.g. Eleanor Vance"
            value={formData.fullName}
            onChange={handleChange}
            className={styles.input}
            disabled={loading}
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
            placeholder="e.g. author@example.com"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            disabled={loading}
          />
        </div>
      </div>

      <div className={styles.gridRow}>
        <div className={styles.field}>
          <label htmlFor="form-phone" className={styles.label}>
            Phone Number
          </label>
          <input
            id="form-phone"
            name="phone"
            type="tel"
            placeholder="+44 7... or +1 212..."
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
            disabled={loading}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="form-genre" className={styles.label}>
            Book Genre <span className={styles.req}>*</span>
          </label>
          <select
            id="form-genre"
            name="genre"
            required
            value={formData.genre}
            onChange={handleChange}
            className={styles.select}
            disabled={loading}
          >
            <option value="" disabled>Select your genre</option>
            <option value="Fiction">Fiction</option>
            <option value="Romance">Romance</option>
            <option value="Thriller / Mystery">Thriller & Mystery</option>
            <option value="Fantasy / Sci-Fi">Fantasy & Sci-Fi</option>
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
          Current Manuscript Status
        </label>
        <select
          id="form-stage"
          name="stage"
          value={formData.stage}
          onChange={handleChange}
          className={styles.select}
          disabled={loading}
        >
          <option value="complete">Complete Manuscript (Ready for Production)</option>
          <option value="partial">Partial Draft (50%+ written)</option>
          <option value="early">Early Draft / In Progress</option>
          <option value="concept">Concept & Outline (Needs Ghostwriting)</option>
          <option value="republishing">Previously Published Title</option>
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
          placeholder="Tell us about the premise, target readers, estimated word count, or specific publishing goals..."
          value={formData.aboutBook}
          onChange={handleChange}
          className={styles.textarea}
          disabled={loading}
        />
      </div>

      <div className={styles.termsNote}>
        <span>Your details are kept confidential.</span>
      </div>

      <button
        type="submit"
        disabled={loading}
        className={styles.submitButton}
      >
        {loading ? 'Sending Enquiry...' : 'Send My Enquiry'}
      </button>
    </form>
  );
};

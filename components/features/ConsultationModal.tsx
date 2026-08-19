'use client';

import React, { useState, useEffect } from 'react';
import { Modal } from '@/components/ui/Modal';
import { useConsultation } from '@/context/ConsultationContext';
import { BrandLogo } from '@/components/ui/BrandLogo';
import styles from './ConsultationModal.module.css';

export const ConsultationModal: React.FC = () => {
  const { isModalOpen, closeConsultation, prefilledGenre, prefilledService } = useConsultation();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    genre: '',
    manuscriptStage: 'complete',
    aboutBook: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (prefilledGenre) {
      setFormData((prev) => ({ ...prev, genre: prefilledGenre }));
    }
  }, [prefilledGenre]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      genre: '',
      manuscriptStage: 'complete',
      aboutBook: '',
    });
    closeConsultation();
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={handleReset}
      maxWidth="md"
      title={submitted ? undefined : "Start Your Publishing Journey"}
      subtitle={
        submitted
          ? undefined
          : 'Complimentary manuscript evaluation and publishing consultation with a senior Royal Quill editor.'
      }
    >
      {submitted ? (
        <div className={styles.successState}>
          <div className={styles.successIcon}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#012258" strokeWidth="2.5">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" stroke="#D21625" />
            </svg>
          </div>
          <h3 className={styles.successTitle}>Manuscript Inquiry Received</h3>
          <p className={styles.successDesc}>
            Thank you, <strong>{formData.fullName}</strong>. A senior publishing strategist will review your book details and contact you at <strong>{formData.email}</strong> within 1 business day.
          </p>
          <div className={styles.successBadge}>
            <span>100% Confidentiality & Author Rights Protected</span>
          </div>
          <button type="button" className={styles.successButton} onClick={handleReset}>
            Return to Website
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          {prefilledService && (
            <div className={styles.serviceNote}>
              Inquiring about: <strong>{prefilledService}</strong>
            </div>
          )}

          <div className={styles.fieldRow}>
            <div className={styles.fieldGroup}>
              <label htmlFor="modal-fullName" className={styles.label}>
                Full Name <span className={styles.required}>*</span>
              </label>
              <input
                id="modal-fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Eleanor Vance"
                className={styles.input}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="modal-email" className={styles.label}>
                Email Address <span className={styles.required}>*</span>
              </label>
              <input
                id="modal-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. author@example.com"
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.fieldRow}>
            <div className={styles.fieldGroup}>
              <label htmlFor="modal-phone" className={styles.label}>
                Phone Number
              </label>
              <input
                id="modal-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+44 7... or +1 212..."
                className={styles.input}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="modal-genre" className={styles.label}>
                Book Genre <span className={styles.required}>*</span>
              </label>
              <select
                id="modal-genre"
                name="genre"
                required
                value={formData.genre}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="" disabled>Select your genre</option>
                <option value="Fiction">Fiction (Literary / Contemporary / Historical)</option>
                <option value="Romance">Romance</option>
                <option value="Thriller / Mystery">Thriller / Mystery / Crime</option>
                <option value="Fantasy / Sci-Fi">Fantasy / Sci-Fi</option>
                <option value="Children's / YA">Children&apos;s / Young Adult</option>
                <option value="Memoir / Biography">Memoir / Biography</option>
                <option value="Business / Leadership">Business / Leadership / Tech</option>
                <option value="Self-Help / Wellness">Self-Help / Personal Growth</option>
                <option value="Poetry">Poetry</option>
                <option value="Non-Fiction">Non-Fiction / History / Society</option>
                <option value="Other">Other Genre</option>
              </select>
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="modal-stage" className={styles.label}>
              Current Manuscript Status
            </label>
            <select
              id="modal-stage"
              name="manuscriptStage"
              value={formData.manuscriptStage}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="complete">Complete Manuscript (Ready for Editing/Publishing)</option>
              <option value="partial">Partial Draft (50%+ written)</option>
              <option value="early">Early Draft / In Progress</option>
              <option value="concept">Concept / Notes / Outline (Needs Ghostwriting or Co-Authoring)</option>
              <option value="already-published">Previously Published (Seeking Re-edition / Audio / Translation)</option>
            </select>
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="modal-aboutBook" className={styles.label}>
              Brief About Your Book <span className={styles.required}>*</span>
            </label>
            <textarea
              id="modal-aboutBook"
              name="aboutBook"
              required
              rows={4}
              value={formData.aboutBook}
              onChange={handleChange}
              placeholder="Tell us about the premise, target readers, estimated word count, or specific publishing goals..."
              className={styles.textarea}
            />
          </div>

          <div className={styles.guaranteeBox}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#012258" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>You retain 100% of your book rights, copyright, and royalties. Guaranteed.</span>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className={styles.submitBtn}
          >
            {submitting ? 'Preparing Your Consultation...' : 'Start My Publishing Journey'}
          </button>
        </form>
      )}
    </Modal>
  );
};

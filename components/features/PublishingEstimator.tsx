'use client';

import React, { useState } from 'react';
import { useConsultation } from '@/context/ConsultationContext';
import styles from './PublishingEstimator.module.css';

interface EstimatorState {
  genre: string;
  stage: string;
  wordCount: string;
  formats: string[];
}

export const PublishingEstimator: React.FC = () => {
  const { openConsultation } = useConsultation();
  const [state, setState] = useState<EstimatorState>({
    genre: 'Fiction',
    stage: 'completed-draft',
    wordCount: '50k-80k',
    formats: ['eBook', 'Paperback', 'Hardcover'],
  });

  const toggleFormat = (format: string) => {
    setState((prev) => {
      const exists = prev.formats.includes(format);
      if (exists) {
        if (prev.formats.length === 1) return prev; // Keep at least one
        return { ...prev, formats: prev.formats.filter((f) => f !== format) };
      } else {
        return { ...prev, formats: [...prev.formats, format] };
      }
    });
  };

  // Compute calculated recommendations
  const getTimeline = () => {
    if (state.stage === 'concept') return '16–24 Weeks (Includes Ghostwriting/Co-Authoring)';
    if (state.stage === 'partial') return '12–18 Weeks (Writing + Editorial)';
    if (state.stage === 'needs-heavy-editing') return '10–14 Weeks (Deep Developmental Editing)';
    return '8–12 Weeks (Editing, Design & Global Distribution)';
  };

  const getRecommendedServices = () => {
    const list: string[] = [];
    if (state.stage === 'concept') {
      list.push('Ghostwriting & Voice Calibration');
    } else if (state.stage === 'partial') {
      list.push('Developmental Co-Writing');
    }
    list.push('Comprehensive Developmental & Line Editing');
    list.push('Bespoke Cover Art & Foil Wrap Design');
    list.push(`Interior Typesetting (${state.formats.join(' + ')})`);
    list.push('Global Distribution (Amazon KDP, Apple, Kobo, Barnes & Noble, Ingram)');
    list.push('Official ISBN Registration (100% Owned by Author)');
    if (state.formats.includes('Audiobook')) {
      list.push('Audiobook Studio Voice Casting & ACX Mastering');
    }
    return list;
  };

  return (
    <div className={styles.estimatorCard}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>INTERACTIVE PUBLISHING BLUEPRINT</span>
        <h3 className={styles.title}>Map Your Manuscript Pathway</h3>
        <p className={styles.subtitle}>
          Select your project parameters to generate a customized production roadmap and milestone timeline.
        </p>
      </div>

      <div className={styles.grid}>
        {/* INPUTS COLUMN */}
        <div className={styles.inputsColumn}>
          {/* STEP 1: GENRE */}
          <div className={styles.sectionBlock}>
            <label className={styles.blockLabel}>
              <span className={styles.stepNum}>1</span> Select Genre
            </label>
            <div className={styles.chipsGrid}>
              {[
                'Fiction',
                'Thriller',
                'Memoir',
                'Business',
                'Non-Fiction',
                'Self-Help',
                'Fantasy',
                'Poetry',
              ].map((g) => (
                <button
                  key={g}
                  type="button"
                  className={`${styles.chip} ${state.genre === g ? styles.chipActive : ''}`}
                  onClick={() => setState((prev) => ({ ...prev, genre: g }))}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* STEP 2: MANUSCRIPT STAGE */}
          <div className={styles.sectionBlock}>
            <label className={styles.blockLabel}>
              <span className={styles.stepNum}>2</span> Manuscript Readiness
            </label>
            <div className={styles.selectOptions}>
              {[
                { id: 'completed-draft', label: 'Complete Draft (Ready for Editing)' },
                { id: 'needs-heavy-editing', label: 'Rough Draft (Requires Structural Overhaul)' },
                { id: 'partial', label: 'Partial Manuscript (50%+ Drafted)' },
                { id: 'concept', label: 'Concept / Outline Only (Requires Ghostwriting)' },
              ].map((option) => (
                <label key={option.id} className={styles.radioOption}>
                  <input
                    type="radio"
                    name="manuscriptStage"
                    checked={state.stage === option.id}
                    onChange={() => setState((prev) => ({ ...prev, stage: option.id }))}
                  />
                  <span className={styles.radioLabel}>{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* STEP 3: TARGET FORMATS */}
          <div className={styles.sectionBlock}>
            <label className={styles.blockLabel}>
              <span className={styles.stepNum}>3</span> Target Editions
            </label>
            <div className={styles.checkboxGrid}>
              {['eBook', 'Paperback', 'Hardcover', 'Audiobook'].map((fmt) => {
                const isSelected = state.formats.includes(fmt);
                return (
                  <button
                    key={fmt}
                    type="button"
                    className={`${styles.formatCard} ${isSelected ? styles.formatCardActive : ''}`}
                    onClick={() => toggleFormat(fmt)}
                  >
                    <span className={styles.formatCheckbox}>
                      {isSelected && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </span>
                    <span className={styles.formatName}>{fmt}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* BLUEPRINT SUMMARY COLUMN */}
        <div className={styles.summaryColumn}>
          <div className={styles.blueprintCard}>
            <div className={styles.blueprintHeader}>
              <span className={styles.blueprintTag}>RECOMMENDED PATHWAY</span>
              <h4 className={styles.blueprintTitle}>
                {state.genre} Publishing Blueprint
              </h4>
            </div>

            <div className={styles.timelineRow}>
              <span className={styles.timelineLabel}>Estimated Production Cycle:</span>
              <span className={styles.timelineValue}>{getTimeline()}</span>
            </div>

            <div className={styles.deliverablesList}>
              <span className={styles.listHeading}>Recommended Deliverables:</span>
              <ul>
                {getRecommendedServices().map((svc, i) => (
                  <li key={i}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D21625" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{svc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.ownershipBadge}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#012258" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>100% Rights, Ownership & Royalties Retained by You</span>
            </div>

            <button
              type="button"
              className={styles.blueprintCta}
              onClick={() => openConsultation({ genre: state.genre, service: `${state.genre} Blueprint (${state.formats.join(', ')})` })}
            >
              Request Detailed Blueprint Consultation →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

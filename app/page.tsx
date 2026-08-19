'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { books, Book } from '@/data/books';
import { serviceCategories } from '@/data/services';
import { publishingPlatforms } from '@/data/platforms';
import { genresList } from '@/data/genres';
import { publishingRoadmap } from '@/data/process';
import { useConsultation } from '@/context/ConsultationContext';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import { PlatformLogo } from '@/components/ui/PlatformLogo';
import { HeroBookVisual } from '@/components/features/HeroBookVisual';
import { BookInspectorModal } from '@/components/features/BookInspectorModal';
import { PublishingEstimator } from '@/components/features/PublishingEstimator';
import { ContactForm } from '@/components/features/ContactForm';
import styles from './page.module.css';

export default function HomePage() {
  const { openConsultation } = useConsultation();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [activeServicePillar, setActiveServicePillar] = useState(0);

  return (
    <div className={styles.pageWrapper}>
      {/* ============================================================ */}
      {/* 01 — HERO SECTION (DEEP NAVY) */}
      {/* ============================================================ */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>
              <span className={styles.accentPip} />
              <span>ROYAL QUIL PUBLISHER • ESTABLISHED 5+ YEARS</span>
            </div>

            <h1 className={styles.heroTitle}>
              Your Story Deserves to Be a Published Book.
            </h1>

            <p className={styles.heroDescription}>
              Royal Quil Publisher helps independent authors transform ideas and manuscripts into professionally written, edited, designed, and published books — while keeping full ownership of their work.
            </p>

            <div className={styles.heroActions}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => openConsultation()}
              >
                Start Your Publishing Journey
              </Button>
              <Button
                variant="outline-light"
                size="lg"
                href="#services"
              >
                Explore Our Services
              </Button>
            </div>

            <div className={styles.heroMicroCopy}>
              <div className={styles.microPillars}>
                <span>Writing</span>
                <span className={styles.dot}>•</span>
                <span>Editing</span>
                <span className={styles.dot}>•</span>
                <span>Design</span>
                <span className={styles.dot}>•</span>
                <span>Publishing</span>
              </div>
              <div className={styles.microOwnership}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C0DFFD" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>Your book. Your rights. Your royalties.</span>
              </div>
            </div>
          </div>

          <div className={styles.heroVisualCol}>
            <HeroBookVisual />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 02 — RESTRAINED TRUST & 100% OWNERSHIP STRIP */}
      {/* ============================================================ */}
      <section className={styles.trustSection}>
        <div className={styles.siteContainer}>
          <div className={styles.trustHeader}>
            <span className={styles.trustEyebrow}>BUILT AROUND YOUR BOOK. DESIGNED AROUND YOUR VISION.</span>
            <h2 className={styles.trustMainHeading}>
              YOU KEEP THE BOOK. YOU KEEP THE RIGHTS. YOU KEEP THE ROYALTIES.
            </h2>
            <p className={styles.trustSub}>
              Royal Quil Publisher provides the literary expertise and production infrastructure required to professionally prepare and publish your book, while you retain 100% legal ownership of your intellectual property.
            </p>
          </div>

          <div className={styles.autonomyGrid}>
            <div className={styles.autonomyCard}>
              <div className={styles.autonomyNumber}>01</div>
              <h3 className={styles.autonomyTitle}>100% Ownership & Copyright</h3>
              <p className={styles.autonomyText}>
                Every sentence, character, and concept remains exclusively yours. We register official ISBNs directly in your name or chosen imprint.
              </p>
            </div>

            <div className={styles.autonomyCard}>
              <div className={styles.autonomyNumber}>02</div>
              <h3 className={styles.autonomyTitle}>100% Direct Royalties</h3>
              <p className={styles.autonomyText}>
                Sales revenue from Amazon, Apple, and worldwide retailers deposits directly into your bank account. We take zero cut from ongoing book earnings.
              </p>
            </div>

            <div className={styles.autonomyCard}>
              <div className={styles.autonomyNumber}>03</div>
              <h3 className={styles.autonomyTitle}>100% Creative Autonomy</h3>
              <p className={styles.autonomyText}>
                You retain ultimate editorial and artistic sign-off. All print-ready and digital master source files are handed over upon completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 03 — PUBLISHING PLATFORM ECOSYSTEM */}
      {/* ============================================================ */}
      <section className={styles.platformsSection}>
        <div className={styles.siteContainer}>
          <SectionHeading
            eyebrow="GLOBAL DISTRIBUTION CHANNELS"
            title="From Your Manuscript to the Shelves Your Readers Already Know."
            subtitle="We distribute and optimize your title across the world's most influential bookstore networks, digital platforms, and wholesale catalogs."
          />

          <div className={styles.platformsGrid}>
            {publishingPlatforms.map((platform) => (
              <div key={platform.id} className={styles.platformCard}>
                <PlatformLogo id={platform.id} />
                <div className={styles.platformHeader}>
                  <span className={styles.platformCategory}>{platform.category}</span>
                  <h4 className={styles.platformName}>{platform.name}</h4>
                </div>
                <p className={styles.platformDesc}>{platform.description}</p>
                <div className={styles.platformHighlight}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D21625" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{platform.highlight}</span>
                </div>
                <div className={styles.platformFormats}>
                  {platform.formats.map((fmt, i) => (
                    <span key={i} className={styles.formatTag}>{fmt}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.platformDisclaimer}>
            <span>All platform names, logos, and trademarks are the property of their respective owners and are referenced solely to identify publication availability.</span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 04 — SERVICES ARCHITECTURE (6 CORE PILLARS) */}
      {/* ============================================================ */}
      <section id="services" className={styles.servicesSection}>
        <div className={styles.siteContainer}>
          <SectionHeading
            eyebrow="END-TO-END PUBLISHING FRAMEWORK"
            title="Everything Your Book Needs. Under One Roof."
            subtitle="From the first outline to global retail distribution, Royal Quil Publisher unites writing, editorial, design, and marketing into one seamless partnership."
          />

          {/* EDITORIAL PILLARS SELECTOR */}
          <div className={styles.pillarsSelector}>
            {serviceCategories.map((cat, idx) => (
              <button
                key={cat.id}
                type="button"
                className={`${styles.pillarTab} ${activeServicePillar === idx ? styles.pillarTabActive : ''}`}
                onClick={() => setActiveServicePillar(idx)}
              >
                <span className={styles.pillarNumber}>{cat.number}</span>
                <span className={styles.pillarName}>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* ACTIVE PILLAR EXPANDED VIEW */}
          {(() => {
            const currentCat = serviceCategories[activeServicePillar];
            return (
              <div className={styles.pillarDetailCard}>
                <div className={styles.pillarHeaderRow}>
                  <div>
                    <span className={styles.pillarTag}>CATEGORY {currentCat.number}</span>
                    <h3 className={styles.pillarTitle}>{currentCat.name}</h3>
                    <p className={styles.pillarTagline}>{currentCat.tagline}</p>
                  </div>
                  <p className={styles.pillarSummary}>{currentCat.summary}</p>
                </div>

                <div className={styles.subServicesGrid}>
                  {currentCat.subServices.map((sub) => (
                    <div key={sub.id} className={styles.subServiceCard}>
                      <div className={styles.subCardTop}>
                        <div className={styles.subIconTitleGroup}>
                          <ServiceIcon name={sub.slug} size="md" variant="light" />
                          <div>
                            <h4 className={styles.subTitle}>{sub.title}</h4>
                            <span className={styles.subCardSlug}>PILLAR {currentCat.number}</span>
                          </div>
                        </div>
                        <span className={styles.timelineBadge}>{sub.timeline}</span>
                      </div>
                      <p className={styles.subShortDesc}>{sub.shortDescription}</p>

                      <div className={styles.deliverablesBlock}>
                        <span className={styles.delivTitle}>Key Deliverables:</span>
                        <ul className={styles.delivList}>
                          {sub.deliverables.slice(0, 3).map((d, i) => (
                            <li key={i}>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D21625" strokeWidth="2.5">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.subCardActions}>
                        <Link href={`/services/${sub.slug}`} className={styles.subLearnMore}>
                          Read Full Service Details →
                        </Link>
                        <button
                          type="button"
                          className={styles.subInquireBtn}
                          onClick={() => openConsultation({ service: sub.title })}
                        >
                          Inquire
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}

          <div className={styles.servicesFooterCta}>
            <Link href="/services" className={styles.allServicesBtn}>
              Explore Full 12-Service Directory & Specifications →
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 05 — BOOK PORTFOLIO (REAL CLIENT COVERS) */}
      {/* ============================================================ */}
      <section className={styles.portfolioSection}>
        <div className={styles.siteContainer}>
          <SectionHeading
            eyebrow="SELECTED RECENT TITLES"
            title="Books We're Proud to Put Our Name Behind."
            subtitle="A curated selection of work across diverse genres, trim sizes, and author journeys."
          />

          <div className={styles.portfolioGrid}>
            {/* FEATURED LARGE HERO BOOK */}
            {books[0] && (
              <div
                className={`${styles.bookCard} ${styles.bookCardFeatured}`}
                onClick={() => setSelectedBook(books[0])}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedBook(books[0])}
              >
                <div className={styles.featuredCoverWrap}>
                  <Image
                    src={books[0].coverImage}
                    alt={books[0].title}
                    width={380}
                    height={570}
                    className={styles.coverImg}
                  />
                  <div className={styles.spineEffect} />
                </div>
                <div className={styles.featuredMeta}>
                  <div className={styles.badgeRow}>
                    <span className={styles.genreTag}>{books[0].genre}</span>
                    <span className={styles.featuredTag}>Featured Title</span>
                  </div>
                  <h3 className={styles.featuredBookTitle}>{books[0].title}</h3>
                  <p className={styles.featuredAuthor}>By {books[0].author}</p>
                  <p className={styles.featuredTagline}>&ldquo;{books[0].tagline}&rdquo;</p>
                  <div className={styles.formatsList}>
                    {books[0].formats.map((f, i) => (
                      <span key={i} className={styles.formatPill}>{f}</span>
                    ))}
                  </div>
                  <span className={styles.inspectHint}>Click to inspect book specifications & synopsis →</span>
                </div>
              </div>
            )}

            {/* SUPPORTING ASYMMETRICAL COVERS */}
            <div className={styles.supportingGrid}>
              {books.slice(1, 7).map((book) => (
                <div
                  key={book.id}
                  className={styles.supportingCard}
                  onClick={() => setSelectedBook(book)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedBook(book)}
                >
                  <div className={styles.supportingCoverWrap}>
                    <Image
                      src={book.coverImage}
                      alt={book.title}
                      width={220}
                      height={330}
                      className={styles.coverImg}
                    />
                    <div className={styles.spineEffect} />
                  </div>
                  <div className={styles.supportingInfo}>
                    <span className={styles.suppGenre}>{book.genre}</span>
                    <h4 className={styles.suppTitle}>{book.title}</h4>
                    <p className={styles.suppAuthor}>{book.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.portfolioFooter}>
            <Link href="/portfolio" className={styles.allPortfolioBtn}>
              View Complete Literary Portfolio & Formats →
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 06 — THE AUTHOR JOURNEY (TRANSFORMATION TIMELINE) */}
      {/* ============================================================ */}
      <section className={styles.journeySection}>
        <div className={styles.siteContainer}>
          <SectionHeading
            eyebrow="NARRATIVE MILESTONES"
            title="From Idea to Author."
            subtitle="The definitive transformation from raw concept to globally published literary work."
            align="center"
          />

          <div className={styles.timelineWrapper}>
            <div className={styles.timelineTrack} />

            <div className={styles.timelineNodes}>
              <div className={styles.timelineNode}>
                <div className={styles.nodeMarker}>01</div>
                <div className={styles.nodeContent}>
                  <span className={styles.nodeStage}>THE SPARK</span>
                  <h4 className={styles.nodeTitle}>Your Idea</h4>
                  <p className={styles.nodeText}>
                    A profound story, lived memoir, proprietary methodology, or creative impulse waiting to be captured.
                  </p>
                </div>
              </div>

              <div className={styles.timelineNode}>
                <div className={styles.nodeMarker}>02</div>
                <div className={styles.nodeContent}>
                  <span className={styles.nodeStage}>THE FOUNDATION</span>
                  <h4 className={styles.nodeTitle}>Your Manuscript</h4>
                  <p className={styles.nodeText}>
                    Draft chapters, outline notes, or a completed draft brought to our confidential editorial desk.
                  </p>
                </div>
              </div>

              <div className={styles.timelineNode}>
                <div className={styles.nodeMarker}>03</div>
                <div className={styles.nodeContent}>
                  <span className={styles.nodeStage}>THE CRAFTSMANSHIP</span>
                  <h4 className={styles.nodeTitle}>Our Expertise</h4>
                  <p className={styles.nodeText}>
                    Developmental editing, bespoke cover typography, interior typesetting, and ISBN cataloging.
                  </p>
                </div>
              </div>

              <div className={styles.timelineNode}>
                <div className={styles.nodeMarker}>04</div>
                <div className={styles.nodeContent}>
                  <span className={styles.nodeStage}>THE DESTINATION</span>
                  <h4 className={styles.nodeTitle}>Your Published Book</h4>
                  <p className={styles.nodeText}>
                    Live on Amazon, Apple, and international shelves in hardcover, paperback, and eBook — 100% owned by you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 07 — HOW IT WORKS (4-STAGE PROCESS) */}
      {/* ============================================================ */}
      <section className={styles.processSection}>
        <div className={styles.siteContainer}>
          <SectionHeading
            eyebrow="PUBLISHING METHODOLOGY"
            title="A Clear, Structured Process from Start to Launch."
            subtitle="No confusion, no hidden clauses, and no loss of control. Here is how we bring your title to life."
          />

          <div className={styles.processGrid}>
            {publishingRoadmap.map((stage) => (
              <div key={stage.step} className={styles.processCard}>
                <div className={styles.processHeader}>
                  <span className={styles.stageNumber}>{stage.step}</span>
                  <span className={styles.stageDuration}>{stage.duration}</span>
                </div>
                <h4 className={styles.stageName}>{stage.name}</h4>
                <span className={styles.stageSubtitle}>{stage.subtitle}</span>
                <p className={styles.stageDesc}>{stage.description}</p>
                <div className={styles.stageActionsList}>
                  {stage.keyActions.slice(0, 2).map((act, i) => (
                    <div key={i} className={styles.stageActionItem}>
                      <span className={styles.actionPip} />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.processFooter}>
            <Link href="/process" className={styles.processDeepLink}>
              Review Our Full Milestone Deliverables & Timeline FAQ →
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 08 — WHY ROYAL QUIL (4 PRINCIPLES) */}
      {/* ============================================================ */}
      <section className={styles.whySection}>
        <div className={styles.siteContainer}>
          <div className={styles.whyHeroBlock}>
            <div className={styles.whyHeaderCol}>
              <span className={styles.whyEyebrow}>THE ROYAL QUIL COMMITMENT</span>
              <h2 className={styles.whyMainTitle}>
                Publishing Expertise. Without Taking Your Story Away From You.
              </h2>
              <p className={styles.whyMainSub}>
                Traditional publishers demand all intellectual rights and pay minor royalties. Low-end services deliver generic template designs. Royal Quil Publisher delivers the craftsmanship of a premier imprint while leaving you in full ownership.
              </p>
              <div className={styles.experienceBadge}>
                <span className={styles.expNumber}>5+</span>
                <span className={styles.expText}>Years of Independent Publishing & Book Production Excellence</span>
              </div>
            </div>

            <div className={styles.principlesCol}>
              <div className={styles.principleItem}>
                <div className={styles.principleNum}>01</div>
                <div>
                  <h4 className={styles.principleTitle}>You Keep Full Ownership</h4>
                  <p className={styles.principleText}>
                    You retain 100% of your copyright, creative rights, and royalties. We never hold your intellectual property hostage.
                  </p>
                </div>
              </div>

              <div className={styles.principleItem}>
                <div className={styles.principleNum}>02</div>
                <div>
                  <h4 className={styles.principleTitle}>End-to-End Literary Support</h4>
                  <p className={styles.principleText}>
                    Writing, structural editing, line editing, cover design, typesetting, distribution, and launch marketing all coordinated under one roof.
                  </p>
                </div>
              </div>

              <div className={styles.principleItem}>
                <div className={styles.principleNum}>03</div>
                <div>
                  <h4 className={styles.principleTitle}>Built Around Your Book</h4>
                  <p className={styles.principleText}>
                    Every book is treated as an individual piece of literature. We do not use cookie-cutter templates or automated shortcuts.
                  </p>
                </div>
              </div>

              <div className={styles.principleItem}>
                <div className={styles.principleNum}>04</div>
                <div>
                  <h4 className={styles.principleTitle}>Publishing Without the Mystery</h4>
                  <p className={styles.principleText}>
                    Transparent milestone schedules, clear communication, and direct access to your senior publishing strategist.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 09 — GENRES SECTION */}
      {/* ============================================================ */}
      <section className={styles.genresSection}>
        <div className={styles.siteContainer}>
          <SectionHeading
            eyebrow="LITERARY SCOPE"
            title="Whatever Your Story, It Deserves a Place on the Shelf."
            subtitle="We work across all primary literary genres, calibrating editorial voice and cover aesthetics to genre reader expectations."
          />

          <div className={styles.genresGrid}>
            {genresList.map((g) => (
              <div key={g.id} className={styles.genreCard}>
                <h4 className={styles.genreName}>{g.name}</h4>
                <p className={styles.genreTagline}>&ldquo;{g.tagline}&rdquo;</p>
                <p className={styles.genreDesc}>{g.description}</p>
                <div className={styles.genreTagsRow}>
                  {g.keyElements.map((el, i) => (
                    <span key={i} className={styles.genreKeyTag}>{el}</span>
                  ))}
                </div>
                <button
                  type="button"
                  className={styles.genreConsultBtn}
                  onClick={() => openConsultation({ genre: g.name })}
                >
                  Consult for {g.name} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10 — AUTHOR OWNERSHIP SPOTLIGHT (DEEP NAVY) */}
      {/* ============================================================ */}
      <section className={styles.ownershipSpotlight}>
        <div className={styles.siteContainer}>
          <div className={styles.spotlightBox}>
            <div className={styles.spotlightContent}>
              <span className={styles.spotlightEyebrow}>UNCOMPROMISING RIGHTS INTEGRITY</span>
              <h2 className={styles.spotlightHeading}>
                Your Name on the Cover. Your Rights in Your Hands.
              </h2>
              <p className={styles.spotlightSub}>
                You retain 100% ownership and royalties from your work. Unlike traditional publishing agreements that capture 80%+ of your future earnings, our partnership model preserves complete creative and financial freedom for the author.
              </p>

              <div className={styles.spotlightChecks}>
                <div className={styles.checkItem}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0DFFD" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>All ISBNs registered directly in your name</span>
                </div>
                <div className={styles.checkItem}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0DFFD" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>100% of sales royalties deposit directly to your bank</span>
                </div>
                <div className={styles.checkItem}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0DFFD" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Master print & digital source files delivered in full</span>
                </div>
              </div>

              <div className={styles.spotlightCtaRow}>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => openConsultation()}
                >
                  Start Your Publishing Journey
                </Button>
                <Link href="/publishing" className={styles.spotlightSecondaryLink}>
                  Explore Rights & Royalties Breakdown →
                </Link>
              </div>
            </div>

            <div className={styles.spotlightVisual}>
              <div className={styles.contractEmblem}>
                <div className={styles.emblemLogoWrap}>
                  <Image
                    src="/images/royal-quil-logo.png"
                    alt="Royal Quil Publisher Emblem"
                    width={220}
                    height={68}
                    className={styles.emblemLogoImg}
                  />
                </div>
                <span className={styles.emblemSub}>100% AUTHOR AUTONOMY CHARTER</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 11 — INTERACTIVE PUBLISHING BLUEPRINT ESTIMATOR */}
      {/* ============================================================ */}
      <section className={styles.estimatorSection}>
        <div className={styles.siteContainer}>
          <PublishingEstimator />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 12 — ABOUT ROYAL QUIL PARTNERSHIP SECTION */}
      {/* ============================================================ */}
      <section className={styles.aboutSection}>
        <div className={styles.siteContainer}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutTextCol}>
              <span className={styles.aboutEyebrow}>ABOUT ROYAL QUIL PUBLISHER</span>
              <h2 className={styles.aboutTitle}>
                Publishing Should Feel Like a Partnership.
              </h2>
              <p className={styles.aboutLead}>
                Royal Quil Publisher was founded on a singular conviction: that serious authors deserve the craftsmanship and commercial reach of a major publishing house without surrendering their intellectual rights or creative voice.
              </p>
              <p className={styles.aboutBody}>
                Over 5+ years of active publishing, our editors, book designers, typesetters, and marketing strategists have partnered with novelists, executives, memoirists, and researchers across the UK and US to produce award-caliber physical and digital editions.
              </p>
              <div className={styles.aboutLinkRow}>
                <Link href="/about" className={styles.aboutMoreLink}>
                  Read Our Full Publishing Story & Editorial Standards →
                </Link>
              </div>
            </div>

            <div className={styles.aboutStatsCol}>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Author Rights & Royalty Retention Guaranteed</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>5+</span>
                <span className={styles.statLabel}>Years Dedicated to Independent Author Excellence</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>40,000+</span>
                <span className={styles.statLabel}>Global Retail & Library Channels via Distribution</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>UK & US</span>
                <span className={styles.statLabel}>Primary Author Markets Supported Daily</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 13 — FINAL HIGH-IMPACT CTA & LEAD CAPTURE FORM (NAVY) */}
      {/* ============================================================ */}
      <section id="contact" className={styles.finalCtaSection}>
        <div className={styles.siteContainer}>
          <div className={styles.finalCtaGrid}>
            <div className={styles.finalCtaTextCol}>
              <span className={styles.finalEyebrow}>START YOUR PUBLISHING JOURNEY</span>
              <h2 className={styles.finalTitle}>Your Book Could Be Next.</h2>
              <p className={styles.finalDesc}>
                Tell us about your book and where you want to take it. We will evaluate your manuscript, review your genre positioning, and provide a clear, transparent pathway to publication.
              </p>

              <div className={styles.finalPillarsRow}>
                <div className={styles.finalPillar}>
                  <span className={styles.finalPillarNum}>01</span>
                  <span>Free Structural Evaluation</span>
                </div>
                <div className={styles.finalPillar}>
                  <span className={styles.finalPillarNum}>02</span>
                  <span>100% NDA Protection</span>
                </div>
                <div className={styles.finalPillar}>
                  <span className={styles.finalPillarNum}>03</span>
                  <span>Transparent Scope</span>
                </div>
              </div>
            </div>

            <div className={styles.finalFormCol}>
              <div className={styles.formContainerCard}>
                <h3 className={styles.formCardHeading}>Let&apos;s Talk About Your Book.</h3>
                <p className={styles.formCardSub}>
                  Share details about your manuscript for a complimentary consultation.
                </p>
                <ContactForm theme="dark" sourceContext="Homepage Final CTA" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL INSPECTOR */}
      <BookInspectorModal
        book={selectedBook}
        isOpen={Boolean(selectedBook)}
        onClose={() => setSelectedBook(null)}
      />
    </div>
  );
}

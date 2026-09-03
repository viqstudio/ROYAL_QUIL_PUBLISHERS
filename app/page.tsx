'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { books, Book } from '@/data/books';
import { allSubServices } from '@/data/services';
import { useConsultation } from '@/context/ConsultationContext';
import { Button } from '@/components/ui/Button';
import { BookInspectorModal } from '@/components/features/BookInspectorModal';
import { ContactForm } from '@/components/features/ContactForm';
import styles from './page.module.css';

const serviceGroups = [
  {
    title: 'Writing & Development',
    description: 'Ghostwriting, book writing and co-authoring support for authors starting from an idea or a partial draft.',
    slugs: ['ghostwriting', 'book-writing'],
  },
  {
    title: 'Editing & Proofreading',
    description: 'Developmental editing, line editing and proofreading for manuscripts at any stage.',
    slugs: ['editing', 'proofreading'],
  },
  {
    title: 'Design & Formatting',
    description: 'Professional cover design and print-ready formatting for eBook, paperback and hardcover editions.',
    slugs: ['cover-design', 'formatting'],
  },
  {
    title: 'Publishing, Distribution & Marketing',
    description: 'Retail setup, metadata, Amazon KDP publishing, book marketing and author websites.',
    slugs: ['publishing', 'book-marketing', 'author-website'],
  },
];

export default function HomePage() {
  const { openConsultation } = useConsultation();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const featuredBooks = books;

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <Image
          src="/images/hero-cinematic-desk.jpg"
          alt="Publishing desk with books, manuscript pages, and editorial tools"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrowLight}>INDEPENDENT PUBLISHING FOR AUTHORS</span>
            <h1>Professional support from manuscript to published book.</h1>
            <p>
              Royal Quill Publishers provides professional writing, editing, design, publishing and marketing support for independent authors. Whether you have an idea, a partial draft or a finished manuscript, our editorial team helps you shape it into a book you are proud to publish, and you never have to give up ownership of your work to do it.
            </p>
            <div className={styles.heroActions}>
              <Button variant="primary" size="lg" onClick={() => openConsultation()}>
                Discuss Your Book
              </Button>
              <Button variant="outline-light" size="lg" href="/services">
                View Publishing Services
              </Button>
            </div>
            <p className={styles.heroServiceLine}>Writing · Editing · Design · Publishing · Marketing</p>
          </div>
        </div>
      </section>

      <section className={styles.approachSection}>
        <div className={styles.container}>
          <div className={styles.approachGrid}>
            <div className={styles.approachImageWrap}>
              <Image
                src="/images/how-we-help-authors.jpg"
                alt="Editors reviewing a manuscript and printed book proofs"
                width={620}
                height={470}
                sizes="(max-width: 900px) 100vw, 48vw"
                className={styles.approachImage}
              />
            </div>
            <div className={styles.approachCopy}>
              <span className={styles.eyebrow}>AUTHOR SUPPORT</span>
              <h2>How We Help Authors</h2>
              <p>
                Every manuscript arrives at a different stage, so we start by reviewing what you have and discussing what your book needs. From there, we agree a clear scope of work and manage the editorial and production process in straightforward stages, so you always know what is happening and why.
              </p>
              <p>
                You approve the manuscript, the cover and the interior layout before anything goes to publication. Royal Quill Publishers does not take ownership of your creative work at any point in the process.
              </p>
              <Link href="/about" className={styles.textLink}>Learn about Royal Quill →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>PUBLISHING SERVICES</span>
            <h2>Publishing Services</h2>
            <p>Our publishing services are grouped into four areas and can be booked individually or combined into a complete self-publishing package.</p>
          </div>

          <div className={styles.serviceGroups}>
            {serviceGroups.map((group, index) => (
              <article key={group.title} className={styles.serviceGroup}>
                <span className={styles.groupNumber}>0{index + 1}</span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <ul>
                  {group.slugs.map((slug) => {
                    const service = allSubServices.find((item) => item.slug === slug);
                    return service ? (
                      <li key={slug}>
                        <Link href={`/services/${slug}`}>{service.title}<span aria-hidden="true">→</span></Link>
                      </li>
                    ) : null;
                  })}
                </ul>
              </article>
            ))}
          </div>

          <div className={styles.sectionAction}>
            <Button variant="secondary" size="md" href="/services">View All Services</Button>
          </div>
        </div>
      </section>

      <section className={styles.workSection}>
        <div className={styles.container}>
          <div className={styles.workHeader}>
            <div>
              <span className={styles.eyebrowLight}>SELECTED WORK</span>
              <h2>Selected Work</h2>
              <p>Our editorial and design team has prepared titles across fiction, nonfiction, poetry and children&apos;s books for publication on Amazon KDP and other major retailers, including <em>Empire: Borders Within</em>, <em>The Rat Race</em>, <em>Feel</em>, <em>Expression</em>, <em>Would I? Can I? Should I?</em> and <em>We Love Jesus</em>.</p>
            </div>
            <Button variant="outline-light" size="md" href="/portfolio">View Our Work</Button>
          </div>

          <div className={styles.booksGrid}>
            {featuredBooks.map((book) => (
              <button key={book.id} type="button" className={styles.bookCard} onClick={() => setSelectedBook(book)}>
                <span className={styles.coverWrap}>
                  <Image
                    src={book.coverImage}
                    alt={`Cover of ${book.title} by ${book.author}`}
                    width={280}
                    height={420}
                    sizes="(max-width: 600px) 70vw, (max-width: 1000px) 38vw, 22vw"
                    className={styles.coverImage}
                  />
                </span>
                <span className={styles.bookTitle}>{book.title}</span>
                <span className={styles.bookAuthor}>by {book.author}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="ownership" className={styles.ownershipSection}>
        <div className={styles.container}>
          <div className={styles.ownershipGrid}>
            <div className={styles.ownershipImagePanel}>
              <Image
                src="/images/your-intellectual-property.png"
                alt="Author holding a finished book"
                width={680}
                height={510}
                sizes="(max-width: 900px) 90vw, 46vw"
                className={styles.ownershipImage}
              />
            </div>
            <div className={styles.ownershipCopy}>
              <span className={styles.eyebrow}>AUTHOR OWNERSHIP</span>
              <h2>Your Work, Your Rights</h2>
              <p>Royal Quill Publishers is a publishing services provider, not a traditional acquisitions publisher.</p>
              <ul className={styles.rightsList}>
                <li><strong>Your copyright:</strong> Your manuscript remains your copyright.</li>
                <li><strong>Your approval:</strong> You sign off the text, cover and interior before release.</li>
                <li><strong>Your files:</strong> You receive the final production files as agreed.</li>
                <li><strong>Your royalties:</strong> Retailer royalties follow the accounts set up for your project.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <div className={styles.contactCopy}>
              <span className={styles.eyebrowLight}>DISCUSS YOUR MANUSCRIPT</span>
              <h2>Start the Conversation</h2>
              <p>
                Tell us about your manuscript and the support you are looking for. We will review the information and explain the next step, with no obligation and a clear project scope before any work begins.
              </p>
            </div>
            <div className={styles.formPanel}>
              <h3>Manuscript enquiry</h3>
              <p>Complete the form below to begin the conversation.</p>
              <ContactForm theme="light" />
            </div>
          </div>
        </div>
      </section>

      <BookInspectorModal
        book={selectedBook}
        isOpen={Boolean(selectedBook)}
        onClose={() => setSelectedBook(null)}
      />
    </div>
  );
}

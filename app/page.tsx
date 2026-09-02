'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { books, Book } from '@/data/books';
import { allSubServices } from '@/data/services';
import { publishingRoadmap } from '@/data/process';
import { publishingPlatforms } from '@/data/platforms';
import { useConsultation } from '@/context/ConsultationContext';
import { Button } from '@/components/ui/Button';
import { BookInspectorModal } from '@/components/features/BookInspectorModal';
import { ContactForm } from '@/components/features/ContactForm';
import { PlatformLogo } from '@/components/ui/PlatformLogo';
import { TestimonialsSection } from '@/components/features/TestimonialsSection';
import styles from './page.module.css';

const serviceGroups = [
  {
    title: 'Writing & Editorial',
    description: 'Support for ideas, partial drafts, and completed manuscripts.',
    slugs: ['ghostwriting', 'book-writing', 'editing', 'proofreading'],
  },
  {
    title: 'Design & Production',
    description: 'Professional cover design, interior layout, and printed editions.',
    slugs: ['cover-design', 'formatting', 'printing'],
  },
  {
    title: 'Publishing & Distribution',
    description: 'Prepare your book for print, digital retail, and wider distribution.',
    slugs: ['publishing'],
  },
  {
    title: 'Marketing & Author Services',
    description: 'Practical support for reaching readers and building your author presence.',
    slugs: ['book-marketing', 'author-website', 'audiobook', 'book-trailer'],
  },
];

export default function HomePage() {
  const { openConsultation } = useConsultation();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const featuredBooks = books.slice(0, 4);
  const retailPlatforms = publishingPlatforms.filter((platform) => platform.id !== 'isbn-agencies').slice(0, 5);

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
              Royal Quill helps authors write, edit, design, publish, and market their books while retaining the rights to their creative work.
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
              <span className={styles.eyebrow}>HOW WE HELP</span>
              <h2>A publishing team for every stage of your book.</h2>
              <p>
                You may have an idea, a rough draft, or a finished manuscript. We identify what the book needs, agree the work with you, and manage the editorial and production process in clear stages.
              </p>
              <p>
                You approve the manuscript, cover, and interior before publication. Royal Quill does not take ownership of your creative work.
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
            <h2>Choose the support your book needs.</h2>
            <p>Services can be commissioned individually or combined into a complete publishing project.</p>
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
              <h2>Books prepared for publication.</h2>
              <p>A selection of titles produced across print and digital formats.</p>
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

      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>HOW IT WORKS</span>
            <h2>A clear route from manuscript to publication.</h2>
            <p>Each project is scoped individually, but the main stages remain straightforward.</p>
          </div>

          <ol className={styles.processList}>
            {publishingRoadmap.map((stage) => (
              <li key={stage.step}>
                <span className={styles.processNumber}>{stage.step}</span>
                <div>
                  <h3>{stage.name}</h3>
                  <p>{stage.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className={styles.sectionAction}>
            <Button variant="secondary" size="md" href="/process">See the Full Publishing Process</Button>
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
              <span className={styles.eyebrow}>YOUR WORK. YOUR RIGHTS.</span>
              <h2>You retain the rights to your creative work.</h2>
              <p>
                Royal Quill provides professional publishing services without taking ownership of your manuscript or intellectual property.
              </p>
              <ul className={styles.rightsList}>
                <li><strong>Your copyright:</strong> your manuscript remains your work.</li>
                <li><strong>Your approval:</strong> you sign off the text, cover, and interior.</li>
                <li><strong>Your files:</strong> final production files are delivered as agreed.</li>
                <li><strong>Your royalties:</strong> retailer payments follow the accounts agreed for your project.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.distributionSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>PUBLISHING & DISTRIBUTION</span>
            <h2>Prepare your book for major retail channels.</h2>
            <p>We support print and digital setup for the platforms selected in your publishing plan.</p>
          </div>
          <div className={styles.platformRow}>
            {retailPlatforms.map((platform) => (
              <div key={platform.id} className={styles.platformItem}>
                <PlatformLogo id={platform.id} />
                <span>{platform.name}</span>
              </div>
            ))}
          </div>
          <p className={styles.platformNote}>Platform availability depends on format, territory, and the distribution route selected.</p>
        </div>
      </section>

      <TestimonialsSection />

      <section id="contact" className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <div className={styles.contactCopy}>
              <span className={styles.eyebrowLight}>DISCUSS YOUR MANUSCRIPT</span>
              <h2>Tell us about your book.</h2>
              <p>
                Share the stage of your manuscript, the services you are considering, and the formats you want to publish. Our team will review the information and explain the next step.
              </p>
              <ul>
                <li>Your enquiry is treated confidentially.</li>
                <li>You receive a clear project scope before work begins.</li>
                <li>You remain in control of editorial and design approval.</li>
              </ul>
            </div>
            <div className={styles.formPanel}>
              <h3>Manuscript enquiry</h3>
              <p>Complete the form below to begin the conversation.</p>
              <ContactForm theme="light" sourceContext="Homepage enquiry" />
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

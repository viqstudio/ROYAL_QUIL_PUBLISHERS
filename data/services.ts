export interface SubService {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  idealFor: string;
  timeline: string;
  faqs?: { question: string; answer: string }[];
}

export interface ServiceCategory {
  number: string;
  id: string;
  name: string;
  tagline: string;
  summary: string;
  colorHighlight: string;
  subServices: SubService[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    number: '01',
    id: 'write',
    name: 'Writing & Development',
    tagline: 'Professional writing support for ideas, outlines, and partial drafts.',
    summary: 'Our writers can develop a complete manuscript from interviews and notes, or work alongside you to finish an existing draft.',
    colorHighlight: '#012258',
    subServices: [
      {
        id: 'ghostwriting',
        slug: 'ghostwriting',
        title: 'Ghostwriting',
        shortDescription: 'Collaborative, confidential manuscript creation from your ideas, notes, or interviews.',
        fullDescription: 'Our ghostwriting service pairs you with a writer who learns your subject, voice, and goals. Through interviews, outlining, and chapter reviews, we develop a complete manuscript while the rights to the commissioned work remain with you as agreed in the contract.',
        deliverables: [
          'Agreed concept, structure, and chapter outline',
          'In-depth interview sessions & voice transcription',
          'Full-length book manuscript (40,000–80,000+ words)',
          'Two full revision cycles',
          'Confidentiality and copyright terms confirmed in the agreement'
        ],
        idealFor: 'Busy executives, thought leaders, memoirists, and individuals with profound stories who lack the time to draft full manuscripts.',
        timeline: '12–24 Weeks',
        faqs: [
          {
            question: 'Will anyone know I used a ghostwriter?',
            answer: 'Never, unless you choose to credit them. All Royal Quill ghostwriting engagements are protected by strict Non-Disclosure Agreements. You are the sole named author and legal rights holder.'
          },
          {
            question: 'How do you capture my personal voice?',
            answer: 'We conduct structured voice-calibration interviews and produce a sample chapter first. We analyze your pacing, vocabulary, and cadence until the prose feels unmistakably yours.'
          }
        ]
      },
      {
        id: 'book-writing',
        slug: 'book-writing',
        title: 'Book Writing & Co-Authoring',
        shortDescription: 'Hands-on manuscript drafting, chapter-by-chapter co-writing, and narrative coaching.',
        fullDescription: 'For authors who wish to write alongside an experienced literary partner. We provide chapter structural frameworks, co-drafting sessions, research support, and rigorous developmental milestones to bring your manuscript from initial concept to completion.',
        deliverables: [
          'Detailed chapter-by-chapter outline and narrative beats',
          'Collaborative writing sprints and regular milestone reviews',
          'Primary source research and factual verification',
          'Final manuscript polish and structural harmonization'
        ],
        idealFor: 'First-time authors, novelists seeking structural discipline, and non-fiction specialists seeking co-authoring support.',
        timeline: '10–20 Weeks',
        faqs: [
          {
            question: 'How does collaborative co-writing differ from ghostwriting?',
            answer: 'In co-writing, you are actively writing segments and working directly with an editor/co-writer who provides real-time prose enhancement, structural filling, and coaching rather than writing the entire draft on your behalf.'
          }
        ]
      }
    ]
  },
  {
    number: '02',
    id: 'refine',
    name: 'Editing & Proofreading',
    tagline: 'Structural editing, line editing, and final proofreading.',
    summary: 'We review structure, pacing, clarity, consistency, grammar, and presentation while preserving the author’s voice.',
    colorHighlight: '#012258',
    subServices: [
      {
        id: 'editing',
        slug: 'editing',
        title: 'Developmental & Line Editing',
        shortDescription: 'Deep structural critique, pacing refinement, narrative coherence, and sentence-level mastery.',
        fullDescription: 'Developmental editing reviews the structure, argument, plot, character development, pacing, and consistency of the manuscript. Line editing then improves clarity, wording, rhythm, and flow without rewriting the author’s voice.',
        deliverables: [
          'Editorial appraisal and recommended priorities',
          'Line-by-line Track Changes markup across the entire manuscript',
          'Two 60-minute 1-on-1 editorial review consultations',
          'Clean revised manuscript file ready for typesetting'
        ],
        idealFor: 'Authors with completed drafts seeking the rigorous polish of an established publishing house editor.',
        timeline: '3–6 Weeks',
        faqs: [
          {
            question: 'Will editing change my creative voice?',
            answer: 'No. Our editorial philosophy is restorative and elevating, not homogenizing. We sharpen your distinctive voice, eliminate unintentional ambiguities, and enhance narrative momentum.'
          }
        ]
      },
      {
        id: 'proofreading',
        slug: 'proofreading',
        title: 'Proofreading',
        shortDescription: 'Final typographical, grammatical, punctuation, and typesetting verification.',
        fullDescription: 'The final, essential quality barrier before publication. Our eagle-eyed proofreaders catch grammatical anomalies, punctuation inconsistencies, hyphenation errors, widows, orphans, and formatting discrepancies across both digital and print galleys.',
        deliverables: [
          'Full-pass grammatical and typographical correction',
          'Consistency check for capitalization, hyphenation, and styling',
          'Galley layout review for orphan lines and page breaks',
          'Final verified publication-ready manuscript'
        ],
        idealFor: 'Manuscripts that have completed developmental editing and require a final quality audit before manufacturing.',
        timeline: '1–2 Weeks',
        faqs: [
          {
            question: 'Is proofreading sufficient on its own?',
            answer: 'Proofreading is designed for mechanically sound manuscripts that already have solid structure and style. If your book needs plot, pacing, or line-level refinement, we recommend our combined Editing + Proofreading pathway.'
          }
        ]
      }
    ]
  },
  {
    number: '03',
    id: 'design',
    name: 'Design & Formatting',
    tagline: 'Cover design and readable interiors for print and digital editions.',
    summary: 'We design covers suited to the book’s genre and prepare clear, professional interiors for paperback, hardcover, and eBook formats.',
    colorHighlight: '#012258',
    subServices: [
      {
        id: 'cover-design',
        slug: 'cover-design',
        title: 'Book Cover Design',
        shortDescription: 'Bespoke custom typography, physical dust jacket/case laminate & digital cover art.',
        fullDescription: 'Our designers develop cover concepts based on the manuscript, readership, genre, and selected formats. Final artwork can include the front cover, spine, back cover, print specifications, and a digital retail version.',
        deliverables: [
          '3 distinct creative concept directions',
          'Full print wrap (Front, Spine, Back cover with barcode placement)',
          'High-resolution eBook cover optimized for Amazon, Apple & Kobo',
          '3D photorealistic mockups for promotional use',
          'Print-ready CMYK PDF with bleed and crop marks'
        ],
        idealFor: 'Authors who need a professionally designed cover for print, digital retail, or both.',
        timeline: '2–3 Weeks',
        faqs: [
          {
            question: 'Do I get to give feedback during the design process?',
            answer: 'Absolutely. We begin with 3 unique creative directions. You choose your preferred path and we provide iterative refinements until the cover is flawless.'
          }
        ]
      },
      {
        id: 'formatting',
        slug: 'formatting',
        title: 'eBook, Paperback & Hardcover Formatting',
        shortDescription: 'Interior typesetting, reflowable EPUBs, custom drop caps, and print-ready PDF masters.',
        fullDescription: 'We typeset print interiors to the required trim size and prepare reflowable EPUB files for supported eBook retailers. The work includes front matter, chapter styling, running heads, page numbering, tables, images, and other book-specific elements.',
        deliverables: [
          'Print-ready interior PDF matching precise press trim specifications',
          'Validated reflowable EPUB 3 and Kindle-compliant files',
          'Custom typography matching cover styling and genre traditions',
          'Front matter, copyright page, dedication, and back matter integration'
        ],
        idealFor: 'Authors requiring flawless reading ergonomics across physical print and all digital e-reader platforms.',
        timeline: '1–2 Weeks',
        faqs: [
          {
            question: 'What trim sizes do you support for physical books?',
            answer: 'We support all standard UK and US publishing trim sizes, including 5×8 in, 5.5×8.5 in (Digest), 6×9 in (Trade), 7×10 in, and bespoke hardcover dimensions.'
          }
        ]
      }
    ]
  },
  {
    number: '04',
    id: 'publish',
    name: 'Publishing & Distribution',
    tagline: 'Professional publishing setup and distribution across major book retailers.',
    summary: 'We prepare your book for retail distribution, including platform setup, metadata, print-on-demand configuration, and ISBN support where required.',
    colorHighlight: '#012258',
    subServices: [
      {
        id: 'publishing',
        slug: 'publishing',
        title: 'Publishing & Distribution',
        shortDescription: 'Retail setup for Amazon, Apple Books, Barnes & Noble, Kobo, and Ingram.',
        fullDescription: 'We prepare and configure your title for the selected retail platforms. This can include ISBN support, BIC/BISAC categories, bibliographic metadata, keywords, print-on-demand, and digital distribution.',
        deliverables: [
          'ISBN assignment and barcode support where required',
          'Direct platform onboarding: Amazon KDP, Apple Books, Kobo, Barnes & Noble',
          'Ingram catalogue and wholesale distribution setup',
          'Retail account and payment configuration support',
          'Barcodes, metadata, and Library of Congress / British Library deposit assistance'
        ],
        idealFor: 'Independent authors who need professional retail and distribution setup without giving Royal Quill ownership of their manuscript.',
        timeline: '2–4 Weeks',
        faqs: [
          {
            question: 'Who receives the royalties from book sales?',
            answer: 'You do — 100% of them. Royal Quill Publishers never takes a percentage of your ongoing royalties. All platform sales deposit directly into your personal author accounts.'
          },
          {
            question: 'Do I retain the copyright to my manuscript?',
            answer: 'Yes. Royal Quill does not take ownership of your manuscript or creative work. The publishing and ISBN arrangements for your edition are set out clearly in your project scope.'
          }
        ]
      }
    ]
  },
  {
    number: '05',
    id: 'grow',
    name: 'Marketing & Author Services',
    tagline: 'Practical marketing and author materials for book launches.',
    summary: 'Services include retail page content, advance-copy campaigns, press materials, author websites, and short promotional videos.',
    colorHighlight: '#012258',
    subServices: [
      {
        id: 'book-marketing',
        slug: 'book-marketing',
        title: 'Book Marketing & Launch Campaigns',
        shortDescription: 'Amazon A+ content, ARC review distribution, press releases, and targeted digital promotion.',
        fullDescription: 'We prepare launch materials suited to the book and its intended readers. Work can include Amazon page content, advance reader copy coordination, keywords and categories, press releases, and a practical post-launch plan.',
        deliverables: [
          'Amazon A+ Enhanced Brand Content modules',
          'ARC (Advance Review Copy) campaign deployment',
          'Targeted Amazon keyword & category algorithmic optimization',
          'Press release creation and distribution',
          '90-day post-launch promotional roadmap'
        ],
        idealFor: 'Authors launching a new title who want maximum discoverability, early verified reviews, and sustained commercial momentum.',
        timeline: '3–6 Weeks',
        faqs: [
          {
            question: 'How do Advance Review Copies (ARCs) help my book?',
            answer: 'ARCs generate genuine, honest reader reviews prior to or immediately upon launch day, building the social proof and algorithmic signals necessary for Amazon to recommend your book to organic shoppers.'
          }
        ]
      },
      {
        id: 'author-website',
        slug: 'author-website',
        title: 'Author Website Design',
        shortDescription: 'Custom, fast, and editorial author web portfolios designed to capture readers and build email lists.',
        fullDescription: 'We design responsive author websites with book pages, sample downloads, mailing-list integration, media information, and links to the relevant retailers.',
        deliverables: [
          'Bespoke multi-page author website',
          'Book showcase pages with universal retailer buy buttons',
          'Newsletter & reader-magnet lead capture integration',
          'Press / Media kit download section',
          'Fast hosting, SSL security, and custom domain configuration'
        ],
        idealFor: 'Authors establishing a long-term literary career and seeking direct relationship with their readership.',
        timeline: '2–4 Weeks',
        faqs: [
          {
            question: 'Can I easily update my website after launch?',
            answer: 'Yes. We build author websites with clean, intuitive content management systems so you can announce new books, post news, or update events effortlessly.'
          }
        ]
      },
      {
        id: 'book-trailer',
        slug: 'book-trailer',
        title: 'Cinematic Book Trailers',
        shortDescription: 'High-impact video teasers for social media, YouTube, and digital advertising campaigns.',
        fullDescription: 'We produce short promotional book videos using approved artwork, typography, music, and platform-appropriate edits for YouTube and social channels.',
        deliverables: [
          '30–60 second cinematic video trailer (16:9 widescreen)',
          'Vertical 9:16 cuts optimized for TikTok, Instagram Reels, and YouTube Shorts',
          'Custom motion graphics, audio scoring, and professional sound mixing',
          'Thumbnail pack and promotional video ad copy'
        ],
        idealFor: 'Fiction, fantasy, thriller, and memoir authors who want dynamic video creative to drive viral reader discovery and ad conversions.',
        timeline: '2–3 Weeks',
        faqs: [
          {
            question: 'What format will the video be delivered in?',
            answer: 'We provide 4K and 1080p MP4 master files in both landscape (16:9) for desktop/YouTube and vertical (9:16) for social video platforms.'
          }
        ]
      }
    ]
  },
  {
    number: '06',
    id: 'extend',
    name: 'Audiobook & Printing',
    tagline: 'Printed editions and professionally produced audiobooks.',
    summary: 'We support print production for standard and specialist editions, as well as narration, recording, mastering, and audiobook distribution.',
    colorHighlight: '#012258',
    subServices: [
      {
        id: 'audiobook',
        slug: 'audiobook',
        title: 'Audiobook Production',
        shortDescription: 'Voice talent casting, professional studio recording, mastering, and Audible/ACX distribution.',
        fullDescription: 'We coordinate narrator auditions, recording, editing, and mastering to the specifications required by the selected audiobook platforms.',
        deliverables: [
          'Voice actor auditioning and casting curation',
          'Professional studio recording and chapter-by-chapter editing',
          'Mastering to strict ACX, Audible, and AES broadcast standards',
          'Audiobook retail cover adaptation',
          'Distribution to Audible, iTunes, Spotify, and 40+ global audio retailers'
        ],
        idealFor: 'Authors seeking to tap into the high-margin, rapidly expanding global audiobook listener market.',
        timeline: '4–8 Weeks',
        faqs: [
          {
            question: 'Can I choose the narrator\'s accent and style?',
            answer: 'Yes. We provide curated sample auditions based on your preferred tone, gender, accent (British RP, Scottish, American General, etc.), and genre suitability.'
          }
        ]
      },
      {
        id: 'printing',
        slug: 'printing',
        title: 'Custom Book Printing',
        shortDescription: 'Short-run offset, luxury hardcover bindings, foil stamping, edge spraying, and POD.',
        fullDescription: 'We manage print production for paperback, hardcover, short-run, and specialist editions. Available options can include custom paper, cloth binding, dust jackets, foil, spot finishes, ribbons, and sprayed edges.',
        deliverables: [
          'Print production management and press-check quality assurance',
          'Hardcover (Cloth, Case Laminate, Dust Jacket) or Luxury Paperback options',
          'Specialty finishes: Foil debossing, spot UV, sprayed edges, ribbon markers',
          'Direct freight shipping to your residence, warehouse, or launch event venue'
        ],
        idealFor: 'Special collector editions, corporate gifts, bookstore stock, author signings, and luxury physical showcases.',
        timeline: '3–6 Weeks',
        faqs: [
          {
            question: 'What is the minimum print order for custom offset runs?',
            answer: 'We can produce short custom runs from 100 copies up to tens of thousands of copies, as well as zero-inventory Print-on-Demand (POD).'
          }
        ]
      }
    ]
  }
];

export const allSubServices: SubService[] = serviceCategories.flatMap(c => c.subServices);

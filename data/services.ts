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
    name: 'WRITE',
    tagline: 'Translating vision and expertise into immaculate manuscript prose.',
    summary: 'Whether you bring a rough outline, spoken voice recordings, or a half-finished draft, our dedicated writers develop complete, compelling manuscripts true to your voice.',
    colorHighlight: '#012258',
    subServices: [
      {
        id: 'ghostwriting',
        slug: 'ghostwriting',
        title: 'Ghostwriting',
        shortDescription: 'Collaborative, confidential manuscript creation from your ideas, notes, or interviews.',
        fullDescription: 'Our ghostwriting service pairs you with an accomplished author who immerses themselves in your tone, subject matter, and goals. Through structured recorded interviews, detailed outlining, and iterative chapter drafting, we craft a complete, publication-ready book while you maintain 100% intellectual authorship and copyright.',
        deliverables: [
          'Comprehensive concept & narrative blueprint',
          'In-depth interview sessions & voice transcription',
          'Full-length book manuscript (40,000–80,000+ words)',
          'Two full revision cycles',
          'Complete NDA & 100% copyright assignment to author'
        ],
        idealFor: 'Busy executives, thought leaders, memoirists, and individuals with profound stories who lack the time to draft full manuscripts.',
        timeline: '12–24 Weeks',
        faqs: [
          {
            question: 'Will anyone know I used a ghostwriter?',
            answer: 'Never, unless you choose to credit them. All Royal Quil ghostwriting engagements are protected by strict Non-Disclosure Agreements. You are the sole named author and legal rights holder.'
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
    name: 'REFINE',
    tagline: 'Meticulous editorial elevation to industry-leading literary standards.',
    summary: 'Every great book is forged in the editorial forge. We evaluate structure, rhythm, syntax, and voice with surgical precision to make your manuscript unputdownable.',
    colorHighlight: '#012258',
    subServices: [
      {
        id: 'editing',
        slug: 'editing',
        title: 'Developmental & Line Editing',
        shortDescription: 'Deep structural critique, pacing refinement, narrative coherence, and sentence-level mastery.',
        fullDescription: 'Our senior editors examine every layer of your manuscript. Developmental editing evaluates macro elements — character arcs, plot progression, tonal consistency, and thematic resonance. Line editing polishes micro elements — prose cadence, word choice, rhythm, and clarity without stripping your personal voice.',
        deliverables: [
          'Comprehensive 10–15 page Editorial Appraisal Report',
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
    name: 'DESIGN',
    tagline: 'Award-caliber book aesthetics, bespoke typography, and flawless interior layouts.',
    summary: 'Readers judge books by their covers and experience them through their interior typesetting. We craft museum-grade cover art and interior typography designed for physical and digital beauty.',
    colorHighlight: '#012258',
    subServices: [
      {
        id: 'cover-design',
        slug: 'cover-design',
        title: 'Book Cover Design',
        shortDescription: 'Bespoke custom typography, physical dust jacket/case laminate & digital cover art.',
        fullDescription: 'Our book designers create original, genre-defining covers that command immediate attention on physical bookstore shelves and high-density digital marketplaces. We design full jacket wraps with spine calculations, embossing/foil stamping specifications, and digital thumbnail optimization.',
        deliverables: [
          '3 distinct creative concept directions',
          'Full print wrap (Front, Spine, Back cover with barcode placement)',
          'High-resolution eBook cover optimized for Amazon, Apple & Kobo',
          '3D photorealistic mockups for promotional use',
          'Print-ready CMYK PDF with bleed and crop marks'
        ],
        idealFor: 'Authors who understand that a world-class cover is the single most crucial commercial asset for a book.',
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
        fullDescription: 'Immaculate interior typesetting tailored to industry standard trim sizes. We craft custom chapter headings, running headers, ornamental section breaks, drop caps, and table formatting. Our digital team produces clean, validated EPUB 3 files that adapt seamlessly across Kindle, iPad, Kobo, and smartphones.',
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
    name: 'PUBLISH',
    tagline: 'Global distribution to the world\'s largest book retailers while retaining 100% rights.',
    summary: 'We connect your book directly into global publishing infrastructure — Amazon KDP, Apple Books, Kobo, Barnes & Noble, and Ingram Content Group — with all official ISBN registrations and metadata optimization.',
    colorHighlight: '#012258',
    subServices: [
      {
        id: 'publishing',
        slug: 'publishing',
        title: 'Global Publishing & ISBN Management',
        shortDescription: 'Worldwide distribution to Amazon, Apple, Barnes & Noble, Kobo, and 40,000+ bookstores.',
        fullDescription: 'We configure and deploy your title across the premier retail ecosystems. We assign official ISBNs (registered to you), configure BIC/BISAC genre taxonomies, optimize search keywords, and establish print-on-demand and digital distribution so your title is purchasable globally.',
        deliverables: [
          'Official ISBN assignment (UK Nielsen / US Bowker registered to author)',
          'Direct platform onboarding: Amazon KDP, Apple Books, Kobo, Barnes & Noble',
          'Global catalogue distribution via Ingram Content Group to 40,000+ libraries & retailers',
          'Direct royalty account setup — 100% royalties paid directly to your bank account',
          'Barcodes, metadata, and Library of Congress / British Library deposit assistance'
        ],
        idealFor: 'Independent authors who want the commercial reach of a major publishing house while keeping 100% ownership and royalties.',
        timeline: '2–4 Weeks',
        faqs: [
          {
            question: 'Who receives the royalties from book sales?',
            answer: 'You do — 100% of them. Royal Quil Publisher never takes a percentage of your ongoing royalties. All platform sales deposit directly into your personal author accounts.'
          },
          {
            question: 'Who owns the ISBN and copyright?',
            answer: 'You retain 100% legal ownership of your ISBN, manuscript copyright, and publishing rights. We act purely as your production and enablement partner.'
          }
        ]
      }
    ]
  },
  {
    number: '05',
    id: 'grow',
    name: 'GROW',
    tagline: 'Strategic marketing, cinematic book trailers, and bespoke author digital platforms.',
    summary: 'A masterpiece deserves readers. We equip independent authors with sophisticated digital presence, Amazon optimization, cinematic video trailers, and launch promotional campaigns.',
    colorHighlight: '#012258',
    subServices: [
      {
        id: 'book-marketing',
        slug: 'book-marketing',
        title: 'Book Marketing & Launch Campaigns',
        shortDescription: 'Amazon A+ content, ARC review distribution, press releases, and targeted digital promotion.',
        fullDescription: 'Our marketing team designs bespoke launch strategies to build algorithmic momentum on Amazon and literary credibility in the press. We craft high-converting Amazon A+ enhanced marketing modules, distribute Advance Review Copies (ARCs) to verified book bloggers, and draft press releases for media outreach.',
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
        fullDescription: 'Your digital headquarters. We design and build high-performance, mobile-optimized author websites featuring book showcases, reader sample downloads, newsletter integration (Substack/Mailchimp), media kits, and direct retailer purchase links.',
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
        fullDescription: 'Engage modern readers through cinematic video storytelling. We produce 30–60 second narrative trailers with professional motion typography, atmospheric sound design, orchestral scoring, and high-definition visual assets tailored for Instagram, TikTok, and YouTube.',
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
    name: 'EXTEND',
    tagline: 'Premium physical offset printing and studio-grade audiobook production.',
    summary: 'Extend your manuscript into high-end physical formats and immersive audio editions distributed to Audible, Apple Books, and Spotify.',
    colorHighlight: '#012258',
    subServices: [
      {
        id: 'audiobook',
        slug: 'audiobook',
        title: 'Audiobook Production',
        shortDescription: 'Voice talent casting, professional studio recording, mastering, and Audible/ACX distribution.',
        fullDescription: 'The fastest-growing segment in modern publishing. We handle auditioning and casting from a roster of seasoned British and American voice actors, manage professional studio recording sessions, master audio to strict ACX/Audible specifications, and distribute to Audible, Apple, Google, and Spotify.',
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
        fullDescription: 'For authors who demand uncompromising tactile luxury. We manage short-run and large-scale offset print manufacturing with custom paper stocks (cream 80gsm woodfree), cloth-bound hardcovers, custom dust jackets, gold/silver foil debossing, ribbon bookmarks, and sprayed edges.',
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

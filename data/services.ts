export interface SubService {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  idealFor: string;
  nextStep: string;
  seoKeywords: string[];
}

export interface ServiceCategory {
  number: string;
  id: string;
  name: string;
  summary: string;
  subServices: SubService[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    number: '01', id: 'writing-development', name: 'Writing & Development',
    summary: 'Professional writing and collaborative manuscript development for authors starting with an idea, notes or a partial draft.',
    subServices: [
      {
        id: 'ghostwriting', slug: 'ghostwriting', title: 'Ghostwriting',
        shortDescription: 'Turn your ideas into a complete manuscript.',
        fullDescription: 'Royal Quill Publishers offers professional ghostwriting services for authors who have a story, an idea or years of expertise but not the time or writing experience to turn it into a finished manuscript. Our ghostwriters work closely with you through structured interviews and outline reviews, then draft your book in your voice, so the finished manuscript reads as though you wrote every page yourself.',
        deliverables: [
          'In-depth author interviews to capture your voice, tone and message.',
          'A detailed chapter outline agreed with you before drafting begins.',
          'Full manuscript drafting across memoir, nonfiction, business and self-help genres.',
          'Chapter-by-chapter delivery for your review and feedback.',
          'Full confidentiality, with authorship and copyright remaining entirely yours.',
        ],
        idealFor: 'This service suits busy professionals, first-time authors, memoirists and subject-matter experts who want a publish-ready manuscript without writing it word for word themselves.',
        nextStep: 'Share your idea, outline or notes and we will explain how a ghostwriting project would be scoped and priced for your book.',
        seoKeywords: ['ghostwriting services', 'hire a ghostwriter', 'professional book ghostwriter', 'ghostwriting for authors'],
      },
      {
        id: 'book-writing', slug: 'book-writing', title: 'Book Writing & Co-Authoring',
        shortDescription: 'Manuscript development with a collaborative writer.',
        fullDescription: 'Our book writing and co-authoring service is designed for authors who want to write their own book but need a collaborative partner to help develop the material, maintain momentum and shape a partial draft into a complete manuscript. Unlike full ghostwriting, this service keeps you closely involved in the drafting process while our writers provide structure, pacing and consistency support.',
        deliverables: [
          'Manuscript development from a partial draft, notes or a detailed idea.',
          'Collaborative drafting sessions and chapter planning.',
          'Consistency checks for plot, timeline, character and voice across the manuscript.',
          'Support turning research or interviews into readable, well-structured chapters.',
          'Flexible involvement, from light co-writing support to substantial drafting assistance.',
        ],
        idealFor: 'This service suits authors partway through a manuscript, co-authors writing together for the first time, and subject experts who want an active role in writing their own book.',
        nextStep: 'Send us your existing draft or notes and we will recommend how a co-authoring arrangement could move your manuscript towards completion.',
        seoKeywords: ['book writing services', 'co-authoring services', 'manuscript development', 'collaborative book writing'],
      },
    ],
  },
  {
    number: '02', id: 'editing-proofreading', name: 'Editing & Proofreading',
    summary: 'Developmental editing, line editing and final proofreading for manuscripts at every stage.',
    subServices: [
      {
        id: 'editing', slug: 'editing', title: 'Developmental & Line Editing',
        shortDescription: 'Structural, line and copy editing for manuscripts at every stage.',
        fullDescription: 'Royal Quill Publishers provides developmental and line editing for manuscripts at any stage of completion. Developmental editing addresses the big-picture elements of your book, including structure, pacing, plot and argument, while line editing works at the sentence level to improve clarity, flow and voice without flattening your writing style.',
        deliverables: [
          'A full manuscript assessment covering structure, pacing and consistency.',
          'Detailed editorial notes explaining the reasoning behind suggested changes.',
          'Line-by-line editing for clarity, rhythm and voice.',
          'Genre-specific attention for fiction, nonfiction, memoir and poetry manuscripts.',
          'A collaborative revision process, with the author retaining full control over final decisions.',
        ],
        idealFor: 'This service suits authors with a complete first draft who want an experienced editor to identify what is working, what needs strengthening, and how to bring the manuscript to a publish-ready standard.',
        nextStep: 'Send your manuscript for review and we will provide a sample edit and a clear quote before any full edit begins.',
        seoKeywords: ['developmental editing services', 'line editing for authors', 'book editing services', 'manuscript editing'],
      },
      {
        id: 'proofreading', slug: 'proofreading', title: 'Proofreading',
        shortDescription: 'A final review and error correction pass before publication.',
        fullDescription: 'Proofreading is the final quality check before your manuscript goes to print or publication. Our proofreaders review spelling, grammar, punctuation and formatting consistency, and check the manuscript against the agreed style sheet so that typos and layout errors do not make it into the finished book.',
        deliverables: [
          'A full proofread of the final manuscript, after editing and formatting are complete.',
          'Consistency checks for spelling, punctuation, hyphenation and capitalisation.',
          'Style sheet creation and adherence for names, terms and formatting choices.',
          'A final pass on the formatted interior file to catch layout and pagination errors.',
          'Clear, trackable corrections so you can review every change before approval.',
        ],
        idealFor: 'This service suits authors with a fully edited manuscript who want a final, thorough check before publication, as well as authors who only need proofreading rather than a full edit.',
        nextStep: 'Send your near-final manuscript and we will confirm turnaround time and cost for a full proofreading pass.',
        seoKeywords: ['book proofreading services', 'manuscript proofreading', 'final proofread before publishing'],
      },
    ],
  },
  {
    number: '03', id: 'design-formatting', name: 'Design & Formatting',
    summary: 'Custom cover design and professional interior formatting for digital and printed editions.',
    subServices: [
      {
        id: 'cover-design', slug: 'cover-design', title: 'Book Cover Design',
        shortDescription: 'Custom cover design and typography for print and digital editions.',
        fullDescription: 'Your cover is the first impression your book makes on a potential reader, and Royal Quill Publishers designs custom covers built around your genre, audience and story. Our designers create cover concepts for eBook, paperback and hardcover formats, with full technical specifications for Amazon KDP, IngramSpark and other major print and digital platforms.',
        deliverables: [
          'Custom cover concepts based on your manuscript, genre and target readers.',
          'Front cover, full wraparound paperback cover and spine design.',
          'Typography and title treatment suited to your book\'s tone and category.',
          'Print-ready files built to the exact trim size and spine width for your chosen printer.',
          'Revision rounds until the cover is approved by you.',
        ],
        idealFor: 'This service suits authors preparing to publish who want a professional, genre-appropriate cover that stands out in online retail thumbnails as well as in print.',
        nextStep: 'Tell us your book\'s genre, trim size and any visual references you like, and we will put together cover concepts for your review.',
        seoKeywords: ['book cover design services', 'custom book covers', 'Kindle cover design', 'paperback cover design'],
      },
      {
        id: 'formatting', slug: 'formatting', title: 'eBook, Paperback & Hardcover Formatting',
        shortDescription: 'Typesetting for print, Kindle and EPUB.',
        fullDescription: 'Royal Quill Publishers formats manuscripts for eBook, paperback and hardcover publication, preparing clean, professional interiors that meet the technical requirements of Amazon KDP, Apple Books, IngramSpark and other distribution platforms. Our formatting covers everything from typesetting and chapter styling to front matter, back matter and print-ready page layout.',
        deliverables: [
          'Interior formatting for Kindle, EPUB and print-ready PDF files.',
          'Typesetting with consistent chapter headings, drop caps, section breaks and page numbering.',
          'Front matter and back matter, including title pages, copyright pages and tables of contents.',
          'Image and illustration placement for children\'s books, memoirs and illustrated nonfiction.',
          'Platform-compliant files for Amazon KDP, Apple Books, Barnes & Noble, Kobo and IngramSpark.',
        ],
        idealFor: 'This service suits authors with an edited, proofread manuscript who need it converted into publish-ready files for one or more retail and print platforms.',
        nextStep: 'Send your final manuscript along with your intended formats and trim size and we will confirm formatting turnaround and pricing.',
        seoKeywords: ['book formatting services', 'KDP formatting', 'eBook and paperback formatting', 'EPUB conversion'],
      },
    ],
  },
  {
    number: '04', id: 'publishing-distribution', name: 'Publishing & Distribution',
    summary: 'Retail setup, metadata and distribution across the major platforms selected for your project.',
    subServices: [
      {
        id: 'publishing', slug: 'publishing', title: 'Publishing & Distribution',
        shortDescription: 'Retail setup, metadata and distribution across major platforms.',
        fullDescription: 'Our publishing and distribution service prepares your finished book for release across the retail and distribution channels selected for your project. We handle account setup, metadata, pricing and territory settings, and manage the technical upload process for platforms including Amazon KDP, Apple Books, Barnes & Noble, Rakuten Kobo and IngramSpark.',
        deliverables: [
          'Retailer account setup and guidance for Amazon KDP and other platforms.',
          'Metadata optimisation, including title, description, categories and keywords, to support discoverability.',
          'Pricing and territory strategy for eBook, paperback and hardcover editions.',
          'Coordinated publication dates across all selected retail and distribution channels.',
          'Post-publication support for listing corrections and updates.',
        ],
        idealFor: 'This service suits authors with a finished, formatted manuscript and cover who are ready to publish and want the retail setup handled correctly the first time.',
        nextStep: 'Let us know which formats and platforms you want to publish on and we will prepare a distribution plan for your book.',
        seoKeywords: ['self-publishing services', 'Amazon KDP publishing', 'book distribution services', 'eBook and print distribution'],
      },
    ],
  },
  {
    number: '05', id: 'marketing-author-services', name: 'Marketing & Author Services',
    summary: 'Practical launch, visibility and author-platform support designed around your book and readers.',
    subServices: [
      {
        id: 'book-marketing', slug: 'book-marketing', title: 'Book Marketing & Launch Campaigns',
        shortDescription: 'Amazon A+ content, reviews and PR support.',
        fullDescription: 'Publishing a book is only the first step. Royal Quill Publishers supports authors with book marketing and launch campaigns designed to build visibility around release, including Amazon A+ content, review outreach and PR support aimed at reaching the right readers for your genre.',
        deliverables: [
          'Amazon A+ content design to strengthen your book\'s retail listing.',
          'Launch campaign planning across the weeks before and after publication.',
          'Review outreach strategy to build early reader feedback and ratings.',
          'PR support to help place your book with relevant media, bloggers and podcasts.',
          'Marketing copy for retail listings, social media and author communications.',
        ],
        idealFor: 'This service suits authors preparing for launch or already published who want a structured plan for reaching readers, rather than relying on the retail listing alone.',
        nextStep: 'Tell us your publication date and target audience and we will outline a launch campaign suited to your book and budget.',
        seoKeywords: ['book marketing services', 'Amazon A+ content', 'book launch campaign', 'author PR and reviews'],
      },
      {
        id: 'author-website', slug: 'author-website', title: 'Author Website Design',
        shortDescription: 'A professional web presence for your author brand.',
        fullDescription: 'A professional author website gives readers, media and event organisers a place to learn about you and your books beyond the retail listing. We design and build author websites that showcase your book, biography, events and contact details, with a clean layout suited to your genre and brand.',
        deliverables: [
          'Custom website design reflecting your author brand and book genre.',
          'Book landing pages with retailer links, cover artwork and synopsis.',
          'Author biography, media and events pages.',
          'Mobile-friendly layout and straightforward content management.',
          'Ongoing update support after launch, if required.',
        ],
        idealFor: 'This service suits debut and established authors who want a dedicated online presence to support their book launch, media outreach and long-term author brand.',
        nextStep: 'Share any reference sites you like and the pages you need, and we will put together a website plan for your approval.',
        seoKeywords: ['author website design', 'author websites for books', 'book landing page design'],
      },
      {
        id: 'book-trailer', slug: 'book-trailer', title: 'Cinematic Book Trailers',
        shortDescription: 'Video trailers for promotion and launch.',
        fullDescription: 'A well-made book trailer gives readers a taste of your story\'s tone and stakes before they open the first page. Royal Quill Publishers produces cinematic book trailers using licensed footage, motion graphics and voiceover, tailored to your book\'s genre and mood, for use on social media, retail listings and launch campaigns.',
        deliverables: [
          'Script and storyboard development based on your book\'s key themes.',
          'Cinematic visuals using licensed stock footage and motion graphics.',
          'Professional voiceover or on-screen text options.',
          'Formats optimised for social media, YouTube and website use.',
          'Revision rounds until the trailer is approved.',
        ],
        idealFor: 'This service suits authors launching fiction, memoir or narrative nonfiction who want an engaging video asset to support their marketing and social media presence.',
        nextStep: 'Tell us about your book\'s tone and any trailers you admire, and we will propose a concept for your review.',
        seoKeywords: ['book trailer production', 'cinematic book trailers', 'video marketing for authors'],
      },
    ],
  },
  {
    number: '06', id: 'audiobook-printing', name: 'Audiobook & Printing',
    summary: 'Professional audiobook production and flexible printing for digital, retail and direct author use.',
    subServices: [
      {
        id: 'audiobook', slug: 'audiobook', title: 'Audiobook Production',
        shortDescription: 'Voice narration and audio production.',
        fullDescription: 'Audiobooks open your book to an entirely new group of readers. Royal Quill Publishers manages audiobook production from narrator selection through to final mastering, preparing files ready for distribution on Audible, Apple Books and other major audiobook platforms.',
        deliverables: [
          'Narrator selection and audition samples matched to your book\'s voice and genre.',
          'Professional recording and studio-quality audio production.',
          'Editing, levelling and mastering to retailer technical specifications.',
          'Chapter breaks and metadata prepared for audiobook distribution platforms.',
          'Distribution setup guidance for Audible, Apple Books and other audiobook retailers.',
        ],
        idealFor: 'This service suits authors with a published or soon-to-be-published book who want to extend their reach into the growing audiobook market.',
        nextStep: 'Let us know your book\'s genre and preferred narrator style and we will share sample options to choose from.',
        seoKeywords: ['audiobook production services', 'audiobook narration', 'self-publish an audiobook'],
      },
      {
        id: 'printing', slug: 'printing', title: 'Custom Book Printing',
        shortDescription: 'Hardcover, paperback and print-on-demand editions.',
        fullDescription: 'Whether you need author copies, event stock or full print-on-demand distribution, Royal Quill Publishers arranges custom book printing in hardcover, paperback and specialty editions. We prepare print-ready files and coordinate with trusted print partners to match the paper, binding and finish your book deserves.',
        deliverables: [
          'Print-ready file preparation for hardcover, paperback and specialty editions.',
          'Paper stock, binding and cover finish recommendations suited to your genre and budget.',
          'Short-run printing for author copies and events.',
          'Print-on-demand setup for ongoing global availability without upfront stock.',
          'Print proof review before any full print run is approved.',
        ],
        idealFor: 'This service suits authors who want physical copies of their book, whether for personal use, events, gifting or ongoing retail availability through print-on-demand.',
        nextStep: 'Tell us the quantity, format and intended use for your printed books and we will recommend the right printing route.',
        seoKeywords: ['book printing services', 'print on demand books', 'hardcover and paperback printing'],
      },
    ],
  },
];

export const allSubServices: SubService[] = serviceCategories.flatMap((category) => category.subServices);

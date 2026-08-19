export interface ProcessStage {
  step: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  keyActions: string[];
  deliverables: string[];
  duration: string;
}

export const publishingRoadmap: ProcessStage[] = [
  {
    step: '01',
    number: '01',
    name: 'DISCOVER',
    subtitle: 'Vision, Scope & Manuscript Evaluation',
    description: 'We learn about your book, goals, genre, and publishing ambitions. Every engagement begins with a complimentary consultation and a detailed assessment of your manuscript\'s current state.',
    keyActions: [
      'Manuscript read-through & structural appraisal',
      'Author vision & commercial objective alignment',
      'Target reader & genre market positioning analysis',
      'Custom publishing roadmap & transparent scope agreement'
    ],
    deliverables: [
      'Comprehensive Publishing Blueprint',
      'Detailed Production Timeline',
      'NDA & 100% Author Ownership Guarantee Contract'
    ],
    duration: '1–2 Weeks'
  },
  {
    step: '02',
    number: '02',
    name: 'CREATE',
    subtitle: 'Writing, Editorial & Bespoke Visual Craft',
    description: 'Our writers, editors, and designers work on the project according to the services you choose. Every element is crafted bespoke around your manuscript rather than through rigid templates.',
    keyActions: [
      'Developmental editing or ghostwriting writing sprints',
      'Sentence-level line editing & prose calibration',
      'Cover design concept ideation (3 distinct creative directions)',
      'Interior typesetting & typography design'
    ],
    deliverables: [
      'Edited Manuscript with Track Changes & Editorial Report',
      'Initial Cover Concepts & Moodboards',
      'Interior Typeset Sample Pages'
    ],
    duration: '4–12 Weeks'
  },
  {
    step: '03',
    number: '03',
    name: 'REFINE',
    subtitle: 'Author Review, Revisions & Final Galley Proofing',
    description: 'You review the work and provide direct feedback while we refine the project. We collaborate closely across multiple review cycles until every sentence, margin, and visual nuance is perfected.',
    keyActions: [
      'Author review & editorial consultation sessions',
      'Cover design fine-tuning & spine/jacket adjustments',
      'Final proofreading pass for typographical perfection',
      'Digital e-reader rendering & print proof inspection'
    ],
    deliverables: [
      'Final Master Proof (PDF & EPUB)',
      'Approved Wrap Cover Art (Print CMYK & Digital RGB)',
      'Quality Assurance Sign-Off Checklist'
    ],
    duration: '2–4 Weeks'
  },
  {
    step: '04',
    number: '04',
    name: 'PUBLISH',
    subtitle: 'Global Distribution, ISBN Filing & Launch',
    description: 'Your final book is prepared for publication and worldwide distribution. We manage platform integrations, official ISBN assignments, and retailer metadata so your book appears on major shelves globally.',
    keyActions: [
      'Official ISBN & copyright filing (100% registered to author)',
      'Deployment to Amazon KDP, Apple Books, Kobo, Barnes & Noble, and Ingram',
      'Direct royalty bank connection (100% royalties directly to you)',
      'Promotional launch materials & marketing kit handoff'
    ],
    deliverables: [
      'Live Global Retailer Listings in 150+ Countries',
      'Master High-Resolution Asset Archive',
      'Author Dashboard Access & Marketing Guide'
    ],
    duration: '2–3 Weeks'
  }
];

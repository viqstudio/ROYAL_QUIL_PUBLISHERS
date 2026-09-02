export interface FAQItem {
  id: string;
  category: 'Rights & Royalties' | 'Editorial & Design' | 'Publishing & Distribution' | 'Process & Timelines';
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Rights & Royalties',
    question: 'Do I retain 100% of my intellectual property, copyright, and royalties?',
    answer: 'Yes. You retain the copyright and intellectual property rights to your manuscript. Royal Quill provides publishing services and does not take ownership of your creative work. Retail royalties are paid through the distribution accounts agreed for your project.'
  },
  {
    id: 'faq-2',
    category: 'Rights & Royalties',
    question: 'Do you provide ISBN and publishing setup support?',
    answer: 'Yes. Where required, we can support ISBN assignment, bibliographic metadata, barcode preparation, and retailer setup as part of the publishing service. The exact arrangement is confirmed in your project scope.'
  },
  {
    id: 'faq-3',
    category: 'Publishing & Distribution',
    question: 'Where will my book be available for purchase?',
    answer: 'Distribution options can include Amazon KDP, Apple Books, Kobo, Barnes & Noble, and Ingram. Availability depends on the formats, territories, and distribution route chosen for your book.'
  },
  {
    id: 'faq-4',
    category: 'Process & Timelines',
    question: 'How long does the complete publishing process take?',
    answer: 'A standard publishing timeline ranges from 8 to 16 weeks depending on the manuscript\'s length and the scope of editorial and design services required. Ghostwriting engagements typically span 16 to 24 weeks. We establish clear milestone schedules at the start of every project.'
  },
  {
    id: 'faq-5',
    category: 'Editorial & Design',
    question: 'What is the difference between developmental editing, line editing, and proofreading?',
    answer: 'Developmental editing addresses high-level storytelling architecture — pacing, character progression, theme, and structural balance. Line editing refines prose rhythm, tone, syntax, and sentence clarity. Proofreading is the final technical verification checking grammar, spelling, punctuation, and typesetting consistency.'
  },
  {
    id: 'faq-6',
    category: 'Editorial & Design',
    question: 'Can I provide input and feedback on my book cover design?',
    answer: 'Yes. Our cover design process is highly collaborative. We present 3 distinct creative concept directions based on your brief and genre research. You select the winning direction and guide refinements until you are completely satisfied with the final artwork.'
  },
  {
    id: 'faq-7',
    category: 'Publishing & Distribution',
    question: 'Do you offer physical book printing, hardcovers, and print-on-demand?',
    answer: 'Yes. We configure automated Print-on-Demand (POD) through Amazon KDP and IngramSpark so readers can order paperbacks and hardcovers worldwide with zero upfront inventory costs. We also manage luxury short-run offset print runs with cloth bindings, foil debossing, and custom dust jackets for special editions.'
  },
  {
    id: 'faq-8',
    category: 'Process & Timelines',
    question: 'Can I start working with Royal Quill if my manuscript is not yet finished?',
    answer: 'Absolutely. Many of our authors engage us during the drafting phase. Our developmental editors and writing coaches can review chapter drafts, provide structural guidance, or help you outline your project before you write the final chapters.'
  },
  {
    id: 'faq-9',
    category: 'Rights & Royalties',
    question: 'How do royalty payouts work from platforms like Amazon and Apple?',
    answer: 'During the publishing phase, we assist you in linking your official author platform accounts directly to your own bank account. Retailers deposit sales royalties directly to you monthly. Royal Quill Publishers never acts as a financial middleman.'
  },
  {
    id: 'faq-10',
    category: 'Process & Timelines',
    question: 'What is the first step to get started?',
    answer: 'The first step is a complimentary, confidential manuscript consultation. You share details about your book and publishing goals, and our senior editorial team provides an initial evaluation and a transparent scope recommendation.'
  }
];

export const faqCategories = [
  'All',
  'Rights & Royalties',
  'Editorial & Design',
  'Publishing & Distribution',
  'Process & Timelines'
] as const;

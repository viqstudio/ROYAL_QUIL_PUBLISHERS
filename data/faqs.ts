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
    question: 'Do I keep the rights to my book?',
    answer: 'Yes. Royal Quill Publishers does not take ownership of your manuscript or intellectual property at any stage. Your copyright remains yours throughout the editorial, design and publishing process.',
  },
  {
    id: 'faq-2',
    category: 'Process & Timelines',
    question: 'How much does it cost to publish with Royal Quill?',
    answer: 'Costs depend on the services your manuscript needs, such as editing, cover design, formatting and marketing. We provide a clear project scope and quote before any work begins, so there are no unexpected costs along the way.',
  },
  {
    id: 'faq-3',
    category: 'Process & Timelines',
    question: 'How long does the process take?',
    answer: 'Timelines vary depending on manuscript length, the services commissioned and the number of revision rounds. We confirm an estimated timeline as part of your project scope.',
  },
  {
    id: 'faq-4',
    category: 'Publishing & Distribution',
    question: 'What formats can you prepare my book in?',
    answer: 'We prepare eBook, paperback, hardcover and audiobook editions, formatted to the technical requirements of platforms including Amazon KDP, Apple Books, Barnes & Noble, Rakuten Kobo and IngramSpark.',
  },
  {
    id: 'faq-5',
    category: 'Editorial & Design',
    question: 'Can I use my own cover designer or editor?',
    answer: 'Yes. Our services can be booked individually, so you are welcome to bring your own designer, editor or other collaborators and use Royal Quill Publishers only for the services you need.',
  },
  {
    id: 'faq-6',
    category: 'Editorial & Design',
    question: 'Do you offer full publishing packages or only individual services?',
    answer: 'Both. You can commission a single service, such as proofreading or cover design, or combine several services into a complete publishing package covering editing, design, formatting, publishing and marketing.',
  },
  {
    id: 'faq-7',
    category: 'Publishing & Distribution',
    question: 'What is Amazon KDP?',
    answer: 'Amazon Kindle Direct Publishing, or KDP, is Amazon\'s self-publishing platform for eBooks and print-on-demand paperbacks. We handle the technical setup and formatting required to publish through KDP as part of our publishing and distribution service.',
  },
  {
    id: 'faq-8',
    category: 'Publishing & Distribution',
    question: 'Do you work with authors outside the UK?',
    answer: 'Yes. We work with independent authors internationally, and platform availability for publishing and distribution depends on the format, territory and retailers selected for your project.',
  },
  {
    id: 'faq-9',
    category: 'Publishing & Distribution',
    question: 'Do you offer audiobooks?',
    answer: 'Yes. Our audiobook production service covers narrator selection, recording, editing and mastering, with files prepared for distribution on major audiobook platforms.',
  },
  {
    id: 'faq-10',
    category: 'Process & Timelines',
    question: 'How do I get started?',
    answer: 'Complete the manuscript enquiry form on our Contact page with details of your book and the support you are considering. We will review the information and explain the next step.',
  },
];

export const faqCategories = ['All', 'Rights & Royalties', 'Editorial & Design', 'Publishing & Distribution', 'Process & Timelines'] as const;

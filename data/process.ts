export interface ProcessStage {
  step: string;
  name: string;
  description: string;
}

export const publishingRoadmap: ProcessStage[] = [
  {
    step: '01',
    name: 'Submit Your Manuscript',
    description: 'We review whatever material you have, whether that is a finished manuscript, a partial draft or an idea you want to develop. We discuss the support your book needs and agree a clear, written scope before any work begins.',
  },
  {
    step: '02',
    name: 'Editing & Preparation',
    description: 'Your manuscript is developed and edited according to its needs, from structural and developmental editing through to line editing and proofreading. You review the editorial work at each stage and approve changes before the manuscript moves to production.',
  },
  {
    step: '03',
    name: 'Design & Formatting',
    description: 'Our design team creates your cover concepts and prepares the interior layout for the print and digital formats you have selected, whether that is eBook, paperback, hardcover or a combination of formats.',
  },
  {
    step: '04',
    name: 'Publishing',
    description: 'Once you approve the final manuscript, cover and interior files, we prepare your book for the publishing and distribution channels agreed for your project, including account setup, metadata and platform-specific technical requirements.',
  },
  {
    step: '05',
    name: 'Launch & Author Support',
    description: 'We confirm your live listings across all selected platforms, arrange proof or author copies where applicable, and support the launch activity agreed for your book, from marketing assets to review outreach.',
  },
];

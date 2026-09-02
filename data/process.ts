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
    step: '01', number: '01', name: 'SUBMIT YOUR MANUSCRIPT',
    subtitle: 'Initial Review and Project Scope',
    description: 'We review the material you have, discuss the help you need, and agree a clear scope before work begins.',
    keyActions: ['Review the manuscript, outline, or project notes', 'Discuss genre, readership, formats, and objectives', 'Identify the editorial and production work required', 'Confirm costs, responsibilities, and timing'],
    deliverables: ['Written project scope', 'Production schedule', 'Agreed service requirements'],
    duration: '1–2 Weeks'
  },
  {
    step: '02', number: '02', name: 'EDITING & PREPARATION',
    subtitle: 'Develop, Edit, and Proofread the Text',
    description: 'The manuscript is developed and edited according to its needs. You review the work and approve changes before production.',
    keyActions: ['Developmental or structural editing where required', 'Line editing and copy editing', 'Author review and revision rounds', 'Final proofreading before typesetting'],
    deliverables: ['Edited manuscript', 'Editorial notes and tracked changes', 'Approved final text'],
    duration: '3–10 Weeks'
  },
  {
    step: '03', number: '03', name: 'DESIGN & FORMATTING',
    subtitle: 'Cover Design and Interior Typesetting',
    description: 'We design the cover and prepare the interior for the print and digital formats selected for your book.',
    keyActions: ['Cover concept and design development', 'Paperback or hardcover cover preparation', 'Interior typesetting and page layout', 'EPUB preparation for digital editions'],
    deliverables: ['Approved cover artwork', 'Print-ready interior file', 'EPUB file where required'],
    duration: '2–4 Weeks'
  },
  {
    step: '04', number: '04', name: 'PUBLISHING',
    subtitle: 'Final Checks, Metadata, and Retail Setup',
    description: 'Once you approve the files, we prepare the book for the agreed publishing and distribution channels.',
    keyActions: ['Final print and digital file checks', 'ISBN and barcode support where required', 'Book description, categories, and metadata setup', 'Retail and distribution platform configuration'],
    deliverables: ['Approved publication files', 'Retail metadata record', 'Configured distribution listings'],
    duration: '2–3 Weeks'
  },
  {
    step: '05', number: '05', name: 'LAUNCH & AUTHOR SUPPORT',
    subtitle: 'Publication, Copies, and Ongoing Guidance',
    description: 'We confirm the live listings, arrange proof or author copies where applicable, and support the agreed launch activity.',
    keyActions: ['Check live retailer listings', 'Arrange proof and author copies where required', 'Deliver final production files', 'Complete agreed marketing or launch support'],
    deliverables: ['Live book listings', 'Final file handover', 'Launch materials included in the project'],
    duration: '1–3 Weeks'
  }
];

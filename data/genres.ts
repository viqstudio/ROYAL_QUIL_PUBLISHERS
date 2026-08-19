export interface GenreItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  keyElements: string[];
}

export const genresList: GenreItem[] = [
  {
    id: 'fiction',
    name: 'Fiction',
    tagline: 'Literary, historical, and contemporary narrative journeys.',
    description: 'Rich character development, intricate plotting, and distinct voice crafted to leave an indelible impression on fiction readers.',
    keyElements: ['Narrative pacing', 'Atmospheric worldbuilding', 'Dialogue authenticity']
  },
  {
    id: 'thriller-mystery',
    name: 'Thriller & Mystery',
    tagline: 'High-stakes suspense, twists, and investigative momentum.',
    description: 'Fast-paced, tension-driven narratives where every clue matters and every chapter ending demands the next page turn.',
    keyElements: ['Plot escalation', 'Psychological tension', 'Climactic reveals']
  },
  {
    id: 'memoir-biography',
    name: 'Memoir & Biography',
    tagline: 'Personal vulnerability, historical witness, and lived experience.',
    description: 'Transforming personal truth and profound milestones into luminous, resonant literature that connects with universal human emotions.',
    keyElements: ['Intimate voice', 'Emotional resonance', 'Thematic truth']
  },
  {
    id: 'business-leadership',
    name: 'Business & Leadership',
    tagline: 'Executive frameworks, industry authority, and founder insights.',
    description: 'Translating proprietary methodologies, leadership principles, and corporate lessons into essential books for modern professionals.',
    keyElements: ['Actionable frameworks', 'Case study rigor', 'Executive clarity']
  },
  {
    id: 'non-fiction-ideas',
    name: 'Non-Fiction & Ideas',
    tagline: 'Cultural analysis, history, philosophy, and journalism.',
    description: 'Meticulously researched, compellingly argued explorations of modern culture, history, science, and human behavior.',
    keyElements: ['Fact-checking rigor', 'Editorial clarity', 'Intellectual depth']
  },
  {
    id: 'self-help-wellness',
    name: 'Self-Help & Wellness',
    tagline: 'Practical transformation, habit science, and personal growth.',
    description: 'Empowering guides that provide readers with actionable strategies, psychological insights, and paths to sustainable personal renewal.',
    keyElements: ['Reader engagement', 'Pragmatic exercises', 'Compassionate guidance']
  },
  {
    id: 'fantasy-scifi',
    name: 'Fantasy & Sci-Fi',
    tagline: 'Expansive realms, speculative futures, and mythic scale.',
    description: 'Unbounded imagination grounded in rigorous internal logic, unique magic systems, and epic storytelling that captivates genre enthusiasts.',
    keyElements: ['Worldbuilding lore', 'Magic & tech systems', 'Epic stakes']
  },
  {
    id: 'romance',
    name: 'Romance',
    tagline: 'Emotional intensity, romantic chemistry, and heartfelt journeys.',
    description: 'Captivating stories of connection, tension, and passion tailored to meet reader expectations while delivering fresh emotional depth.',
    keyElements: ['Character chemistry', 'Emotional arcs', 'Satisfying resolutions']
  },
  {
    id: 'childrens-ya',
    name: 'Children\'s & YA',
    tagline: 'Wonder, coming-of-age discovery, and visual charm.',
    description: 'Vibrant picture books and evocative young adult novels crafted with age-appropriate vocabulary, rhythm, and stunning illustrated pages.',
    keyElements: ['Visual storytelling', 'Age-appropriate rhythm', 'Empathetic themes']
  },
  {
    id: 'poetry',
    name: 'Poetry',
    tagline: 'Lyrical precision, formal elegance, and condensed emotion.',
    description: 'Intricately typeset collections where line breaks, white space, and sonic resonance are treated with the highest reverence.',
    keyElements: ['Typographical layout', 'Metaphorical power', 'Sonic balance']
  }
];

export type Genre = 'Thriller' | 'Non-Fiction' | 'Poetry' | 'Self-Help' | "Children's";

export interface Book {
  id: string;
  title: string;
  author: string;
  genre: Genre;
  description: string;
  coverImage: string;
}

export const books: Book[] = [
  {
    id: 'empire-borders-within',
    title: 'Empire: Borders Within',
    author: 'John Payne',
    genre: 'Thriller',
    description: 'A political thriller following a secret international movement of young people who challenge outdated systems of economic and political control in pursuit of a fairer world. Royal Quill Publishers provided developmental editing, cover design and full Amazon KDP publishing support.',
    coverImage: '/images/book-empire-borders-within.jpg',
  },
  {
    id: 'the-rat-race',
    title: 'The Rat Race',
    author: 'William Murphy',
    genre: 'Non-Fiction',
    description: 'A practical, motivational nonfiction guide showing readers how to step off the conventional employment treadmill and build sustainable income through creative and AI-supported work. We supported the author with line editing, formatting and KDP publication.',
    coverImage: '/images/book-the-rat-race.jpg',
  },
  {
    id: 'feel',
    title: 'Feel: What Am I Feeling Right Now?',
    author: 'Lily Mathers',
    genre: "Children's",
    description: 'A warm, colourful picture book helping young children name and understand their emotions through everyday moments. Royal Quill Publishers handled layout, illustration placement and print-ready formatting for digital and paperback editions.',
    coverImage: '/images/book-feel.jpg',
  },
  {
    id: 'expression',
    title: 'Expression: The Different Perspectives Of Love',
    author: 'Chris Walker & Linda Walker',
    genre: 'Poetry',
    description: 'A poetry collection following one couple\'s love story from their teenage years to old age, told from both partners\' perspectives. We provided editorial support, formatting and cover design suited to a dual-voice poetry collection.',
    coverImage: '/images/book-expression.jpg',
  },
  {
    id: 'would-i-could-i-should-i',
    title: 'Would I? Can I? Should I?',
    author: 'Wallace Murray',
    genre: 'Self-Help',
    description: 'A candid self-help book examining why procrastination, doomscrolling and social media distraction have become so widespread among young people, and how to overcome them. Royal Quill Publishers supported developmental editing, formatting and publishing.',
    coverImage: '/images/book-would-i-could-i-should-i.jpg',
  },
  {
    id: 'we-love-jesus',
    title: 'We Love Jesus',
    author: 'David Addington',
    genre: 'Non-Fiction',
    description: 'A respectful, well-researched exploration of the shared and differing views of Jesus across Christianity and Islam. We provided editorial review, formatting and distribution support for this interfaith nonfiction title.',
    coverImage: '/images/hero-book-we-love-jesus.jpg',
  },
];

export const portfolioGenres = ['All', 'Thriller', 'Non-Fiction', 'Poetry', 'Self-Help', "Children's"] as const;

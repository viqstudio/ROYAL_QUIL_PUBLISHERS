export interface Testimonial {
  id: string;
  author: string;
  bookTitle: string;
  bookMeta: string;
  quote: string;
  coverImage: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'john-payne',
    author: 'John Payne',
    bookTitle: 'Empire: Borders Within',
    bookMeta: 'Thriller · Hardcover, Paperback & eBook',
    quote:
      'The editorial conversations were clear and considered, and I was involved in every decision. The team sharpened the pace without flattening my voice. Seeing the finished cover and printed edition felt like the manuscript had finally found its proper form.',
    coverImage: '/images/book-empire-borders-within.jpg',
  },
  {
    id: 'lily-mathers',
    author: 'Lily Mathers',
    bookTitle: 'Feel',
    bookMeta: "Children's · Illustrated Hardcover",
    quote:
      'The team understood that a children’s book has to speak to parents and young readers at the same time. They were patient with the rhythm, colour, and placement of every page. I never felt rushed, and the finished book still feels completely mine.',
    coverImage: '/images/book-feel.jpg',
  },
  {
    id: 'wallace-murray',
    author: 'Wallace Murray',
    bookTitle: 'Would I? Could I? Should I?',
    bookMeta: 'Self-Help · Paperback & eBook',
    quote:
      'I came in with a complete draft but very little understanding of what happened next. Royal Quill gave me a practical route through editing, design, and distribution. Communication stayed straightforward, and I always knew what I needed to approve.',
    coverImage: '/images/book-would-i-could-i-should-i.jpg',
  },
];

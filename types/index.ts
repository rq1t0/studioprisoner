export type Work = {
  slug: string;
  artist: string;
  title: string;
  roles: Array<'Recording' | 'Mixing' | 'Mastering' | 'Full Production'>;
  releaseDate?: string;
  thumb: string;
  hero?: string;
  youtubeId?: string;
  links?: { label: string; url: string }[];
  body?: string;
  tracks?: Track[];
};

export type Voice = {
  name: string;
  role: string;
  body: string[];
  image?: string;
};

export type Media = {
  youtubeId: string;
  title: string;
  description?: string;
};

export type Faq = {
  q: string;
  a: string;
};

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  locale: string;
  challenge: string;
  approach: string[];
  results: { kpis: string[] };
  media: string[];
  testimonial?: string;
  cta?: string;
};

export type Epk = {
  shortBio: string;
  longBio: string;
  hero: string;
  photos: string[];
  selectedTracks: { title: string; url: string }[];
  videos: string[];
  pressQuotes: { source: string; quote: string }[];
  oneSheetPdf: string;
};

export type Testimonial = {
  name: string;
  role: string;
  body: string[];
};

export type Track = {
  title: string;
  description?: string;
  youtubeId?: string;
  url?: string;
};

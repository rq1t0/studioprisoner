export type Work = {
  slug: string;
  artist: string;
  title: string;
  roles: Array<'Recording' | 'Mixing' | 'Mastering' | 'Full Production'>;
  releaseDate?: string;
  /**
   * Home(top) 表示の任意順。小さいほど先頭。未設定は除外（または補完）
   */
  homeOrder?: number;
  /**
   * WORKS 一覧の新着順判定用。画像の保存日時と一致しない場合に手動で設定（ISO: YYYY-MM-DD）。
   */
  addedAt?: string;
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
  youtubeId?: string;
  title: string;
  description?: string;
  /**
   * 任意の並び順。小さいほど先頭。未設定ならファイル順。
   * 別ファイル data/media-order.json が存在する場合はそちらが最優先。
   */
  order?: number;
  /**
   * YouTube のフルURLを貼ってもOK（自動でID抽出）。
   */
  url?: string;
};

export type Faq = {
  q: string;
  a: string | string[];
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

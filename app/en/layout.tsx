import '../globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Zen_Kaku_Gothic_New } from 'next/font/google';
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-jakarta' });
const zenKaku = Zen_Kaku_Gothic_New({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-zen-kaku' });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://studioprisoner.com'),
  title: { default: 'STUDIO PRISONER', template: '%s | STUDIO PRISONER' },
  description: 'Demo site for international B2B-oriented music production studio.',
  alternates: { languages: { 'ja-JP': '/' } }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Note: Root html/body are provided by app/layout.tsx. This layout only wraps content.
  return (
    <section id="page-root-en" className={`${jakarta.variable} ${zenKaku.variable}`}>
      {children}
    </section>
  );
}

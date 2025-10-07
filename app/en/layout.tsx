import '../globals.css';
import type { Metadata } from 'next';
// Header removed; embedded in hero
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ScrollTopButton } from '@/components/scroll-top-button';
import { ContactCta } from '@/components/contact-cta';
import { Plus_Jakarta_Sans, Zen_Kaku_Gothic_New } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['300', '400', '600'], variable: '--font-jakarta' });
const zenKaku = Zen_Kaku_Gothic_New({ subsets: ['latin'], weight: ['300', '400', '700'], variable: '--font-zen-kaku' });

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: { default: 'STUDIO PRISONER', template: '%s | STUDIO PRISONER' },
  description: 'Demo site for international B2B-oriented music production studio.',
  alternates: { languages: { 'ja-JP': '/' } }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${jakarta.variable} ${zenKaku.variable}`}>
      <body className="min-h-screen antialiased">
        <Header key="en" />
        <main id="main" className="pt-[64px] md:pt-[72px]">{children}</main>
        <ContactCta lang="en" />
        <ScrollTopButton />
        <Footer lang="en" />
      </body>
    </html>
  );
}

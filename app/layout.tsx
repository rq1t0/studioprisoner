import './globals.css';
import type { Metadata } from 'next';
import { Footer } from '@/components/footer';
import { siteConfig } from '@/lib/utils';
import { Header } from '@/components/header';
import { ScrollTopButton } from '@/components/scroll-top-button';
import { ContactCta } from '@/components/contact-cta';
import { Plus_Jakarta_Sans, Zen_Kaku_Gothic_New } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['300', '400', '600'], variable: '--font-jakarta' });
const zenKaku = Zen_Kaku_Gothic_New({ subsets: ['latin'], weight: ['300', '400', '700'], variable: '--font-zen-kaku' });

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: `${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`
  },
  description: '音の設計から最終仕上げまで一貫して伴走するスタジオのデモサイト。',
  openGraph: {
    title: siteConfig.name,
    description: '音の設計から最終仕上げまで一貫して伴走するスタジオのデモサイト。',
    url: 'https://example.com',
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage }],
    locale: 'ja_JP',
    type: 'website'
  },
  icons: { icon: '/favicon.svg' },
  alternates: { canonical: '/', languages: { en: '/en' } }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'STUDIO PRISONER',
    url: 'https://example.com',
    logo: '/favicon.svg'
  };

  return (
    <html lang="ja" className={`dark ${jakarta.variable} ${zenKaku.variable}`}>
      <body className="min-h-screen antialiased">
        <Header key="ja" />
        <main id="main" className="pt-[64px] md:pt-[72px]">{children}</main>
        <ContactCta lang="ja" />
        <ScrollTopButton />
        <Footer lang="ja" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  );
}

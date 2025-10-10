import './globals.css';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/utils';
import { Header } from '@/components/header';
import { ScrollTopButton } from '@/components/scroll-top-button';
import { FooterCtaAuto } from '@/components/footer-cta-auto';
import { WebVitals } from '@/components/web-vitals';
import { Plus_Jakarta_Sans, Zen_Kaku_Gothic_New } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-jakarta' });
const zenKaku = Zen_Kaku_Gothic_New({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-zen-kaku' });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://studioprisoner.com'),
  title: {
    default: `${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`
  },
  description: '音の設計から最終仕上げまで一貫して伴走するスタジオのデモサイト。',
  keywords: ['音楽制作', 'レコーディング', 'ミキシング', 'マスタリング', 'スタジオ', 'STUDIO PRISONER'],
  authors: [{ name: 'STUDIO PRISONER' }],
  creator: 'STUDIO PRISONER',
  publisher: 'STUDIO PRISONER',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: siteConfig.name,
    description: '音の設計から最終仕上げまで一貫して伴走するスタジオのデモサイト。',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://studioprisoner.com',
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'STUDIO PRISONER - 音楽制作スタジオ',
      }
    ],
    locale: 'ja_JP',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: '音の設計から最終仕上げまで一貫して伴走するスタジオのデモサイト。',
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: { 
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  alternates: { 
    canonical: '/', 
    languages: { 
      'ja': '/', 
      'en': '/en' 
    } 
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'STUDIO PRISONER',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://studioprisoner.com',
    logo: {
      '@type': 'ImageObject',
      url: '/favicon.svg',
      width: 200,
      height: 40
    },
    description: '音の設計から最終仕上げまで一貫して伴走するスタジオ',
    foundingDate: '2019',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'JP',
      addressLocality: 'Tokyo'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['Japanese', 'English']
    },
    sameAs: [
      'https://twitter.com/studioprisoner',
      'https://instagram.com/studioprisoner'
    ]
  };

  return (
    <html lang="ja" className={`dark ${jakarta.variable} ${zenKaku.variable}`}>
      <head>
        {/* Critical resource hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Critical resource preloading */}
        <link rel="preload" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/hero.jpg`} as="image" type="image/jpeg" fetchPriority="high" />
        <link rel="preload" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/logo-white.png`} as="image" type="image/png" fetchPriority="high" />
        <link rel="preload" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/works/work-1.svg`} as="image" type="image/svg+xml" />
        
        {/* Critical CSS preload */}
        <link rel="preload" href="/globals.css" as="style" />
        <noscript><link rel="stylesheet" href="/globals.css" /></noscript>
        
        {/* Performance hints */}
        <meta name="theme-color" content="#0B0B0D" />
        <meta name="color-scheme" content="dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no" />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
        
        {/* Resource hints for better performance */}
        <link rel="prefetch" href="/about" />
        <link rel="prefetch" href="/services" />
        <link rel="prefetch" href="/works" />
        <link rel="prefetch" href="/voice" />
        
        {/* Critical inline CSS for above-the-fold content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical above-the-fold styles */
            body{font-family:var(--font-zen-kaku),-apple-system,BlinkMacSystemFont,"Hiragino Sans","Yu Gothic","Meiryo",sans-serif;margin:0;padding:0;background:#101214;color:#F6F7F9}
            .hero-bg{position:relative;overflow:hidden;min-height:100vh}
            .hero-img-zoom{transform:translateZ(0);will-change:transform}
            .card-hover{transition:all 0.3s cubic-bezier(0.2,0.65,0.2,1);will-change:transform}
            .focus-ring:focus-visible{outline:2px solid #1E6CFF;outline-offset:2px}
            .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
            .sr-only:focus{position:static;width:auto;height:auto;padding:inherit;margin:inherit;overflow:visible;clip:auto;white-space:normal}
          `
        }} />
      </head>
      <body className="min-h-screen antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-accent-foreground px-4 py-2 rounded-md z-50">
          メインコンテンツにスキップ
        </a>
        <Header />
        <main id="main" className="pt-[64px] md:pt-[72px]">
          <section id="page-root" data-hydrate-root>
            {children}
          </section>
        </main>
        <FooterCtaAuto />
        <ScrollTopButton />
        <WebVitals />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  );
}

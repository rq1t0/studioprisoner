import Image from 'next/image';
import { Raleway } from 'next/font/google';
import heroImage from '@/public/images/hero.jpg';

const raleway = Raleway({ subsets: ['latin'], weight: ['400'] });
import Link from 'next/link';
// Language switcher is inlined here as static links to avoid hydration mismatch.

export function Hero() {
  return (
    <section aria-label="Hero" className="hero-bg relative overflow-hidden">
      {/* Full-bleed wide hero image (for horizontal photos) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="STUDIO PRISONERのスタジオ内観。プロフェッショナルな音楽制作環境を提供するスタジオの横長写真"
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          quality={90}
          fetchPriority="high"
          className="object-cover object-center hero-img-zoom"
        />
        {/* Darkening overlays to improve white text legibility */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,11,13,0.50),rgba(11,11,13,0.30)_40%,rgba(11,11,13,0.10)_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,11,13,0.22),rgba(11,11,13,0.10)_40%,rgba(11,11,13,0.28)_100%)]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="relative">
          {/* Logo + nav handled by global Header to avoid duplication */}
          <div className="pointer-events-none absolute inset-0 z-10 opacity-60 mix-blend-screen">
            <div className="hero-anim h-full w-full" />
          </div>
          <div className="flex min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-72px)] flex-col items-center justify-center py-16 text-center">
            <h1 className={`${raleway.className} font-light md:font-normal tracking-[-0.02em] leading-[1.06]`}>
              <span className="block text-[32px] xs:text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] 2xl:text-[80px]">Turn Your</span>
              <span className="block mt-1 sm:mt-1.5 md:mt-2 lg:mt-2.5 text-[30px] xs:text-[38px] sm:text-[46px] md:text-[54px] lg:text-[62px] xl:text-[70px] 2xl:text-[78px]">Imaginations Into</span>
              <span className="block mt-1 sm:mt-1.5 md:mt-2 lg:mt-2.5 text-[30px] xs:text-[38px] sm:text-[46px] md:text-[54px] lg:text-[62px] xl:text-[70px] 2xl:text-[78px] text-white">Reality</span>
            </h1>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              {/* Removed per request: View Works link */}
            </div>
            {/* removed decorative placeholders under the headline for cleaner hero */}
          </div>
          <div className="pointer-events-auto relative -mt-6 flex justify-center pb-6">
            <a href="#works" className="focus-ring inline-flex items-center gap-1 text-sm text-foreground/70 hover:text-foreground">
              <span>Scroll</span>
              <span aria-hidden>↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

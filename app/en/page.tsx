import { Hero } from '@/components/hero';
import Link from 'next/link';
import { Section } from '@/components/section';
import { WorksGrid } from '@/components/works-grid';
import { getTopWorks, getVoices } from '@/lib/getData';
import { Reveal } from '@/components/reveal';
import { ServiceCardsEn } from '@/components/service-cards-en';
import dynamic from 'next/dynamic';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'], weight: ['400','600'] });

const VoiceShowcase = dynamic(() => import('@/components/voice-showcase').then(mod => ({ default: mod.VoiceShowcase })), {
  ssr: true,
  loading: () => <div className="animate-pulse bg-gray-200/20 h-64 rounded-lg" />
});


// Note: Keep default rendering mode so this page can be statically exported when needed.

export default async function HomePageEN() {
  const works = await getTopWorks(8);
  const voices = await getVoices('en');
  return (
    <>
      <Hero />
      <Section className="pt-16" id="works">
        <div className="mb-2 text-center">
          <h2 className={`${raleway.className} text-xl sm:text-2xl md:text-3xl lg:text-4xl`}>WORKS</h2>
        </div>
        <WorksGrid works={works} hrefPrefix="/en" />
        <Reveal>
          <div className="mt-10 mb-4 text-center">
            <h3 className={`${raleway.className} text-xl sm:text-2xl md:text-3xl lg:text-4xl`}>FULL PRODUCTION</h3>
          </div>
        </Reveal>
        <div className="mb-10"><ServiceCardsEn /></div>
        <div className="mt-12">
          <VoiceShowcase voices={voices} align="left" headingAlign="center" ctaHref="/en/voice" ctaLabel="Read more" />
        </div>
      </Section>
    </>
  );
}

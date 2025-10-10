import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/section';
import { getTopWorks, getVoices } from '@/lib/getData';
import { Hero } from '@/components/hero';
import { WorksGrid } from '@/components/works-grid';
import { ServiceCards } from '@/components/service-cards';
import dynamic from 'next/dynamic';

const VoiceShowcase = dynamic(() => import('@/components/voice-showcase').then(mod => ({ default: mod.VoiceShowcase })), {
  ssr: true,
  loading: () => <div className="animate-pulse bg-gray-200/20 h-64 rounded-lg" />
});
import { Reveal } from '@/components/reveal';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'], weight: ['400','600'] });

// Keep default rendering to ensure consistent SSR/CSR hydration

export default async function HomePage() {
  const works = await getTopWorks(8);
  const voices = await getVoices();
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* WORKS directly under hero */}
      <Section className="pt-16" id="works">
        <div className="mb-2 text-center">
          <h2 className={`${raleway.className} text-xl sm:text-2xl md:text-3xl lg:text-4xl`}>WORKS</h2>
        </div>
        <WorksGrid works={works} />
        <Reveal>
          <div className="mt-10 mb-4 text-center">
            <h3 className={`${raleway.className} text-xl sm:text-2xl md:text-3xl lg:text-4xl`}>FULL PRODUCTION</h3>
          </div>
        </Reveal>
        <div className="mb-10"><ServiceCards /></div>
        <div className="mt-12">
          <VoiceShowcase voices={voices} align="left" headingAlign="center" />
        </div>
      </Section>
    </>
  );
}

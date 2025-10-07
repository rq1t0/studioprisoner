import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getWorks, getVoices } from '@/lib/getData';
import { Hero } from '@/components/hero';
import { WorksGrid } from '@/components/works-grid';
import { ServiceCards } from '@/components/service-cards';
import { VoiceShowcase } from '@/components/voice-showcase';
import { Reveal } from '@/components/reveal';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'], weight: ['300','400','600'] });

// Force dynamic SSR to avoid stale HTML during development/iteration
export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const works = (await getWorks()).slice(0, 8);
  const voices = await getVoices();
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* WORKS directly under hero */}
      <Section className="pt-16" id="works">
        <div className="mb-2 text-center">
          <h2 className={`${raleway.className} text-2xl md:text-3xl`}>WORKS</h2>
        </div>
        <WorksGrid works={works} />
        <Reveal>
          <div className="mt-10 mb-4 text-center">
            <h3 className={`${raleway.className} text-2xl md:text-3xl`}>FULL PRODUCTION</h3>
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

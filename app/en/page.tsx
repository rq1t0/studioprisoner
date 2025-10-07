import { Hero } from '@/components/hero';
import Link from 'next/link';
import { Section } from '@/components/section';
import { WorksGrid } from '@/components/works-grid';
import { getWorks, getVoices } from '@/lib/getData';
import { Reveal } from '@/components/reveal';
import { ServiceCardsEn } from '@/components/service-cards-en';
import { VoiceShowcase } from '@/components/voice-showcase';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'], weight: ['300','400','600'] });


// Note: Keep default rendering mode so this page can be statically exported when needed.

export default async function HomePageEN() {
  const works = (await getWorks()).slice(0, 8);
  const voices = await getVoices();
  return (
    <>
      <Hero />
      <Section className="pt-16" id="works">
        <div className="mb-2 text-center">
          <h2 className={`${raleway.className} text-2xl md:text-3xl`}>WORKS</h2>
        </div>
        <WorksGrid works={works} hrefPrefix="/en" />
        <Reveal>
          <div className="mt-10 mb-4 text-center">
            <h3 className={`${raleway.className} text-2xl md:text-3xl`}>FULL PRODUCTION</h3>
          </div>
        </Reveal>
        <div className="mb-10"><ServiceCardsEn /></div>
        <div className="mt-12">
          <VoiceShowcase voices={voices} align="left" headingAlign="center" />
        </div>
      </Section>
    </>
  );
}

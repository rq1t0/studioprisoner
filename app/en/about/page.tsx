import { Section } from '@/components/section';
import { AboutStatement, AboutSplitText } from '@/components/about-sections';

export const metadata = { title: 'ABOUT' };

export default function AboutPageEN() {
  return (
    <Section>
      <AboutStatement
        img="/images/about_top_v5.jpg"
        alt="Hiro in the studio"
        lines={[
          'Let’s be honest.',
          'Working with me on a production',
          'is not easy.'
        ]}
        signature="Hiro / STUDIO PRISONER"
      />

      <AboutSplitText
        leftBody={[
          'I want to create music that hits like a shockwave — powerful, unforgettable, and undeniably cool. From Japan, I aim to craft sound that resonates across oceans and stands tall on the world stage. At STUDIO PRISONER, this has always been our unshakable core.',
          'A recording is like the tip of an arrow for the artist — it must carry every ounce of passion, emotion, and intent. Strangely enough, the future never exceeds what you put into the music. That’s why creating sound is, to me, the act of shaping the future itself.',
          'What I care about most, from the bottom of my heart, is helping artists reach the future they truly deserve. STUDIO PRISONER is built to make that possible — to turn every track into a work that draws that future closer. Because we design sound with the artist’s vision at the forefront, the process can be demanding at times. But that’s exactly why the results are worth it.'
        ]}
        rightBody={[
          'But within the challenges we face together lies something truly irreplaceable. The journey not only elevates your work to a world-class standard, but also shapes you — helping you grow as a musician and transform into the professional you’re meant to be. That, I believe, is what real growth truly is.',
          'Every ounce of effort you pour into your music will always reward you in return. For artists who have been creating alone, or those who have only produced within their own bands, I’m certain this experience will show you a completely new horizon.',
          'Experience the essence of STUDIO PRISONER Sound — refined through years of collaboration with top-tier players.',
          'It doesn’t matter who you are. If you’re serious about making music, if you want to take your artistry to the next level, if you have a future you’re determined to reach — then STUDIO PRISONER is where you belong.'
        ]}
      />

      <div className="mt-6 flex justify-center">
        <div className="w-full max-w-[900px] px-4 md:px-6">
          <div className="text-center">
            <h2 className="heading-condensed mt-10 md:mt-16 text-3xl md:text-5xl">PROFILE</h2>
          </div>
          <div className="mt-6 space-y-4 text-foreground text-base md:text-lg leading-relaxed">
            <p>
              In 2005, he founded METAL SAFARI as a guitarist. Soon after its formation, the band launched with a solo headline show and went on to perform nationwide across Japan, later expanding to international metal festivals and touring throughout Asia and Europe.
            </p>
            <p>
              From the very beginning, METAL SAFARI embodied the true spirit of independence—self-producing and releasing their own albums without compromise. The origin of STUDIO PRISONER can be traced back to a private studio he built to produce METAL SAFARI’s second album.
            </p>
            <p>
              For years, he carried a conviction that the sound quality of Japanese bands could—and should—reach a higher global standard. That belief became a turning point in 2010, when he produced Death I Am’s first album, marking the official start of his professional career as a producer under the name STUDIO PRISONER.
            </p>
            <p>
              Throughout the 2010s, he worked with a wide range of artists, both emerging and established, continuously refining his craft through countless sessions and real-world experience—always evolving, always advancing.
            </p>
            <p>
              Artists he has produced include NOCTURNAL BLOODLUST, Serenity In Murder, Infernal Revulsion, CRYSTAL LAKE, HONE YOUR SENSE, Death I Am, TEARS OF TRAGEDY, MergingMoon, and many more.
            </p>
            <p>
              He is also an endorser for Caparison Guitars and KRANK Amps.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

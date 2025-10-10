import { Section } from '@/components/section';
import { AboutStatement, AboutSplitText } from '@/components/about-sections';
import { Reveal } from '@/components/reveal';

export const metadata = { title: 'ABOUT' };

export default function AboutPageEN() {
  return (
    <Section>
      <AboutStatement
        img={`${process.env.NODE_ENV === 'production' ? 'https://rq1t0.github.io/studioprisoner' : ''}${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/about_top_v5.jpg`}
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

      {/* STUDIO: Gear information */}
      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-[900px] px-4 md:px-6">
          <div className="text-center">
            <Reveal>
              <h2 className="heading-condensed mt-10 md:mt-16 text-3xl md:text-5xl">STUDIO</h2>
            </Reveal>
          </div>
          <div className="mt-6 columns-1 sm:columns-2 gap-x-4">
            <Reveal className="break-inside-avoid rounded-lg border border-border/60 p-4 mb-4 card-hover" delay={0}>
              <div className="font-semibold text-base md:text-lg">DAW System</div>
              <ul className="mt-2 list-disc space-y-1 md:space-y-1.5 pl-5 md:pl-6 text-sm md:text-base leading-relaxed text-foreground/90">
                <li>Computer: Mac Pro / 3.46 GHz 6-Core Intel Xeon / 16 GB 1333 MHz DDR3</li>
                <li>DAW: PreSonus Studio One 4 professional</li>
                <li>Audio I/O: APOGEE Symphony64</li>
                <li>Controller: PreSonus FADERPORT8</li>
                <li>Master clock: Antelope Isochrone Trinity</li>
              </ul>
            </Reveal>

            <Reveal className="break-inside-avoid rounded-lg border border-border/60 p-4 mb-4 card-hover" delay={80}>
              <div className="font-semibold text-base md:text-lg">Monitor Speaker</div>
              <ul className="mt-2 list-disc space-y-1 md:space-y-1.5 pl-5 md:pl-6 text-sm md:text-base leading-relaxed text-foreground/90">
                <li>ADAM Audio S2V</li>
                <li>ADAM Audio Sub12</li>
                <li>YAMAHA NS10M STUDIO</li>
                <li>GENELEC 8010A</li>
              </ul>
            </Reveal>

            <Reveal className="break-inside-avoid rounded-lg border border-border/60 p-4 mb-4 card-hover" delay={160}>
              <div className="font-semibold text-base md:text-lg">Monitor Controller</div>
              <ul className="mt-2 list-disc space-y-1 md:space-y-1.5 pl-5 md:pl-6 text-sm md:text-base leading-relaxed text-foreground/90">
                <li>Lynx Hilo</li>
                <li>DRAWMER mc2.1</li>
              </ul>
            </Reveal>

            <Reveal className="break-inside-avoid rounded-lg border border-border/60 p-4 mb-4 card-hover" delay={240}>
              <div className="font-semibold text-base md:text-lg">Outboard</div>
              <ul className="mt-2 list-disc space-y-1 md:space-y-1.5 pl-5 md:pl-6 text-sm md:text-base leading-relaxed text-foreground/90">
                <li>API 3124+</li>
                <li>Focusrite RED8</li>
                <li>Focusrite Clarett OctPre</li>
                <li>BAE 1073MP</li>
                <li>NEVE 1073DPA</li>
                <li>VINTECH AUDIO 273</li>
                <li>Empirical Labs Distressor EL8-X</li>
                <li>RUPERT NEVE DESIGNS PORTICO II</li>
                <li>Smart Research C2</li>
                <li>Solid State Logic X-Rack Channel EQ Module</li>
                <li>Solid State Logic X-Rack Dynamics Module</li>
              </ul>
            </Reveal>

            <Reveal className="break-inside-avoid rounded-lg border border-border/60 p-4 mb-4 card-hover" delay={320}>
              <div className="font-semibold text-base md:text-lg">DI</div>
              <ul className="mt-2 list-disc space-y-1 md:space-y-1.5 pl-5 md:pl-6 text-sm md:text-base leading-relaxed text-foreground/90">
                <li>Little Labs RED EYES 3D PHANTOM</li>
                <li>Radial REAMP</li>
                <li>Radial J48</li>
              </ul>
            </Reveal>

            <Reveal className="break-inside-avoid rounded-lg border border-border/60 p-4 mb-4 card-hover" delay={400}>
              <div className="font-semibold text-base md:text-lg">Plugins</div>
              <ul className="mt-2 list-disc space-y-1 md:space-y-1.5 pl-5 md:pl-6 text-sm md:text-base leading-relaxed text-foreground/90">
                <li>Brainworx</li>
                <li>UAD2 QUAD core x 2</li>
                <li>Fabfilter</li>
                <li>Sound Toys</li>
                <li>Slate Digital</li>
                <li>Solid State Logic</li>
                <li>iZotope</li>
                <li>Softube</li>
                <li>Waves</li>
              </ul>
            </Reveal>

            <Reveal className="break-inside-avoid rounded-lg border border-border/60 p-4 mb-4 card-hover" delay={480}>
              <div className="font-semibold text-base md:text-lg">Amps/Cabs</div>
              <ul className="mt-2 list-disc space-y-1 md:space-y-1.5 pl-5 md:pl-6 text-sm md:text-base leading-relaxed text-foreground/90">
                <li>Marshall 1960AX 4×12″ cab</li>
                <li>KRANK with CELESTION V30 4×12″ cab</li>
                <li>KRANK with Eminence 4×12″ cab</li>
                <li>VHT Eminence 4×12″ cab</li>
                <li>Orange PCC 412 4×12″ cab</li>
                <li>Engl 4×12″ Standard Slanted cab</li>
                <li>MESA BOOGIE 4×12″ Recto Standard Straight Cab</li>
                <li>MESA BOOGIE Triple Rectifier Solo Head</li>
                <li>KRANK rev-1</li>
                <li>Peavey 5150 (early model)</li>
                <li>EVH 5150 III</li>
                <li>CRATE BV120</li>
                <li>MARSHALL JMP-1</li>
              </ul>
            </Reveal>

            <Reveal className="break-inside-avoid rounded-lg border border-border/60 p-4 mb-4 card-hover" delay={560}>
              <div className="font-semibold text-base md:text-lg">Microphone</div>
              <ul className="mt-2 list-disc space-y-1 md:space-y-1.5 pl-5 md:pl-6 text-sm md:text-base leading-relaxed text-foreground/90">
                <li>NEUMANN TLM67</li>
                <li>NEUMANN KM184</li>
                <li>BRAUNER Phanthera</li>
                <li>SANKEN CU-31</li>
                <li>HEiL SOUND PR-20</li>
                <li>HEiL SOUND PR-30</li>
                <li>HEiL SOUND PR-40</li>
                <li>SHURE SM57</li>
                <li>SHURE SM7B</li>
                <li>AKG D12VR</li>
                <li>AKG C451B</li>
                <li>AUDIX D6</li>
                <li>AUDIX i5</li>
                <li>SENNHEISER MD421 MK II</li>
                <li>SENNHEISER E606</li>
                <li>SENNHEISER E609</li>
                <li>RODE NT-4</li>
                <li>YAMAHA SUBKICK</li>
              </ul>
            </Reveal>

            <Reveal className="break-inside-avoid rounded-lg border border-border/60 p-4 mb-4 card-hover" delay={640}>
              <div className="font-semibold text-base md:text-lg">Instrumental</div>
              <ul className="mt-2 list-disc space-y-1 md:space-y-1.5 pl-5 md:pl-6 text-sm md:text-base leading-relaxed text-foreground/90">
                <li>Synthesizer: Roland JD-800</li>
                <li>Guitar: 3 Caparison Guitars</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}

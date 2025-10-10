import Image from 'next/image';
import { Section } from '@/components/section';

export const metadata = { title: 'SERVICES' };

const services = [
  { id: 'full-production', title: 'Full Production', desc: 'From pre-pro to master with aligned vision.', img: '/images/service-1.svg' },
  { id: 'recording', title: 'Recording', desc: 'Capture character that survives downstream processing.', img: '/images/service-2.svg' },
  { id: 'mixing', title: 'Mixing', desc: 'Range and depth tuned to translate.', img: '/images/service-3.svg' },
  { id: 'mastering', title: 'Mastering', desc: 'Cohesion and reliability across platforms.', img: '/images/service-4.svg' }
];

export default function ServicePageEN() {
  return (
    <Section>
      <div className="space-y-10">
        {services.map((s) => (
          s.id === 'full-production' ? (
            <div key={s.id} id={s.id}>
              {/* Mobile/Tablet: 3-card grid */}
              <div className="text-center lg:hidden">
                <h2 className="heading-condensed mb-4 text-3xl">FULL PRODUCTION</h2>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                  <a href="#recording" className="rounded-xl border border-border/60 bg-gradient-to-b from-[#121318] to-[#0f1014] p-4 block focus-ring">
                    <div className="heading-condensed mb-1 text-lg">RECORDING</div>
                    <p className="text-sm text-foreground/85 leading-relaxed">From pre-pro through tracking and editing, we build the backbone with a shared vision.</p>
                  </a>
                  <a href="#mixing" className="rounded-xl border border-border/60 bg-gradient-to-b from-[#121318] to-[#0f1014] p-4 block focus-ring">
                    <div className="heading-condensed mb-1 text-lg">MIXING</div>
                    <p className="text-sm text-foreground/85 leading-relaxed">Hybrid analog/digital approach to reveal intent and shape a powerful, clear balance.</p>
                  </a>
                  <a href="#mastering" className="rounded-xl border border-border/60 bg-gradient-to-b from-[#121318] to-[#0f1014] p-4 block focus-ring">
                    <div className="heading-condensed mb-1 text-lg">MASTERING</div>
                    <p className="text-sm text-foreground/85 leading-relaxed">Cohesion and reliable translation across systems, delivering the final polish.</p>
                  </a>
                </div>
              </div>
              {/* Desktop: original centered copy */}
              <div className="hidden lg:flex flex-col items-center text-center">
                <h2 className="heading-condensed mb-2 text-3xl">FULL PRODUCTION</h2>
                <div className="text-foreground/90 max-w-[70ch] leading-relaxed">
                  <div>At STUDIO PRISONER, we offer full-scale production — from recording to mastering.</div>
                  <div>By sharing a single vision from start to finish, we ensure every step of the process moves toward one goal.</div>
                  <div>This unified approach allows us to avoid the common pitfalls of fragmented production and achieve the best possible outcome for your music.</div>
                </div>
              </div>
            </div>
          ) : s.id === 'recording' ? (
            <div key={s.id} id={s.id} className="grid items-center gap-4 md:gap-6 grid-cols-[140px,1fr] md:grid-cols-2">
              <div className="relative aspect-[3/2] overflow-hidden rounded-lg border border-border">
                <Image src={s.img} alt={`Recording visual`} fill className="object-cover" />
              </div>
              <div>
                <h2 className="heading-condensed text-2xl">STEP 1. RECORDING</h2>
                <div className="mt-1 text-foreground/85">Building the backbone of your sound</div>
                <p className="mt-3 text-foreground/80 leading-relaxed max-w-[70ch]">
                  Uncompromising sound begins here. Every great record is built through a series of intentional steps — each one refining the vision that drives the music forward. Together, we define the sonic direction based on your artistic vision and unique sensibilities. Once that foundation is set, we draw out your full potential to capture takes that truly serve the song. After recording, each take is carefully edited and prepared for mixing, achieving a level of quality that already feels complete in itself. But at STUDIO PRISONER, that’s only the beginning. Through the following stages of mixing and mastering, we take your work to an entirely new dimension.
                </p>
              </div>
            </div>
          ) : s.id === 'mixing' ? (
            <div key={s.id} id={s.id} className="grid items-center gap-4 md:gap-6 grid-cols-[140px,1fr] md:grid-cols-2">
              <div className="relative aspect-[3/2] overflow-hidden rounded-lg border border-border">
                <Image src={s.img} alt={`Mixing visual`} fill className="object-cover" />
              </div>
              <div>
                <h2 className="heading-condensed text-2xl">STEP 2. MIXING</h2>
                <div className="mt-1 text-foreground/85">Pushing it to the limit</div>
                <p className="mt-3 text-foreground/80 leading-relaxed max-w-[70ch]">
                  Once recording is complete, the next stage is where the music truly comes alive — mixing. At STUDIO PRISONER, we offer a hybrid mixing approach that blends the warmth of analog outboard gear with the precision of digital technology. This process reveals the true intent of the work — enhancing clarity, adding brilliance, and crafting a powerful, explosive soundscape with balance, depth, and storytelling. Through close collaboration and continuous feedback, we refine the mix together until it perfectly embodies your artistic vision. Finally, you can attend the session to confirm the details firsthand and shape the sound exactly as you imagine. Mixing and mastering requests are also accepted. See the <a href="/en/faq" className="underline underline-offset-2">FAQ</a> for more details.
                </p>
              </div>
            </div>
          ) : s.id === 'mastering' ? (
            <div key={s.id} id={s.id} className="grid items-center gap-4 md:gap-6 grid-cols-[140px,1fr] md:grid-cols-2">
              <div className="relative aspect-[3/2] overflow-hidden rounded-lg border border-border">
                <Image src={s.img} alt={`Mastering visual`} fill className="object-cover" />
              </div>
              <div>
                <h2 className="heading-condensed text-2xl">STEP 3. MASTERING</h2>
                <div className="mt-1 text-foreground/85">The completion of the STUDIO PRISONER Sound</div>
                <p className="mt-3 text-foreground/80 leading-relaxed max-w-[70ch]">
                  Mastering is the final stage — where every detail comes together to make your music shine at its absolute best. At STUDIO PRISONER, we provide mastering that blends the warmth of analog hardware with the precision of digital technology, using mastering-grade outboard gear and a finely tuned acoustic environment specialized for master production. From full-range maximum loudness to dynamic, expressive sound, we craft masters that translate beautifully everywhere — whether played through iPhone speakers, laptops, or high-end systems. Your master is delivered in any required format, including DDP files and WAV masters, ready for release.
                </p>
              </div>
            </div>
          ) : (
            <div key={s.id} id={s.id} className="grid items-center gap-4 md:gap-6 grid-cols-[140px,1fr] md:grid-cols-2">
              <div className="relative aspect-[3/2] overflow-hidden rounded-lg border border-border">
                <Image src={s.img} alt={`${s.title} visual`} fill className="object-cover" />
              </div>
              <div>
                <h2 className="heading-condensed mb-2 text-2xl">{s.title}</h2>
                <p className="text-foreground/80">{s.desc}</p>
              </div>
            </div>
          )
        ))}
      </div>
    </Section>
  );
}

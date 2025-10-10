import Image from 'next/image';
import { Reveal } from '@/components/reveal';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'], weight: ['300','400','600'] });

export function AboutIntro({ title, body, img, alt }: { title: string; body: string[]; img: string; alt: string }) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Reveal>
        <div>
          <h2 className={`${raleway.className} mb-4 text-2xl md:text-3xl`}>{title}</h2>
          <div className="space-y-3 text-foreground text-base md:text-lg leading-relaxed">
            {body.map((p, i) => (<p key={i}>{p}</p>))}
          </div>
        </div>
      </Reveal>
      <Reveal delay={120}>
        <div className="relative aspect-[4/3] md:aspect-[3/2] w-full overflow-hidden rounded-lg border border-border/60">
          <Image src={img} alt={alt} fill className="object-cover" />
        </div>
      </Reveal>
    </div>
  );
}

export function Values({ items }: { items: { title: string; body: string }[] }) {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {items.map((v, i) => (
        <Reveal key={v.title} delay={i * 120}>
          <div className="rounded-xl border border-border/60 bg-gradient-to-b from-[#121318] to-[#0f1014] p-5">
            <h3 className={`${raleway.className} mb-2 text-lg md:text-xl`}>{v.title}</h3>
            <p className="text-sm md:text-base text-foreground/85">{v.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function Process({ steps }: { steps: { label: string; body: string }[] }) {
  return (
    <div className="mt-10">
      <h3 className={`${raleway.className} mb-4 text-xl md:text-2xl`}>PROCESS</h3>
      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.label} delay={i * 100}>
            <div className="rounded-lg border border-border/60 p-4">
              <div className="mb-1 text-sm text-foreground/60">{String(i + 1).padStart(2, '0')}</div>
              <div className="font-medium">{s.label}</div>
              <p className="mt-1 text-sm text-foreground/80">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function Gear({ items }: { items: string[] }) {
  return (
    <div className="mt-10">
      <h3 className={`${raleway.className} mb-3 text-xl md:text-2xl`}>GEAR HIGHLIGHTS</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((g, i) => (
          <span key={i} className="rounded-full border border-border/60 px-3 py-1 text-xs text-foreground/85">{g}</span>
        ))}
      </div>
    </div>
  );
}

export function AboutSplitText({
  leftBody,
  rightBody
}: {
  leftBody: string[];
  rightBody: string[];
}) {
  return (
    <div className="mt-6 grid gap-6 md:grid-cols-2">
      <div className="space-y-4 text-foreground text-base md:text-lg leading-relaxed max-w-[70ch]">
        {leftBody.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <div className="space-y-4 text-foreground text-base md:text-lg leading-relaxed max-w-[70ch]">
        {rightBody.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}

export function AboutStatement({
  img,
  alt,
  lines,
  signature
}: {
  img: string;
  alt: string;
  lines: string[];
  signature: string;
}) {
  return (
    <div className="relative mb-6 overflow-hidden">
      <div className="md:grid md:grid-cols-5">
        {/* Left: image fills left half */}
        <div className="relative h-[200px] sm:h-[300px] md:h-[420px] md:col-span-3">
          <Image src={img} alt={alt} fill className="object-cover object-left" />
          {/* Mobile: show text below image (no overlay) */}
          <div className="md:hidden px-0 py-4 text-right">
            <div className="space-y-2">
              {lines.map((t, i) => (
                <div key={i} className="text-[20px] sm:text-[24px] leading-[1.2] font-[400] text-foreground">
                  {t}
                </div>
              ))}
            </div>
            <div className="mt-3 text-foreground/85 text-sm">{signature}</div>
          </div>
          {/* Desktop/tablet: no overlay on image */}
        </div>
        {/* Right: on md+, show all lines and signature (aligned to right edge) */}
        <div className="hidden md:col-span-2 md:flex items-center">
          <div className="px-0 ml-auto text-right w-full relative z-10 md:-translate-x-20 lg:-translate-x-32 xl:-translate-x-40">
            <div className="space-y-3">
              {lines.map((t, i) => (
                <div
                  key={i}
                  className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] text-[32px] lg:text-[40px] xl:text-[48px] leading-[1.08] font-[400]"
                >
                  {t}
                </div>
              ))}
            </div>
            <div className="mt-4 text-white/90 text-sm md:text-base drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]">{signature}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

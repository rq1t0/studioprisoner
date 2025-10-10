import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Reveal } from '@/components/reveal';

export function ServiceCardsEn() {
  const items = [
    {
      key: 'recording',
      title: 'RECORDING',
      subtitle: 'Building the backbone of your sound',
      body:
        'Uncompromising sound begins here. Together, we define the sonic direction — guided by the vision you want to achieve with your music and your unique artistic sensibilities. Once the path is clear, we draw out your full potential to capture takes that embody the true essence of your work.',
      img: '/images/service-1.svg',
      alt: 'Recording'
    },
    {
      key: 'mixing',
      title: 'MIXING',
      subtitle: 'Pushing it to the limit',
      body:
        "Once recording is done, it’s time to breathe life into the music through mixing. At STUDIO PRISONER, we offer a hybrid approach that blends the warmth of analog gear with the precision of digital technology. Working closely with you and incorporating your feedback, we shape the mix until it perfectly embodies your vision.",
      img: '/images/service-2.svg',
      alt: 'Mixing'
    },
    {
      key: 'mastering',
      title: 'MASTERING',
      subtitle: 'The Final Form of the STUDIO PRISONER SOUND',
      body:
        'Mastering is where everything comes together — the final sculpting of emotion, depth, and power. Blending the warmth of analog with the precision of digital, we refine every nuance through mastering-grade outboard and a world-class listening environment. The result is unmistakable: the true STUDIO PRISONER SOUND.',
      img: '/images/service-3.svg',
      alt: 'Mastering'
    }
  ];

  return (
    <div className="grid gap-4 sm:gap-5 md:gap-6 lg:gap-8 md:grid-cols-3">
      {items.map((i, idx) => (
        <Reveal key={i.key} delay={idx * 120} className="group">
          <Link href={`/en/services#${i.key}`} className="focus-ring group block">
            <Card className="card-hover h-full overflow-hidden">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={i.img}
                  alt={i.alt}
                  fill
                  className="card-img-zoom object-cover"
                  quality={75}
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="overlay-fade absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/50 transition-opacity" aria-hidden />
                <div className="absolute inset-0 grid place-items-center p-6 text-white text-center">
                  <div className="transition-transform duration-500 will-change-transform group-hover:-translate-y-0.5">
                    <div className="heading-condensed text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide">{i.title}</div>
                    <div className="mt-1 text-sm sm:text-base md:text-lg lg:text-xl opacity-95">{i.subtitle}</div>
                    <p className="mx-auto mt-3 max-w-[34ch] md:max-w-[46ch] text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed opacity-95">
                      {i.body}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

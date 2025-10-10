import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Reveal } from '@/components/reveal';

export function ServiceCards() {
  const items = [
    {
      key: 'recording',
      title: 'RECORDING',
      subtitle: '作品の骨格を作る',
      body:
        '妥協の無いサウンドは全てはここから始まります。サウンドの方向性を、楽曲に対して達成したいビジョン、個々のこだわりから一緒に考えて決めていきます。方向性が決まったら、作品にとって理想的なテイクが録れるようアーティストの実力を最大限引き出していきます。',
      img: '/images/service-1.svg',
      alt: 'Recording',
      bullets: ['方向性の共有', '理想テイクの収録', '編集・下準備']
    },
    {
      key: 'mixing',
      title: 'MIXING',
      subtitle: '極限までビルドアップさせる',
      body:
        'レコーディングが終わったら、次はミキシングで作品に命を吹き込みます。STUDIO PRISONERではアウトボードも駆使したアナログとデジタルのハイブリッドなミキシングを提供しています。フィードバックを頂きながら協力し合って希望の作品にしていきます。',
      img: '/images/service-2.svg',
      alt: 'Mixing',
      bullets: ['アナログ×デジタル', '意図が届くバランス', 'フィードバックで仕上げ']
    },
    {
      key: 'mastering',
      title: 'MASTERING',
      subtitle: 'STUDIO PRISONER SOUNDの完成',
      body:
        '作品を良く聴かすことができる最後のステージがマスタリングです。STUDIO PRISONERではマスタリンググレードのアウトボード、マスター制作に特化した高度なオーディオ再生環境をベースに、アナログとデジタルの強みを活かしたマスタリングを提供しています。',
      img: '/images/service-3.svg',
      alt: 'Mastering',
      bullets: ['全環境での再現性', '統一感の付与', '各種フォーマット納品']
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
      {items.map((i, idx) => (
        <Reveal key={i.key} delay={idx * 120} className="group">
          <Link href={`/services#${i.key}`} className="focus-ring group block">
          <Card className="card-hover h-full overflow-hidden">
            <div className="relative aspect-square w-full">
                <Image
                  src={i.img}
                  alt={i.alt}
                  fill
                  className="card-img-zoom object-cover"
                  quality={75}
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              <div className="overlay-fade absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/45 transition-opacity" aria-hidden />
              {/* Desktop overlay content */}
              <div className="absolute inset-0 hidden md:grid place-items-center p-6 text-white text-center">
                <div className="transition-transform duration-500 will-change-transform group-hover:-translate-y-0.5">
              <div className="heading-condensed text-2xl sm:text-3xl lg:text-4xl tracking-wide">{i.title}</div>
              <div className="mt-1 text-base sm:text-lg lg:text-xl opacity-95">{i.subtitle}</div>
              <p className="mx-auto mt-3 max-w-[46ch] text-sm sm:text-base lg:text-lg leading-relaxed opacity-95">{i.body}</p>
                </div>
              </div>
            </div>
            {/* Mobile text block below image for readability */}
            <div className="md:hidden p-3 sm:p-4 text-center">
              <div className="heading-condensed text-sm sm:text-base">{i.title}</div>
              <div className="mt-0.5 text-xs sm:text-sm text-foreground/85">{i.subtitle}</div>
              <p className="mt-2 text-[12px] sm:text-[13px] text-foreground/90 leading-relaxed">{i.body}</p>
              {i.bullets && (
                <ul className="mt-2 space-y-1 text-[13px] text-foreground/85 list-disc text-left inline-block pl-5">
                  {i.bullets.map((b: string) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          </Card>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

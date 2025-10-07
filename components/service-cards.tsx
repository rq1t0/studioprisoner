import Image from 'next/image';
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
      alt: 'Recording'
    },
    {
      key: 'mixing',
      title: 'MIXING',
      subtitle: '極限までビルドアップさせる',
      body:
        'レコーディングが終わったら、次はミキシングで作品に命を吹き込みます。STUDIO PRISONERではアウトボードも駆使したアナログとデジタルのハイブリッドなミキシングを提供しています。フィードバックを頂きながら協力し合って希望の作品にしていきます。',
      img: '/images/service-2.svg',
      alt: 'Mixing'
    },
    {
      key: 'mastering',
      title: 'MASTERING',
      subtitle: 'STUDIO PRISONER SOUNDの完成',
      body:
        '作品を良く聴かすことができる最後のステージがマスタリングです。STUDIO PRISONERではマスタリンググレードのアウトボード、マスター制作に特化した高度なオーディオ再生環境をベースに、アナログとデジタルの強みを活かしたマスタリングを提供しています。',
      img: '/images/service-3.svg',
      alt: 'Mastering'
    }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((i, idx) => (
        <Reveal key={i.key} delay={idx * 120} className="group">
          <Card className="card-hover h-full overflow-hidden">
            <div className="relative aspect-[3/4] w-full">
              <Image src={i.img} alt={i.alt} fill className="card-img-zoom object-cover" />
              {/* subtle gradient overlay for readability */}
              <div className="overlay-fade absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/50 transition-opacity" aria-hidden />
              {/* centered text overlay */}
              <div className="absolute inset-0 grid place-items-center p-6 text-white text-center">
                <div className="transition-transform duration-500 will-change-transform group-hover:-translate-y-0.5">
                  <div className="heading-condensed text-2xl md:text-3xl tracking-wide">{i.title}</div>
                  <div className="mt-1 text-base md:text-lg opacity-95">{i.subtitle}</div>
                  <p className="mx-auto mt-3 max-w-[34ch] md:max-w-[46ch] text-sm md:text-base leading-relaxed opacity-95">
                    {i.body}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}

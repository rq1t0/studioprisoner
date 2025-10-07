import Image from 'next/image';
import { Section } from '@/components/section';

export const metadata = { title: 'SERVICES' };

const services = [
  {
    id: 'full-production',
    title: 'Full Production',
    desc: 'プリプロから録音・編集・ミックス・マスタリングまで、作品の軸を共有しながら伴走します。',
    img: '/images/service-1.svg'
  },
  {
    id: 'recording',
    title: 'Recording',
    desc: '楽器や声の質感を丁寧に捉え、後工程で活きる素材を収録します。',
    img: '/images/service-2.svg'
  },
  { id: 'mixing', title: 'Mixing', desc: 'レンジと奥行きを整理し、意図が届くバランスへ整えます。', img: '/images/service-3.svg' },
  { id: 'mastering', title: 'Mastering', desc: '各種環境での再現性を確保し、作品としての統一感を仕上げます.', img: '/images/service-4.svg' }
];

export default function ServicePage() {
  return (
    <Section>
      <div className="space-y-10">
        {services.map((s) => (
          s.id === 'full-production' ? (
            <div key={s.id} id={s.id} className="flex flex-col items-center text-center">
              <h2 className="heading-condensed mb-2 text-3xl">FULL PRODUCTION</h2>
              <div className="text-foreground/90 max-w-[70ch] leading-relaxed">
                <div>STUDIO PRISONERではレコーディングからマスタリングまで</div>
                <div>一貫して行うフルプロダクションを提供しています。</div>
                <div>最初から最後まで常にひとつのゴールを共有して制作を進めることで</div>
                <div>あらゆる落とし穴を避け、最善の結果へ導くことができると考えています。</div>
              </div>
            </div>
          ) : s.id === 'recording' ? (
            <div key={s.id} id={s.id} className="grid items-center gap-6 md:grid-cols-2">
              <div className="relative aspect-[3/2] overflow-hidden rounded-lg border border-border">
                <Image src={s.img} alt={`Recording のイメージ`} fill className="object-cover" />
              </div>
              <div>
                <h2 className="heading-condensed text-2xl">STEP 1. RECORDING</h2>
                <div className="mt-1 text-foreground/85">作品の骨格を作る</div>
                <p className="mt-3 text-foreground/80 leading-relaxed max-w-[70ch]">
                  妥協の無いサウンドは全てはここから始まります。音は一連の作業の積み重ねで出来上がります。一貫したイメージを持って最後まで辿り着くことが大事です。サウンドの方向性を、楽曲に対して達成したいビジョン、個々のこだわりから一緒に考えて決めていきます。方向性が決まったら、作品にとって理想的なテイクが録れるようアーティストの実力を最大限引き出していきます。録り終えたテイクは編集を行い、ミキシングに入る下準備をします。この時点で既に作品となってもおかしくないクオリティを手にすることができます。ですが、STUDIO PRISONERで作られる作品はこれだけで終わりではありません。ミキシング・マスタリングの工程で作品を更なる次元に連れていくことが可能です。
                </p>
              </div>
            </div>
          ) : s.id === 'mixing' ? (
            <div key={s.id} id={s.id} className="grid items-center gap-6 md:grid-cols-2">
              <div className="relative aspect-[3/2] overflow-hidden rounded-lg border border-border">
                <Image src={s.img} alt={`Mixing のイメージ`} fill className="object-cover" />
              </div>
              <div>
                <h2 className="heading-condensed text-2xl">STEP 2. MIXING</h2>
                <div className="mt-1 text-foreground/85">極限までビルドアップさせる</div>
                <p className="mt-3 text-foreground/80 leading-relaxed max-w-[70ch]">
                  レコーディングが終わったら、次はミキシングで作品に命を吹き込みます。STUDIO PRISONERではアウトボードも駆使したアナログとデジタルのハイブリッドなミキシングを提供しています。作品が意図しているものをクリアにし、輝かせ、爆発力のある力強い音像、バランス、様々な演出、ストーリーを作り出すことができます。フィードバックを頂きながら協力し合って希望の作品にしていきます。最終的には立会いにて確認して頂き、こだわりのサウンドに仕上げることができます。※ミキシング・マスタリングのご依頼も承ります。詳しくは<a href="/faq" className="underline underline-offset-2">FAQ</a>。
                </p>
              </div>
            </div>
          ) : s.id === 'mastering' ? (
            <div key={s.id} id={s.id} className="grid items-center gap-6 md:grid-cols-2">
              <div className="relative aspect-[3/2] overflow-hidden rounded-lg border border-border">
                <Image src={s.img} alt={`Mastering のイメージ`} fill className="object-cover" />
              </div>
              <div>
                <h2 className="heading-condensed text-2xl">STEP 3. MASTERING</h2>
                <div className="mt-1 text-foreground/85">STUDIO PRISONER SOUNDの完成</div>
                <p className="mt-3 text-foreground/80 leading-relaxed max-w-[70ch]">
                  作品を良く聴かすことができる最後のステージがマスタリングです。STUDIO PRISONERではマスタリンググレードのアウトボード、マスター制作に特化した高度なオーディオ再生環境をベースに、アナログとデジタルの強みを活かしたマスタリングを提供しています。フルレンジの最大音圧からダイナミクス豊かなサウンドを作り出すことができます。iPhoneのスピーカーで聴いても、ラップトップで聴いても、何処で聴いても作品が最大限良く聴こえるように仕上げます。DDPファイルをはじめ、WAVマスター、必要な形態でマスターを納品します。
                </p>
              </div>
            </div>
          ) : (
            <div key={s.id} id={s.id} className="grid items-center gap-6 md:grid-cols-2">
              <div className="relative aspect-[3/2] overflow-hidden rounded-lg border border-border">
                <Image src={s.img} alt={`${s.title} のイメージ`} fill className="object-cover" />
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

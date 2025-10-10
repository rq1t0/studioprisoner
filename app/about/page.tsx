import { Section } from '@/components/section';
import { AboutIntro, Values, Process, Gear, AboutStatement, AboutSplitText } from '@/components/about-sections';
import { Reveal } from '@/components/reveal';

export const metadata = { title: 'ABOUT' };

export default function AboutPage() {
  return (
    <Section>
      <AboutStatement
        img={`${process.env.NODE_ENV === 'production' ? 'https://rq1t0.github.io/studioprisoner' : ''}${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/about-hero.jpg`}
        alt="スタジオでのHiroの写真"
        lines={[
          '正直に言いましょう。',
          '僕と音源制作するのは',
          '大変です。'
        ]}
        signature="Hiro / STUDIO PRISONER"
      />
      <AboutSplitText
        leftBody={[
          'リスナーに衝撃を与えるようなカッコいいサウンドの作品を作りたい。海をも越えて世界で通用するようなパワフルな作品を日本から発信したい。STUDIO PRISONERではこれらを一貫して揺らぐことのない軸としてやってきました。音源はアーティストにとって矢の先っぽみたいなもので、そこにありったけの情熱や思いを込める必要があります。不思議なもので、そこに込めたもの以上の未来はやってこないようです。だから音源を作るということは未来を作りにいくんだという気概で取り組むのです。',
          'この仕事で心の底から大事にしていることは、アーティストにふさわしい未来を手に入れてもらうことです。そしてその未来を呼び寄せる作品にできる準備がSTUDIO PRISONERにはあります。アーティストのイメージを最大限に考慮したサウンドの設計を心掛けるが故に、時にはアーティストに大変な思いをさせる場面もあるでしょう。'
        ]}
        rightBody={[
          'しかし、ここで共に乗り越える困難な道のりにはかけがえのない価値があります。作品のクオリティを一流基準に持ち上げるだけでなく、ミュージシャンとしての糧となり、あなたをプロとしてふさわしい姿に変身させてくれるはずです。これこそが本当の成長と言えるのではないでしょうか。',
          '作品で努力したことは決してあなたを裏切ることはないのです。特に、1人で作業をやってきたアーティストや、バンドのメンバーの中だけで制作を完結してきたアーティストにとっては、全く別の景色を見せることができると確信しています。これまで沢山のトッププレイヤーと共に培ってきたSTUDIO PRISONERの音源制作の真髄を体感して下さい。あなたが誰であってもかまいません。本気で音楽をやりたい、活動を強力に引き上げたい、手に入れたい未来がある、そう思っているならSTUDIO PRISONERこそがあなたの居場所です。'
        ]}
      />

      <div className="mt-6 flex justify-center">
        <div className="w-full max-w-[900px] px-4 md:px-6">
          <div className="text-center">
            <h2 className="heading-condensed mt-10 md:mt-16 text-3xl md:text-5xl">PROFILE</h2>
          </div>
          <div className="mt-6 space-y-4 text-foreground text-base md:text-lg leading-relaxed">
            <p>2005年、ギタリストとしてMETAL SAFARIを結成。結成間もなく行ったワンマン公演を皮切りに全国各地でのライブ、海外の音楽フェス参戦やアジア、ヨーロッパツアーと精力的に活動。当初からアルバムのセルフプロデュース、リリースを行うなど、インディペンデントのバンドとしてその本来の意味を活動で体現してきた。STUDIO PRISONERの原型は、METAL SAFARIの2nd albumの制作環境を整えるために作ったプライベートスタジオから始まる。</p>
            <p>長い間、国内バンドのサウンドのクオリティはもっと高められるのではないか、世界にもっと通用させることができるのではないかという思いを持ち続けていた。2010年、それまで自身のバンドで培った手腕を活かしDeath I Amの1st albumを手掛けたことが大きな転機となり、STUDIO PRISONERとしてプロデュース活動を本格的にスタート。それから2010年代を新人、ベテラン問わず様々なアーティストと共に駆け抜け、現場で叩き上げられた数々のフィードバックを取り込み、現在進行形で進化を続けている。これまで音源のプロデュースを手掛けたアーティストはNOCTURNAL BLOODLUST, Serenity In Murder, Infernal Revulsion, CRYSTAL LAKE, HONE YOUR SENSE, Death I Am, TEARS OF TRAGEDY, MergingMoon, and many more. Caparison Guitars, KRANK AMPのエンドーサー。</p>
          </div>
        </div>
      </div>

      {/* STUDIO: 機材情報 */}
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
              <ul className="mt-2 list-disc space-y-1 md:space-y-1.5 pl-5 md:pl-6 text-[15px] md:text-base leading-relaxed text-foreground/90">
                <li>Computer: Mac Pro / 3.46 GHz 6-Core Intel Xeon / 16 GB 1333 MHz DDR3</li>
                <li>DAW: PreSonus Studio One 4 professional</li>
                <li>Audio I/O: APOGEE Symphony64</li>
                <li>Controller: PreSonus FADERPORT8</li>
                <li>Master clock: Antelope Isochrone Trinity</li>
              </ul>
            </Reveal>

            <Reveal className="break-inside-avoid rounded-lg border border-border/60 p-4 mb-4 card-hover" delay={80}>
              <div className="font-semibold text-base md:text-lg">Monitor Speaker</div>
              <ul className="mt-2 list-disc space-y-1 md:space-y-1.5 pl-5 md:pl-6 text-[15px] md:text-base leading-relaxed text-foreground/90">
                <li>ADAM Audio S2V</li>
                <li>ADAM Audio Sub12</li>
                <li>YAMAHA NS10M STUDIO</li>
                <li>GENELEC 8010A</li>
              </ul>
            </Reveal>

            <Reveal className="break-inside-avoid rounded-lg border border-border/60 p-4 mb-4 card-hover" delay={160}>
              <div className="font-semibold text-base md:text-lg">Monitor controller</div>
              <ul className="mt-2 list-disc space-y-1 md:space-y-1.5 pl-5 md:pl-6 text-[15px] md:text-base leading-relaxed text-foreground/90">
                <li>Lynx Hilo</li>
                <li>DRAWMER mc2.1</li>
              </ul>
            </Reveal>

            <Reveal className="break-inside-avoid rounded-lg border border-border/60 p-4 mb-4 card-hover" delay={240}>
              <div className="font-semibold text-base md:text-lg">Outboard</div>
              <ul className="mt-2 list-disc space-y-1 md:space-y-1.5 pl-5 md:pl-6 text-[15px] md:text-base leading-relaxed text-foreground/90">
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
              <ul className="mt-2 list-disc space-y-1 md:space-y-1.5 pl-5 md:pl-6 text-[15px] md:text-base leading-relaxed text-foreground/90">
                <li>Little Labs RED EYES 3D PHANTOM</li>
                <li>Radial REAMP</li>
                <li>Radial J48</li>
              </ul>
            </Reveal>

            <Reveal className="break-inside-avoid rounded-lg border border-border/60 p-4 mb-4 card-hover" delay={400}>
              <div className="font-semibold text-base md:text-lg">Plugins</div>
              <ul className="mt-2 list-disc space-y-1 md:space-y-1.5 pl-5 md:pl-6 text-[15px] md:text-base leading-relaxed text-foreground/90">
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
              <ul className="mt-2 list-disc space-y-1 md:space-y-1.5 pl-5 md:pl-6 text-[15px] md:text-base leading-relaxed text-foreground/90">
                <li>Marshall 1960AX 4×12″ cab</li>
                <li>KRANK with CELESTION V30 4×12″ cab</li>
                <li>KRANK with Eminence 4×12″ cab</li>
                <li>VHT Eminence 4×12″ cab</li>
                <li>Orange PCC 412 4×12″ cab</li>
                <li>Engl 4×12″ Standard Slanted cab</li>
                <li>MESA BOOGIE 4×12″ Recto Standard Straight Cab</li>
                <li>MESA BOOGIE Triple Rectifier Solo Head</li>
                <li>KRANK rev-1</li>
                <li>Peavey 5150 初期型</li>
                <li>EVH 5150 III</li>
                <li>CRATE BV120</li>
                <li>MARSHALL JMP-1</li>
              </ul>
            </Reveal>

            <Reveal className="break-inside-avoid rounded-lg border border-border/60 p-4 mb-4 card-hover" delay={560}>
              <div className="font-semibold text-base md:text-lg">Microphone</div>
              <ul className="mt-2 list-disc space-y-1 md:space-y-1.5 pl-5 md:pl-6 text-[15px] md:text-base leading-relaxed text-foreground/90">
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
              <ul className="mt-2 list-disc space-y-1 md:space-y-1.5 pl-5 md:pl-6 text-[15px] md:text-base leading-relaxed text-foreground/90">
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

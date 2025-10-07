import { Section } from '@/components/section';
import { AboutIntro, Values, Process, Gear, AboutStatement, AboutSplitText } from '@/components/about-sections';

export const metadata = { title: 'ABOUT' };

export default function AboutPage() {
  return (
    <Section>
      <AboutStatement
        img="/images/about_top_v5.jpg"
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
    </Section>
  );
}

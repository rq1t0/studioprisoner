import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/section';

export default function NotFound() {
  return (
    <Section className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="heading-condensed text-6xl mb-4">404</h1>
        <h2 className="text-2xl mb-4">ページが見つかりません</h2>
        <p className="text-foreground/80 mb-6">
          お探しのページは存在しないか、移動された可能性があります。
        </p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/">ホームに戻る</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/works">作品一覧を見る</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}

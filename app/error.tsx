'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/section';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <Section className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="heading-condensed text-4xl mb-4">エラーが発生しました</h1>
        <p className="text-foreground/80 mb-6">
          申し訳ございません。予期しないエラーが発生しました。
        </p>
        <div className="space-x-4">
          <Button onClick={reset} variant="default">
            再試行
          </Button>
          <Button onClick={() => window.location.href = '/'} variant="outline">
            ホームに戻る
          </Button>
        </div>
      </div>
    </Section>
  );
}

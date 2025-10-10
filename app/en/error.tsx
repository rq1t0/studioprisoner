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
        <h1 className="heading-condensed text-4xl mb-4">An Error Occurred</h1>
        <p className="text-foreground/80 mb-6">
          Sorry, an unexpected error has occurred.
        </p>
        <div className="space-x-4">
          <Button onClick={reset} variant="default">
            Try Again
          </Button>
          <Button onClick={() => window.location.href = '/en'} variant="outline">
            Back to Home
          </Button>
        </div>
      </div>
    </Section>
  );
}

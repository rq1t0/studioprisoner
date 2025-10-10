import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/section';

export default function NotFound() {
  return (
    <Section className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="heading-condensed text-6xl mb-4">404</h1>
        <h2 className="text-2xl mb-4">Page Not Found</h2>
        <p className="text-foreground/80 mb-6">
          The page you are looking for does not exist or may have been moved.
        </p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/en">Back to Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/en/works">View Works</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}

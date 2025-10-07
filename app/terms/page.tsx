import { Section } from '@/components/section';

export const metadata = { title: 'Terms of Service' };

export default function TermsPage() {
  return (
    <Section>
      <h1 className="heading-condensed mb-6 text-3xl">Terms of Service</h1>
      <p className="text-foreground/80">This is a placeholder terms document for the demo. Replace with enforceable terms for production.</p>
    </Section>
  );
}


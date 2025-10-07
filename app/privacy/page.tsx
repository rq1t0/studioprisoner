import { Section } from '@/components/section';

export const metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <Section>
      <h1 className="heading-condensed mb-6 text-3xl">Privacy Policy</h1>
      <p className="text-foreground/80">This is a placeholder policy. Replace with your actual privacy terms. No personal data is stored on this demo.</p>
    </Section>
  );
}


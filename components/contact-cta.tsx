'use client';

import { CONTACT_EMAIL } from '@/lib/utils';
import { CopyEmailButton } from '@/components/copy-email-button';

type Props = { lang?: 'ja' | 'en' };

export function ContactCta({ lang = 'ja' }: Props) {
  const email = CONTACT_EMAIL;
  const subject = encodeURIComponent(lang === 'en' ? 'Project inquiry' : 'お問い合わせ / ご依頼について');
  const text = lang === 'en'
    ? 'Have a project in mind? Get in touch via email.'
    : 'ご依頼・お問い合わせはメールにてお気軽にご連絡ください。';
  const btn = lang === 'en' ? 'Email Us' : 'メール相談';

  return (
    <div className="container px-6 mt-12 md:mt-16" data-contact-cta>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-lg border border-border/60 bg-muted/30 p-4">
        <p className="text-sm text-foreground/85">{text}</p>
        <div className="flex items-center gap-3">
          <a href={`mailto:${email}?subject=${subject}`} className="focus-ring text-sm underline underline-offset-4">{email}</a>
          <CopyEmailButton email={email} lang={lang} size="sm" />
        </div>
      </div>
    </div>
  );
}

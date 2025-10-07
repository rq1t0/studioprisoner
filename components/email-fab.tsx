import { CONTACT_EMAIL } from '@/lib/utils';

type Props = { lang?: 'ja' | 'en' };

export function EmailFab({ lang = 'ja' }: Props) {
  const subject = encodeURIComponent(lang === 'en' ? 'Project inquiry' : 'お問い合わせ / ご依頼について');
  const label = lang === 'en' ? 'Email Us' : 'メール相談';
  const email = CONTACT_EMAIL;

  return (
    <a
      href={`mailto:${email}?subject=${subject}`}
      aria-label={label}
      className="focus-ring group fixed bottom-5 left-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#5AA8FF] px-4 py-2 font-medium text-black shadow-lg transition hover:brightness-110"
    >
      <span className="email-fab-anim inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/10">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm0 2v.2l8 5.2 8-5.2V8l-8 5-8-5z" />
        </svg>
      </span>
      <span className="hidden sm:inline">{label}</span>
      <span className="sr-only">{email}</span>
    </a>
  );
}


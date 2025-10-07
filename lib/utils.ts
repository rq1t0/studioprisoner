export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function formatRole(role: string) {
  return role;
}

export function formatDate(iso?: string) {
  if (!iso) return '';
  try {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    return d.toLocaleDateString('ja-JP', { year: 'numeric', month: 'short', day: 'numeric' });
  } catch {
    return iso;
  }
}

export const siteConfig = {
  name: 'STUDIO PRISONER',
  url: 'https://studioprisoner.jp',
  ogImage: '/og.svg'
};

// Contact email (override via NEXT_PUBLIC_CONTACT_EMAIL)
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'book-your-recording@studioprisoner.jp';

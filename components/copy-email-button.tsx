"use client";
import { useState } from 'react';

type Props = {
  email: string;
  lang?: 'ja' | 'en';
  size?: 'sm' | 'md';
  className?: string;
};

export function CopyEmailButton({ email, lang = 'ja', size = 'sm', className }: Props) {
  const [copied, setCopied] = useState(false);
  const label = copied ? (lang === 'en' ? 'Copied!' : 'コピーしました') : (lang === 'en' ? 'Copy email' : 'メールをコピー');

  async function onCopy() {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        const ta = document.createElement('textarea');
        ta.value = email;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // no-op
    }
  }

  const sizes = size === 'sm' ? 'text-xs' : 'text-sm';

  return (
    <button
      type="button"
      onClick={onCopy}
      className={`group focus-ring inline-flex items-center justify-center gap-1.5 rounded px-1.5 py-0.5 text-foreground/90 hover:text-foreground underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors ${sizes} font-medium cursor-pointer ${className ?? ''}`}
      aria-live="polite"
    >
      <span className="inline-flex h-4 w-4 items-center justify-center text-foreground/70 group-hover:text-foreground">
        {copied ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M9 16.2l-3.5-3.5L4 14.2 9 19l11-11-1.5-1.5z" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M16 1H4a2 2 0 0 0-2 2v12h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z" />
          </svg>
        )}
      </span>
      <span>{label}</span>
    </button>
  );
}

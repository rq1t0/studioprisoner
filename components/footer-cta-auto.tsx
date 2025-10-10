"use client";

import { usePathname } from "next/navigation";
import { ContactCta } from "@/components/contact-cta";
import { Footer } from "@/components/footer";

// Single source for CTA + Footer that switches by pathname prefix
export function FooterCtaAuto() {
  const pathname = usePathname();
  const isEN = pathname?.startsWith("/en");
  const lang = isEN ? "en" : "ja";
  return (
    <>
      <ContactCta lang={lang} />
      <Footer lang={lang} />
    </>
  );
}


import Link from 'next/link';
import Image from 'next/image';

type LogoProps = {
  variant?: 'hero' | 'header';
  asLink?: boolean;
  className?: string;
  src?: string;
};

export function Logo({ variant = 'header', asLink = false, className = '', src = '/images/logo.png' }: LogoProps) {
  const width = variant === 'hero' ? 360 : 200;
  const height = variant === 'hero' ? 72 : 44;
  const img = (
    <Image
      src={src}
      alt="STUDIO PRISONER logo"
      width={width}
      height={height}
      className={className}
      priority={variant === 'hero'}
    />
  );
  if (asLink) return <Link href="/" aria-label="Go to home">{img}</Link>;
  return img;
}

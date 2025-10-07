import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, children, variant = 'default', size = 'md', ...props }, ref) => {
    const base = 'inline-flex items-center justify-center rounded-md focus-ring disabled:opacity-50 disabled:pointer-events-none transition-colors';
    const variants = {
      default: 'bg-accent text-black hover:brightness-110',
      outline: 'border border-border text-foreground hover:bg-muted',
      ghost: 'text-foreground hover:bg-muted'
    } as const;
    const sizes = { sm: 'h-9 px-3 text-sm', md: 'h-10 px-4', lg: 'h-11 px-5 text-base' } as const;
    return (
      <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';


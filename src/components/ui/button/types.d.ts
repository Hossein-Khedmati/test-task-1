import type { LinkProps } from 'next/link';
import type { ColorVariant } from '@/components/ui/types';
import type { buttonVariants } from './button';
import type { VariantProps } from 'class-variance-authority';

export type ButtonVariant = 'outline' | 'fill' | 'ghost' | 'link';
type ColorVariantCustom = Exclude<ColorVariant, 'info' | 'neutral' | 'warning'>;
export type ButtonColor = ColorVariantCustom | 'white' | 'gray';

export type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  isDisabled?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  loadingClasses?: string;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  color?: ButtonColor;
  variant?: ButtonVariant;
  rounded?: boolean;
  type?: 'button' | 'submit' | 'reset';
};
export interface ButtonAsButton
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  as?: 'button';
  href?: never;
}

export interface ButtonAsLink
  extends Omit<LinkProps, 'href'>,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
  as: 'link';
  href?: LinkProps['href'];
}

export type ButtonProps = ButtonBaseProps & (ButtonAsButton | ButtonAsLink);

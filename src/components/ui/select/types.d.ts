import type { ColorVariant, SizeVariant, RadiusVariant } from '@/components/ui/types';
import type { selectVariants } from './select';
import type { VariantProps } from 'class-variance-authority';

export type SelectVariant = 'outline' | 'fill' | 'ghost';
export type SelectColor = ColorVariant;

export type SelectProps = VariantProps<typeof selectVariants> &
  Omit<React.HTMLAttributes<HTMLDivElement | HTMLButtonElement>, 'color' | 'dir'> & {
    className?: string;
    asChild?: boolean;
    size?: SizeVariant;
    color?: SelectColor;
    variant?: SelectVariant;
    fullWidth?: boolean;
    rounded?: RadiusVariant | boolean;
    disabled?: boolean;
    value?: string;
    placeholder?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    onOpenChange?: (open: boolean) => void;
    open?: boolean;
    dir?: 'ltr' | 'rtl' | 'auto';
  };

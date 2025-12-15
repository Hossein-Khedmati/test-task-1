import { VariantProps } from 'class-variance-authority';
import { ColorVariant } from '@/components/ui/types';
import { inputVariants } from './input';
import { LabelProps } from '@/components/ui/label/types';

export type InputVariant = 'outline' | 'fill' | 'ghost';
export type InputState = 'error' | 'warning' | 'success';
export type InputColor = ColorVariant;
export type InputType =
  | 'search'
  | 'email'
  | 'password'
  | 'text'
  | 'number'
  | 'file'
  | 'reset'
  | 'radio'
  | 'checkbox';

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'color' | 'type'> &
  VariantProps<typeof inputVariants> & {
    variant?: InputVariants;
    color?: InputColor;
    state?: InputState;
    type?: InputType;
    placeholder?: string;
    value?: string | number;
    fullWidth?: boolean;
    dir?: 'rtl' | 'ltr' | 'auto';
    onValueChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    disabled?: boolean;
    label?: string;
    inputMessage?: string;
    labelProps?: LabelProps;
    classNames?: {
      root?: string;
      input?: string;
      label?: string;
      inputMessage?: string;
    };
  };

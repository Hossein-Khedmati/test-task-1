'use client';
import * as React from 'react';
import Link from 'next/link';
import { ButtonBaseProps, ButtonProps } from './types';
import { cn } from '@/utils/ui';
import { cva } from 'class-variance-authority';
import { LoaderCircleIcon } from '@icons';

export const buttonVariants = cva('button', {
  variants: {
    variant: {
      outline: 'button-outline',
      fill: 'button-fill',
      ghost: 'button-ghost',
      link: 'button-link',
    },
    color: {
      primary: 'button-primary',
      secondary: 'button-secondary',
      success: 'button-success',
      error: 'button-error',
      gray: 'button-gray',
      white: 'button-white',
    },
    rounded: {
      true: 'button-fullRounded',
    },
    fullWidth: {
      true: 'button-fullWidth',
    },
    isDisabled: {
      true: 'button-disabled',
    },
  },
  defaultVariants: {
    variant: 'fill',
    color: 'primary',
  },
});

export const Button: React.FC<ButtonProps> = ({
  as = 'button',
  className = 'button-text-md',
  variant,
  color,
  rounded = false,
  isDisabled = false,
  isLoading = false,
  loadingText,
  startIcon,
  endIcon,
  children,
  fullWidth = false,
  loadingClasses,
  href,
  type = 'button',
  ...props
}) => {
  const buttonClasses = cn(
    buttonVariants({
      variant,
      color,
      rounded,
      isDisabled,
      fullWidth,
    }),
    className,
  );

  const buttonContent = (
    <>
      {isLoading ? (
        <span className={cn(children && 'ml-2')}>
          <LoaderCircleIcon className={cn('size-4 animate-spin', loadingClasses)} />
        </span>
      ) : startIcon ? (
        <span className={cn(children && 'ml-2')}>{startIcon}</span>
      ) : null}
      {isLoading && loadingText ? loadingText : children}
      {endIcon ? <span className={cn(children && 'mr-2')}>{endIcon}</span> : null}
    </>
  );
  if (as === 'link') {
    return (
      <Link href={href || '#'} className={buttonClasses} {...(props as ButtonBaseProps)}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={isLoading || isDisabled}
      {...(props as ButtonBaseProps)}
    >
      {buttonContent}
    </button>
  );
};

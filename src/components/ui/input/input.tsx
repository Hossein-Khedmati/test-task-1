'use client';

import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/ui';
import { InputProps } from './types';
import { Label } from '@/components/ui/label';

export const inputVariants = cva('input', {
  variants: {
    variant: {
      outline: 'input-outline',
      fill: 'input-fill',
      ghost: 'input-ghost',
    },
    color: {
      primary: 'input-primary',
      secondary: 'input-secondary',
      success: 'input-success',
      error: 'input-error',
      warning: 'input-warning',
      info: 'input-info',
      neutral: 'input-neutral',
    },
    fullWidth: {
      true: 'w-full',
    },
    disabled: {
      true: 'input-disabled',
    },
    defaultVariants: {
      color: 'primary',
      variant: 'outline',
    },
  },
});

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant,
      color,
      state,
      dir = 'rtl',
      type,
      onValueChange,
      value,
      placeholder = 'سرچ کنید...',
      fullWidth,
      startIcon,
      endIcon,
      disabled,
      label,
      labelProps,
      classNames,
      inputMessage,
      ...props
    },
    ref,
  ) => {
    const stateColor = state || color;
    const inputClasses = cn(
      inputVariants({
        color: stateColor || 'primary',
        variant,
        fullWidth,
        disabled,
      }),
      classNames?.root,
      { ...props },
    );

    const hasLabel = !!label;
    const displayMessege = !!inputMessage && !!state;

    const inputId = React.useId();

    return (
      <div className={cn('flex flex-col items-start', fullWidth ? 'w-full' : 'w-fit')}>
        {hasLabel && (
          <Label
            className={cn(classNames?.label, 'inputLabel')}
            htmlFor={inputId}
            color={stateColor}
            {...labelProps}
            dir={dir}
          >
            {label}
          </Label>
        )}
        <div className={inputClasses} dir={dir}>
          {startIcon && startIcon}
          <input
            id={inputId}
            dir={dir}
            type={type}
            ref={ref}
            data-slot="input"
            value={value}
            placeholder={placeholder}
            onChange={onValueChange}
            disabled={disabled}
            {...props}
            className={cn('w-full flex-1 focus:outline-none', classNames?.input)}
          />
          {endIcon && endIcon}
        </div>
        {displayMessege && (
          <Label
            className={cn(classNames?.inputMessage, 'inputMessage')}
            htmlFor={inputId}
            color={stateColor}
            {...labelProps}
            dir={dir}
          >
            {inputMessage}
          </Label>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

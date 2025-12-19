'use client';

import * as React from 'react';
import * as RadixSelect from '@radix-ui/react-select';
import { cn } from '@/utils/ui';
import { cva } from 'class-variance-authority';
import type { SelectProps } from './types';
import { ArrowDownIcon, ArrowUpIcon } from '@icons';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

export const selectVariants = cva('select', {
  variants: {
    variant: {
      outline: 'select-outline',
      fill: 'select-fill',
      ghost: 'select-ghost',
    },
    size: {
      xs: 'select-xs',
      sm: 'select-sm',
      md: 'select-md',
      lg: 'select-lg',
      xl: 'select-xl',
      '2xl': '',
      '3xl': '',
      '4xl': '',
    },
    color: {
      primary: 'select-primary',
      secondary: 'select-secondary',
      success: 'select-success',
      error: 'select-error',
      warning: 'select-warning',
      info: 'select-info',
      neutral: 'select-neutral',
    },
    fullWidth: {
      true: 'select-fullWidth',
    },
    rounded: {
      true: 'select-rounded',
      xs: 'select-rounded-xs',
      sm: 'select-rounded-sm',
      md: 'select-rounded-md',
      lg: 'select-rounded-lg',
      xl: 'select-rounded-xl',
      '2xl': 'select-rounded-2xl',
      '3xl': 'select-rounded-3xl',
      '4xl': 'select-rounded-4xl',
    },
  },
  defaultVariants: {
    variant: 'outline',
    size: 'md',
    color: 'neutral',
    rounded: 'md',
  },
});

export const Select: React.FC<SelectProps> = ({
  className,
  variant = 'outline',
  color = 'neutral',
  size = 'md',
  fullWidth = false,
  rounded = 'md',
  dir = 'auto',
  disabled,
  asChild = false,
  children,
  onValueChange,
  onOpenChange,
  open,
  value,
  placeholder = 'select an item',
  defaultValue,
  ...props
}) => {
  const Comp = asChild ? Slot : RadixSelect.Trigger;
  return (
    <RadixSelect.Root
      onValueChange={onValueChange}
      onOpenChange={onOpenChange}
      value={value}
      defaultValue={defaultValue}
      open={open}
      disabled={disabled}
    >
      <Comp
        data-slot="select"
        className={cn(selectVariants({ variant, color, size, fullWidth, rounded }), className)}
        disabled={disabled}
        dir={dir}
      >
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon>
          <ArrowDownIcon />
        </RadixSelect.Icon>
      </Comp>
      <RadixSelect.Content
        className={clsx('select-content', 'bg-neutral-0 dark:bg-neutral-800')}
        dir={dir}
        position="popper"
        sideOffset={4}
      >
        <RadixSelect.ScrollUpButton className="select-scroll-btn">
          <ArrowUpIcon />
        </RadixSelect.ScrollUpButton>
        <RadixSelect.Viewport className="select-viewport">
          {React.Children.map(children, (child) =>
            React.isValidElement(child)
              ? React.cloneElement(child as React.ReactElement<{ className?: string }>, {
                  className: cn(
                    (child as React.ReactElement<{ className?: string }>).props.className,
                    `select-item-${color}`,
                  ),
                })
              : child,
          )}
        </RadixSelect.Viewport>
        <RadixSelect.ScrollDownButton className="select-scroll-btn">
          <ArrowDownIcon />
        </RadixSelect.ScrollDownButton>
      </RadixSelect.Content>
    </RadixSelect.Root>
  );
};

export const SelectItem = React.forwardRef<
  HTMLDivElement,
  {
    value: string;
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
  }
>(({ value, children, disabled, className, ...props }, ref) => {
  return (
    <RadixSelect.Item
      {...props}
      ref={ref}
      value={value}
      className={cn('select-item', className)}
      disabled={disabled}
    >
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
    </RadixSelect.Item>
  );
});

SelectItem.displayName = 'SelectItem';

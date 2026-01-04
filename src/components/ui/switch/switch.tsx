'use client';

import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';

import { cn } from '@/utils/ui';
import { SwitchProps } from './types';

function Switch({
  classNames,
  children,
  dir = 'rtl',
  ...props
}: SwitchProps & { dir?: 'ltr' | 'rtl' }) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      dir={dir}
      className={cn('peer switch cursor-pointer', classNames?.root)}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn('thumb', dir === 'rtl' ? 'rtl' : 'ltr', classNames?.thumb)}
      >
        {children}
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
}
export { Switch };

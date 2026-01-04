import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';

export type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root> & {
  classNames?: {
    root?: string;
    thumb?: string;
  };
  children?: React.ReactNode;
};

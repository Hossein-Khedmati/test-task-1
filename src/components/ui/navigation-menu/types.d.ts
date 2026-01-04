import * as React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';

export interface NavigationMenuProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.Root> {
  viewport?: boolean;
  dir?: 'ltr' | 'rtl';
}

export interface NavigationMenuListProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.List> {
  dir?: 'ltr' | 'rtl';
}

export interface NavigationMenuItemProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.Item> {
  dir?: 'ltr' | 'rtl';
}

export interface NavigationMenuTriggerProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.Trigger> {
  icon?: boolean;
  dir?: 'ltr' | 'rtl';
}

interface NavigationMenuContentProps
  extends React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content> {
  reverse?: boolean;
}

export interface NavigationMenuViewportProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.Viewport> {
  dir?: 'ltr' | 'rtl';
}

export interface NavigationMenuLinkProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.Link> {
  dir?: 'ltr' | 'rtl';
}

export interface NavigationMenuIndicatorProps
  extends React.ComponentProps<typeof NavigationMenuPrimitive.Indicator> {
  dir?: 'ltr' | 'rtl';
}

import * as React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cn } from '@/utils/ui';
import { ArrowDownIcon } from '@icons';

import {
  NavigationMenuContentProps,
  NavigationMenuIndicatorProps,
  NavigationMenuItemProps,
  NavigationMenuLinkProps,
  NavigationMenuListProps,
  NavigationMenuProps,
  NavigationMenuTriggerProps,
  NavigationMenuViewportProps,
} from './types';

function NavigationMenu({
  className,
  children,
  viewport = true,
  dir = 'rtl',
  ...props
}: NavigationMenuProps) {
  return (
    <NavigationMenuPrimitive.Root
      dir={dir}
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn('group/navigation-menu navigation-menu', className)}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  );
}

function NavigationMenuList({ className, ...props }: NavigationMenuListProps) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn('group navigation-menu-list', className)}
      {...props}
    />
  );
}

function NavigationMenuItem({ className, ...props }: NavigationMenuItemProps) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn('relative', className)}
      {...props}
    />
  );
}

function NavigationMenuTrigger({
  className,
  children,
  icon = true,
  ...props
}: NavigationMenuTriggerProps) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn('navigation-menu-trigger', className)}
      {...props}
    >
      {children}
      {icon ? <ArrowDownIcon className="navigation-menu-trigger-icon" aria-hidden="true" /> : null}
    </NavigationMenuPrimitive.Trigger>
  );
}

function NavigationMenuContent({
  className,
  reverse = false,
  ...props
}: NavigationMenuContentProps) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        'data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 md:absolute ltr:left-auto rtl:right-auto',

        'group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 !z-[999] group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-4 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none',
        reverse
          ? 'ltr:group-data-[viewport=false]/navigation-menu:right-0 ltr:group-data-[viewport=false]/navigation-menu:translate-x-0 rtl:group-data-[viewport=false]/navigation-menu:left-0 rtl:group-data-[viewport=false]/navigation-menu:translate-x-0'
          : 'ltr:group-data-[viewport=false]/navigation-menu:left-0 ltr:group-data-[viewport=false]/navigation-menu:translate-x-0 rtl:group-data-[viewport=false]/navigation-menu:right-0 rtl:group-data-[viewport=false]/navigation-menu:translate-x-0',

        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuViewport({ className, ...props }: NavigationMenuViewportProps) {
  return (
    <div className={cn('navigation-menu-viewport')}>
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          'origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] md:w-[var(--radix-navigation-menu-viewport-width)]',
          className,
        )}
        {...props}
      />
    </div>
  );
}

function NavigationMenuLink({ className, ...props }: NavigationMenuLinkProps) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      data-active
      className={cn('navigation-menu-link', className)}
      {...props}
    />
  );
}

function NavigationMenuIndicator({ className, ...props }: NavigationMenuIndicatorProps) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn('navigation-menu-indicator', className)}
      {...props}
    >
      <div className="navigation-menu-indicator-content" />
    </NavigationMenuPrimitive.Indicator>
  );
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};

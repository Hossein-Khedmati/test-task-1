'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuItem } from './types';

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/components/ui';
import { cn } from '@/utils/ui';

export const NavMainMenuLink: React.FC<{ item: MenuItem }> = ({ item }) => {
  const pathname = usePathname();

  const isActive = pathname === item.href;

  return (
    <Link
      href={item.href || '#'}
      className={`flex items-center gap-2 transition-colors duration-200 ${
        isActive ? 'text-primary font-medium' : 'hover:text-primary'
      }`}
    >
      {item.icon && <item.icon className="size-5" />}
      <span>{item.label}</span>
    </Link>
  );
};

export const SubMenu: React.FC<{ items: MenuItem[] }> = ({ items }) => {
  const pathname = usePathname();

  const isSubMenuActive = (menu: MenuItem, pathname: string) => {
    if (!menu.columns) return false;

    return menu.columns.some((column) => column.items.some((item) => item.href === pathname));
  };

  return (
    <NavigationMenu className="justify-start" viewport={false}>
      <NavigationMenuList className="gap-10">
        {items.map((menu) => {
          const activeSubMenu = isSubMenuActive(menu, pathname);
          const isActive = pathname === menu.href;
          return (
            <NavigationMenuItem key={menu.label}>
              {menu.columns ? (
                <>
                  <NavigationMenuTrigger
                    icon={false}
                    className={cn(
                      'flex cursor-pointer items-center justify-center gap-2 transition-colors',
                      activeSubMenu && 'text-primary',
                    )}
                  >
                    {menu.icon && <menu.icon className="h-4 w-4" />}
                    {menu.label}
                  </NavigationMenuTrigger>

                  <NavigationMenuContent className="!rounded-3xl border-none">
                    <div
                      className="bg-neutral-0 grid gap-10 rounded-3xl border-1 border-neutral-200 p-10 dark:border-neutral-600 dark:bg-neutral-700"
                      style={{
                        gridTemplateColumns: `repeat(${menu.columns.length}, max-content)`,
                      }}
                    >
                      {menu.columns.map((column) => (
                        <div key={column.label} className="space-y-5">
                          <div className="mb-4 flex items-center gap-2 border-b border-neutral-200 pb-4 text-lg font-semibold dark:border-neutral-500">
                            {column.icon && <column.icon className="text-primary size-6" />}
                            {column.label}
                          </div>

                          {column.items.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                              <NavigationMenuLink
                                key={item.href}
                                href={item.href}
                                className={cn(
                                  'text-md block whitespace-nowrap transition-colors',
                                  isActive
                                    ? 'text-primary font-medium'
                                    : 'text-muted-foreground hover:text-foreground',
                                )}
                              >
                                {item.label}
                              </NavigationMenuLink>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink
                  href={menu.href}
                  className={cn(
                    'flex-row items-center gap-2 text-sm font-medium transition-colors',
                    isActive ? 'text-primary' : 'text-muted-foreground',
                  )}
                >
                  {menu.icon && <menu.icon className="h-4 w-4" />}
                  {menu.label}
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

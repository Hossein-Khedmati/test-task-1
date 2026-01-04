'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { ArrowLeft2Icon, ArrowLeftIcon } from '@icons';
import { UserMenuItems, UserMenuItem } from './constants';
import { Button } from '@/components/ui';

interface UserNavigationMenuProps {
  mobileProfile?: boolean;
  name: string;
  username: string;
  avatar: string;
}

export function UserMenu({ name, username, avatar, mobileProfile }: UserNavigationMenuProps) {
  return !mobileProfile ? (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex cursor-pointer items-center font-semibold">
            <Image src={avatar} alt="avatar" width={2000} height={2000} className="size-13" />
            {name}
          </NavigationMenuTrigger>

          <NavigationMenuContent
            reverse={true}
            className="bg-neutral-0 z-50 w-67 !rounded-xl border-none p-5 dark:bg-neutral-700"
          >
            {/* User Header */}
            <div className="flex w-full items-center justify-start gap-2 border-b border-neutral-300 pb-4">
              <Image src={avatar} alt="logo" width={2000} height={2000} className="size-12" />
              <div>
                <p className="text-md dark:text-neutral-200">{name}</p>
                <p className="text-sm text-neutral-400">{username}</p>
              </div>
            </div>

            {/* Menu Links Mapping */}
            <div className="flex w-full flex-col items-start justify-center gap-3 py-3.5 dark:text-neutral-200">
              {UserMenuItems.map((link: UserMenuItem) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex min-h-11.5 w-full items-center gap-3 rounded-md px-2 transition-colors duration-200 hover:bg-neutral-50 active:bg-neutral-100 dark:hover:bg-neutral-600 dark:active:bg-neutral-700"
                  >
                    <Icon className="size-5" />
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Logout Section */}
            <div className="flex w-full flex-col items-start justify-center gap-3 border-t border-neutral-300 pt-3.5">
              <Link
                href="/logout"
                className="text-error-500 flex min-h-11.5 w-full items-center gap-3 rounded-md px-2 transition-colors duration-200 hover:bg-neutral-50 active:bg-neutral-100 dark:hover:bg-neutral-500 dark:active:bg-neutral-700"
              >
                <ArrowLeftIcon className="size-5 rotate-180" color="error-500" />
                خروج از حساب
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ) : (
    <Button
      as="link"
      href="/profile"
      variant="ghost"
      color="gray"
      fullWidth
      className="rounded-md bg-transparent p-0"
    >
      <div className="flex w-full items-center justify-between gap-2">
        <div className="flex w-full items-center justify-start gap-2">
          <Image src={avatar} alt="logo" width={2000} height={2000} className="size-12" />
          <div>
            <p className="text-md font-semibold dark:text-neutral-200">{name}</p>
            <p className="text-sm text-neutral-400">{username}</p>
          </div>
        </div>
        <ArrowLeft2Icon className="size-5" />
      </div>
    </Button>
  );
}

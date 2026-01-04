'use client';
import {
  BasketIcon,
  CloseIcon,
  MenuIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
} from '@/components/shared/icons';
import { UserMenu } from '@/components/shared/user-menu/user-menu';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Input,
} from '@/components/ui';
import { useThemeToggle } from '@/hooks/use-theme-toggle';
import { NavMainMenu, subMenuItem, mobileMenuItem } from './constants';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { NavMainMenuLink, SubMenu } from '@/components/shared/navigation-menus/navigation-menus';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/utils/ui';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const { toggleTheme, isDark, mounted } = useThemeToggle();
  const [loginUser, setLoginUser] = React.useState<boolean>(false);
  useEffect(() => {
    setLoginUser(true);
  }, []);

  const pathname = usePathname();

  if (!mounted) return <div className="size-14" />;
  return (
    <header className="sticky top-0 z-50">
      {/* Mobile View */}
      <div className="z-50 w-full sm:hidden">
        <div className="dark:bg-background z-10 flex w-full justify-between bg-neutral-50 p-6 sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="fill"
                color="white"
                className="size-12 rounded-lg border-1 border-neutral-200 p-0 dark:border-neutral-600 dark:bg-neutral-800"
              >
                <MenuIcon className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-1/2 border-none py-8 dark:bg-neutral-800">
              <SheetHeader className="flex-row justify-between px-6">
                <SheetTitle className="hidden text-lg font-medium">منو</SheetTitle>
                <SheetClose asChild>
                  <CloseIcon className="size-6 cursor-pointer" />
                </SheetClose>
                {mounted && (
                  <Switch
                    dir="ltr"
                    checked={isDark}
                    onCheckedChange={toggleTheme}
                    classNames={{
                      root: 'data-[state=checked]:bg-neutral-700',
                    }}
                  >
                    {isDark ? (
                      <MoonIcon className="size-4 text-neutral-600" />
                    ) : (
                      <SunIcon className="size-4 text-neutral-600" />
                    )}
                  </Switch>
                )}
              </SheetHeader>
              <div>
                <Accordion type="single" collapsible dir="rtl">
                  {mobileMenuItem.map((item) => {
                    const isActive = pathname === item.href;

                    //WITH SUBMENU
                    if (item.submenu?.length) {
                      const isSubActive = item.submenu.some((sub) => sub.href === pathname);

                      return (
                        <AccordionItem
                          key={item.label}
                          value={item.label}
                          className="mb-2.5 border-0"
                        >
                          <AccordionTrigger
                            className={cn(
                              'flex h-10 items-center rounded-none p-0 px-5 text-right text-base font-medium',
                              isSubActive &&
                                'bg-primary-200 border-r-primary-600 text-primary border-r-4',
                            )}
                          >
                            {item.label}
                          </AccordionTrigger>

                          <AccordionContent className="pr-4">
                            <div className="flex flex-col gap-4 pt-4">
                              {item.submenu.map((sub) => {
                                const isSubItemActive = pathname === sub.href;

                                return (
                                  <Link
                                    key={sub.href}
                                    href={sub.href}
                                    className={cn(
                                      'text-sm transition-colors',
                                      isSubItemActive
                                        ? 'text-primary font-medium'
                                        : 'text-muted-foreground hover:text-primary',
                                    )}
                                  >
                                    {sub.label}
                                  </Link>
                                );
                              })}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      );
                    }

                    // 🔹 SIMPLE LINK
                    return (
                      <div
                        key={item.label}
                        className={cn(
                          'mb-2.5 px-5',
                          isActive
                            ? 'bg-primary-200 border-r-primary-600 border-r-4'
                            : 'text-muted-foreground hover:text-primary',
                        )}
                      >
                        <Link
                          href={item.href || '#'}
                          className={cn(
                            'flex h-10 items-center text-right text-base font-medium transition-colors',
                            isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary',
                          )}
                        >
                          {item.label}
                        </Link>
                      </div>
                    );
                  })}
                </Accordion>
              </div>
              <SheetFooter className="px-5 py-0">
                {loginUser ? (
                  <UserMenu
                    mobileProfile
                    name="سورن شاملو"
                    username="soren@"
                    avatar="/images/profile.svg"
                  />
                ) : (
                  <Button
                    as="link"
                    href="/sign-up"
                    variant="fill"
                    color="primary"
                    fullWidth
                    className="rounded-md"
                  >
                    ورود / ثبت نام
                  </Button>
                )}
              </SheetFooter>
            </SheetContent>
          </Sheet>
          <div className="flex flex-col items-center">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={1000}
              height={1000}
              className="h-8.5 w-7.5"
            />
            <h1>ETMIFY</h1>
          </div>
          <Button
            variant="fill"
            color="white"
            className="size-12 rounded-lg border-1 border-neutral-200 p-0 dark:border-neutral-600 dark:bg-neutral-800"
          >
            <BasketIcon className="size-6" />
          </Button>
        </div>
        <div className="dark:bg-background z-10 container flex w-full justify-center bg-neutral-50 pb-5 sm:hidden">
          <Input
            color="neutral"
            variant="outline"
            fullWidth
            startIcon={<SearchIcon className="text-primary" />}
            classNames={{
              root: 'w- h-12 justify-center rounded-lg border-1 border-neutral-200 dark:border-neutral-600',
            }}
            placeholder="جستوجو در محصولات..."
          />
        </div>
      </div>

      {/* Desktop View */}
      <div className="dark:bg-background hidden w-full sm:block">
        <div className="dark:bg-background hidden w-full border-b-1 border-b-neutral-200 bg-neutral-50 sm:block dark:border-0">
          <div className="dark:bg-background container flex justify-between bg-neutral-50 py-3.5">
            <Link href="/">
              <div className="flex items-center justify-center gap-4">
                {' '}
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  width={2000}
                  height={2000}
                  className="h-17 w-15"
                />
                <div>
                  <h1 className="dark:text-neutral-0 text-2xl text-neutral-700">ETMIFY</h1>
                  <h1 className="dark:text-neutral-20 text-sm text-neutral-500">
                    کیفیت و سرعت در یک مسیر شفاف
                  </h1>
                </div>
              </div>
            </Link>
            <div className="flex items-center gap-2.5">
              <Button
                onClick={toggleTheme}
                variant="fill"
                color="white"
                className="size-14 rounded-lg border-1 border-neutral-100 p-0 dark:border-neutral-600"
              >
                {!isDark ? <SunIcon className="size-6" /> : <MoonIcon className="size-6" />}
              </Button>
              <Button
                variant="fill"
                color="white"
                className="relative size-14 rounded-lg border-1 border-neutral-100 p-0 dark:border-neutral-600"
              >
                <BasketIcon className="size-6" />
                {/* For items in Basket */}
                {/* <div className="absolute -top-1.5 -right-1.5 size-3.75 rounded-full bg-red-500 text-neutral-0 text-xs flex items-center justify-center">2</div> */}
                {/* end  Items in Basket */}
              </Button>
              {loginUser ? (
                <UserMenu name="سورن شاملو" username="soren@" avatar="/images/profile.svg" />
              ) : (
                <Button
                  as="link"
                  href="/sign-up"
                  variant="fill"
                  color="primary"
                  fullWidth
                  className="w-40 rounded-md"
                >
                  ورود / ثبت نام
                </Button>
              )}
            </div>
          </div>
        </div>
        <div className="bg-neutral-0 hidden w-full sm:block dark:border-b dark:border-b-neutral-700 dark:bg-neutral-800">
          <div className="container flex h-19 w-full items-center justify-between">
            <Input
              color="neutral"
              variant="outline"
              startIcon={<SearchIcon className="text-primary" />}
              classNames={{
                root: 'w-120 h-12 rounded-lg border-1 border-neutral-200 dark:border-neutral-600',
              }}
              placeholder="جستوجو در محصولات..."
            />
            <nav className="flex gap-10">
              {NavMainMenu.map((item) => (
                <NavMainMenuLink key={item.label} item={item} />
              ))}
            </nav>
          </div>
        </div>
        <div className="dark:bg-background hidden w-full border-b border-b-neutral-200 bg-neutral-100 sm:block dark:border-b-neutral-700">
          <div className="container flex h-19 w-full items-center justify-start">
            <SubMenu items={subMenuItem} />
          </div>
        </div>
      </div>
    </header>
  );
};

import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from './navigation-menu';

const meta: Meta<typeof NavigationMenu> = {
  title: 'UI/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NavigationMenu>;

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-4 md:w-[400px]">
              <NavigationMenuLink href="/docs">
                <div className="text-sm leading-none font-medium">Documentation</div>
                <p className="text-muted-foreground text-sm">Learn how to use our platform</p>
              </NavigationMenuLink>
              <NavigationMenuLink href="/tutorials">
                <div className="text-sm leading-none font-medium">Tutorials</div>
                <p className="text-muted-foreground text-sm">Step-by-step guides for beginners</p>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-4 md:w-[400px]">
              <NavigationMenuLink href="/components/button">
                <div className="text-sm leading-none font-medium">Buttons</div>
                <p className="text-muted-foreground text-sm">Interactive button components</p>
              </NavigationMenuLink>
              <NavigationMenuLink href="/components/card">
                <div className="text-sm leading-none font-medium">Cards</div>
                <p className="text-muted-foreground text-sm">Content container components</p>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <a href="/pricing" className="hover:text-accent-foreground px-4 py-2 text-sm font-medium">
            Pricing
          </a>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <a href="/about" className="hover:text-accent-foreground px-4 py-2 text-sm font-medium">
            About
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

export const RTL: Story = {
  render: () => (
    <NavigationMenu dir="rtl">
      <NavigationMenuList dir="rtl">
        <NavigationMenuItem dir="rtl">
          <NavigationMenuTrigger dir="rtl">شروع کار</NavigationMenuTrigger>
          <NavigationMenuContent dir="rtl">
            <div className="grid gap-3 p-4 text-right md:w-[400px]">
              <NavigationMenuLink dir="rtl" href="/docs">
                <div className="text-sm leading-none font-medium">مستندات</div>
                <p className="text-muted-foreground text-sm">آموزش استفاده از پلتفرم ما</p>
              </NavigationMenuLink>
              <NavigationMenuLink dir="rtl" href="/tutorials">
                <div className="text-sm leading-none font-medium">آموزش‌ها</div>
                <p className="text-muted-foreground text-sm">راهنمای گام به گام برای مبتدیان</p>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem dir="rtl">
          <NavigationMenuTrigger dir="rtl">کامپوننت‌ها</NavigationMenuTrigger>
          <NavigationMenuContent dir="rtl">
            <div className="grid gap-3 p-4 text-right md:w-[400px]">
              <NavigationMenuLink dir="rtl" href="/components/button">
                <div className="text-sm leading-none font-medium">دکمه‌ها</div>
                <p className="text-muted-foreground text-sm">کامپوننت‌های دکمه تعاملی</p>
              </NavigationMenuLink>
              <NavigationMenuLink dir="rtl" href="/components/card">
                <div className="text-sm leading-none font-medium">کارت‌ها</div>
                <p className="text-muted-foreground text-sm">کامپوننت‌های محفظه محتوا</p>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem dir="rtl">
          <NavigationMenuTrigger dir="rtl">شروع کار</NavigationMenuTrigger>
          <NavigationMenuContent dir="rtl">
            <div className="grid gap-3 p-4 text-right md:w-[400px]">
              <NavigationMenuLink dir="rtl" href="/docs">
                <div className="text-sm leading-none font-medium">مستندات</div>
                <p className="text-muted-foreground text-sm">آموزش استفاده از پلتفرم ما</p>
              </NavigationMenuLink>
              <NavigationMenuLink dir="rtl" href="/tutorials">
                <div className="text-sm leading-none font-medium">آموزش‌ها</div>
                <p className="text-muted-foreground text-sm">راهنمای گام به گام برای مبتدیان</p>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem dir="rtl">
          <a href="/pricing" className="hover:text-accent-foreground px-4 py-2 text-sm font-medium">
            قیمت‌گذاری
          </a>
        </NavigationMenuItem>

        <NavigationMenuItem dir="rtl">
          <a href="/about" className="hover:text-accent-foreground px-4 py-2 text-sm font-medium">
            درباره ما
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

export const WithoutViewport: Story = {
  render: () => (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Dropdown</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[200px] p-4">
              <NavigationMenuLink href="/item1">Item 1</NavigationMenuLink>
              <NavigationMenuLink href="/item2">Item 2</NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};
export const RTLWithoutViewport: Story = {
  render: () => (
    <NavigationMenu dir="rtl" viewport={false}>
      <NavigationMenuList dir="rtl">
        <NavigationMenuItem dir="rtl">
          <NavigationMenuTrigger dir="rtl">شروع کار</NavigationMenuTrigger>
          <NavigationMenuContent dir="rtl">
            <div className="grid gap-3 p-4 text-right md:w-[400px]">
              <NavigationMenuLink dir="rtl" href="/docs">
                <div className="text-sm leading-none font-medium">مستندات</div>
                <p className="text-muted-foreground text-sm">آموزش استفاده از پلتفرم ما</p>
              </NavigationMenuLink>
              <NavigationMenuLink dir="rtl" href="/tutorials">
                <div className="text-sm leading-none font-medium">آموزش‌ها</div>
                <p className="text-muted-foreground text-sm">راهنمای گام به گام برای مبتدیان</p>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem dir="rtl">
          <NavigationMenuTrigger dir="rtl">کامپوننت‌ها</NavigationMenuTrigger>
          <NavigationMenuContent dir="rtl">
            <div className="grid gap-3 p-4 text-right md:w-[400px]">
              <NavigationMenuLink dir="rtl" href="/components/button">
                <div className="text-sm leading-none font-medium">دکمه‌ها</div>
                <p className="text-muted-foreground text-sm">کامپوننت‌های دکمه تعاملی</p>
              </NavigationMenuLink>
              <NavigationMenuLink dir="rtl" href="/components/card">
                <div className="text-sm leading-none font-medium">کارت‌ها</div>
                <p className="text-muted-foreground text-sm">کامپوننت‌های محفظه محتوا</p>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem dir="rtl">
          <NavigationMenuTrigger dir="rtl">شروع کار</NavigationMenuTrigger>
          <NavigationMenuContent dir="rtl">
            <div className="grid gap-3 p-4 text-right md:w-[400px]">
              <NavigationMenuLink dir="rtl" href="/docs">
                <div className="text-sm leading-none font-medium">مستندات</div>
                <p className="text-muted-foreground text-sm">آموزش استفاده از پلتفرم ما</p>
              </NavigationMenuLink>
              <NavigationMenuLink dir="rtl" href="/tutorials">
                <div className="text-sm leading-none font-medium">آموزش‌ها</div>
                <p className="text-muted-foreground text-sm">راهنمای گام به گام برای مبتدیان</p>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem dir="rtl">
          <a href="/pricing" className="hover:text-accent-foreground px-4 py-2 text-sm font-medium">
            قیمت‌گذاری
          </a>
        </NavigationMenuItem>

        <NavigationMenuItem dir="rtl">
          <a href="/about" className="hover:text-accent-foreground px-4 py-2 text-sm font-medium">
            درباره ما
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};
export const MultipleLevels: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid grid-cols-2 gap-4 p-6 md:w-[600px]">
              <div className="space-y-3">
                <div className="text-sm font-semibold">Web Apps</div>
                <NavigationMenuLink href="/products/crm">CRM System</NavigationMenuLink>
                <NavigationMenuLink href="/products/ecommerce">
                  E-commerce Platform
                </NavigationMenuLink>
              </div>
              <div className="space-y-3">
                <div className="text-sm font-semibold">Mobile Apps</div>
                <NavigationMenuLink href="/products/ios">iOS Apps</NavigationMenuLink>
                <NavigationMenuLink href="/products/android">Android Apps</NavigationMenuLink>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

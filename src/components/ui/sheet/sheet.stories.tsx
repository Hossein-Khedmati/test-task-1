import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from './sheet';
import { withTests } from '@storybook/addon-jest';
import results from '~/.jest-test-results.json';

const meta: Meta<typeof Sheet> = {
  title: 'UI/Sheet',
  component: Sheet,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  render: () => {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <button className="cursor-pointer rounded-lg bg-blue-600 px-5 py-2 text-white">
            Tap to Open
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="border-0">
          <SheetHeader>
            <SheetTitle>Default Sheet</SheetTitle>
            <SheetDescription>this is the default story with right side position.</SheetDescription>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min gap-6 px-4">Our Main Content will Add here</div>
          <SheetFooter>
            <SheetClose asChild>
              <button className="cursor-pointer rounded-lg bg-red-500 px-5 py-2 text-white">
                Close
              </button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  },
};
Default.decorators = [withTests({ results })];

export const LeftSide: Story = {
  render: () => {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <button className="cursor-pointer rounded-lg bg-blue-600 px-5 py-2 text-white">
            Tap to Open
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="border-0">
          <SheetHeader>
            <SheetTitle>Default Sheet</SheetTitle>
            <SheetDescription>this Sheet open from Left.</SheetDescription>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min gap-6 px-4">Our Main Content will Add here</div>
          <SheetFooter>
            <SheetClose asChild>
              <button className="cursor-pointer rounded-lg bg-red-500 px-5 py-2 text-white">
                Close
              </button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  },
};
LeftSide.decorators = [withTests({ results })];

export const TopSide: Story = {
  render: () => {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <button className="cursor-pointer rounded-lg bg-blue-600 px-5 py-2 text-white">
            Tap to Open
          </button>
        </SheetTrigger>
        <SheetContent side="top" className="border-0">
          <SheetHeader>
            <SheetTitle>Default Sheet</SheetTitle>
            <SheetDescription>this Sheet open from Top.</SheetDescription>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min gap-6 px-4">Our Main Content will Add here</div>
          <SheetFooter>
            <SheetClose asChild>
              <button className="cursor-pointer rounded-lg bg-red-500 px-5 py-2 text-white">
                Close
              </button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  },
};
TopSide.decorators = [withTests({ results })];
export const BottomSide: Story = {
  render: () => {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <button className="cursor-pointer rounded-lg bg-blue-600 px-5 py-2 text-white">
            Tap to Open
          </button>
        </SheetTrigger>
        <SheetContent side="bottom" className="border-0">
          <SheetHeader>
            <SheetTitle>Default Sheet</SheetTitle>
            <SheetDescription>this Sheet open from Bottom.</SheetDescription>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min gap-6 px-4">Our Main Content will Add here</div>
          <SheetFooter>
            <SheetClose asChild>
              <button className="cursor-pointer rounded-lg bg-red-500 px-5 py-2 text-white">
                Close
              </button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  },
};
BottomSide.decorators = [withTests({ results })];

export const WithCloseIcon: Story = {
  render: () => {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <button className="cursor-pointer rounded-lg bg-blue-600 px-5 py-2 text-white">
            Tap to Open
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="border-0">
          <SheetHeader>
            <div className="flex justify-end">
              <SheetClose>
                <button className="size-10 cursor-pointer rounded-sm bg-red-600 text-2xl text-white">
                  x
                </button>
              </SheetClose>
            </div>
            <SheetTitle>Default Sheet</SheetTitle>
            <SheetDescription>this Sheet have Close icon.</SheetDescription>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min gap-6 px-4">Our Main Content will Add here</div>
        </SheetContent>
      </Sheet>
    );
  },
};
WithCloseIcon.decorators = [withTests({ results })];

import React from 'react';
import { Meta, StoryObj } from '@storybook/nextjs';
import {
  Card,
  CardAction,
  CardHeader,
  CardMedia,
  CardContent,
  CardDescription,
  CardTitle,
} from './card';
import { Button } from '@/components/ui';
import { withTests } from '@storybook/addon-jest';
import results from '~/.jest-test-results.json';
import Image from 'next/image';
import { ArrowLeftIcon } from '@icons';

const meta: Meta = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Tests: Story = {
  args: {
    children: 'A Sample Card',
    className: 'bg-neutral-900 text-white p-6',
  },
  render: (args) => <Card {...args}>{args.children}</Card>,
};

Tests.decorators = [withTests({ results })];

export const Basic: Story = {
  render: () => (
    <Card className="flex w-52 flex-col items-center rounded-2xl bg-gray-100 px-2 py-5 shadow-2xl">
      <CardHeader className="flex w-full flex-col items-center gap-2">
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <p>Card Content</p>
      </CardContent>
      <CardAction className="flex justify-center">
        <Button className="button-text-sm">Click Me</Button>
      </CardAction>
    </Card>
  ),
};

export const SpecialCase: Story = {
  render: () => (
    <Card className="w-80 overflow-hidden rounded-xl">
      <div className="relative">
        <CardMedia className="relative max-h-70 w-full overflow-hidden">
          <Image
            src="/images/home/game.png"
            width={1000}
            height={700}
            alt="Game image"
            className="h-full w-full object-cover"
          />

          <div className="absolute top-3 right-3">
            <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
              30%
            </span>
          </div>
        </CardMedia>
      </div>

      <CardContent className="bg-neutral-0 rounded-xl border border-neutral-100 p-4" dir="rtl">
        <CardHeader className="mb-2 p-0 text-right">
          <CardTitle className="heading-4">Resident Evil 4</CardTitle>
          <CardDescription className="body-11 text-neutral-500">Action</CardDescription>
        </CardHeader>
        <div className="mt-3 flex items-center justify-between">
          <CardAction className="w-auto">
            <Button
              rounded
              variant="link"
              color="error"
              className="h-10 w-10 p-0"
              endIcon={<ArrowLeftIcon className="h-5 w-5 rotate-180" />}
            />
          </CardAction>
          <div className="text-left">
            <p className="body-14 text-neutral-500">تومان ۱۷۰,۰۰۰</p>
            <p className="heading-5 text-neutral-800">تومان ۱,۷۰۰,۰۰۰</p>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
};

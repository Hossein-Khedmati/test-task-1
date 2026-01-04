import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { Switch } from './switch';
import { MoonIcon } from '@/components/shared/icons';

const meta: Meta<typeof Switch> = {
  title: 'UI/Switch',
  component: Switch,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => (
    <div className="flex h-screen w-screen items-center justify-center">
      <Switch />
    </div>
  ),
};
export const RTL: Story = {
  render: () => (
    <div className="flex h-screen w-screen items-center justify-center">
      <Switch dir="rtl" />
    </div>
  ),
};
export const LTR: Story = {
  render: () => (
    <div className="flex h-screen w-screen items-center justify-center">
      <Switch dir="ltr" />
    </div>
  ),
};
export const WithChecked: Story = {
  render: () => (
    <div className="flex h-screen w-screen items-center justify-center">
      <Switch checked />
    </div>
  ),
};
export const WithIcon: Story = {
  render: () => (
    <div className="flex h-screen w-screen items-center justify-center">
      <Switch>
        <MoonIcon />
      </Switch>
    </div>
  ),
};
export const WithCustomClassNames: Story = {
  render: () => (
    <div className="flex h-screen w-screen items-center justify-center">
      <Switch
        classNames={{
          root: 'data-[state=checked]:bg-blue-800 w-30',
          thumb: 'bg-red-700 size-10 data-[state=checked]:-translate-x-25',
        }}
      >
        <MoonIcon />
      </Switch>
    </div>
  ),
};

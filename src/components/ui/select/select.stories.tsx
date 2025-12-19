import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { Select, SelectItem } from './select';
import { withTests } from '@storybook/addon-jest';
import results from '~/.jest-test-results.json';

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Tests: Story = {
  args: {
    placeholder: 'Select an option',
    color: 'primary',
    variant: 'outline',
    size: 'md',
    fullWidth: false,
    rounded: 'md',
  },
  render: (args) => (
    <Select {...args}>
      <SelectItem value="option1">Option 1</SelectItem>
      <SelectItem value="option2">Option 2</SelectItem>
      <SelectItem value="option3">Option 3</SelectItem>
    </Select>
  ),
};
Tests.decorators = [withTests({ results })];

export const Basic: Story = {
  args: {
    placeholder: 'Default Select',
  },
  render: (args) => (
    <Select {...args}>
      <SelectItem value="option1">Option 1</SelectItem>
      <SelectItem value="option2">Option 2</SelectItem>
      <SelectItem value="option3">Option 3</SelectItem>
    </Select>
  ),
};

export const Variants: Story = {
  render: () => {
    return (
      <div className="flex flex-wrap gap-4">
        <Select variant="fill" placeholder="Fill">
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </Select>
        <Select variant="outline" placeholder="Outline">
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </Select>
        <Select variant="ghost" placeholder="Ghost">
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </Select>
      </div>
    );
  },
};
export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Select color="primary" variant="fill" placeholder="Primary">
        <SelectItem value="p1">Primary</SelectItem>
      </Select>
      <Select color="secondary" variant="fill" placeholder="Secondary">
        <SelectItem value="p2">Secondary</SelectItem>
      </Select>
      <Select color="success" variant="fill" placeholder="Success">
        <SelectItem value="p3">Success</SelectItem>
      </Select>
      <Select color="error" variant="fill" placeholder="Error">
        <SelectItem value="p4">Error</SelectItem>
      </Select>
      <Select color="warning" variant="fill" placeholder="Warning">
        <SelectItem value="p5">Warning</SelectItem>
      </Select>
      <Select color="info" variant="fill" placeholder="Info">
        <SelectItem value="p6">Info</SelectItem>
      </Select>
      <Select color="neutral" variant="fill" placeholder="Neutral">
        <SelectItem value="p7">Neutral</SelectItem>
      </Select>
    </div>
  ),
};
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Select placeholder="XS" size="xs">
        <SelectItem value="xs">XS</SelectItem>
      </Select>
      <Select placeholder="SM" size="sm">
        <SelectItem value="sm">SM</SelectItem>
      </Select>
      <Select placeholder="MD" size="md">
        <SelectItem value="md">MD</SelectItem>
      </Select>
      <Select placeholder="LG" size="lg">
        <SelectItem value="lg">LG</SelectItem>
      </Select>
      <Select placeholder="XL" size="xl">
        <SelectItem value="xl">XL</SelectItem>
      </Select>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Select placeholder="Normal">
        <SelectItem value="1">Normal</SelectItem>
      </Select>
      <Select disabled placeholder="Disabled">
        <SelectItem value="2">Disabled</SelectItem>
      </Select>
      <Select defaultValue="option2" placeholder="With Default">
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2 (Default)</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </Select>
      <Select placeholder="With Disabled Item">
        <SelectItem value="m1">Normal Item</SelectItem>
        <SelectItem value="m2" disabled>
          Disabled Item
        </SelectItem>
        <SelectItem value="m3">Another Item</SelectItem>
      </Select>
    </div>
  ),
};

export const BorderRadius: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Select rounded="xs" placeholder="XS Radius">
        <SelectItem value="r1">XS</SelectItem>
      </Select>
      <Select rounded="sm" placeholder="SM Radius">
        <SelectItem value="r2">SM</SelectItem>
      </Select>
      <Select rounded="md" placeholder="MD Radius">
        <SelectItem value="r3">MD</SelectItem>
      </Select>
      <Select rounded="lg" placeholder="LG Radius">
        <SelectItem value="r4">LG</SelectItem>
      </Select>
      <Select rounded="xl" placeholder="XL Radius">
        <SelectItem value="r5">XL</SelectItem>
      </Select>
      <Select rounded="2xl" placeholder="2XL Radius">
        <SelectItem value="r6">2XL</SelectItem>
      </Select>
      <Select rounded="3xl" placeholder="3XL Radius">
        <SelectItem value="r7">3XL</SelectItem>
      </Select>
      <Select rounded="4xl" placeholder="4XL Radius">
        <SelectItem value="r8">4XL</SelectItem>
      </Select>
      <Select rounded={true} placeholder="Full Radius">
        <SelectItem value="r9">Full</SelectItem>
      </Select>
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div className="w-full space-y-4">
      <Select fullWidth placeholder="Full Width Select">
        <SelectItem value="fw1">Option 1</SelectItem>
        <SelectItem value="fw2">Option 2</SelectItem>
        <SelectItem value="fw3">Option 3</SelectItem>
      </Select>
      <Select placeholder="Normal Width Select">
        <SelectItem value="fw4">Option 1</SelectItem>
        <SelectItem value="fw5">Option 2</SelectItem>
      </Select>
    </div>
  ),
};

export const FillSelects: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Select variant="fill" color="primary" placeholder="Primary">
        <SelectItem value="f1">Primary</SelectItem>
      </Select>
      <Select variant="fill" color="secondary" placeholder="Secondary">
        <SelectItem value="f2">Secondary</SelectItem>
      </Select>
      <Select variant="fill" color="success" placeholder="Success">
        <SelectItem value="f3">Success</SelectItem>
      </Select>
      <Select variant="fill" color="error" placeholder="Error">
        <SelectItem value="f4">Error</SelectItem>
      </Select>
      <Select variant="fill" disabled placeholder="Disabled">
        <SelectItem value="f5">Disabled</SelectItem>
      </Select>
    </div>
  ),
};
export const OutLineSelects: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Select variant="outline" color="primary" placeholder="Primary">
        <SelectItem value="o1">Primary</SelectItem>
      </Select>
      <Select variant="outline" color="secondary" placeholder="Secondary">
        <SelectItem value="o2">Secondary</SelectItem>
      </Select>
      <Select variant="outline" color="success" placeholder="Success">
        <SelectItem value="o3">Success</SelectItem>
      </Select>
      <Select variant="outline" color="error" placeholder="Error">
        <SelectItem value="o4">Error</SelectItem>
      </Select>
      <Select variant="outline" disabled placeholder="Disabled">
        <SelectItem value="o5">Disabled</SelectItem>
      </Select>
    </div>
  ),
};
export const GhostSelects: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Select variant="ghost" color="primary" placeholder="Primary">
        <SelectItem value="g1">Primary</SelectItem>
      </Select>
      <Select variant="ghost" color="secondary" placeholder="Secondary">
        <SelectItem value="g2">Secondary</SelectItem>
      </Select>
      <Select variant="ghost" color="success" placeholder="Success">
        <SelectItem value="g3">Success</SelectItem>
      </Select>
      <Select variant="ghost" color="error" placeholder="Error">
        <SelectItem value="g4">Error</SelectItem>
      </Select>
      <Select variant="ghost" disabled placeholder="Disabled">
        <SelectItem value="g5">Disabled</SelectItem>
      </Select>
    </div>
  ),
};


export const PersianSample: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Select placeholder="انتخاب کنید" color="primary" dir="rtl">
        <SelectItem value="option1">گزینه اول</SelectItem>
        <SelectItem value="option2">گزینه دوم</SelectItem>
        <SelectItem value="option3">گزینه سوم</SelectItem>
      </Select>

      <Select placeholder="ریجن" variant="fill" color="success" dir="rtl">
        <SelectItem value="tehran">آمریکا</SelectItem>
        <SelectItem value="mashhad">ترکیه</SelectItem>
        <SelectItem value="isfahan">آلمان</SelectItem>
        <SelectItem value="shiraz">هند</SelectItem>
        <SelectItem value="tabriz">سنگاپور</SelectItem>
      </Select>

      <Select placeholder="انتخاب زبان" variant="ghost" color="info" size="lg" dir="rtl">
        <SelectItem value="persian">فارسی</SelectItem>
        <SelectItem value="english">English</SelectItem>
        <SelectItem value="arabic">العربية</SelectItem>
        <SelectItem value="turkish">Türkçe</SelectItem>
      </Select>
    </div>
  ),
};

export const WithLongOptions: Story = {
  render: () => (
    <Select placeholder="Select a country">
      <SelectItem value="us">United States of America</SelectItem>
      <SelectItem value="uk">United Kingdom of Great Britain and Northern Ireland</SelectItem>
      <SelectItem value="de">Federal Republic of Germany</SelectItem>
      <SelectItem value="fr">French Republic</SelectItem>
      <SelectItem value="ca">Canada</SelectItem>
      <SelectItem value="au">Commonwealth of Australia</SelectItem>
      <SelectItem value="jp">Japan</SelectItem>
    </Select>
  ),
};

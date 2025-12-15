import { Meta, StoryObj } from '@storybook/nextjs';
import { withTests } from '@storybook/addon-jest';
import { Label } from './label';
import { Input } from '@/components/ui/input';
import results from '~/.jest-test-results.json';

const meta: Meta<typeof Label> = {
  title: 'UI/Label',
  component: Label,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Tests: Story = {
  args: {
    htmlFor: 'name',
    color: 'primary',
    size: 'sm',
    align: 'left',
  },
  render: (args: Story['args']) => (
    <div className="flex flex-col gap-2">
      <Label {...args}> ...نام</Label>
      <Input id={args?.htmlFor} placeholder="نام خود را وارد کنید" />
    </div>
  ),
};
Tests.decorators = [withTests({ results })];

export const Basic: Story = {
  render: () => (
    <div className="flex gap-2">
      <Label htmlFor="checkBox">نام</Label>
      <input id="checkBox" type="checkbox" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex gap-2">
        <Label color="primary">Primary Color</Label>
        <input type="checkbox" />
      </div>
      <div className="flex gap-2">
        <Label color="secondary">Secondary Color</Label>
        <input type="checkbox" />
      </div>
      <div className="flex gap-2">
        <Label color="success">Success Color</Label>
        <input type="checkbox" />
      </div>
      <div className="flex gap-2">
        <Label color="error">Error Color</Label>
        <input type="checkbox" />
      </div>
      <div className="flex gap-2">
        <Label color="warning">Warning Color</Label>
        <input type="checkbox" />
      </div>
      <div className="flex gap-2">
        <Label color="info">Info Color</Label>
        <input type="checkbox" />
      </div>
      <div className="flex gap-2">
        <Label htmlFor="neutralColor" color="neutral">
          Neutral Color
        </Label>
        <input id="neutralColor" type="checkbox" />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Label htmlFor="xs" size="xs" align="right">
          نام
        </Label>
        <Input id="xs" placeholder="نام خود را وارد کنید" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="sm" size="sm" align="right">
          نام
        </Label>
        <Input id="sm" placeholder="نام خود را وارد کنید" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="md" size="md" align="right">
          نام
        </Label>
        <Input id="md" placeholder="نام خود را وارد کنید" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="lg" size="lg" align="right">
          نام
        </Label>
        <Input id="lg" placeholder="نام خود را وارد کنید" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="xl" size="xl" align="right">
          نام
        </Label>
        <Input id="xl" placeholder="نام خود را وارد کنید" />
      </div>
    </div>
  ),
};

export const Aligns: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Label htmlFor="align" size="md" align="right">
          Right
        </Label>
        <Input id="align" placeholder="Right label" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="align" size="md" align="left">
          Left
        </Label>
        <Input id="align" placeholder="Left label" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="align" size="md" align="center">
          Center
        </Label>
        <Input id="align" placeholder="Center label" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="align" size="md" align="justify">
          justify
        </Label>
        <Input id="align" placeholder="Justify label" />
      </div>
    </div>
  ),
};

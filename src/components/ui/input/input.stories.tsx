import { Meta, StoryObj } from '@storybook/nextjs';
import { withTests } from '@storybook/addon-jest';
import { Input } from './input';
import results from '~/.jest-test-results.json';
import { SearchIcon } from '@icons';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Tests: Story = {
  args: {
    variant: 'outline',
    color: 'primary',
    dir: 'rtl',
    disabled: false,
    fullWidth: false,
    label: 'test',
    placeholder: 'سرچ کنید...',
    type: 'text',
  },
  render: (args: Story['args']) => <Input {...args} />,
};

Tests.decorators = [withTests({ results })];

export const Basic: Story = {
  render: () => <Input placeholder="جستجو کنید..." />,
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-5">
      <Input color="primary" variant="outline" placeholder="Outline" />
      <Input color="primary" variant="fill" placeholder="Fill" />
      <Input color="primary" variant="ghost" placeholder="Ghost" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex w-full flex-col items-center gap-5">
      <Input color="primary" variant="fill" placeholder="Primary" />
      <Input color="error" variant="fill" placeholder="Error" />
      <Input color="info" variant="fill" placeholder="Info" />
      <Input color="secondary" variant="fill" placeholder="Secondary" />
      <Input color="success" variant="fill" placeholder="Success" />
      <Input color="neutral" variant="fill" placeholder="Neutral" />
      <Input color="warning" variant="fill" placeholder="Warning" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex w-full flex-col items-center gap-5">
      <Input classNames={{ root: 'input-sm' }} placeholder="Small" />
      <Input classNames={{ root: 'input-md' }} placeholder="Medium" />
      <Input classNames={{ root: 'input-lg' }} placeholder="Large" />
    </div>
  ),
};

export const WithLightInputSize: Story = {
  render: () => (
    <div className="flex w-full flex-col items-center gap-5">
      <Input classNames={{ root: 'input-sm-light' }} placeholder="جستجو..." />
      <Input classNames={{ root: 'input-md-light' }} placeholder="جستجو..." />
      <Input classNames={{ root: 'input-lg-light' }} placeholder="جستجو..." />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex w-full flex-col items-center gap-5">
      <Input state="error" placeholder="جستجو..." inputMessage=" خطا" />
      <Input state="warning" placeholder="جستجو..." inputMessage=" خطا" />
      <Input state="success" placeholder="جستجو..." inputMessage=" خطا" />
    </div>
  ),
};
export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col">
      <Input
        label="ایمیل"
        classNames={{ root: 'input-sm', label: 'input-sm-label' }}
        placeholder="جستجو..."
      />
      <Input
        label="ایمیل"
        classNames={{ root: 'input-md', label: 'input-md-label' }}
        placeholder="جستجو..."
      />
      <Input
        label="ایمیل"
        classNames={{ root: 'input-lg', label: 'input-lg-label' }}
        placeholder="جستجو..."
      />
    </div>
  ),
};
export const WithInputMessage: Story = {
  render: () => (
    <div className="flex flex-col gap-y-10">
      <Input
        state="error"
        label="ایمیل"
        inputMessage="مشاهده خطا"
        classNames={{
          root: 'input-sm',
          label: 'input-sm-label',
          inputMessage: 'input-sm-inputMessage',
        }}
        placeholder="جستجو..."
      />
      <Input
        state="warning"
        label="ایمیل"
        inputMessage="مشاهده خطا"
        classNames={{
          root: 'input-md',
          label: 'input-md-label',
          inputMessage: 'input-md-inputMessage',
        }}
        placeholder="جستجو..."
      />
      <Input
        state="success"
        label="ایمیل"
        inputMessage="مشاهده خطا"
        classNames={{
          root: 'input-lg',
          label: 'input-lg-label',
          inputMessage: 'input-lg-inputMessage',
        }}
        placeholder="جستجو..."
      />
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-5">
      <Input startIcon={<SearchIcon />} placeholder="Start Icon" />
      <Input endIcon={<SearchIcon />} placeholder="End Icon" />
      <Input endIcon={<SearchIcon />} startIcon={<SearchIcon />} placeholder="Both Icons" />
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div className="flex w-full flex-col gap-5">
      <Input placeholder="Normal Text Input" />
      <Input fullWidth placeholder="Fullwidth Text Input" />
    </div>
  ),
};

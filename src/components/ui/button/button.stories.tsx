import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { Button } from './button';
import { withTests } from '@storybook/addon-jest';
import results from '~/.jest-test-results.json';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Button component has no default styles like padding, margin, or font. Only button-text-md class is applied by default. Border radius is automatically applied. For pixel-perfect designs matching Figma, you can use h-* in className to set the exact height. For text styling according to Figma, use Typography utility classes like body-20 lg:body-10.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    children: 'Default Button',
    color: 'primary',
    variant: 'fill',
    rounded: false,
    fullWidth: false,
    isDisabled: false,
    isLoading: false,
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

Basic.decorators = [withTests({ results })];

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="fill">Fill</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button as="link" variant="link" href="#">
        Link
      </Button>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="fill" color="primary">
        Primary
      </Button>
      <Button variant="fill" color="secondary">
        Secondary
      </Button>
      <Button variant="fill" color="error">
        Error
      </Button>
      <Button variant="fill" color="success">
        Success
      </Button>
      <Button variant="fill" color="white">
        White
      </Button>
      <Button variant="fill" color="gray">
        Gray
      </Button>
    </div>
  ),
};

export const ButtonSizes: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Button sizes are controlled via className utilities, not props. Use button-text-# classes for different text button sizes.',
      },
    },
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button className="button-text-xs">button-text-xs</Button>
      <Button className="button-text-sm">button-text-sm</Button>
      <Button className="button-text-md">button-text-md</Button>
      <Button className="button-text-lg">button-text-lg</Button>
    </div>
  ),
};

export const FullWidth: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use the fullWidth prop to make the button take up 100% of its container width.',
      },
    },
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button fullWidth>Full Width</Button>
      <Button fullWidth variant="outline" color="success">
        Full Width Success
      </Button>
    </div>
  ),
};

export const FullRounded: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button rounded className="button-text-lg">
        Full Rounded
      </Button>
      <Button rounded variant="outline" className="button-icon-lg">
        +
      </Button>
    </div>
  ),
};

export const WithIcons: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use startIcon and endIcon props to add icons to buttons.',
      },
    },
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button startIcon={<span>+</span>}>Add Item</Button>
      <Button endIcon={<span>→</span>}>Next</Button>
      <Button startIcon={<span>↑</span>} endIcon={<span>↓</span>}>
        Both Icons
      </Button>
    </div>
  ),
};
export const States: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button>Normal</Button>
      <Button isDisabled>Disabled</Button>
      <Button isLoading>Loading</Button>
      <Button isLoading loadingText="Processing...">
        Submit
      </Button>
    </div>
  ),
};

export const IconButtons: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use button-icon-* classes for icon-only buttons with different sizes.',
      },
    },
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button className="button-icon-xs">
        <span>+</span>
      </Button>
      <Button className="button-icon-sm">
        <span>+</span>
      </Button>
      <Button className="button-icon-md">
        <span>+</span>
      </Button>
      <Button className="button-icon-lg">
        <span>+</span>
      </Button>
    </div>
  ),
};

export const FillButtons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="fill" color="primary">
        Primary
      </Button>
      <Button variant="fill" color="secondary">
        Secondary
      </Button>
      <Button variant="fill" color="success">
        Success
      </Button>
      <Button variant="fill" color="error">
        Error
      </Button>
      <Button variant="fill" color="gray">
        Gray
      </Button>
      <Button variant="fill" color="white">
        White
      </Button>
    </div>
  ),
};
export const OutlineButtons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="outline" color="primary">
        Primary
      </Button>
      <Button variant="outline" color="secondary">
        Secondary
      </Button>
      <Button variant="outline" color="success">
        Success
      </Button>
      <Button variant="outline" color="error">
        Error
      </Button>
      <Button variant="outline" color="gray">
        Gray
      </Button>
      <Button variant="outline" color="white">
        White
      </Button>
    </div>
  ),
};
export const GhostButtons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="ghost" color="primary">
        Primary
      </Button>
      <Button variant="ghost" color="secondary">
        Secondary
      </Button>
      <Button variant="ghost" color="success">
        Success
      </Button>
      <Button variant="ghost" color="error">
        Error
      </Button>
      <Button variant="ghost" color="gray">
        Gray
      </Button>
      <Button variant="ghost" color="white">
        White
      </Button>
    </div>
  ),
};

export const LinkButtons: Story = {
  parameters: {
    docs: {
      description: {
        story: 'when you use as link you must use href for desnition.',
      },
    },
  },
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="link" as="link" href="#" color="primary">
        Primary
      </Button>
      <Button variant="link" as="link" href="#" color="secondary">
        Secondary
      </Button>
      <Button variant="link" as="link" href="#" color="success">
        Success
      </Button>
      <Button variant="link" as="link" href="#" color="error">
        Error
      </Button>
      <Button variant="link" as="link" href="#" color="gray">
        Gray
      </Button>
      <Button variant="link" as="link" href="#" color="white">
        White
      </Button>
    </div>
  ),
};
export const FillButtonsDisabled: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="fill" color="primary" isDisabled>
        Primary
      </Button>
      <Button variant="fill" color="secondary" isDisabled>
        Secondary
      </Button>
      <Button variant="fill" color="success" isDisabled>
        Success
      </Button>
      <Button variant="fill" color="error" isDisabled>
        Error
      </Button>
      <Button variant="fill" color="gray" isDisabled>
        Gray
      </Button>
      <Button variant="fill" color="white" isDisabled>
        White
      </Button>
    </div>
  ),
};

export const OutlineButtonsDisabled: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="outline" color="primary" isDisabled>
        Primary
      </Button>
      <Button variant="outline" color="secondary" isDisabled>
        Secondary
      </Button>
      <Button variant="outline" color="success" isDisabled>
        Success
      </Button>
      <Button variant="outline" color="error" isDisabled>
        Error
      </Button>
      <Button variant="outline" color="gray" isDisabled>
        Gray
      </Button>
      <Button variant="outline" color="white" isDisabled>
        White
      </Button>
    </div>
  ),
};

export const GhostButtonsDisabled: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="ghost" color="primary" isDisabled>
        Primary
      </Button>
      <Button variant="ghost" color="secondary" isDisabled>
        Secondary
      </Button>
      <Button variant="ghost" color="success" isDisabled>
        Success
      </Button>
      <Button variant="ghost" color="error" isDisabled>
        Error
      </Button>
      <Button variant="ghost" color="gray" isDisabled>
        Gray
      </Button>
      <Button variant="ghost" color="white" isDisabled>
        White
      </Button>
    </div>
  ),
};

export const LinkButtonsDisabled: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="link" color="primary" isDisabled>
        Primary
      </Button>
      <Button variant="link" color="secondary" isDisabled>
        Secondary
      </Button>
      <Button variant="link" color="success" isDisabled>
        Success
      </Button>
      <Button variant="link" color="error" isDisabled>
        Error
      </Button>
      <Button variant="link" color="gray" isDisabled>
        Gray
      </Button>
      <Button variant="link" color="white" isDisabled>
        White
      </Button>
    </div>
  ),
};

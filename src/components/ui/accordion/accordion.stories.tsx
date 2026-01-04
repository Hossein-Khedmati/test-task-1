import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './accordion';
import { withTests } from '@storybook/addon-jest';
import results from '~/.jest-test-results.json';

const meta: Meta<typeof Accordion> = {
  title: 'UI/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Basic: Story = {
  render: () => (
    <Accordion
      type="single"
      collapsible
      className="w-[500px] overflow-hidden rounded-xl border-2 border-red-400"
    >
      <AccordionItem value="item-1" className="p-6 transition duration-200 hover:bg-red-200">
        <AccordionTrigger className="cursor-pointer text-lg font-medium">
          Click to Expand
        </AccordionTrigger>
        <AccordionContent className="text-left">
          This is the content inside the accordion.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
Basic.decorators = [withTests({ results })];

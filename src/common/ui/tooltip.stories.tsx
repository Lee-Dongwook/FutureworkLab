import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'ui/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="bg-blue-500 px-4 py-2 text-white">Hover me</button>
        </TooltipTrigger>
        <TooltipContent side="top">This is a tooltip</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toaster } from './toaster';
import { useToast } from '@/hooks/use-toast';

const meta: Meta<typeof Toaster> = {
  title: 'ui/Toaster',
  component: Toaster,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => {
    const { toast } = useToast();

    return (
      <div>
        <button
          onClick={() =>
            toast({
              title: 'Default Toast',
              description: 'This is a default toast message.',
            })
          }
        >
          Show Toast
        </button>
        <Toaster />
      </div>
    );
  },
};

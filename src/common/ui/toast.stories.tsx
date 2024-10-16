import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
} from './toast';

const meta: Meta<typeof Toast> = {
  title: 'ui/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: () => (
    <ToastProvider>
      <div>
        <Toast>
          <div className="grid gap-1">
            <ToastTitle>Toast Title</ToastTitle>
            <ToastDescription>This is a simple toast description.</ToastDescription>
          </div>
          <ToastClose />
        </Toast>
        <ToastViewport />
      </div>
    </ToastProvider>
  ),
};

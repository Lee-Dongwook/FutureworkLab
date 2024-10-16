import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from '.';

const meta: Meta<typeof Dropdown> = {
  title: 'components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {};

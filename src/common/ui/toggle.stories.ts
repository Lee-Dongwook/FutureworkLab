import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './toggle';

const meta: Meta<typeof Toggle> = {
  title: 'ui/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'outline'],
      description: 'Toggle 버튼 스타일 변형',
    },
    size: {
      control: 'radio',
      options: ['default', 'sm', 'lg'],
      description: 'Toggle 버튼 크기 변형',
    },
    children: {
      control: 'text',
      description: 'Toggle 버튼 내용',
      defaultValue: 'Toggle',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'Toggle Button',
  },
};

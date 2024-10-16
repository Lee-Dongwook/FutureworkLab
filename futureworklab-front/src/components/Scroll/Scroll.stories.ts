import type { Meta, StoryObj } from '@storybook/react';
import ScrollComponent from '.';

const meta: Meta = {
  title: 'components/Scroll',
  component: ScrollComponent,
  tags: ['autodocs'],
  argTypes: {
    isScroll: {
      control: 'boolean',
      description: '스크롤 애니메이션 여부',
      defaultValue: false,
    },
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#000000' },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollComponent>;

export const Default: Story = {
  args: {
    isScroll: false,
  },
};

export const Scrolling: Story = {
  args: {
    isScroll: true,
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import FooterComponent from '.';

const meta: Meta<typeof FooterComponent> = {
  title: 'components/Footer',
  component: FooterComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen', // 전체 화면 레이아웃으로 설정
  },
};

export default meta;
type Story = StoryObj<typeof FooterComponent>;

export const Desktop: Story = {};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphonex',
    },
  },
};

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
  },
};

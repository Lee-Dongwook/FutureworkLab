import type { Meta, StoryObj } from '@storybook/react';
import HamburgerMenuComponent from '.';

const meta: Meta<typeof HamburgerMenuComponent> = {
  title: 'components/HamburgerMenu',
  component: HamburgerMenuComponent,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: '햄버거 메뉴 열림 여부 제어',
      defaultValue: false,
    },
    handleClose: {
      action: 'handleClose',
      description: '햄버거 메뉴 닫기 함수',
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
type Story = StoryObj<typeof HamburgerMenuComponent>;

export const Primary: Story = {
  args: {
    isOpen: false,
  },
};

export const OpenMenu: Story = {
  args: {
    isOpen: true,
  },
};

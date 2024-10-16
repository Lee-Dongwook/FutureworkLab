import type { Meta, StoryObj } from '@storybook/react';
import HeaderComponent from '.';
import { within, userEvent } from '@storybook/testing-library';

const meta: Meta<typeof HeaderComponent> = {
  title: 'components/Header',
  component: HeaderComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof HeaderComponent>;

export const Desktop: Story = {};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphonex',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const hamburgerButton = await canvas.getByRole('button');
    await userEvent.click(hamburgerButton);
  },
};

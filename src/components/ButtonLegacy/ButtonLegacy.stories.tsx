import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ButtonLegacy from './';

const meta: Meta<typeof ButtonLegacy> = {
  title: 'Design System/Atoms/Legacy/Button',
  tags: ['autodocs'],
  component: ButtonLegacy,
  args: {
    children: 'Button',
    variant: 'default',
    disabled: false,
  },
  parameters: {
    componentSubtitle: 'Button component',
  },
  argTypes: {
    children: {},
  },
};

export default meta;
type Story = StoryObj<typeof ButtonLegacy>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: 'default',
  },
};

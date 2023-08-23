import type { Meta, StoryObj } from '@storybook/react';
import Input from './';

const meta: Meta<typeof Input> = {
  title: 'Design System/Atoms/Input',
  tags: ['autodocs'],
  component: Input,
  args: {
    disabled: false,
    placeholder: 'this is placeholder',
    type: 'text',
  },
  parameters: {
    componentSubtitle: 'Input component',
  },
  argTypes: {
    children: {},
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {},
};

export const Password: Story = {
  args: {
    type: 'password',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from './';

const meta: Meta<typeof Button> = {
  title: 'Design System/Atoms/Button',
  tags: ['autodocs'],
  component: Button,
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
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Small: Story = {
  args: {
    children: 'Small',
    size: 'sm',
  },
  parameters: {
    backgrounds: {
      values: [
        { name: 'black', value: '#000' },
        { name: 'dark', value: '#222' },
        { name: 'light', value: '#ddd' },
        { name: 'white', value: '#fff' },
      ],
    },
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};

export const Example: Story = {
  render: () => {
    return (
      <div>
        <header>
          <h1>Example</h1>
        </header>

        <article className="bg-red-400">
          <Button variant="default">Default</Button>
        </article>
      </div>
    );
  },
};

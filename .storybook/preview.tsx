import '../src/components/globals.css';
import React from 'react';
import { Preview } from '@storybook/react';

import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from '@storybook/blocks';
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
    backgrounds: {
      values: [
        { name: 'dark', value: '#222' },
        { name: 'light', value: '#ddd' },
      ],
    },
  },
};

export default preview;

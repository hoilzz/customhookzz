import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import React from 'react';

export default {
  title: 'Button',
};

export const text = () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
);

export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

// 위에는 text와 emoji 스토리가 있는데,
// 각 스토리는 단일 state다.

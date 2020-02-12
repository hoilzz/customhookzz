import React, { useState } from 'react';
import usePrevious from 'src/hooks/usePrevious';
import mdx from './usePrevious.mdx';

export const Example = () => {
  const [count, setCount] = useState(0);

  const previousCount = usePrevious(count);
  const handleClick = () => setCount(count + 1);

  return (
    <div>
      <p>before : {previousCount}</p>
      <p>current : {count}</p>
      <button onClick={handleClick}>+</button>
    </div>
  );
};

export default {
  title: 'usePrevious',
  component: Example,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

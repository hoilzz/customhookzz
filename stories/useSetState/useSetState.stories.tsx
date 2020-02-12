import React from 'react';
import useSetState from 'src/hooks/useSetState';
import mdx from './useSetState.mdx'

const defaultState = {
  age: 0,
  name: ''
};

export const Example = () => {
  const [state, setState] = useSetState(defaultState);

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button
        onClick={() =>
          setState({
            name: 'hoilzz'
          })
        }
      >
        merge with "{"name: 'hoilzz'"}"
      </button>
      <button
        onClick={() =>
          setState({
            age: 20
          })
        }
      >
        set age 20
      </button>
      <button onClick={() => setState(defaultState)}>set default</button>
    </div>
  );
};

export default {
  title: 'useSetState',
  component: Example,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

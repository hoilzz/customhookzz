import { Reducer, useReducer } from 'react';

type ISetState<S> = Partial<S> | ((prevState: S) => S);

const useSetState = <T>(initialState: T) =>
  useReducer<Reducer<T, ISetState<T>>>(
    (prevState, newState) =>
      typeof newState === 'function'
        ? newState(prevState)
        : { ...prevState, ...newState },
    initialState
  );

export default useSetState;

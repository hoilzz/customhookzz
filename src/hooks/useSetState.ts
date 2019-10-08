import { Reducer, useReducer } from 'react';

type ISetState<D> = Partial<D> | ((prevState: D) => D);

const useSetState = <T>(initialState: T) =>
  useReducer<Reducer<T, ISetState<T>>>(
    (prevState, newState) =>
      typeof newState === 'function'
        ? newState(prevState)
        : { ...prevState, ...newState },
    initialState
  );

export default useSetState;

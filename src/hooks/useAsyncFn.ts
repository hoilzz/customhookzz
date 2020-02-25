import { useCallback } from 'react';
import useSetState from './useSetState';

export type IUseAsyncFnProps<R> = {
  fn: (...args: any[]) => Promise<R>;
};

type IAsyncFnState<R, E> = {
  isLoading: boolean;
  data: R | null;
  error: E | null;
};

/**
 * promise를 리턴하는 async 콜백함수, API의 응답값, loading 여부, error 객체를 리턴
 * @param param0
 */
const useAsyncFn = <R, E>({ fn }: IUseAsyncFnProps<R>) => {
  const [state, setAsyncResponse] = useSetState<IAsyncFnState<R, E>>({
    isLoading: false,
    data: null,
    error: null
  });

  const callback = useCallback((...params: any[]) => {
    setAsyncResponse({
      isLoading: true
    });
    fn(...params)
      .then(data => {
        setAsyncResponse({
          data,
          error: null
        });
      })
      .catch(error => {
        setAsyncResponse({
          // TODO: error 객체는 R 제네릭이 아니다.
          data: null,
          error
        });
      })
      .finally(() => {
        setAsyncResponse({
          isLoading: true
        });
      });
  }, []);

  return [state, callback] as const;
};

export default useAsyncFn;

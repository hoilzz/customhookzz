import { renderHook, act, RenderHookResult } from '@testing-library/react-hooks';
import useAsyncFn, { IUseAsyncFnProps } from '../useAsyncFn';

const add = (x: number, y: number): Promise<number> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x + y);
    }, 600);
  });
};

describe('useAsyncFn', () => {
  let hook: RenderHookResult<IUseAsyncFnProps<number>, ReturnType<typeof useAsyncFn>>;
  beforeEach(() => {
    hook = renderHook(() => useAsyncFn<number, null>({ fn: add }));
  });

  // it('콜백이 await 되고나서 값을 리턴한다', async () => {
  //   // test 동안 zhfqor sodptj assertions이 호출된 횟수.
  //   expect.assertions(2);

  //   const [state, callAsyncAdd] = hook.result.current;

  //   let result;

  //   expect(state.data).toBeNull();

  //   await act(async () => {
  //     result = await callAsyncAdd(5, 3);
  //   });
  //   expect(result).toBe(8);
  // });

  describe('callback이 호출된 후에, 상태를 업데이트하고 리렌더한다.', () => {
    it('hook 초기 호출에는 값을 갖지 않는다.', () => {
      const [{ data, isLoading, error }, callAsyncAdd] = hook.result.current;
      expect(data).toBeNull();
      expect(isLoading).toBeFalsy();
      expect(error).toBeNull();
    });
    it('when called', async () => {
      const [, callAsyncAdd] = hook.result.current;

      act(() => {
        callAsyncAdd(5, 4);
      });
      const [, isLoading1] = hook.result.current;
      expect(isLoading1).toBeTruthy();

      await hook.waitForNextUpdate();

      const [{ data, isLoading: isLoading2, error }] = hook.result.current;
      expect(isLoading2).toBeFalsy();
      expect(data).toBe(9);
      expect(error).toBeNull();
    });
  });
});

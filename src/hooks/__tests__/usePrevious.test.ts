import { renderHook } from '@testing-library/react-hooks';
import usePrevious from '../usePrevious';


// 첫번째 인자의 콜백의 파라미터는 두 번쟤 인자의 initialProps의 객체를 전달받는다.
const setUp = () =>
  // 훅은 테스트 하기 위해 renderHook을 이용하여 렌더링..
  // 첫번째 인자는 callback, 당연히 렌더될 때마다 호출
  renderHook(({ state }) => usePrevious(state), { initialProps: { state: 0 } });

it('should return undefined on initial render', () => {
  const { result } = setUp();

  expect(result.current).toBeUndefined();
});

it('should always return previous state after each update', () => {
  // result는 hook의 결과값, rerender는 말그대로 리렌더
  const { result, rerender } = setUp();

  rerender({ state: 10 });
  expect(result.current).toBe(0);

  rerender({ state: 4 });
  expect(result.current).toBe(10);

  rerender({ state: 100 });
  expect(result.current).toBe(4);
});

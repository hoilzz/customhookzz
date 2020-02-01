import { act, renderHook } from '@testing-library/react-hooks';
import useSetState from '../useSetState';

const initialState = {
  user: {
    name: 'hoilzz',
    age: 29
  }
};

const setup = () => renderHook(() => useSetState(initialState));

describe('useSetState', () => {
  it('설정된 state 초기값과 setState 함수를 리턴한다.', () => {
    const { result, waitForNextUpdate } = setup();
    const [state, setState] = result.current;

    expect(state).toEqual(initialState);
    expect(setState).toBeInstanceOf(Function);
  });

  it('setState에 새로운 객체를 전달하면, 새로운 객체와 기존객체를 merge한다.', () => {
    const { result, waitForNextUpdate } = setup();
    const [state, setState] = result.current;

    act(() =>
      setState({
        ...state,
        user: {
          ...state.user,
          age: 30
        }
      })
    );

    waitForNextUpdate().then(() => {
      expect(state).not.toEqual(initialState);
      expect(state).toEqual({
        user: {
          name: 'hoilzz',
          age: 30
        }
      });
    });
  });

  it('setState에 함수를 전달하여, 기존 객체와 merge한다.', () => {
    const { result, waitForNextUpdate } = setup();
    const [state, setState] = result.current;

    act(() =>
      setState(prevState => ({
        ...prevState,
        user: {
          ...prevState.user,
          age: 31
        }
      }))
    );

    waitForNextUpdate().then(() => {
      expect(state).toEqual({
        user: {
          name: 'hoilzz',
          age: 31
        }
      });
    });
  });

  // https://ko.reactjs.org/docs/hooks-reference.html#usereducer
  // 리렌덩시에도 변경되지 않는다. 안심하고 프레임워크를 믿고 사용하자.
  it('setState는 메모이징된 함수다.', () => {
    const { result, rerender } = setup();
    const [, setState1] = result.current;

    rerender();

    const [, setState2] = result.current;

    expect(setState1).toBe(setState2);
  });
});

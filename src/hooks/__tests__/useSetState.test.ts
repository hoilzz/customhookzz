import { renderHook, act, WaitOptions } from '@testing-library/react-hooks';
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

  it('setState에 새로운 객체를 전달하면, 새로운 상태를 반환한다.', () => {
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
});

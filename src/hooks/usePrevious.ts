import { useEffect, useRef } from 'react';

/**
 * 이전 props이나 state를 저장할 수 있다.
 * @param value
 */
function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default usePrevious;

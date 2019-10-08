import { useCallback, useEffect, useRef } from 'react';

type ICallback = (e: MouseEvent) => void;

const useOutsideClick = (callback: ICallback) => {
  const ref = useRef<HTMLElement>(null);

  const handler = useCallback(
    e => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback(e);
      }
    },
    [callback]
  );

  useEffect(() => {
    window.addEventListener('click', handler);
    return () => window.removeEventListener('click', handler);
  }, [handler]);

  return ref;
};

export default useOutsideClick;

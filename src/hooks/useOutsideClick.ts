import { useCallback, useEffect, useRef } from 'react';

type ICallback = (e: MouseEvent) => void;

const useOutsideClick = <D extends HTMLElement>(callback: ICallback) => {
  const ref = useRef<D>(null);

  const onClick = useCallback(
    e => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback(e);
      }
    },
    [callback]
  );

  useEffect(() => {
    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, [onClick]);

  return ref;
};

export default useOutsideClick;

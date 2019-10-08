import { useCallback, useEffect, useMemo } from 'react';

type IOCallback = (
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) => void;

type IOptions = {
  root: Element;
  rootMargin: string;
  threshold: number | number[];
};

/**
 * @param cb
 * @param options
 */
const useIO = (cb: IOCallback, options?: IOptions) => {
  const io = useMemo(() => new IntersectionObserver(cb, options), []);

  const observe = useCallback((el: HTMLElement) => io.observe(el), []);

  const unobserve = useCallback((el: HTMLElement) => io.unobserve(el), []);

  useEffect(() => () => io.disconnect(), []);

  return {
    io,
    observe,
    unobserve,
  };
};

export default useIO;

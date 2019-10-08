# custom-hook-zz

작업하면서 사용한 커스텀 훅

## react-hooks-testing-library

### renderHook

```js
function renderHook(
  callback: function(props?: any): any,
  options?: RenderHookOptions
): RenderHookResult
```

제공된 `callback`을 every render마다 호출하는 테스트용 컴포넌트를 렌더한다. 콜백은 hook을 전달해도 된다.

**callback**

- 만약 new props이 rerender call에서 제공되지 않는다면 콜백에 전달된 `props`는 `options`의 `initialProps`이다.

**rederHook Result 객체**

renderHook의 반환값 인터페이스

```js
export interface HookResult<R> {
  readonly current: R;
  readonly error: Error;
}

export interface RenderHookResult<P, R> {
  readonly result: HookResult<R>;
  readonly waitForNextUpdate: () => Promise<void>;
  readonly unmount: () => boolean;
  readonly rerender: (newProps?: P) => void;
}
```

```js
{
  current: any,
  error: Error
}
```

`current` 값 or `result`는 `renderHook`에 전달된 콜백에서 반환 된 모든 내용을 반영한다. thrown value는 error 값에 반영된다.

**rerender**

```js
function rerender(newProps? : any): void
```

hook을 재연산 시키고, 테스트 컴포넌트를 리렌더한다. 만약 `newProps`가 전달된다면, `callback`에 전달된 `initialProps`을 대체할 것이다.

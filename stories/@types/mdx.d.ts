// ts파일에서 mdx 확장자로 된 파일을 불러올 떄 모듈 없다는 에러 방지
declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}

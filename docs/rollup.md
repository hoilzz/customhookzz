ES 모듈을 사용하면 라이브러리에서 유용한 개별 기능을 자유롭게 결합 할 수 있습니다. 이것은 모든곳에서 사용 가능하지만, 롤업을 통해 가능하다.

## the why

ES6의 데이터나 함수를 importing 과 exporting 하는 문법을 통해 분리된 스크립트 간에 공유될 수 있다. 하지만 이 명세는 모던 브라우저에만 구현되어있고 Node.js에서는 확정되지 않았다. 롤업은 새로운 모듈 시스템을 이용하여 코드를 CJS, AMD, UMD 스타일로 컴파일한다.

## 트리쉐이킹

ES Module 사용으로, 롤업은 import한 코드를 분석한다. 사용되지 않은 코드는 제외한다.
이것은 빌드시 사용되지 않은 디펜던시를 추가하지 않고, 프로젝트 크기를 작게 해준다.

CJS에서는 전체 라이브러리를 import 한다.

```js
// import the entire utils object with CommonJS
const utils = require('./utils');
const query = 'Rollup';
// use the ajax method of the utils object
utils.ajax(`https://api.example.com?search=${query}`).then(handleResponse);
```

ES module에서는, 전체 util object를 가져오는 대신에, 필요한 `ajax` 함수만 import한다.

```js
// import the ajax function with an ES6 import statement
import { ajax } from './utils';
const query = 'Rollup';
// call the ajax function
ajax(`https://api.example.com?search=${query}`).then(handleResponse);
```

## 범용성

ES module은 Node나 webpack과 같은 CJS와 동작하도록 만들기 위해, 롤업을 통해 UMD나 CJS로 컴파일 할 수 있다.

CJS로 가져올 경우 package.json의 `main` 프로퍼티를 이용한다.
ESM으로 가져올 경우 `module` 프로퍼티를 이용한다.

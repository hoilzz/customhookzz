import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
// *.stories.js에서 자동으로 '../stories' 아래의 모든 파일을 import 한다.
configure(require.context('../stories', true, /\.stories\.js$/), module);

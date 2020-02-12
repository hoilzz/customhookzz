const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.(tsx|mdx)'],
  addons: [
    // '@storybook/preset-typescript'
    // '@storybook/addon-actions',
    // '@storybook/addon-links'
    // // docs 탭 생성, props table
    '@storybook/addon-docs'
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: 'babel-loader'
          // options: {
          //   presets: [['react-app', { flow: false, typescript: true }]]
          // }
        }
        // {
        //   loader: 'react-docgen-typescript-loader'
        // }
      ]
    });
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.alias = {
      src: path.resolve(__dirname, '../src'),
      stories: path.resolve(__dirname, 'stories')
    };
    return config;
  }
};

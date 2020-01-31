module.exports = {
  stories: ['../stories/**/*.stories.(tsx|mdx)'],
  addons: [
    '@storybook/preset-typescript',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    // docs 탭 생성, props table
    '@storybook/addon-docs/react/preset'
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader')
        },
        {
          loader: 'react-docgen-typescript-loader'
        }
      ]
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  }
};

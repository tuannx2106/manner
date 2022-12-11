// next.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withAntdLess = require('next-plugin-antd-less');

module.exports = {
  ...withAntdLess({
    // optional
    modifyVars: {
      '@font-family':
        '"Arial", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
      '@font-size-base': '16px',
      '@line-height-base': '1.375',
      '@text-color': '#1D1D1D',
    },
    // optional
    lessVarsFilePath: './src/styles/variables.less',
    // optional
    lessVarsFilePathAppendToEndOfContent: false,
    // optional https://github.com/webpack-contrib/css-loader#object
    cssLoaderOptions: {},

    // Other Config Here...

    webpack(config) {
      return config;
    },
  }),
};

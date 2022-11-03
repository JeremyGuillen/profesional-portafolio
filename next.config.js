/** @type {import('next').NextConfig} */
const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  lessVarsFilePath: './styles/theme.less',
  lessVarsFilePathAppendToEndOfContent: true,
  cssLoaderOptions: {},
  reactStrictMode: true,
  webpack(config) {
    return config;
  },
});

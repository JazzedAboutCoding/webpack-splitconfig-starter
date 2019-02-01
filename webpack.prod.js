const merge = require('webpack-merge');

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, () => {
  return {
    devtool: 'source-map',
    mode: 'production',
  };
});

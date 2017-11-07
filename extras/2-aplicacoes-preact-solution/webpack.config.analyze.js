const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const config = require('./webpack.config.legacy.js')
config.plugins = [new BundleAnalyzerPlugin()]

module.exports = config

const config = require('./webpack.config.js')

config.entry = {
  'main-legacy': './src/index.js'
}

config.module.rules.shift()
config.module.rules.unshift({
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {
    presets: [
      ['env', {
        modules: false,
        useBuiltIns: true,
        targets: {
          browsers: [
            '> 1%',
            'last 2 versions',
            'Firefox ESR',
          ],
        },
      }],
    ],
    plugins: [
      ["transform-react-jsx", { "pragma":"h" }]
    ]
  }
})

module.exports = config

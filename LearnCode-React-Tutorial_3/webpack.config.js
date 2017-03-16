var debug   = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path    = require('path');

module.exports = {
    cache: true   //this was added to help with faster rebuilds
  , context: __dirname + '/src'
  , devtool: debug ? 'inline-sourcemap' : null
  , entry: [              //entry is an array of files which will be run at startup... even if there's only one, use brackets so you never forget
      'babel-polyfill'   //babel-polyfill is so that you can use cutting edge newer than new javascript - Oh Boy!
    , './js/client.js'
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/   //simply a regex expresson that looks for and grabs anything that matches .js
      , exclude: /(node_modules | bower_components)/   //dont transpile any of these - unnecessary
      , include: /src/   //this was added to speed up the time it takes for webpack to work
      , loader: 'babel-loader'
      , query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname , 'src')   //recommended to always use path.resolve or path.join
  , filename: 'client.min.js'
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};

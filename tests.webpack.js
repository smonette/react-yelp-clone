const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === 'development';
// alternatively, we can use process.argv[1]
// const isDev = (process.argv[1] || '')
//                .indexOf('hjs-dev-server') !== -1;


const webpack = require('webpack');
const fs      = require('fs');
const path    = require('path'),
      join    = path.join,
      resolve = path.resolve;

const root    = resolve(__dirname);
const src     = join(root, 'src');
const modules = join(root, 'node_modules');
const dest    = join(root, 'dist');



const getConfig = require('hjs-webpack');

var config = getConfig({
  in: join(__dirname, 'src/app.js'),
  out: join(__dirname, 'dist')
  clearBeforeBuild: true
})



module.exports = config;

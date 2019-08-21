import coffee from 'rollup-plugin-coffee-script';
import jst from 'rollup-plugin-jst';

import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'app/assets/javascripts/uploadcare/build/_widget.coffee',
  // input: 'app/assets/javascripts/uploadcare/index.js',

  output: {
    name: 'uploadcare',
    format: 'umd',
    file: 'dist/index.js'
  },

  plugins: [
    coffee(),
    jst({
      templateOptions: {
        variable: 'ext'
      },

      minify: true,
      minifyOptions: {
        collapseWhitespace: true
      },

      escapeModule: 'escape-html'
    }),
    json(),

    resolve(),
    commonjs()
  ]
}

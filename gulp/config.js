'use strict';

module.exports = {
  serverport: 3009,

  styles: {
    src: './assets/sass/*.scss',
    dest: './build/css/',
  },

  scripts: {
    src: './assets/coffee/**/*.coffee',
    dest: './build/js/',
  },

  sourceDir: './assets/',
  buildDir: './build/'
};
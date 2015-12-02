'use strict';

module.exports = {
  serverport: 3009,

  templates: {
    src: './views/**/*.jade',
    dest: './views/html/'
  },

  styles: {
    src: './assets/sass/*.scss',
    dest: './build/css/'
  },

  scripts: {
    src: './assets/coffee/**/*.coffee',
    dest: './build/js/'
  },

  sourceDir: './assets/',
  buildDir: './build/'
};
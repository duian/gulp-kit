'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../config');

gulp.task('watch', ['browserSync'], function() {
  // 如果使用coffee
  // gulp.watch(config.scripts.src, ['coffee']);
  gulp.watch(config.styles.src, ['sass']);
})
'use strict';

var gulp = require('gulp');
var coffee = require('gulp-coffee');
var handleErrors = require('../util/handle-errors');
var gulpif = require('gulp-if');
var browserSync = require('browser-sync');
var config = require('../config');

gulp.task('coffee', function() {
  gulp.src(config.scripts.src)
      .pipe(coffee({
        bare: true
      }))
      .on('error', handleErrors)
      .pipe(gulp.dest(config.scripts.dest))
      .pipe(gulpif(browserSync.active, browserSync.reload({stream: true})));
});
'use strict';

var gulp = require('gulp');
var jade = require('gulp-jade');
var handlerErrors = require('../util/handle-errors')
var gulpif = require('gulp-if');
var browserSync = require('browser-sync');
var config = require('../config');

gulp.task('jade', function() {
  var locals = {};
  gulp.src(config.templates.src)
      .pipe(jade({
        locals: locals
      }))
      .pipe(gulp.dest(config.templates.dest))
      .pipe(gulpif(browserSync.active, browserSync.reload({stream: true})));
});
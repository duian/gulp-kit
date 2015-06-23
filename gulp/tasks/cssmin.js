'use strict';

var gulp = require('gulp');
var minify = require('gulp-minify-css');
var config = require('../config');

gulp.task('minify', function() {
  gulp.src(config.styles.dest + '*.css')
      .pipe(minify())
      .pipe(gulp.dest(config.styles.dest));
});
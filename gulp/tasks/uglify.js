'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var config  = require('../config');

gulp.task('uglify', function() {
  gulp.src(config.scripts.dest + '*.js')
      .pipe(uglify())
      .pipe(gulp.dest(config.scripts.dest))
})
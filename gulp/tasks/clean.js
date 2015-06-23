'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var config = require('../config');

gulp.task('clean', function() {
  gulp.src([config.buildDir], {read: false})
      .pipe(clean({force: true}));
})
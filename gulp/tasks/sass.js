'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var handleErrors = require('../util/handle-errors');
var gulpif = require('gulp-if');
var browserSync = require('browser-sync');
var config = require('../config');


gulp.task('sass', function() {
  gulp.src(config.styles.src)
      .pipe(sass().on('error', handleErrors))
      .pipe(autoprefixer({
        browsers: [ '> 1%', 'last 2 versions', 'ie 8'],
        cascade: false
      }))
      .pipe(gulp.dest(config.styles.dest))
      .pipe(gulpif(browserSync.active, browserSync.reload({stream: true})));
});
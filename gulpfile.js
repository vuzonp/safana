"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');


// SASS
//------------------------------------------------------------------------------

gulp.task("sass", function () {
  return gulp.src("./src/safana.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest("./dist"));
});

gulp.task("sass:watch", function () {
  gulp.watch("./src/**/*.scss", ["sass"]);
});

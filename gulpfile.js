var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var includeSource = require('gulp-include-source');
var sequence = require('gulp-sequence');
var removeCode = require('gulp-remove-code');
var clean = require('gulp-clean');
var rjs = require('requirejs');
var rjsconfig = require('./build/rjsconfig');

// Static server
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task("include", function () {
  return gulp.src('./dev/*.html')
    .pipe(includeSource())
    .pipe(gulp.dest('./dist'));
});

gulp.task('template', ["include"], function () {
  return gulp.src('./dist/*.html')
    .pipe(removeCode({production: true}))
    .pipe(gulp.dest('./dist'));
});

gulp.task("cleanTarget", function () {
  return gulp.src('./dist', {read: true})
    .pipe(clean());
});

gulp.task('serve', function () {
  // Serve files from the root of this project
  browserSync.init({
    server: {
      baseDir: "./dev"
    },
    port: 3000
  });

  // add browserSync.reload to the tasks array to make
  // all browsers reload after tasks are complete.
  gulp.watch([
    "./dev/js/**/*.js",
    "./dev/css/*css",
    "./dev/*html",
  ], ['reource-watch']);
});

gulp.task('preview', function () {
  // Serve files from the root of this project
  browserSync.init({
    server: {
      baseDir: "./dist"
    },
    port: 3003
  });
});

gulp.task('reource-watch', function (done) {
  browserSync.reload();
  done();
});

gulp.task('optimize', function (cb) {
  rjs.optimize(rjsconfig, function (buildResponse) {
    console.log('build response', buildResponse);
    cb();
  }, cb);
});

gulp.task('dev', ['serve']);
gulp.task('build', function (cb) {
  sequence('cleanTarget', ['optimize', 'template'], cb);
});

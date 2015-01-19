var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    concat = require('gulp-concat');

gulp.task('styles', function() {
  return gulp.src("jquery.datetimepicker.css")
    .pipe(gulp.dest('dist/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/'));
});

gulp.task('scripts', function() {
  return gulp.src(['jquery.datetimepicker.js', 'bower_components/jquery-mousewheel/jquery.mousewheel.min.js', '3rdparty/dateparse.js'])
    .pipe(concat('jquery.datetimepicker.js'))
    .pipe(gulp.dest('dist/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});

gulp.task('clean', function(cb) {
    del(['dist/'], cb)
});

gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts');
});

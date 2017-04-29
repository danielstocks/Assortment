var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');

gulp.task('minify-css', () => {
  gulp.src(['css/reset.css','css/*.css'])
    .pipe(minifyCSS(opts))
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('dist'))
});

gulp.task('compress', () => {
  gulp.src([
      'js/vendor/*.js',
      'js/util/*.js',
      'js/sorting/*.js',
      'js/app.js',
      'js/chart.js',
      'js/sound.js',
      'js/crazyMode.js',
      'js/controls.js',
      'js/animation.js'
    ])
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('dist'))
});

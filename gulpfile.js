var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', function(done) {
  gulp
    .src(['css/reset.css', 'css/*.css'])
    .pipe(cleanCSS())
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('dist'));
  done();
});

gulp.task('compress', function(done) {
  gulp
    .src([
      'js/vendor/*.js',
      'js/util/*.js',
      'js/sorting/*.js',
      'js/app.js',
      'js/chart.js',
      'js/sound.js',
      'js/crazyMode.js',
      'js/controls.js',
      'js/animation.js',
    ])
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('dist'));
  done();
});

gulp.task('default', gulp.parallel(['minify-css', 'compress']));

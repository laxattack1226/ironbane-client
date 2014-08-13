var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish');

gulp.task('lint', function() {
    return gulp.src('src/**/*.js')
        .pipe(jshint(require('../../jshint.json'))) //should jshint file move?
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter('fail'));
});
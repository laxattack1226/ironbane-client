var gulp = require('gulp');

require('./build');

gulp.task('default', ['bower', 'lint', 'build']);
var gulp = require('gulp'),
    templateCache = require('gulp-angular-templatecache'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    order = require('gulp-order'),
    es = require('event-stream');

gulp.task('build', function() {
    var templates, scripts;

    templates = gulp.src('src/**/*.html')
        .pipe(templateCache('ironbane.templates.js', {
            standalone: true,
            root: '/templates/'
        }));

    scripts = gulp.src('src/**/*.js')
        .pipe(concat('ironbane.scripts.js'));

    return es.merge(templates, scripts)
        .pipe(order([
            'ironbane.scripts.js',
            'ironbane.templates.js'
        ]))
        .pipe(concat('game.js'))
        .pipe(gulp.dest('public/js/'))
        .pipe(rename('game.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/js/'));
});
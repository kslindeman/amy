var gulp = require('gulp'),
    sass = require('gulp-sass'),
    nodemon = require('gulp-nodemon'),
    livereload = require('gulp-livereload'),
    paths = {
        sass: './src/sass/*.scss',
        dest: {
            css: './public/css'
        }
    };

gulp.task('sass', function() {
    gulp.src(paths.sass)
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(gulp.dest(paths.dest.css));
});

gulp.task('sass:prod', function() {
    gulp.src(paths.sass)
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest(paths.dest.css));
});

gulp.task('reload', function() {
    setTimeout(function() {
        livereload.changed();
    }, 1000);
});

gulp.task('develop', function() {
    livereload.listen();
    nodemon({
        script: 'app.js',
        ext: 'jade js scss',
        ignore: ['gulpfile.js', 'public/js/*.js']
    })
    .on('change', ['sass', 'reload']);
});

gulp.task('default', ['sass', 'develop']);
gulp.task('prod', ['sass:prod']);
// https://css-tricks.com/gulp-for-beginners/
var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var browserSync = require('broswer-sync');

gulp.task('hello', function () {
    console.log('hello gulp');
})

gulp.task('less', function () {
    return gulp.src('app/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./public/css'))
})

gulp.task('browser sync', function(){
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    })
})

gulp.task('watch less file', function () {
    gulp.watch('app/less/**/*.less', ['less'])
})
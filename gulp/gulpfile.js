// https://css-tricks.com/gulp-for-beginners/
var gulp = require('gulp');
var less = require('gulp-less');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-clean-css');

var del = require('del');
var browserSync = require('browser-sync');

gulp.task('clean', function () {
    return del(['dist']);
})

gulp.task('less',function () {
    return gulp.src('app/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('app/css'))
})

gulp.task('html', function(){
    return gulp.src('app/*.html')
        .pipe(del(['dist']))
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({
            stream: true
        }))
})

gulp.task('browser sync', function () {
    browserSync.init({
        server: {
            baseDir: ''
        }
    })
})

gulp.task('watch', function () {
    gulp.watch('app/less/**/*.less', ['less'])
    gulp.watch('app/**/*.html', ['html'])
    gulp.watch('app/**/*.js', ['html'])
    gulp.watch('app/**/*.css', ['html'])
})

gulp.task('default', ['browser sync','html', 'watch']);
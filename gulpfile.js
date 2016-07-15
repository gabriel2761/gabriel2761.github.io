var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var inlinesource = require('gulp-inline-source');
var imagemin = require('gulp-imagemin');

gulp.task('default', ['minify', 'imagemin']);

gulp.task('minify', function() {
    return gulp.src('src/index.html')
        .pipe(inlinesource())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('.'));
});

gulp.task('imagemin', function() {
    return gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('img/'));
});
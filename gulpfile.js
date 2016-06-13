var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var inlinesource = require('gulp-inline-source');

gulp.task('default', function() {
    console.log('test');
});

gulp.task('minify', function() {
    return gulp.src('src/index.html')
        .pipe(inlinesource())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('.'));
});
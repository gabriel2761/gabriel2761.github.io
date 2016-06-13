var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

gulp.task('default', function() {
    console.log('test');
});

gulp.task('minify', function() {
    return gulp.src('src/index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('.'));
});

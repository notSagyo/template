var gulp = require('gulp');
var postcss = require('gulp-postcss');

gulp.task('styles', function() {
    return gulp.src('src/styles.css')
    .pipe(postcss())
    .pipe(gulp.dest('public/css'));
})

gulp.task('watch:styles', function(){
    gulp.watch('**/*.css', ['styles'])
})
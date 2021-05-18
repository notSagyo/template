//Packages ----------------------------------------------------------------- //
var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
//PostCSS packages
var cssnano = require('cssnano');
var autoprefixer = require('autoprefixer');

//Processors used
var processors = [
    cssnano,
    autoprefixer
];

//Tasks -------------------------------------------------------------------- //
gulp.task('compileCSS', function() {
    return gulp.src(['src/*.css'])
        .pipe(postcss(processors))
        .pipe(gulp.dest('public/css'));
})

gulp.task('compileSASS', function() {
    return gulp.src(['src/**/*.scss'])
        .pipe(sass())
        .pipe(postcss(processors))
        .pipe(gulp.dest('public/css'))
})

//Watch -------------------------------------------------------------------- //
gulp.task('watchCSS', function(){
    gulp.watch('**/*.css', gulp.series(['compile']))
})

gulp.task('watchSASS', function(){
    gulp.watch('**/*.scss', gulp.series(['styles']))
})

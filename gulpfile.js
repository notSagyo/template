//Gulp packages ------------------------------------------------------------ //
var gulp = require('gulp');
var sass = require('gulp-dart-sass');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename')
//PostCSS packages
var cssnano = require('cssnano');
var autoprefixer = require('autoprefixer');

//Variables ---------------------------------------------------------------- //
//Processors used
var processors = [ autoprefixer ];
var distProcessors = processors.concat([cssnano]);

//URLs
var srcPath = 'src/**';
var destPath = 'public/css';

//Tasks -------------------------------------------------------------------- //
gulp.task('buildCSS', function() {
    return gulp.src([srcPath + '/*.css'])
        .pipe(postcss(processors))
        .pipe(rename({dirname:''}))
        .pipe(gulp.dest(destPath));
})

gulp.task('buildCSSDist', function() {
    return gulp.src([srcPath + '/*.css'])
        .pipe(postcss(distProcessors))
        .pipe(rename({dirname:''}))
        .pipe(gulp.dest(destPath));
})

gulp.task('buildSASS', function() {
    return gulp.src([srcPath + '/*.scss'])
        .pipe(sass())
        .pipe(postcss(processors))
        .pipe(rename({dirname:''}))
        .pipe(gulp.dest(destPath))
})

gulp.task('buildSASSDist', function() {
    return gulp.src([srcPath + '/*.scss'])
        .pipe(sass())
        .pipe(postcss(distProcessors))
        .pipe(rename({dirname:''}))
        .pipe(gulp.dest(destPath))
})

//Watch -------------------------------------------------------------------- //
gulp.task('watchCSS', function(){
    gulp.watch('**/*.css', gulp.series(['buildCSS']))
})

gulp.task('watchSASS', function(){
    gulp.watch('**/*.scss', gulp.series(['buildSASS']))
})

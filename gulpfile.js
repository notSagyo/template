//Gulp packages ------------------------------------------------------------ //
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-dart-sass');
var rename = require('gulp-rename')
//PostCSS packages
var cssnano = require('cssnano');
var presetEnv = require('postcss-preset-env');
var lost = require('lost');
var rucksack = require('rucksack-css');

//Variables ---------------------------------------------------------------- //
//Processors
var processors = [
	lost(),
	rucksack(),
	presetEnv()
];
var distProcessors = processors.concat([(cssnano())]);

//URLs
var paths = {
	src: 'src/**',
	dest: 'public/css'
}

//Tasks -------------------------------------------------------------------- //
gulp.task('buildCSS', function() {
    return gulp.src([srcPath + '/*.css'])
        .pipe(postcss(processors))
        .pipe(rename({dirname:''}))
        .pipe(gulp.dest(paths.src));
})

gulp.task('buildCSSDist', function() {
    return gulp.src([srcPath + '/*.css'])
        .pipe(postcss(distProcessors))
        .pipe(rename({dirname:''}))
        .pipe(gulp.dest(paths.dest));
})

gulp.task('buildSASS', function() {
    return gulp.src([paths.src + '/*.scss'])
        .pipe(sass())
        .pipe(postcss(processors))
        .pipe(rename({dirname:''}))
        .pipe(gulp.dest(paths.dest))
})

gulp.task('buildSASSDist', function() {
    return gulp.src([paths.src + '/*.scss'])
        .pipe(sass())
        .pipe(postcss(distProcessors))
        .pipe(rename({dirname:''}))
        .pipe(gulp.dest(paths.dest))
})

//Watch -------------------------------------------------------------------- //
gulp.task('watchCSS', function(){
    gulp.watch(paths.src + '/*.css', gulp.series(['buildCSS']))
})

gulp.task('watchSASS', function(){
    gulp.watch(paths.src + '/*.scss', gulp.series(['buildSASS']))
})

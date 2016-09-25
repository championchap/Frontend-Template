const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const concat = require('gulp-concat')
const webpack = require('gulp-webpack')

const paths = {
  sass_entry: './src/sass/imports.scss',
  sass_all: './src/sass/**/*.scss',
  css_dir: './bin/css',
  css_file: './style.css',
  css_maps: './maps',
  js_entry: './src/js/app.js',
  js_all: './src/js/**/*.js',
  js_dir: './bin/js',
  js_file: './bin/js/app.js',
  webpack_config: './webpack.config.js'
}

gulp.task('default', ['sass', 'js'], () => {

})

gulp.task('watch', ['watch:sass', 'watch:js'], () => {

})

gulp.task('watch:sass', () => {
  gulp.watch(paths.sass_all, ['sass'])
})

gulp.task('watch:js', () => {
  gulp.watch(paths.js_all, ['js'])
})

gulp.task('sass', () => {
  return gulp.src(paths.sass_entry)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat(paths.css_file))
    .pipe(sourcemaps.write(paths.css_maps))
    .pipe(gulp.dest(paths.css_dir))
})

gulp.task('js', () => {
  return gulp.src('./src/js/app.js')
    .pipe(webpack(require(paths.webpack_config)))
    .pipe(gulp.dest(paths.js_dir))
})

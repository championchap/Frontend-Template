const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const concat = require('gulp-concat')

const paths = {
  sass_entry: './src/sass/imports.scss',
  sass_all: './src/sass/**/*.scss',
  css_dir: './bin/css',
  css_file: './style.css',
  css_maps: './maps'
}

gulp.task('default', ['sass'], () => {

})

gulp.task('sass', () => {
  return gulp.src(paths.sass_entry)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat(paths.css_file))
    .pipe(sourcemaps.write(paths.css_maps))
    .pipe(gulp.dest(paths.css_dir))
})

gulp.task('watch', () => {
  gulp.watch(paths.sass_all, ['sass'])
})

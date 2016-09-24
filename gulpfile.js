const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const concat = require('gulp-concat')

gulp.task('default', ['sass'], () => {

})

gulp.task('sass', () => {
  return gulp.src('./src/sass/imports.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('./style.css'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./bin/css'))
})

gulp.task('watch', () => {
  gulp.watch('./src/sass/**/*.scss', ['sass'])
})

const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const concat = require('gulp-concat')
const webpack = require('gulp-webpack')
const standard = require('gulp-standard')
const browsersync = require('browser-sync')

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
  js_maps: './maps',
  html_all: './bin/**/*.html',
  webpack_config: './webpack.config.js'
}

let browsersyncStarted = false

function startBrowserSync () {
  if (browsersyncStarted === false) {
    browsersyncStarted = true
    browsersync.init({
      server: './bin'
    })
  }
}

browsersync.create() // start browser-sync right away

gulp.task('default', () => {
  console.log(JSON.stringify(
    {
      instructions: 'Run the following tasks by typing (e.g.) \'npm run watch:sass\' in the command line.',
      npm_scripts: {
        'build:sass': 'Builds SASS once.',
        'build:js': 'Builds the JS once.',
        'build': 'Runs build:sass and build:js together.',
        'watch:sass': 'Runs build:sass whenever you change a SASS file.',
        'watch:js': 'Runs build:js whenever you change a JS file.',
        'watch': 'Runs watch:sass and watch:js together.',
        'checkLjs': 'Ensures we are coding to JavaScript Standard Style',
        'clean': 'Deletes the contents of the build directory.',
        'setup': 'Runs the setup script, getting you ready to work'
      }
    }, null, 2
  ))
})

gulp.task('build', ['build:sass', 'check:js', 'build:js'])

gulp.task('watch', () => {
  startBrowserSync()
  gulp.watch(paths.sass_all, ['build:sass'])
  gulp.watch(paths.js_all, ['check:js', 'build:js'])
  gulp.watch(paths.html_all).on('change', browsersync.reload)
})

gulp.task('watch:sass', () => {
  startBrowserSync()
  gulp.watch(paths.sass_all, ['build:sass'])
})

gulp.task('watch:js', () => {
  startBrowserSync()
  gulp.watch(paths.js_all, ['check:js', 'build:js'])
})

gulp.task('build:sass', () => {
  return gulp.src(paths.sass_entry)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat(paths.css_file))
    .pipe(sourcemaps.write(paths.css_maps))
    .pipe(gulp.dest(paths.css_dir))
    .pipe(browsersync.stream())
})

gulp.task('build:js', ['check:js'], () => {
  // NOTE: We do JS Source Mapping from WebPack - so we don't need to here
  return gulp.src(paths.js_entry)
    .pipe(webpack(require(paths.webpack_config)))
    .pipe(gulp.dest(paths.js_dir))
    .pipe(browsersync.stream())
})

gulp.task('check:js', () => {
  return gulp.src(paths.js_all)
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: true,
      quiet: true
    }))
})

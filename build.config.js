// The config file for your build tasks

const Config = {
  // paths to commonly used files and directories
  paths: {
    sass_entry: './src/sass/imports.sass',
    sass_all: './src/sass/**/*.sass',
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
}

module.exports = Config

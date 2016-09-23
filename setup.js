const mkdirp = require('mkdirp')
const fs = require('fs')

const config = {
  directories: [
    './src/sass',
    './src/js',
    './bin/css',
    './bin/js'
  ],

  files: [
    './src/app.js'
  ]
}

function setup (config) {
  /* In here is where you call the tasks you want to do on setup */

  // Problem! We are going to be using lots of ASYNC tasks in here
  // we should probably build a task() that uses Promises
  // so we can chain these taks, but maintain the ASYNC niceness

  config.directories.forEach((dir) => {
    createDir(dir)
  })

  config.files.forEach((file) => {
    createFile(file)
  })
}

/*

  Down here is where you define the actual tasks to perform
  plus any related code - if this gets to be quite large, you
  will probably want to break it out into more files

*/

function createDir (path) {
  mkdirp(path, (err) => {
    if (err) {
      console.log(`Error: ${err}`)
    } else {
      console.log(`Created directory: ${path}`)
    }
  })
}

function createFile (file) {
  fs.open('<directory>', 'w+', (err, fd) => {
    console.log(err, fd)
  })

  console.log(`Created file: ${file}`)
}

setup(config)

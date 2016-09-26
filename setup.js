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
    './src/js/app.js',
    './src/sass/imports.scss',
    './src/sass/home.scss',
    './bin/js/app.js',
    './bin/css/style.css'
  ]
}

function setup () {
  createAllDirectories()
    .then(createAllFiles)
    .then(deleteSetup)
    .then(() => { console.log('Done') })
    .catch(err => console.log('Error: ' + err))
}

/*

  Down here is where you define the actual tasks to perform
  plus any related code - if this gets to be quite large, you
  will probably want to break it out into more files

*/

function createAllDirectories () {
  let createDirectories = config.directories.map(dir => {
    return createDir(dir)
  })

  return Promise.all(createDirectories)
}

function createAllFiles () {
  let createFiles = config.files.map(file => {
    return createFile(file)
  })

  return Promise.all(createFiles)
}

function createDir (path) {
  return new Promise((resolve, reject) => {
    mkdirp(path, (err) => {
      if (err) {
        reject(err)
      } else {
        console.log(`Created: ${path}`)
        resolve(`Success: Created directory at ${path}`)
      }
    })
  })
}

function createFile (file) {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, '', err => {
      if (err) {
        reject(err)
      }

      console.log(`Created: ${file}`)
      resolve(`Created: ${file}`)
    })
  })
}

function deleteSetup () {
  const path = './setup.js'
  return new Promise((resolve, reject) => {
    fs.unlink(path, err => { return err })
    console.log(`Deleted: ${path}`)
  })
}

setup(config)

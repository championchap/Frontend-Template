const mkdirp = require('mkdirp')

// Store all of your setup config in here 
const config = {
	directories: [
		'./src/sass',
		'./src/js',
		'./bin/css',
		'./bin/js'	
	],
}

// This is where you call the tasks you want to do on setup 
function setup(config) {
	config.directories.forEach((dir) => {
		create_dir(dir)	
	})
}

// Down here is where you define the actual tasks to perform
// plus any related code - if this gets to be quite large, you 
// will probably want to break it out into more files 

function create_dir(path) {
	mkdirp(path, (err) => {
		if(err) { 
			console.log(`Error: ${err}`)
		} else {
			console.log(`Created directory: ${path}`)
		}
	})
}

setup(config)
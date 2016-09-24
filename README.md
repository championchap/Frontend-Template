# Webpack Templates 

A sensible template for new JavaScript projects. 


## Features

  + Babel for ES6 Transforms 
  + WebPack as a Task Runner / Build Tool 
  + Live Reloading - Maybe? I haven't done this before. 
  + Pre-configured npm scripts
  	- npm run setup - (creates a nice folder structure for us to use)
    - npm run build - (run the build step on everything, once)
    - npm run watch - (watch all our source files for changes and run the compile step every time)
    - npm run setup-jquery - (install jquery for us)
    - npm run setup-foundation - (install foundation for us)

  + Moment.js as a Date/Time lib - Questionable? 
  + DOES NOT include JQuery! Include it yourself, if you _really_ have to


## Instructions 

  + Clone the Repo to a directory somewhere
  + npm run setup 
  + Edit the Package.json to suit the name, repo, etc of your own project
  + Edit the README.md to reflect the details of your own project 
  + Delte the .git folder 
  + git init and continue as normal 


## Requirements

  + NodeJS & NPM 


## Suggestions

  + Write tasks in whatever tool you want, but call the tasks as NPM scripts! This way we don't have to hunt through multiple files to find them, or remember which tool does what. 


## Authors

  + Erik Watson

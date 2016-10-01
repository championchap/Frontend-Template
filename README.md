# Frontend Template

A sensible, basic template for new Frontend projects.


## Features

  + Webpack & Babel for JavaScript Transforms
  + Gulp for SASS Transforms
  + CSS and JS Source Maps
  + JS checked on comple to ensure it follows [JavaScript Standard Style](http://standardjs.com)
  + Browser Sync for automatic page reloads
  + Moment.js - Nice Date/Time handling
  + Pre-configured npm scripts. E.g. npm run watch:sass
    - setup
    - build
    - build:js
    - build:sass
    - watch
    - watch:js
    - watch:sass
    - check:js
    - clean


## TODO / Planning

  + Some kind of optional common framework integration.
  + The task 'npm run watch' should build everything once, before watching.


## Instructions

  + Clone the Repo to a directory somewhere
  + npm install
  + Edit the Package.json to suit the name, repo, etc of your own project
  + Edit the README.md to reflect the details of your own project
  + Delte the .git folder
  + git init and continue as normal


## Requirements

  + NodeJS & NPM


## Suggestions

Things that are not enforced, but are recommended to do on your projects.

  + Write tasks in whatever tool you want, but call the tasks as NPM scripts! This way we don't have to hunt through multiple files to find them, or remember which tool does what.
  + Don't just download pre-compiled libs off of the Internet and stick them in a Directory - Use a package manager! (NPM preferred)


## Authors

  + [Erik Watson](http://erikwatson.me)

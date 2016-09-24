const Utils = require('./utils.js')

class App {
  constructor () {
    console.log('Constructed.')
  }

  run () {
    console.log('Running.')
  }
}

// Start the app
Utils.onPageLoaded(() => {
  let app = new App()
  app.run()
})

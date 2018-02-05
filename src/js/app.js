import { onPageLoaded } from './events'

function setup () {
  console.log('Setting up.')
}

function run () {
  console.log('Running.')
}

// Start the app
onPageLoaded(() => {
  setup()
  run()
})

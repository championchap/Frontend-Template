class Utils {
  // I figure basically every app will need one of these
  static onPageLoaded (callback) {
    document.addEventListener('DOMContentLoaded', (event) => {
      callback()
    })
  }
}

module.exports = Utils

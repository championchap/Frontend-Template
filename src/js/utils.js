class Utils {
  //
  static onPageLoaded (callback) {
    document.addEventListener('DOMContentLoaded', (event) => {
      callback()
    })
  }
}

module.exports = Utils

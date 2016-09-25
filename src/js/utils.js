class Utils {
  // I figure basically every app will need one of thesegulp.watch(paths.sass_all, ['sass'])
  static onPageLoaded (callback) {
    document.addEventListener('DOMContentLoaded', (event) => {
      callback()
    })
  }
}

module.exports = Utils

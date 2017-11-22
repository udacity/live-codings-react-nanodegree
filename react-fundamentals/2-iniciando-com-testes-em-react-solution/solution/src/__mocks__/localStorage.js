let mockStorage = {}

module.exports = window.localStorage = {
  getItem: (key) => mockStorage[key]
}
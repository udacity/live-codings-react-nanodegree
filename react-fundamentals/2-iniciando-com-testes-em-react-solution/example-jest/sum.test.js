const sum = require('./sum')

test('sum of [1,3,5,7,11] equals 27', () => {
  expect(sum([1,3,5,7,11])).toBe(27)
})
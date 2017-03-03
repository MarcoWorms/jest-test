module.exports = function () {
  return new Promise(resolve => {
    resolve()
  })
    .then(() => {
    test('a test', () => {
      expect(1).toBe(1)
    })
  })
}

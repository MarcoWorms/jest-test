module.exports = function () {
  test('a test', () => {
    return new Promise(resolve => {
      expect(1).toBe(1)
      resolve()
    })
  })
}

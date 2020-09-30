import * as utils from './utils'

test('Test getAge method', () => {
  expect(utils.getAge('18.06.1994', new Date('2020-09-17T00:00:00'))).toBe(26)
  expect(utils.getAge('18.06.2009', new Date('2020-09-17T00:00:00'))).toBe(11)
})

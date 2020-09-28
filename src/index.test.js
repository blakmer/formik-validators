import { testPhoneNumber } from './'

test('testPhoneNumber', () => {
  expect(testPhoneNumber.test('+7 (900) 999 99 99')).toBeTruthy()
  expect(testPhoneNumber.test('not a phone')).toBeFalsy()
})

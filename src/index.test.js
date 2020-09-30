import * as tests from './'

test('testPhoneNumber', () => {
  expect(tests.testPhoneNumber.test('+7 (900) 999 99 99')).toBeTruthy()
  expect(tests.testPhoneNumber.test('not a phone')).toBeFalsy()
})

test('testDate', () => {
  expect(tests.testDate.test('09.10.2000')).toBeTruthy()
  expect(tests.testDate.test('not a date')).toBeFalsy()
  expect(tests.testDate.test('32.13.2000')).toBeFalsy()
})

test('testEmail', () => {
  expect(tests.testEmail.test('aaa@example.com')).toBeTruthy()
  expect(tests.testEmail.test('not a mail')).toBeFalsy()
  expect(tests.testEmail.test('ю@gmail.com')).toBeFalsy()
})

test('testVINLetters', () => {
  expect(tests.testVINLetters.test('KL1UF756E6B195928')).toBeTruthy()
  expect(tests.testVINLetters.test('KL1UF756E6B195OOO')).toBeFalsy()
})

test('testVINLength', () => {
  expect(tests.testVINLength.test('KL1UF756E6B195928')).toBeTruthy()
  expect(tests.testVINLength.test('KL1UF756E6B195')).toBeFalsy()
})

test('testPassportNumber', () => {
  expect(tests.testPassportNumber.test('28-08 230999')).toBeTruthy()
  expect(tests.testPassportNumber.test('not a passport number')).toBeFalsy()
})

test('testPassportCodeDep', () => {
  expect(tests.testPassportCodeDep.test('630-500')).toBeTruthy()
  expect(tests.testPassportCodeDep.test('not a code of department')).toBeFalsy()
})

test('testAge18', () => {
  expect(tests.testAge18.test('20.02.2000')).toBeTruthy()
  expect(tests.testAge18.test('29.09.2002')).toBeTruthy()
  const dt = new Date()
  expect(tests.testAge18.test(`01.01.${dt.getFullYear()}`)).toBeFalsy()
})

test('testAge21', () => {
  expect(tests.testAge21.test('20.02.1990')).toBeTruthy()
  const dt = new Date()
  expect(tests.testAge21.test(`01.01.${dt.getFullYear()}`)).toBeFalsy()
})

test('testPersonalINN', () => {
  expect(tests.testPersonalINN.test('482608013231')).toBeTruthy()
  expect(tests.testPersonalINN.test('not a INN')).toBeFalsy()
  expect(tests.testPersonalINN.test('1111111111111')).toBeFalsy()
})

test('testLegalINN', () => {
  expect(tests.testLegalINN.test('3664069397')).toBeTruthy()
  expect(tests.testLegalINN.test('not a INN')).toBeFalsy()
  expect(tests.testLegalINN.test('122222')).toBeFalsy()
})

test('tesBankCardNumber', () => {
  expect(tests.tesBankCardNumber.test('1111 1111 1111 1111')).toBeTruthy()
  expect(tests.tesBankCardNumber.test('1111 1111 1111 1111 22222')).toBeFalsy()
  expect(tests.tesBankCardNumber.test('not a number')).toBeFalsy()
})

test('tesBankCardTerm', () => {
  expect(tests.tesBankCardTerm.test('12.19')).toBeTruthy()
  expect(tests.tesBankCardTerm.test('not a number')).toBeFalsy()
})

test('tesBankCardValidity', () => {
  const nextYear = new Date().getFullYear() - 1999
  expect(tests.tesBankCardValidity.test(`12.${nextYear}`)).toBeTruthy()
  expect(tests.tesBankCardValidity.test('12.19')).toBeFalsy()
})

test('testBankCardCVC', () => {
  expect(tests.testBankCardCVC.test(`121`)).toBeTruthy()
  expect(tests.testBankCardCVC.test('not a CVC')).toBeFalsy()
})

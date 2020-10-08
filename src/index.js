import { getAge } from './utils'

export const testPhoneNumber = {
  name: 'testPhoneNumber',
  test: (value) => /\+7\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}/.test(value),
  message: 'Неверный формат телефона'
}

export const testDate = {
  name: 'testDate',
  test: (value) => {
    if (!/^\d{2}\.\d{2}\.\d{4}$/.test(value)) return false

    var parts = value.split('.')
    var day = parseInt(parts[0], 10)
    var month = parseInt(parts[1], 10)
    var year = parseInt(parts[2], 10)

    if (year < 1000 || year > 3000 || month == 0 || month > 12) return false

    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
      monthLength[1] = 29

    return day > 0 && day <= monthLength[month - 1]
  },
  message: 'Неверный формат даты'
}

export const testFIO = {
  name: 'testFIO',
  test: (value) => /^[а-яА-ЯёЁa-zA-Z —.–/(//)/-]*$/.test(value),
  message: 'Неверный формат ФИО'
}

export const testPosition = {
  name: 'testPosition',
  test: (value) => /^[а-яА-ЯёЁa-zA-Z \d—.–/(//)/-]*$/.test(value),
  message: 'Неверный формат должности'
}

export const testEmail = {
  name: 'testEmail',
  test: (value) => /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(value),
  message: 'Неверный формат эл. почты'
}

export const testVINLetters = {
  name: 'testVINLetters',
  test: (value) =>
    typeof value === 'string' &&
    !value.includes('O') &&
    !value.includes('Q') &&
    !value.includes('I'),
  message: 'VIN номер не может содержать латинские буквы I, O, Q'
}

export const testVINLength = {
  name: 'testVINLength',
  test: (value) => /[A-HJ-NPR-Z0-9]{17}/.test(value),
  message: 'Неверный VIN-номер'
}

export const testPassportNumber = {
  name: 'testPassportNumber',
  test: (value) => /\d{2}-\d{2}\s\d{6}/.test(value),
  message: 'Неверный серия и номер паспорта'
}

export const testPassportCodeDep = {
  name: 'testPassportCodeDep',
  test: (value) => /\d{3}-\d{3}/.test(value),
  message: 'Неверный код подразделения'
}

export const testAge18 = {
  name: 'testAge18',
  test: (value) => {
    if (!/^\d{2}\.\d{2}\.\d{4}$/.test(value)) return false
    return getAge(value) >= 18
  },
  message: 'Вы не достигли 18 лет'
}

export const testAge21 = {
  name: 'testAge21',
  test: (value) => {
    if (!/^\d{2}\.\d{2}\.\d{4}$/.test(value)) return false
    return getAge(value) >= 21
  },
  message: 'Вы не достигли 21 года'
}

export const testPersonalINN = {
  name: 'testPersonalINN',
  test: (value) => {
    const inputNumber = String(value).split('')
    return (
      inputNumber.length == 12 &&
      inputNumber[10] ==
        ((7 * inputNumber[0] +
          2 * inputNumber[1] +
          4 * inputNumber[2] +
          10 * inputNumber[3] +
          3 * inputNumber[4] +
          5 * inputNumber[5] +
          9 * inputNumber[6] +
          4 * inputNumber[7] +
          6 * inputNumber[8] +
          8 * inputNumber[9]) %
          11) %
          10 &&
      inputNumber[11] ==
        ((3 * inputNumber[0] +
          7 * inputNumber[1] +
          2 * inputNumber[2] +
          4 * inputNumber[3] +
          10 * inputNumber[4] +
          3 * inputNumber[5] +
          5 * inputNumber[6] +
          9 * inputNumber[7] +
          4 * inputNumber[8] +
          6 * inputNumber[9] +
          8 * inputNumber[10]) %
          11) %
          10
    )
  },
  message: 'Неверный номер ИНН'
}

export const testLegalINN = {
  name: 'testLegalINN',
  test: (value) => {
    const inputNumber = String(value).split('')
    return (
      inputNumber.length == 10 &&
      inputNumber[9] ==
        ((2 * inputNumber[0] +
          4 * inputNumber[1] +
          10 * inputNumber[2] +
          3 * inputNumber[3] +
          5 * inputNumber[4] +
          9 * inputNumber[5] +
          4 * inputNumber[6] +
          6 * inputNumber[7] +
          8 * inputNumber[8]) %
          11) %
          10
    )
  },
  message: 'Неверный номер ИНН'
}

export const testKPP = {
  name: 'testKPP',
  test: (value) => /^\d{9}$/.test(value),
  message: 'КПП должен состоять из 9 цифр'
}

export const testBankCardNumber = {
  name: 'testBankCardNumber',
  test: (value) => /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(value),
  message: 'Неверный номер карты'
}

export const testBankCardTerm = {
  name: 'testBankCardTerm',
  test: (value) => /^([1-9]|1[0-2]).\d{2}$/.test(value),
  message: 'Неверный формат даты'
}

export const testBankCardValidity = {
  name: 'testBankCardValidity',
  test: (value) => {
    if (!/^([1-9]|1[0-2]).\d{2}$/.test(value)) return false
    const year = parseInt(String(new Date().getFullYear()).slice(2))
    const month = new Date().getMonth() + 1
    const [m, y] = value.split('.')
    return y > year ? true : y === year && m >= month ? true : false
  },
  message: 'Срок действия карты истек'
}

export const testBankCardCVC = {
  name: 'testBankCardCVC',
  test: (value) => /\d{3}/.test(value),
  message: 'Неверный CVC-код'
}

export const testLetterOfAuthorityNumber = {
  name: 'testLetterOfAuthorityNumber',
  test: (value) =>
    /^[а-яА-ЯёЁa-zA-Z\d#№.-]+(?: [а-яА-ЯёЁa-zA-Z\d#№.-]+)*$/.test(value),
  message: 'Неверный номер доверенности'
}

export const testDigitsOnly = {
  name: 'digitsOnly',
  test: (value) => /^\d*$/.test(value),
  message: 'Только цифры'
}

// TODO: check depending on BIC?
export const testPaymentAccount = {
  name: 'testPaymentAccount',
  test: (value) => /^(40702|40802)\d{15}$/.test(value),
  message: 'Неверный расчетный счет'
}

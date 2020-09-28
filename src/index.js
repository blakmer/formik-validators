export const testPhoneNumber = {
  name: 'testPhoneNumber',
  test: (value) => {
    return /\+7\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}/.test(value)
  },
  message: 'Указан не верный номер телефона'
}

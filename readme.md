# Validators function for JS

## INSTALATION

` npm i ui-validation`

## USE

Each validation case has follow signature:

```js
    {
        // unique name identifying the test
        name: string;
        // test function, determines schema validity
        test: (value: any) => boolean;
        // the validation error message
        message: string;
        // values passed to message for interpolation
        params: ?object;
        // mark the test as exclusive, meaning only one of the same can be active at once
        exclusive: boolean = false;
    }
```

### Examples:

```js
let max = 64
export const testAnything = {
  name: 'test',
  exclusive: true,
  params: { max },
  message: '${path} must be less than ${max} characters',
  test: (value) => value == null || value.length <= max
}
```

You can use default object provided library, but if you need you can override properties and customize validation object

### API

- `testPhoneNumber` - test mobile phone by pattern `+7 (000) 000 00 00`
- `testDate` - test date by format `DD.MM.YY`
- `testEmail` - test for email
- `testVINLetters` - test for characters [O, Q, I] in VIN
- `testVINLength` - test for length VIN (17 simbols)
- `testPassportNumber` - test Passport serical and number by pattern `11-11 111111`
- `testPassportCodeDep` - test code of department by pattern `111-111`
- `testAge18` - test date by age over 18
- `testAge21` - test date by age over 21
- `testPersonalINN` - test personal INN
- `testLegalINN` - test legal INN
- `tesBankCardNumber` - test card number by pattern `1111 1111 1111 1111`
- `tesBankCardTerm` - test format of card validity. Format - `MM.YY`
- `tesBankCardValidity` - test validity of card, when card expired
- `testBankCardCVC` - test CVC code by format `111`

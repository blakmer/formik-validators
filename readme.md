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

- `testPhoneNumber` - test mobile phone using pattern `+7 (000) 000 00 00`
- `testDate` - test date to match format `DD.MM.YY`
- `testEmail` - test for email
- `testVINLetters` - test for characters [O, Q, I] in VIN
- `testVINLength` - test VIN length (17 symbols)
- `testPassportNumber` - test Passport series and number using pattern `11-11 111111`
- `testPassportCodeDep` - test code of department using pattern `111-111`
- `testAge18` - test date (older than 18 y.o.)
- `testAge21` - test date (older than 21 y.o.)
- `testPersonalINN` - test personal INN
- `testLegalINN` - test legal INN
- `tesBankCardNumber` - test card number using pattern `1111 1111 1111 1111`
- `tesBankCardTerm` - test format of card validity. Format - `MM.YY`
- `tesBankCardValidity` - test validity of card, when card expired
- `testBankCardCVC` - test CVC code to macth format `111`
- `testFIO`- test name code using pattern `а-яА-ЯёЁa-zA-Z —.–/(//)/-`
- `testPosition`- test job position using pattern `а-яА-ЯёЁa-zA-Z \d—.–/(//)/-`
- `testKPP`- test KPP code using 9-digit pattern
- `testLetterOfAuthorityNumber`- test letter of authority
- `testDigitsOnly`- test for digits only
- `testPaymentAccount`- test payment account to start with 40702/40802 and contain 20 digits

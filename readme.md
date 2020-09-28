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
let max = 64;
export const testAnything = {
  name: "test",
  exclusive: true,
  params: { max },
  message: "${path} must be less than ${max} characters",
  test: (value) => value == null || value.length <= max,
};
```

You can use default object provided library, but if you need you can override properties and customize validation object

### API

- `testPhoneNumber` - test mobile phone by pattern `+7 (000) 000 00 00`

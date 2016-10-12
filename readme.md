# false-looking

> Helps validate if a property is either 'false' or false. Used for inconsistent json response data.

## Usage

```js
const isFalse = require('false-looking')
isFalse('false')
// => true
isFalse(undefined)
// => false
```

## API

### isFalse(value)

Validates if `value` is either `'false'` or `false`.

#### value

Type: `*`

## License

MIT © [Emil Johansson](http://emiljohansson.se)

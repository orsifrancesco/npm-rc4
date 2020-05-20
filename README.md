# npm-rc4

A list of useful `rc4` and `base64` functions.

![npm-rc4](https://user-images.githubusercontent.com/6490641/82446373-7401b280-9a9e-11ea-835b-7f6a75c55f65.gif "npm-rc4")

## Installing

Using npm:

```bash
$ npm install npm-rc4
```

## Node.js

```js
const { rc4, rc4Base64Encrypt, rc4Base64Decrypt, rc4Base64, isBase64 } = require('npm-rc4');
```

## ES6

```js
import { rc4, rc4Base64Encrypt, rc4Base64Decrypt, rc4Base64, isBase64 } from 'npm-rc4';
```

## Examples

```js
console.log(

	rc4(
		'this text is going to be encrypted',
		'your keword'
	)

);
// => ]}*g ÙÒo©ÌÜNXàÝâ­rÀÀÛÎÿ¸

console.log(

	rc4Base64Encrypt(
		'this text is going to be encrypted and encoded with base64',
		'your keword'
	)

);
// => XX0qG8KkZ8KgwoLDmRfDkm/CqcKTw4zDnMKfTljDoMOdw6LCrXLDgMKbZ8OAw5vDjh3Dv8KCwrhWw51mXsK9wprDk8Kkw6UMfn7CvknCr24DN8KxdsOSwqFrwpQ=

console.log(

	rc4Base64Decrypt(
		'XX0qG8KkZ8KgwoLDmRfDkm/CqcKQw4bDlsKDUAjDoMOXwqbDr3bCjsKaKcOHw4zDlALDr8KCwrhWw4thTsO1w5/Dn8Kmw7kNLS4=',
		'your keword'
	)

);
// => this text is decrypted and decoded with base64

console.log(

	rc4Base64(
		'this function understands if the string have to be decoded or encoded with base64',
		'your keword'
	)

);
// => XX0qG8KkdcKwwpTDjkPDknPDp8OUw5bDm8KVTArDp8OGwqPCoXPCk8OeYMOFwonDgwXDrsOHwq8Cw45hVMO6w5/DlcKmw7wNO27DsR7CpH9Lc8K2dMOOwqA4w4TCicO4T8KHAzNlw4RvOsOvwp/DgSlgw6swwr3CpC1Swq14

console.log(

	rc4Base64(
		'XX0qG8KkdcKwwpTDjkPDknPDp8OUw5bDm8KVTArDp8OGwqPCoXPCk8OeYMOFwonDgwXDrsOHwq8Cw45hVMO6w5/DlcKmw7wNO27DsR7CpH9Lc8K2dMOOwqA4w4TCicO4T8KHAzNlw4RvOsOvwp/DgSlgw6swwr3CpC1Swq14',
		'your keword'
	)
	
);
// => this function understands if the string have to be decoded or encoded with base64

console.log(

	isBase64('Y2lhbw==')
	
);
// => true

console.log(

	isBase64('this string is not base64 of course')
	
);
// => false

```

That's it :)

## Demo

[Just a example project where you can see npm-rc4 in action..](https://passwordonce.com)

## License

Licensed under MIT
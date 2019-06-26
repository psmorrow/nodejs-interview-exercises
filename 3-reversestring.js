const assert = require('assert');

describe('Reverse String', () => {
	it('should reverse alpha string', () => {
		assert.strictEqual(getReversedString("abcdefghijklmnopqrstuvwxyz"), "zyxwvutsrqponmlkjihgfedcba");
	});

	it('should reverse numeric string', () => {
		assert.strictEqual(getReversedString("1234567890"), "0987654321");
	});

	it('should reverse special character string', () => {
		assert.strictEqual(getReversedString("~`!@#$%^&*()_-+  ={[}]|\\:;\"'<,>.?/"), "/?.>,<'\";:\\|]}[{=  +-_)(*&^%$#@!`~");
	});

	it('should reverse mixed case string', () => {
		assert.strictEqual(getReversedString("AbCdEfGhIjKlMnOpQrStUvWxYz"), "zYxWvUtSrQpOnMlKjIhGfEdCbA");
	});

	it('should reverse single character string', () => {
		assert.strictEqual(getReversedString("A"), "A");
	});

	it('should reverse empty string', () => {
		assert.strictEqual(getReversedString(""), "");
	});
});

function getReversedString(value) {
	let reversed = [];

	// loop backwards to get the string characters in reverse order
	for (let i = value.length - 1, j = 0; i >= 0; --i, ++j) {
		// add characters to array in reverse order
		reversed[j] = value[i];
	}

	// concat or join the array characters together into a string
	return reversed.join("");
}

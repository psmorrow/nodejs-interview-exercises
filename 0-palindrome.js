const assert = require('assert');

describe('Palindrome', () => {
	it('should evaulate "Mississippi" to false', () => {
		assert.strictEqual(isPalindrome("Mississippi"), false);
	});

	it('should evaulate "2002" to true', () => {
		assert.strictEqual(isPalindrome("2002"), true);
	});

	it('should evaulate "Anna" to true', () => {
		assert.strictEqual(isPalindrome("Anna"), true);
	});

	it('should evaulate "Level" to true', () => {
		assert.strictEqual(isPalindrome("Level"), true);
	});

	it('should evaulate "Too bad I hid a boot" to true', () => {
		assert.strictEqual(isPalindrome("Too bad I hid a boot"), true);
	});
});

function isPalindrome(value) {
	let reverse = '';
	for (let i = value.length-1; i >= 0; --i) {
		reverse += value[i];
	}
	return (value.replace(/\s/g, '').toLowerCase() === reverse.replace(/\s/g, '').toLowerCase());
}

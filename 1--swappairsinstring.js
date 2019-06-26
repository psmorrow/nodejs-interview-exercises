const assert = require('assert');

describe('Swap Pairs in String', () => {
	it('should swap alpha string', () => {
		assert.strictEqual(getSwappedPairs("abcdefghijklmnopqrstuvwxyz"), "badcfehgjilknmporqtsvuxwzy");
	});

	it('should swap numeric string', () => {
		assert.strictEqual(getSwappedPairs("1234567890"), "2143658709");
	});

	it('should swap odd length string', () => {
		assert.strictEqual(getSwappedPairs("AbCdE"), "bAdCE");
	});

	it('should swap single character string', () => {
		assert.strictEqual(getSwappedPairs("A"), "A");
	});

	it('should swap empty string', () => {
		assert.strictEqual(getSwappedPairs(""), "");
	});
});

function getSwappedPairs(value) {
	// convert the string to an array
	const characters = value.split('');

	// loop every other character until the next to the end
	for (let i = 0; i < characters.length-1; i += 2) {
		// swap the pair of characters
		const temp = characters[i];
		characters[i] = characters[i+1];
		characters[i+1] = temp;
	}

 	// concatinate the array together to create a string
	return characters.join('');
}

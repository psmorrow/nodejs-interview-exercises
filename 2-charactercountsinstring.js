const assert = require('assert');

describe('Character Counts in String', () => {
	it('should get in alpha string', () => {
		assert.deepStrictEqual(getCharacterCountsInString("aabcdefdfghiajklmnaolpqqqarstuvwxuyuz"),
		{ "a": 5, "b": 1, "c": 1, "d": 2, "e": 1, "f": 2, "g": 1, "h": 1, "i": 1, "j": 1, "k": 1, "l": 2, "m": 1, "n": 1, "o": 1, "p": 1, "q": 3, "r": 1, "s": 1, "t": 1, "u": 3, "v": 1, "w": 1, "x": 1, "y": 1, "z": 1 });
	});

	it('should get in numeric string', () => {
		assert.deepStrictEqual(getCharacterCountsInString("12134555556708190"),
		{ "1": 3, "2": 1, "3": 1, "4": 1, "5": 5, "6": 1, "7": 1, "8": 1, "9": 1, "0": 2 });
	});

	it('should get in single character string', () => {
		assert.deepStrictEqual(getCharacterCountsInString("A"),
		{ "A": 1 });
	});

	it('should get in empty string', () => {
		assert.deepStrictEqual(getCharacterCountsInString(""),
			{ });
	});
});

function getCharacterCountsInString(value) {
	const counts = {};

	// loop through the string
	for (let i = 0; i < value.length; ++i) {
		// keep a count of elements in the counts object
		const key = value[i];
		const count = counts[key] || 0;
		counts[key] = count + 1;
	}

	return counts;
}

const assert = require('assert');

describe('Reverse Array (inline)', () => {
	it('should reverse alpha array', () => {
		assert.deepStrictEqual(getReversedArray(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]),
			["z","y","x","w","v","u","t","s","r","q","p","o","n","m","l","k","j","i","h","g","f","e","d","c","b","a"]);
	});

	it('should reverse numeric character array', () => {
		assert.deepStrictEqual(getReversedArray(["1","2","3","4","5","6","7","8","9","0"]),
			["0","9","8","7","6","5","4","3","2","1"]);
	});

	it('should reverse numeric array', () => {
		assert.deepStrictEqual(getReversedArray([123,321,456,9,47,678,2,67,222,897]), [897,222,67,2,678,47,9,456,321,123]);
	});

	it('should reverse odd element count', () => {
		assert.deepStrictEqual(getReversedArray(["A","b","C"]), ["C","b","A"]);
	});

	it('should reverse single element array', () => {
		assert.deepStrictEqual(getReversedArray(["A"]), ["A"]);
	});

	it('should reverse empty string', () => {
		assert.deepStrictEqual(getReversedArray([]), []);
	});
});

function getReversedArray(value) {
	// loop half way through the array, keeping an index from the beginning and also the end
	// if you have an odd element count the halp way mark will be the same element for both, no need to swap it
	for (let i = 0, j = value.length-1; i < value.length / 2 && i !== j; ++i, --j) {
		// swap the beginning and ending elements
		const temp = value[i];
		value[i] = value[j];
		value[j] = temp;
	}

	return value;
}

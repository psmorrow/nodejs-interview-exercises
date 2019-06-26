const assert = require('assert');

describe('Min and Max in Array', () => {
	it('should get in alpha array', () => {
		assert.deepStrictEqual(getMinAndMaxInArray(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]),
			{ min: "a", max: "z" });
	});

	it('should get in ordered numeric array', () => {
		assert.deepStrictEqual(getMinAndMaxInArray([1,2,3,4,5,6,7,8,9,0]),
			{ min: 0, max: 9 });
	});

	it('should get in mixed numeric array', () => {
		assert.deepStrictEqual(getMinAndMaxInArray([123,321,456,9,47,678,2,67,222,897]),
			{ min: 2, max: 897 });
	});

	it('should get in positive and negative mixed numeric array', () => {
		assert.deepStrictEqual(getMinAndMaxInArray([-10,32,-76,-9,23,0,-1,-2,1,8,43]),
			{ min: -76, max: 43 });
	});

	it('should get with odd element countswap single character string', () => {
		assert.deepStrictEqual(getMinAndMaxInArray(["A","b","C"]),
			{ min: "A", max: "b" });
	});

	it('should get for single element array', () => {
		assert.deepStrictEqual(getMinAndMaxInArray(["A"]),
			{ min: "A", max: "A" });
	});

	it('should get for empty string', () => {
		assert.deepStrictEqual(getMinAndMaxInArray([]),
			{ min: null, max: null });
	});
});

function getMinAndMaxInArray(value) {
	let min = null;
	let max = null;

	// loop through the array
	for (let i = 0; i < value.length; ++i) {
		// compare the current element value to the min
		if (min === null || value[i] < min) {
			min = value[i];
		}
		// compare the current element value to the max
		if (max === null || value[i] > max) {
			max = value[i];
		}
	}

	return { min, max };
}

const assert = require('assert');

describe('Get Duplicate Elements in Array', () => {
	it('should get in alpha array', () => {
		assert.deepStrictEqual(getDuplicatesInArray(["a","a","b","c","d","e","f","d","f","g","h","i","a","j","k","l","m","n","a","o","l","p","q","q","q","a","r","s","t","u","v","w","x","u","y","u","z"]),
			{ "string_a": 5, "string_d": 2, "string_f": 2, "string_l": 2, "string_q": 3, "string_u": 3 });
	});

	it('should get in numeric array', () => {
		assert.deepStrictEqual(getDuplicatesInArray([1,2,1,3,4,5,5,5,5,5,6,7,0,8,1,9,0]),
			{ "number_1": 3, "number_5": 5, "number_0": 2 });
	});

	it('should get in mixed datatype array', () => {
		assert.deepStrictEqual(getDuplicatesInArray([1,"1",2,1,3,"1",4,5,5,5,5,5,6,"6",7,0,"6",8,1,9,"1",0]),
			{ "number_1": 3, "string_1": 3, "number_5": 5, "string_6": 2, "number_0": 2 });
	});
});

function getDuplicatesInArray(value) {
	const duplicates = {};

	// loop through the array
	for (let i = 0; i < value.length; ++i) {
		// keep a count of elements in the duplicates object
		const element = value[i];
		// treat elements different based upon their data type - add the datatype into the key
		const key = `${typeof element}_${element}`;
		const count = duplicates[key] || 0;
		duplicates[key] = count + 1;
	}

	// loop and prune from duplicates object single elements
	for (const key in duplicates) {
		// don't include keys from the prototypical chain
		if (!duplicates.hasOwnProperty(key)) continue;

		// if a single element delete it!
		if (duplicates[key] === 1) {
			delete duplicates[key];
		}
	}

	return duplicates;
}

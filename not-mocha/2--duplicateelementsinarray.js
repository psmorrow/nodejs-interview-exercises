console.log("Duplicate Elements in Array");
console.log();

(function runTestCases() {
	let successes = 0;
	let total = 0;
	function checkResult(value, results, expect) {
		function objectsEqual(a1, a2) {
			return JSON.stringify(a1) === JSON.stringify(a2);
		}

		const equal = objectsEqual(expect, results);

		console.log(`value = [${value}]`);
		console.log(`results = [${JSON.stringify(results)}]`);
		console.log(`expect = [${equal ? "success" : "FAILURE"}]`);
		console.log();

		if (equal) {
			++successes;
		}
		++total;
	}
	function outputResults() {
		console.log(`results = [${successes} of ${total} ${(total === successes ? "success" : "FAILURE")}]`);
		console.log();
	}

	// letters
	const v1 = ["a","a","b","c","d","e","f","d","f","g","h","i","a","j","k","l","m","n","a","o","l","p","q","q","q","a","r","s","t","u","v","w","x","u","y","u","z"];
	const s1 = getDuplicatesInArray(v1);
	checkResult(v1, s1, { "string_a": 5, "string_d": 2, "string_f": 2, "string_l": 2, "string_q": 3, "string_u": 3 });

	// numbers
	const v2 = [1,2,1,3,4,5,5,5,5,5,6,7,0,8,1,9,0];
	const s2 = getDuplicatesInArray(v2);
	checkResult(v2, s2, { "number_1": 3, "number_5": 5, "number_0": 2 });

	// mixed data types
	const v3 = [1,"1",2,1,3,"1",4,5,5,5,5,5,6,"6",7,0,"6",8,1,9,"1",0];
	const s3 = getDuplicatesInArray(v3);
	checkResult(v3, s3, { "number_1": 3, "string_1": 3, "number_5": 5, "string_6": 2, "number_0": 2 });

	outputResults();
})();

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

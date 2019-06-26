console.log("Character counts in String");
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
	const v1 = "aabcdefdfghiajklmnaolpqqqarstuvwxuyuz";
	const s1 = getCharacterCountsInString(v1);
	checkResult(v1, s1, { "a": 5, "b": 1, "c": 1, "d": 2, "e": 1, "f": 2, "g": 1, "h": 1, "i": 1, "j": 1, "k": 1, "l": 2, "m": 1, "n": 1, "o": 1, "p": 1, "q": 3, "r": 1, "s": 1, "t": 1, "u": 3, "v": 1, "w": 1, "x": 1, "y": 1, "z": 1 });

	// numbers
	const v2 = "12134555556708190";
	const s2 = getCharacterCountsInString(v2);
	checkResult(v2, s2, { "1": 3, "2": 1, "3": 1, "4": 1, "5": 5, "6": 1, "7": 1, "8": 1, "9": 1, "0": 2 });

	// single character
	const v3 = "A";
	const s3 = getCharacterCountsInString(v3);
	checkResult(v3, s3, { "A": 1 });

	// no characters
	const v4 = "";
	const s4 = getCharacterCountsInString(v4);
	checkResult(v4, s4, { });

	outputResults();
})();

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

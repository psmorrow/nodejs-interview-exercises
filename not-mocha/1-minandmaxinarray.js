console.log("Min and Max in Array");
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
	const v1 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	const s1 = getMinAndMaxInArray(v1);
	checkResult(v1, s1, { min: "a", max: "z" });

	// numbers
	const v2 = [1,2,3,4,5,6,7,8,9,0];
	const s2 = getMinAndMaxInArray(v2);
	checkResult(v2, s2, { min: 0, max: 9 });

	// mixed numbers
	const v3 = [123,321,456,9,47,678,2,67,222,897];
	const s3 = getMinAndMaxInArray(v3);
	checkResult(v3, s3, { min: 2, max: 897 });

	// odd element count
	const v4 = ["A","b","C"];
	const s4 = getMinAndMaxInArray(v4);
	checkResult(v4, s4, { min: "A", max: "b" });

	// a single element
	const v5 = ["A"];
	const s5 = getMinAndMaxInArray(v5);
	checkResult(v5, s5, { min: "A", max: "A" });

	// no elements
	const v6 = [];
	const s6 = getMinAndMaxInArray(v6);
	checkResult(v6, s6, { min: null, max: null });

	outputResults();
})();

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

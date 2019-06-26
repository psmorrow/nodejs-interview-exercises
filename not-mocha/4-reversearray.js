console.log("Reverse Array");
console.log();

(function runTestCases() {
	let successes = 0;
	let total = 0;
	function checkResult(value, reversed, expect) {
		function arraysEqual(a1, a2) {
			return JSON.stringify(a1) === JSON.stringify(a2);
		}

		const equal = arraysEqual(expect, reversed);

		console.log(`value = [${value}]`);
		console.log(`reversed = [${reversed}]`);
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
	const s1 = getReversedArray(v1);
	checkResult(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
				s1,
				["z","y","x","w","v","u","t","s","r","q","p","o","n","m","l","k","j","i","h","g","f","e","d","c","b","a"]);

	// numbers
	const v2 = ["1","2","3","4","5","6","7","8","9","0"];
	const s2 = getReversedArray(v2);
	checkResult(["1","2","3","4","5","6","7","8","9","0"], s2, ["0","9","8","7","6","5","4","3","2","1"]);

	// odd element count
	const v3 = ["A","b","C"];
	const s3 = getReversedArray(v3);
	checkResult(["A","b","C"], s3, ["C","b","A"]);

	// a single element
	const v4 = ["A"];
	const s4 = getReversedArray(v4);
	checkResult(["A"], s4, ["A"]);

	// no elements
	const v5 = [];
	const s5 = getReversedArray(v5);
	checkResult([], s5, []);

	outputResults();
})();

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

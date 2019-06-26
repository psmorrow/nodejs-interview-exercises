console.log("Swap Pairs in String");
console.log();

(function runTestCases() {
	let successes = 0;
	let total = 0;
	function checkResult(value, swapped, expect) {
		console.log(`value = [${value}]`);
		console.log(`reversed = [${swapped}]`);
		console.log(`expect = [${(expect === swapped ? "success" : "FAILURE")}]`);
		console.log();

		if (expect === swapped) {
			++successes;
		}
		++total;
	}
	function outputResults() {
		console.log(`results = [${successes} of ${total} ${(total === successes ? "success" : "FAILURE")}]`);
		console.log();
	}

	const v1 = "abcdefghijklmnopqrstuvwxyz";
	const s1 = getSwappedPairs(v1);
	checkResult(v1, s1, "badcfehgjilknmporqtsvuxwzy");

	const v2 = "1234567890";
	const s2 = getSwappedPairs(v2);
	checkResult(v2, s2, "2143658709");

	const v3 = "AbCdE";
	const s3 = getSwappedPairs(v3);
	checkResult(v3, s3, "bAdCE");

	const v4 = "A";
	const s4 = getSwappedPairs(v4);
	checkResult(v4, s4, "A");

	const v5 = "";
	const s5 = getSwappedPairs(v5);
	checkResult(v5, s5, "");

	outputResults();
})();

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

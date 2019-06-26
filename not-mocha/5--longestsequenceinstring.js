console.log("Get Longest Sequence in String");
console.log();

(function runTestCases() {
	let successes = 0;
	let total = 0;
	function checkResult(value, sequence, expect) {
		console.log(`value = [${value}]`);
		console.log(`sequence = [${sequence}]`);
		console.log(`expect = [${(expect === sequence ? "success" : "FAILURE")}]`);
		console.log();

		if (expect === sequence) {
			++successes;
		}
		++total;
	}
	function outputResults() {
		console.log(`results = [${successes} of ${total} ${(total === successes ? "success" : "FAILURE")}]`);
		console.log();
	}

	const v1 = "abbbccdeeffffffghijkkllmnoopqqrrrrsstuvwwxyzz";
	const s1 = getLongestSequence(v1);
	checkResult(v1, s1, "ffffff");

	const v2 = "11222233455566777899900";
	const s2 = getLongestSequence(v2);
	checkResult(v2, s2, "2222");

	const v3 = "~`!@#$%^&*()_-+  ={[}]|\\:;\"'<,>.?/";
	const s3 = getLongestSequence(v3);
	checkResult(v3, s3, "  ");

	const v4 = "AbbbCCdEEffFffGhIjKKllMnOOpQQrrrSStUvWWxYzz";
	const s4 = getLongestSequence(v4);
	checkResult(v4, s4, "bbb");

	const v5 = "A";
	const s5 = getLongestSequence(v5);
	checkResult(v5, s5, "A");

	const v6 = "";
	const s6 = getLongestSequence(v6);
	checkResult(v6, s6, "");

	const v7 = "abbbccdeefffffghijkkllmnoopqqqqqrrrsstuvwwxyzz";
	const s7 = getLongestSequence(v7);
	checkResult(v7, s7, "fffff");

	const v8 = "The name 'Morrow' is used a surname of several origins, although originally the surname is of French Huguenot origin. In English it is derived from 'moor-row', the houses along a moor. It is also of Gaelic origin, it is one of the original Gaelic names from which it is derived is 'Mac Muireadhaigh', pronounced 'MacMurray'.";
	const s8 = getLongestSequence(v8);
	checkResult(v8, s8, "rr");

	outputResults();
})();

function getLongestSequence(value) {
	let currentPosition = -1;
	let currentLength = -1;
	let longestPosition = -1;
	let longestLength = -1;

	for (let i = 0; i < value.length; ++i) {
		// is the previous and current chars the same?
		if (i > 0 && value[i-1] === value[i]) {
			// the previous and current chars are the same so increament the current length
			++currentLength;
		} else {
			// is the current longer than the previous?
			if (currentPosition > longestPosition && currentLength > longestLength) {
				// the current position and length are greater than the longest so update the longest
				longestPosition = currentPosition;
				longestLength = currentLength;
			}

			// the previous and current chars are NOT the same, so restart tracking the current
			currentPosition = i;
			currentLength = 1;
		}
	}

	// is the current longer than the previous?
	if (currentPosition > longestPosition && currentLength > longestLength)
	{
		// the current position and length are greater than the longest so update the longest
		longestPosition = currentPosition;
		longestLength = currentLength;
	}

	// is the longest found?
	if (longestPosition !== -1 && longestLength !== -1) {
		// extract the longest sequence
		return value.substr(longestPosition, longestLength);
	}
	return "";
}

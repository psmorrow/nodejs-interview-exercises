console.log("Reverse String");
console.log();

(function runTestCases() {
	let successes = 0;
	let total = 0;
	function checkResult(value, reversed, expect) {
		console.log(`value = [${value}]`);
		console.log(`reversed = [${reversed}]`);
		console.log(`expect = [${(expect === reversed ? "success" : "FAILURE")}]`);
		console.log();

		if (expect === reversed) {
			++successes;
		}
		++total;
	}
	function outputResults() {
		console.log(`results = [${successes} of ${total} ${(total === successes ? "success" : "FAILURE")}]`);
		console.log();
	}

	const v1 = "abcdefghijklmnopqrstuvwxyz";
	const s1 = getReversedString(v1);
	checkResult(v1, s1, "zyxwvutsrqponmlkjihgfedcba");

	const v2 = "1234567890";
	const s2 = getReversedString(v2);
	checkResult(v2, s2, "0987654321");

	const v3 = "~`!@#$%^&*()_-+  ={[}]|\\:;\"'<,>.?/";
	const s3 = getReversedString(v3);
	checkResult(v3, s3, "/?.>,<'\";:\\|]}[{=  +-_)(*&^%$#@!`~");

	const v4 = "AbCdEfGhIjKlMnOpQrStUvWxYz";
	const s4 = getReversedString(v4);
	checkResult(v4, s4, "zYxWvUtSrQpOnMlKjIhGfEdCbA");

	const v5 = "A";
	const s5 = getReversedString(v5);
	checkResult(v5, s5, "A");

	const v6 = "";
	const s6 = getReversedString(v6);
	checkResult(v6, s6, "");

	outputResults();
})();

function getReversedString(value) {
	let reversed = [];

	// loop backwards to get the string characters in reverse order
	for (let i = value.length - 1, j = 0; i >= 0; --i, ++j) {
		// add characters to array in reverse order
		reversed[j] = value[i];
	}

	// concat or join the array characters together into a string
	return reversed.join("");
}

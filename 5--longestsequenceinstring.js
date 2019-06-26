const assert = require('assert');

describe('Get Longest Sequence in String', () => {
	it('should get in alpha string', () => {
		assert.strictEqual(getLongestSequence('abbbccdeeffffffghijkkllmnoopqqrrrrsstuvwwxyzz'), 'ffffff');
	});

	it('should get in numeric string', () => {
		assert.strictEqual(getLongestSequence('11222233455566777899900'), '2222');
	});

	it('should get in special character string', () => {
		assert.strictEqual(getLongestSequence('~`!@#$%^&*()_-+  ={[}]|\\:;"\'<,>.?/'), '  ');
	});

	it('should get in mixed case alpha string', () => {
		assert.strictEqual(getLongestSequence('AbbbCCdEEffFffGhIjKKllMnOOpQQrrrSStUvWWxYzz'), 'bbb');
	});

	it('should get at the beginning of a string', () => {
		assert.strictEqual(getLongestSequence('AAAAAbbbCCdEEffFffGhIjKKllMnOOpQQrrrSStUvWWxYzz'), 'AAAAA');
	});

	it('should get at the end of a string', () => {
		assert.strictEqual(getLongestSequence('AbCCdEEffFffGhIjKKllMnOOpQQrrrSStUvWWxYzzzzz'), 'zzzzz');
	});

	it('should get in single character string', () => {
		assert.strictEqual(getLongestSequence('A'), 'A');
	});

	it('should get in empty string', () => {
		assert.strictEqual(getLongestSequence(''), '');
	});
});

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

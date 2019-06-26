const assert = require('assert');

describe('Power', () => {
	it('should evaulate 2^0 to 1', () => {
		assert.strictEqual(power(2, 0), 1);
	});

	it('should evaulate 2^1 to 2', () => {
		assert.strictEqual(power(2, 1), 2);
	});

	it('should evaulate 2^2 to 4', () => {
		assert.strictEqual(power(2, 2), 4);
	});

	it('should evaulate 2^-1 to .5', () => {
		assert.strictEqual(power(2, -1), .5);
	});

	it('should evaulate 2^-2 to .25', () => {
		assert.strictEqual(power(2, -2), .25);
	});

	it('should evaulate 3^7 to 2187', () => {
		assert.strictEqual(power(3, 7), 2187);
	});

	it('should evaulate 5^-3 to .008', () => {
		assert.strictEqual(power(5, -3), .008);
	});
});

// the solution doesn't have to account for fractional powers

function _power(base, exponent) {
	return Math.pow(base, exponent);
}

function power(base, exponent) {
	if (exponent < 0) {
		base = 1/base;
		exponent = -exponent;
	}

	let power = 1;
	for (let i = 1; i <= exponent; ++i) {
		power *= base;
	}

	return (parseInt(power, 10) === power ? power : parseFloat(power.toFixed(5)));
	//return (power%1 === 0 ? power : +(power.toFixed(5)));
}

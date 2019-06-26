const assert = require('assert');

describe('Factorial', () => {
	it('should evaulate 0 to 1', () => {
		assert.strictEqual(factorial(0), 1);
	});

	it('should evaulate 1 to 1', () => {
		assert.strictEqual(factorial(1), 1);
	});

	it('should evaulate 2 to 2', () => {
		assert.strictEqual(factorial(2), 2);
	});

	it('should evaulate 3 to 6', () => {
		assert.strictEqual(factorial(3), 6);
	});

	it('should evaulate 4 to 24', () => {
		assert.strictEqual(factorial(4), 24);
	});

	it('should evaulate 5 to 120', () => {
		assert.strictEqual(factorial(5), 120);
	});

	it('should evaulate 10 to 3628800', () => {
		assert.strictEqual(factorial(10), 3628800);
	});

	it('should evaulate 15 to 1307674368000', () => {
		assert.strictEqual(factorial(15), 1307674368000);
	});
});

function factorial(value) {
	let factorial = 1;
	for (let i = 2; i <= value; ++i) {
		factorial *= i;
	}
	return factorial;
}

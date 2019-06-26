const assert = require('assert');

describe('Fibonacci', () => {
	it('should evaulate 0 to 0', () => {
		assert.strictEqual(fibonacci(0), 0);
	});

	it('should evaulate 1 to 1', () => {
		assert.strictEqual(fibonacci(1), 1);
	});

	it('should evaulate 2 to 1', () => {
		assert.strictEqual(fibonacci(2), 1);
	});

	it('should evaulate 3 to 2', () => {
		assert.strictEqual(fibonacci(3), 2);
	});

	it('should evaulate 4 to 3', () => {
		assert.strictEqual(fibonacci(4), 3);
	});

	it('should evaulate 5 to 5', () => {
		assert.strictEqual(fibonacci(5), 5);
	});

	it('should evaulate 10 to 55', () => {
		assert.strictEqual(fibonacci(10), 55);
	});

	it('should evaulate 15 to 610', () => {
		assert.strictEqual(fibonacci(15), 610);
	});
});

function _fibonacci(value) {
	let fibonacci = [0,1];

	for (let i = fibonacci.length; i <= value; ++i) {
		fibonacci[i] = fibonacci[i-2] + fibonacci[i-1];
	}

	return fibonacci[value];
}

function fibonacci(value) {
	let value1 = 0;
	let value2 = 1;

	let fibonacci = (value === 0 ? value1 : value2);

	for (let i = 2; i <= value; ++i) {
		fibonacci = value1 + value2;

		value1 = value2;
		value2 = fibonacci;
	}

	return fibonacci;
}

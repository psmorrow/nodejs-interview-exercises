const assert = require('assert');

describe('QuickSort', () => {
	it('should sort [123]', () => {
		assert.deepStrictEqual(quicksort([123]), [123]);
	});

	it('should sort [1,2]', () => {
		assert.deepStrictEqual(quicksort([1,2]), [1,2]);
	});

	it('should sort [3,1]', () => {
		assert.deepStrictEqual(quicksort([3,1]), [1,3]);
	});

	it('should sort [1,3,2,0]', () => {
		assert.deepStrictEqual(quicksort([1,3,2,0]), [0,1,2,3]);
	});

	it('should sort [11,8,14,3,6,2,7]', () => {
		assert.deepStrictEqual(quicksort([11,8,14,3,6,2,7]), [2,3,6,7,8,11,14]);
	});

	it('should sort [11,8,14,3,6,2,1,7]', () => {
		assert.deepStrictEqual(quicksort([11,8,14,3,6,2,1, 7]), [1,2,3,6,7,8,11,14]);
	});

	it('should sort [16,11,9,7,6,5,3,2]', () => {
		assert.deepStrictEqual(quicksort([16,11,9,7,6,5,3,2]), [2,3,5,6,7,9,11,16]);
	});

	it('should sort [1,3,-1,2,0]', () => {
		assert.deepStrictEqual(quicksort([1,3,-1,2,0]), [-1,0,1,2,3]);
	});
});

function quicksort(items, left, right) {
	if (items.length > 1) {
		left = typeof left !== "number" ? 0 : left;
		right = typeof right !== "number" ? items.length - 1 : right;

		const index = partition(items, left, right);

		if (left < index - 1) {
			quicksort(items, left, index - 1);
		}

		if (index < right) {
			quicksort(items, index, right);
		}
	}

	return items;
}

function partition(items, left, right) {
	const pivot = items[Math.floor((right + left) / 2)];
	let i = left;
	let j = right;

	while (i <= j) {
		while (items[i] < pivot) {
			++i;
		}

		while (pivot < items[j]) {
			--j;
		}

		if (i <= j) {
			swap(items, i++, j--);
		}
	}

	return i;
}

function swap(items, firstIndex, secondIndex) {
	if (firstIndex !== secondIndex) {
		const temp = items[firstIndex];
		items[firstIndex] = items[secondIndex];
		items[secondIndex] = temp;
	}
}

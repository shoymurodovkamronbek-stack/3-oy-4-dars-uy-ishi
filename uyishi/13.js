// 13. Ikkita mustaqil counter yarating.
function createCounter(start) {
	let count = start;

	return function () {
		return count++;
	};
}

let first = createCounter(1);
let second = createCounter(10);

console.log(first());
console.log(first());
console.log(second());
console.log(second());
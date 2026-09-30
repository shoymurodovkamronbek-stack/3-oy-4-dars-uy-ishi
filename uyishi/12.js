// 12. Berilgan sondan boshlanadigan counter yarating.
let start = 5;

function createCounter(value) {
	let count = value;

	return function () {
		return count++;
	};
}

let counter = createCounter(start);

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
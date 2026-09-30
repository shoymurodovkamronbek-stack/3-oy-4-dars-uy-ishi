// 14. Closure yordamida sonlarni ketma ket yiging.
let a = 5;
let b = 10;
let c = 15;

function createSum() {
	let total = 0;

	return function (value) {
		total += value;
		return total;
	};
}

let sum = createSum();

console.log(sum(a));
console.log(sum(b));
console.log(sum(c));
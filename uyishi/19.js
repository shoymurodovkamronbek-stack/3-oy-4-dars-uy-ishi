// 19. Closure yordamida maksimum sonni saqlang.
let a = 5;
let b = 12;
let c = 7;
let d = 20;

function createMax() {
	let maximum = -Infinity;

	return function (value) {
		if (value > maximum) {
			maximum = value;
		}

		return maximum;
	};
}

let max = createMax();

console.log(max(a));
console.log(max(b));
console.log(max(c));
console.log(max(d));
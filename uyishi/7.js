// 7. Closure yordamida ikkita sonni ko‘paytiring.
let a = 4;
let b = 6;

function createMultiplier(a) {
	return function (b) {
		return a * b;
	};
}

let multiply = createMultiplier(a);

console.log(multiply(b));
// 6. Closure yordamida ikkita sonni qo‘shing.
let a = 5;
let b = 3;

function createAdder(a) {
	return function (b) {
		return a + b;
	};
}

let add = createAdder(a);

console.log(add(b));
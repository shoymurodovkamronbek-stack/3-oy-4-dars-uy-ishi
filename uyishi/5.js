// 5. Closure yordamida limit qiymatini saqlang va sonni tekshiring.

let limit = 50;
let number = 70;

function createChecker(limit) {
	return function (number) {
		return number > limit;
	};
}

let check = createChecker(limit);

console.log(check(number));
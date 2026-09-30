// 17. Closure yordamida ismni saqlang.
let name = "Ali";

function createGreeting(name) {
	return function () {
		return "Hello, " + name;
	};
}

let greeting = createGreeting(name);

console.log(greeting());
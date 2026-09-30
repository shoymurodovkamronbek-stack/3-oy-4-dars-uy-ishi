// 8. Closure yordamida password qiymatini saqlang.
let password = 1234;

function createPassword(password) {
	return function () {
		return password;
	};
}

let getPassword = createPassword(password);

console.log(getPassword());
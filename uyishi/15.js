// 15. Closure yordamida balansdan sonlarni ayiring.
let balance = 100;
let a = 20;
let b = 30;

function createBalance(start) {
	let balance = start;

	return function (value) {
		balance -= value;
		return balance;
	};
}

let account = createBalance(balance);

console.log(account(a));
console.log(account(b));
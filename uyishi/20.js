// 20. Closure yordamida bank balansini boshqaring.
let balance = 1000;
let deposit = 500;
let withdraw = 300;

function createBank(balance) {
	return {
		deposit(value) {
			balance += value;
		},

		withdraw(value) {
			balance -= value;
		},

		getBalance() {
			return balance;
		}
	};
}

let bank = createBank(balance);

bank.deposit(deposit);
bank.withdraw(withdraw);

console.log(bank.getBalance());
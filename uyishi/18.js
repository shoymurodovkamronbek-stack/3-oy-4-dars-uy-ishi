// 18. Closure yordamida mahsulotga chegirma qo‘llang.
let price = 100000;
let percent = 20;

function createDiscount(percent) {
	return function (price) {
		return price - price * percent / 100;
	};
}

let discount = createDiscount(percent);

console.log(discount(price));
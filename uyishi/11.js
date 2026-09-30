// 11. Ichki funksiya orqali tashqi x qiymatini qaytaring.
let x = 20;

function outer() {
	function inner() {
		return x;
	}

	return inner();
}

console.log(outer());
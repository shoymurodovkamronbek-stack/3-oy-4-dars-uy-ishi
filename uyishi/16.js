// 16. Global, tashqi va ichki scope'dagi x qiymatlarini tekshiring.
let x = 10;

function outer() {
	let x = 20;

	function inner() {
		let x = 30;
		return x;
	}

	return inner();
}

console.log(outer());
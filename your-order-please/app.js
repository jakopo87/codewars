/* http://www.codewars.com/kata/your-order-please */
function order(words) {
	var r = [];
	words.split(" ").map(function (n) {
		r[n.match(/\d/g) - 1] = n;
	});
	return r.join(" ");
}
/* ----- */
console.log(order("is2 Thi1s T4est 3a") === "Thi1s is2 3a T4est")
console.log(order("4of Fo1r pe6ople g3ood th5e the2") === "Fo1r the2 g3ood 4of th5e pe6ople")
console.log(order("") === "")
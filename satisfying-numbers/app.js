/* http://www.codewars.com/kata/satisfying-numbers */
function smallest(n) {
	var s = n, i = n - 1;
	while (i > 1) {
		if (s % i > 0) {
			s += n;
			i = n;
		} else {
			--i;
		}
	}
	return s;
}
/* ----- */
console.log(smallest(1) === 1);
console.log(smallest(2) === 2);
console.log(smallest(3) === 6);
console.log(smallest(4) === 12);
console.log(smallest(5) === 60);
console.log(smallest(6) === 60);
console.log(smallest(7) === 420);
console.log(smallest(8) === 840);
console.log(smallest(9) === 2520);
console.log(smallest(10) === 2520);
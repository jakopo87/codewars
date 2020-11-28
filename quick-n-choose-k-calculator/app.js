/* http://www.codewars.com/kata/quick-n-choose-k-calculator */
function choose(n, k) {
    if (n < k) {
        return "0";
    }
    if (n === k) {
        return "1";
    }

    const f = ["1", "1"];

    const mult = (a, b) => {

    };

    const div = (a, b) => {

    };

    const sub = (a, b) => {

    };

    const fact = (m) => {
        return f[m] ? f[m] : fact(sub(m, 1));
    }

    let a = fact(n);
    let b = fact(b);
    let c = fact(n - k);

    let result = a / b * c;

    return result;
}
/* -------------------------------------------------------- */
console.log(choose(1, 1), 1);
console.log(choose(5, 4), 5);
// console.log(choose(10, 5), 252);
// console.log(choose(10, 20), 0);
// console.log(choose(52, 5), 2598960);
// console.log(choose(500, 4), 2573031125);
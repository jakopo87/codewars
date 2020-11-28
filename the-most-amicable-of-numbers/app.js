/* http://www.codewars.com/kata/the-most-amicable-of-numbers/javascript */
function amicableNumbers(num1, num2) {
    var div1 = 1, div2 = 1;
    for (var i = 2; i <= Math.sqrt(num1); ++i) {
        div1 += !(num1 % i) * (i + (num1 / i));
    }
    for (var i = 2; i <= Math.sqrt(num2); ++i) {
        div2 += !(num2 % i) * (i + (num2 / i));
    }
    return div1 === num2 && div2 === num1;
}
/* -------------------------------------------------------------------- */
console.log(amicableNumbers(220, 284), true);
console.log(amicableNumbers(220, 280), false);
console.log(amicableNumbers(1184, 1210), true);
console.log(amicableNumbers(220221, 282224), false);
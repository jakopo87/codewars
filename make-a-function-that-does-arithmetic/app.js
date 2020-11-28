/* http://www.codewars.com/kata/make-a-function-that-does-arithmetic */
function arithmetic(a, b, operator) {
    var o = {
        "add": "+",
        "subtract": "-",
        "multiply": "*",
        "divide": "/"
    };
    return eval(`${a}${o[operator]}${b}`);
}
/* ----------------------------------------------------------------- */
console.log(arithmetic(1, 2, "add"), 3, "'add' should return the two numbers added together!");
console.log(arithmetic(8, 2, "subtract"), 6, "'subtract' should return a mimus b!");
console.log(arithmetic(5, 2, "multiply"), 10, "'multiply' should return a multiplied by b!");
console.log(arithmetic(8, 2, "divide"), 4, "'divide' should return a divided by b!");
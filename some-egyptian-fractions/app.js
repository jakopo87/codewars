/* https://www.codewars.com/kata/some-egyptian-fractions */
function decompose(n) {
    var g = eval(n), s = 0, list = [];
    if (g >= 1) {
        s = Math.floor(g);
        list.push(s.toString());
    }
    while (g - s > Number.EPSILON) {
        var x = Math.ceil(1 / (g - s));
        s += 1 / x;
        list.push("1/" + x);
    }
    return list;
}
/* ---------------------------------------------------- */
console.time();
console.log(decompose("50/4187"), ["1/84", "1/27055", "1/1359351420"])
console.log(decompose('0.66'), ["1/2", "1/7", "1/59", "1/5163", "1/53307975"]);
console.log(decompose("30/45"), ["1/2", "1/6"])
console.log(decompose('3/4'), ["1/2", "1/4"]);
console.log(decompose('12/4'), ["3"]);
console.log(decompose("0/1000"), []);
console.log(decompose("16/17"), []);
console.log(decompose("5/4"), ["1", "1/4"]);
console.timeEnd();asd
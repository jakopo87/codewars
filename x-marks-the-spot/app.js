/* http://www.codewars.com/kata/x-marks-the-spot */
function x(n) {
    var result = [];
    for (var r = 0; r < n; ++r) {
        var t = (new Array(n)).fill(0);
        t[r] = t[n - 1 - r] = 1;
        result.push(t);
    }
    return result;
}
/* --------------------------------------------- */
console.time();
console.log(x(1), [
    [1]
]);
console.log(x(2), [
    [1, 1],
    [1, 1]
]);
console.log(x(3), [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1]
]);
console.log(x(4), [
    [1, 0, 0, 1],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [1, 0, 0, 1]
]);
console.log(x(5), [
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1]
]);
console.log(x(6), [
    [1, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 1, 0],
    [0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0],
    [0, 1, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 1]
]);
console.timeEnd();
/* http://www.codewars.com/kata/how-many-twos */
function twoCount(n) {
    var count = 0;
    while (n % Math.pow(2, count) == 0) {
        count++;
    }
    return count;
}
/* ------------------------------------------ */
console.log(twoCount(24), 3);
console.log(twoCount(17280), 7);
console.log(twoCount(222222222222), 1);
console.log(twoCount(256), 8);
console.log(twoCount(1), 0);
console.log(twoCount(2), 1);
console.log(twoCount(256), 8);
console.log(twoCount(7), 0);
console.log(twoCount(84934656), 20);
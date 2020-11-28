/* http://www.codewars.com/kata/the-supermarket-queue */
function queueTime(customers, n) {
    var time = 0;
    while (customers.length > 0) {
        customers = customers
            .map((c, i) => c - (i < n ? 1 : 0))
            .filter(c => c > 0);
        ++time;
    }
    return time;
}
/* -------------------------------------------------- */
console.log(queueTime([], 1), 0);
console.log(queueTime([1, 2, 3, 4], 1), 10);
console.log(queueTime([2, 2, 3, 3, 4, 4], 2), 9);
console.log(queueTime([1, 2, 3, 4, 5], 100), 5);
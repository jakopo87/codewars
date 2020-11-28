/* http://www.codewars.com/kata/next-prime */
function nextPrime(n) {
    var isPrime = true;
    if (n < 2) {
        n = 2;
    }
    do {
        for (var i = 2; i < n; ++i) {
            isPrime = isPrime && n % i !== 0;
        }
        if (!isPrime) {
            ++n;
        }
    } while (isPrime === false);

    return n;
}
/* --------------------------------------- */
console.log(nextPrime(0), 2);
console.log(nextPrime(1), 2);
console.log(nextPrime(2), 3);
console.log(nextPrime(3), 5);
console.log(nextPrime(5), 7);
console.log(nextPrime(11), 13);
console.log(nextPrime(17), 19);
console.log(nextPrime(2971), 2999);
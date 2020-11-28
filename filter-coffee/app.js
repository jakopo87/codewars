/* http://www.codewars.com/kata/filter-coffee */
const search = (budget, prices) => {
    return prices
        .sort((a, b) => a - b)
        .filter(p => p <= budget)
        .join(",");
};
/* ------------------------------------------ */
// "Should filter out the prices outside budget"
console.log(search(3, [6, 1, 2, 9, 2]), "1,2,2")

// "Should filter out the prices outside budget"
console.log(search(14, [7, 3, 23, 9, 14, 20, 7]), "3,7,7,9,14")

// "Should return an empty string when budget is zero"
console.log(search(0, [6, 1, 2, 9, 2]), "")
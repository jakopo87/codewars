/* http://www.codewars.com/kata/smallest-unused-id */
const nextId = ids => {
    let id = 0;
    while (ids.includes(id)) {
        ++id;
    }
    return id;
};
/* ----------------------------------------------- */
console.log(nextId([0, 1, 2, 3, 5]), 4);
console.log(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 11);
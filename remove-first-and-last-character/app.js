/* http://www.codewars.com/kata/remove-first-and-last-character */
function removeChar(str) {
    return str.slice(1, str.length - 1);
};
/* ------------------------------------------------------------ */
console.log(removeChar('eloquent'), 'loquen');
console.log(removeChar('country'), 'ountr');
console.log(removeChar('person'), 'erso');
console.log(removeChar('place'), 'lac');
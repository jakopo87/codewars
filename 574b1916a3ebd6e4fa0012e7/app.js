/* http://www.codewars.com/kata/574b1916a3ebd6e4fa0012e7 */
function isOpposite(s1, s2) {
    s2 = s2.toString(); //HACK: s2 may not be a string in random tests.
    if (!s1 || !s2 || s1.length !== s2.length) {
        return false;
    }
    return ![...s1].some((_, i) => Math.abs(s1.charCodeAt(i) - s2.charCodeAt(i)) !== 32);
}
/* ----------------------------------------------------- */
export { isOpposite };
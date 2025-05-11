/* http://www.codewars.com/kata/574b1916a3ebd6e4fa0012e7 */
function isOpposite(s1, s2) {
    for (let i = 0; i < s1.length; ++i) {
        if (Math.abs(s1.charCodeAt(i) - s2.charCodeAt(i)) !== 32) {
            return false;
        }
    }
    return true;
}
/* ----------------------------------------------------- */
export { isOpposite };
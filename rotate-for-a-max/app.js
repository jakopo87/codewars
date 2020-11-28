/* http://www.codewars.com/kata/rotate-for-a-max */
function maxRot(n) {
    var max = n, s = n.toString();
    for (var i = 0; i < s.length - 1; ++i) {
        max = Math.max(max, s = s.substr(0, i) + s.substr(i + 1) + s[i]);
    }
    return max;
}
/* --------------------------------------------- */
console.log(maxRot(56789), 68957);
console.log(maxRot(38458215), 85821534);
console.log(maxRot(195881031), 988103115);
console.log(maxRot(896219342), 962193428);
console.log(maxRot(69418307), 94183076);
console.log(maxRot(507992495), 507992495);
/* https://www.codewars.com/kata/562c5ea7b5fe27d303000054/train/javascript */
function sscForperm(arr) {
    function perm(permutation) {
        var length = permutation.length,
            result = [permutation.slice()],
            c = new Array(length).fill(0),
            i = 1, k, p;

        while (i < length) {
            if (c[i] < i) {
                k = i % 2 && c[i];
                p = permutation[i];
                permutation[i] = permutation[k];
                permutation[k] = p;
                ++c[i];
                i = 1;
                result.push(permutation.slice());
            } else {
                c[i] = 0;
                ++i;
            }
        }
        return result;
    }

    let total = 0;

    let max = -Infinity;
    let min = +Infinity;
    let plist = perm(arr.sort());
    for (const p of plist) {
        let s = p.reduce((sum, n, i) => sum + n * (i + 1), 0);
        max = Math.max(s, max);
        min = Math.min(s, min);
        total += s;
    }

    let totalPerm = plist.length;

    let map = new Map();
    for (const x of arr) {
        map.set(x, (map.get(x) || 0) + 1);
    }

    let dups = 1;
    for (let [_, b] of map) {
        while (b > 1) {
            dups *= b--;
        }
    }

    totalPerm /= dups;
    total /= dups;

    return [{ "total perm": totalPerm }, { "total ssc": total }, { "max ssc": max }, { "min ssc": min }];
}
/* ----------------------------------------------------------------------- */
const print = (actual, expected) => console.log(
    JSON.stringify(actual) +
    "\n" +
    JSON.stringify(expected) +
    "\n"
);
/* ----------------------------------------------------------------------- */
print(sscForperm([1, -1]), [{ "total perm": 2 }, { "total ssc": 0 }, { "max ssc": 1 }, { "min ssc": -1 }]);
print(sscForperm([6, 12, -1]), [{ "total perm": 6 }, { "total ssc": 204 }, { "max ssc": 47 }, { "min ssc": 21 }]);
print(sscForperm([8, 23, -4, 10]), [{ 'total perm': 24 }, { 'total ssc': 2220 }, { 'max ssc': 134 }, { 'min ssc': 51 }]);
print(sscForperm([4, 25, 5, 11, 4]), [{ 'total perm': 60 }, { 'total ssc': 8820 }, { 'max ssc': 196 }, { 'min ssc': 98 }]);
print(sscForperm([1, 1, 1, 11, 2]), [{ 'total perm': 20 }, { 'total ssc': 960 }, { 'max ssc': 69 }, { 'min ssc': 27 }]);
print(sscForperm([-1, -6, 10, 17, -4, 12, -6]), [{ 'total perm': 2520 }, { 'total ssc': 221760 }, { 'max ssc': 207 }, { 'min ssc': -31 }]);
print(sscForperm([8, 8, -1, 4, 4]), [{ 'total perm': 30 }, { 'total ssc': 2070 }, { 'max ssc': 91 }, { 'min ssc': 47 }]);
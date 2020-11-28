/* https://www.codewars.com/kata/get-all-possible-anagrams-from-a-hash */
const cache = {};

const permutations = (list) => {
    if (list.length < 2) {
        return [list];
    }

    if (cache[list.toString()] !== undefined) {
        return cache[list.toString()];
    }

    let result = [];
    for (let i = 0; i < list.length; ++i) {
        let first = list[i];

        if (list.indexOf(first) !== i) {
            continue;
        }

        let l = list.slice(0, i).concat(list.slice(i + 1));
        let p = permutations(l);
        result = result.concat(p.map(x => first + x));
    }

    cache[list.toString()] = result;

    return result;
}

function getWords(hash) {
    if (Object.keys(hash).length === 1 && hash[Object.keys(hash)[0]].length === 1) {
        return [hash[Object.keys(hash)[0]][0].repeat(Object.keys(hash)[0])];
    }

    let listChars = "";
    for (const n in hash) {
        for (const c of hash[n]) {
            listChars += c.repeat(n);
        }
    }

    return permutations(listChars.split("").sort());
}
/* ------------------------------------------------------------------- */

console.time("bench");
console.log(getWords({ 1: ["a", "b", "c"] }).toString() === ["abc", "acb", "bac", "bca", "cab", "cba"].toString())
console.log(getWords({ 1: ["a", "b", "c"] }).toString() === ["abc", "acb", "bac", "bca", "cab", "cba"].toString())
console.log(getWords({ 2: ["a"], 1: ["b", "c"] }).toString() === ["aabc", "aacb", "abac", "abca", "acab", "acba", "baac", "baca", "bcaa", "caab", "caba", "cbaa"].toString())
console.log(getWords({ "1": ["z", "x"], "2": ["i", "a"] }).toString() === ["aaiixz", "aaiizx", "aaixiz", "aaixzi", "aaizix", "aaizxi", "aaxiiz", "aaxizi", "aaxzii", "aaziix", "aazixi", "aazxii", "aiaixz", "aiaizx", "aiaxiz", "aiaxzi", "aiazix", "aiazxi", "aiiaxz", "aiiazx", "aiixaz", "aiixza", "aiizax", "aiizxa", "aixaiz", "aixazi", "aixiaz", "aixiza", "aixzai", "aixzia", "aizaix", "aizaxi", "aiziax", "aizixa", "aizxai", "aizxia", "axaiiz", "axaizi", "axazii", "axiaiz", "axiazi", "axiiaz", "axiiza", "axizai", "axizia", "axzaii", "axziai", "axziia", "azaiix", "azaixi", "azaxii", "aziaix", "aziaxi", "aziiax", "aziixa", "azixai", "azixia", "azxaii", "azxiai", "azxiia", "iaaixz", "iaaizx", "iaaxiz", "iaaxzi", "iaazix", "iaazxi", "iaiaxz", "iaiazx", "iaixaz", "iaixza", "iaizax", "iaizxa", "iaxaiz", "iaxazi", "iaxiaz", "iaxiza", "iaxzai", "iaxzia", "iazaix", "iazaxi", "iaziax", "iazixa", "iazxai", "iazxia", "iiaaxz", "iiaazx", "iiaxaz", "iiaxza", "iiazax", "iiazxa", "iixaaz", "iixaza", "iixzaa", "iizaax", "iizaxa", "iizxaa", "ixaaiz", "ixaazi", "ixaiaz", "ixaiza", "ixazai", "ixazia", "ixiaaz", "ixiaza", "ixizaa", "ixzaai", "ixzaia", "ixziaa", "izaaix", "izaaxi", "izaiax", "izaixa", "izaxai", "izaxia", "iziaax", "iziaxa", "izixaa", "izxaai", "izxaia", "izxiaa", "xaaiiz", "xaaizi", "xaazii", "xaiaiz", "xaiazi", "xaiiaz", "xaiiza", "xaizai", "xaizia", "xazaii", "xaziai", "xaziia", "xiaaiz", "xiaazi", "xiaiaz", "xiaiza", "xiazai", "xiazia", "xiiaaz", "xiiaza", "xiizaa", "xizaai", "xizaia", "xiziaa", "xzaaii", "xzaiai", "xzaiia", "xziaai", "xziaia", "xziiaa", "zaaiix", "zaaixi", "zaaxii", "zaiaix", "zaiaxi", "zaiiax", "zaiixa", "zaixai", "zaixia", "zaxaii", "zaxiai", "zaxiia", "ziaaix", "ziaaxi", "ziaiax", "ziaixa", "ziaxai", "ziaxia", "ziiaax", "ziiaxa", "ziixaa", "zixaai", "zixaia", "zixiaa", "zxaaii", "zxaiai", "zxaiia", "zxiaai", "zxiaia", "zxiiaa"].toString())
console.log(getWords({ "1": ["b"], "3": ["f"], "2": ["h"] }).toString() === ["bfffhh", "bffhfh", "bffhhf", "bfhffh", "bfhfhf", "bfhhff", "bhfffh", "bhffhf", "bhfhff", "bhhfff", "fbffhh", "fbfhfh", "fbfhhf", "fbhffh", "fbhfhf", "fbhhff", "ffbfhh", "ffbhfh", "ffbhhf", "fffbhh", "fffhbh", "fffhhb", "ffhbfh", "ffhbhf", "ffhfbh", "ffhfhb", "ffhhbf", "ffhhfb", "fhbffh", "fhbfhf", "fhbhff", "fhfbfh", "fhfbhf", "fhffbh", "fhffhb", "fhfhbf", "fhfhfb", "fhhbff", "fhhfbf", "fhhffb", "hbfffh", "hbffhf", "hbfhff", "hbhfff", "hfbffh", "hfbfhf", "hfbhff", "hffbfh", "hffbhf", "hfffbh", "hfffhb", "hffhbf", "hffhfb", "hfhbff", "hfhfbf", "hfhffb", "hhbfff", "hhfbff", "hhffbf", "hhfffb"].toString())
console.log(getWords({ '33': ['b'] }).toString())
console.timeEnd("bench");
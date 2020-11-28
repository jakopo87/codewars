/* http://www.codewars.com/kata/colour-association */
function colourAssociation(array) {
    return array.map(function(i) {
        var v = {};
        v[i[0]] = i[1]
        return v;
    });
}
/* ----------------------------------------------- */
console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]), "|", [{ white: "goodness" }, { blue: "tranquility" }]);
console.log(colourAssociation([["red", "energy"], ["yellow", "creativity"], "|", ["brown", "friendly"], ["green", "growth"]]), [{ red: "energy" }, { yellow: "creativity" }, { brown: "friendly" }, { green: "growth" }]);
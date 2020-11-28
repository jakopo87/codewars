/* https://www.codewars.com/kata/leonardo-dicaprio-and-oscars/train/javascript */
const leo = oscar => {
    switch (oscar) {
        case 88:
            return "Leo finally won the oscar! Leo is happy";
        case 86:
            return "Not even for Wolf of wallstreet?!";
        default:
            return oscar < 88 ? "When will you give Leo an Oscar?" : "Leo got one already!";
    }
}
/* --------------------------------------------------------------------------- */
console.log(leo(88), "Leo finally won the oscar! Leo is happy");
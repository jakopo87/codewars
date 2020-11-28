/* http://www.codewars.com/kata/cwars */
require ("./cw-2.js");

function initials(n){
 return n.split(" ").map(function(n,i,a){
   return n.substr(0,1).toUpperCase()+(n===a[a.length-1]?n.substr(1):"");
 }).join(".");
}

Test.assertSimilar(initials('code wars'),'C.Wars');
Test.assertSimilar(initials('Barack hussain obama'),'B.H.Obama');
Test.assertSimilar(initials('barack hussain Obama'),'B.H.Obama');

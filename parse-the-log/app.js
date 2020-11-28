/* http://www.codewars.com/kata/parse-the-log */
var logparser = /^(\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2},\d{3})\s+(ERROR|INFO|DEBUG)\s+\[(\w+):(\w+):?(\w+)?\]\s+(.*$)/;
/* ------------------------------------------ */
var logparser = /^(\d{4}(?:(?:-\d{2}){2})\s+\d{2}:\d{2}:\d{2},\d{3})\s+(ERROR|INFO|DEBUG)\s+\[(\w+):(\w+):?(\w+)?\]\s+(.*)$/;
/* ------------------------------------------ */
console.log(logparser.test("2003-07-08 16:49:45,896 ERROR [user1:mainfunction:subfunction] We have a problem"), "Valid Line");
console.log(logparser.test("2003-07-08 16:49:46,896 INFO [user1:mainfunction] We don't have a problem"), "Valid Line");
console.log("2003-07-08 16:49:45,896 ERROR [user1:mainfunction:subfunction] We have a problem".match(logparser).length, 6 + 1, "Didn't find all the groups");
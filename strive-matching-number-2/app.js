'use strict';
/* http://www.codewars.com/kata/strive-matching-number-2 */
// function match(job, candidates) {
//     var result = []
//     candidates.forEach(function (c) {
//         var equity = !c.desiresEquity || job.equityMax > 0;
//         var location = job.locations.indexOf(c.currentLocation) > -1 || job.locations.reduce(function (r, l) {
//             return r || c.desiredLocations.indexOf(l) > -1;
//         }, false);
//         if (equity && location) {
//             result.push(c);
//         }
//     }, this);
//     return result;
// }
/* ----------------------------------------------------- */
function match(job, candidates) {
    return candidates.filter((c) => {
        var equity = !c.desiresEquity || job.equityMax > 0;
        var location = c.desiredLocations.concat(c.currentLocation).reduce((r, l) => {
            return r || job.locations.indexOf(l) > -1;
        }, false);
        return equity && location;
    });
}
/* ----------------------------------------------------- */
let candidates = [{
    desiresEquity: true,
    currentLocation: 'New York',
    desiredLocations: ['San Francisco', 'Los Angeles']
}, {
        desiresEquity: false,
        currentLocation: 'San Francisco',
        desiredLocations: ['Kentucky', 'New Mexico']
    }];
let job1 = { equityMax: 0, locations: ['Los Angeles', 'New York'] },
    job2 = { equityMax: 1.2, locations: ['New York', 'Kentucky'] };
console.log(match(job1, candidates).length, 0);
console.log(match(job2, candidates).length, 2);
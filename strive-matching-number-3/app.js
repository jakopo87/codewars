"use strict";
/* http://www.codewars.com/kata/strive-matching-number-3 */
// function match(candidate, job) {
//     return job.skills.reduce((r, js) => {
//         var avoid = candidate.skills.reduce((r,cs) => {
//             return r || (cs.name === js.name && cs.preference === "avoid");
//         }, false);
//         var experience = candidate.skills.filter((cs) => cs.name === js.name || js.substitutions.filter((js) => js.name === cs.name).length > 0).reduce((r, cs) => {
//             return r || cs.experience * (cs.preference === "desired" ? 1.5 : 1) >= js.idealYears;
//         }, false);
//         return r && !avoid && experience;
//     }, true);
// }
/* ----------------------------------------------------- */
function match(candidate, job) {
    return job.skills.every(js => {
        var avoid = candidate.skills.some(cs => cs.name === js.name && cs.preference === "avoid");
        var experience = candidate.skills.filter(cs => js.substitutions.map(jsub=>jsub.name).concat(js.name).indexOf(cs.name)>-1).some(cs => {
            return cs.experience * (cs.preference === "desired" ? 1.5 : 1) >= js.idealYears;
        });
        return !avoid && experience;
    });
}
/* ----------------------------------------------------- */
let candidate = {
    skills: [{ name: 'CoffeeScript', experience: 3, preference: 'neutral' }]
}
let job = {
    skills: [{ name: 'CoffeeScript', idealYears: 3, substitutions: [{ name: 'JavaScript' }] }]
}
console.log(match(candidate, job), 'should match on primary skill');
candidate.skills[0].name = 'JavaScript' // candidate skill satisfies substitute
console.log(match(candidate, job), 'should match on substitute skill');
job.skills[0].idealYears = 10 // raise the ideal years above candidate years
console.log(!match(candidate, job), 'should not match when ideal years are higher');
candidate={ skills: 
[ { name: 'JavaScript', experience: 7, preference: 'neutral' },
{ name: 'Ruby', experience: 7, preference: 'neutral' },
{ name: 'Python', experience: 7, preference: 'neutral' } ] };
job= { skills: 
[ { name: 'JavaScript', idealYears: 3, substitutions: [] },
{ name: 'Ruby', idealYears: 3, substitutions: [] },
{ name: 'Python', idealYears: 3, substitutions: [] } ] };
console.log(match(candidate, job), 'should match when primary skills are greater');
candidate={ skills: 
[ { name: 'JavaScript', experience: 2, preference: 'desired' },
{ name: 'Ruby', experience: 2, preference: 'desired' },
{ name: 'Python', experience: 2, preference: 'desired' } ] };
job= { skills:
[ { name: 'JavaScript', idealYears: 3, substitutions: [] },
{ name: 'Ruby', idealYears: 3, substitutions: [] },
{ name: 'Python', idealYears: 3, substitutions: [] } ] };
console.log(match(candidate, job), 'A desired skill should recieve a 50% experience bonus when compared to the job ideal years');
candidate={ skills: 
[ { name: 'Java', experience: 7, preference: 'neutral' },
{ name: 'Python', experience: 5, preference: 'desired' },
{ name: 'Haskell', experience: 7, preference: 'avoid' } ] };
job= { skills: [ { name: 'Haskell', idealYears: 5, substitutions: [{}] } ] };
console.log(!match(candidate, job), 'The candidate wants to avoid the primary skill, it should not be a match');
candidate = { skills:
[ { name: 'Java', experience: 7, preference: 'neutral' },
{ name: 'Python', experience: 5, preference: 'desired' },
{ name: 'Haskell', experience: 7, preference: 'avoid' } ] };
job = { skills:
[ { name: 'Java', idealYears: 3, substitutions: [ { name: 'Haskell' } ] },
{ name: 'Haskell', idealYears: 5, substitutions: [ { name: 'Java' } ] } ] }
console.log(!match(candidate, job), 'The candidate wants to avoid the primary skill, it should not be a match');

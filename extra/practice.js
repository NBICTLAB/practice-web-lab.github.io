/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y)

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

const firstName = 'Sadhan';
const job = 'Trainer';
const birthYear = 1993;
const year = 2037;

const sadhan = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

const sadhanNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

console.log(sadhan);
console.log(sadhanNew);
console.log(`Just a regular string...`);

console.log('This is a \n\
multiline \n\
string...');

console.log(`This is also a
multiline 
string...`);
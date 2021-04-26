//STRICT mode in JavaScript
'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; //omitted 's' from Drivers purposefully to showcase strict mode
if (hasDriversLicense) console.log('I can drive :D');


//FUNCTIONS
function logger() {
    console.log('My name is Arkesh');
}
// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//Function Declaration

function calcAge1(birthYear) {
    return 2050 - birthYear;
}
const age1 = calcAge1(1984);

//Function Expression
const calcAge2 = function (birthYear) {
    return 2050 - birthYear;
}
const age2 = calcAge2(1984);
console.log(age1, age2);



/*
**************************************************
// Traditional Function
function (a){
  return a + 100;
}

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
}

// 2. Remove the body brackets and word "return" -- the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
a => a + 100;
**************************************************
*/

/*
//Function Expression
const calcAge2 = function (birthYear) {
    return 2050 - birthYear;
}
//ARROW Function (Udemy)
const calcAge3 = birthYear => 2050 - birthYear;
const age3 = calcAge3(1984);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2050 - birthYear;
    const retirement = 70 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1984, 'Juan'));
console.log(yearsUntilRetirement(1998, 'Jonas'));


const cutPieces = function (fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
}
console.log(fruitProcessor(3, 4));

const calcAge = function (birthYear) {
    return 2050 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 70 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }

    //return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1984, 'Juan'));
console.log(yearsUntilRetirement(1970, 'Jonas'));


//CODING CHALLENGE #1 (FUNDAMANETALS-2)
const calcAverage = (score1, score2, score3) => {
    return ((score1 + score2 + score3) / 3);
}

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log(`As per the conditions, no one wins :(`);
    }
}
//Test Data 1
const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);
checkWinner(avgDolphins1, avgKoalas1);

//Test Data 2
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);
checkWinner(avgDolphins2, avgKoalas2);


// ARRAYS

const friend1 = 'Jakob';
const friend2 = 'Tobias';
const friend3 = 'Quinn';

const friends = ['Jakob', 'Tobias', 'Quinn'];
console.log(friends);

const yr = new Array(1984, 1991, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Andrew';
console.log(friends);

const firstName = 'Arkesh';

const arky = [firstName, 'Sharma', 2050 - 1984, 'Programmer', friends];
console.log(arky);
console.log(arky.length);

//Exercise
function calcAge(birthYear) {
    return 2050 - birthYear;
}
const years = [1984, 1986, 1990, 2001, 2010];

console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


const friends = ['Jakob', 'Tobias', 'Quinn'];

friends.push('Andrew');
const newLength = friends.push('Piotr');
console.log(friends);
console.log(newLength);

friends.unshift('Satish');
console.log(friends);

//Remove Elements
friends.pop(); //Last element
console.log(friends);

const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // removes first element from left
console.log(friends);

console.log(friends.indexOf('Jakob'));
console.log(friends.indexOf('Jonas'));

console.log(friends.includes('Jakob'));
console.log(friends.includes('Jonas'));

friends.push(23);
console.log(friends.includes('23')); // will return False as it is doing a strict comparison
console.log(friends.includes(23)); // will return True as it is doing a strict comparison

if (friends.includes('Jakob')) {
    console.log(`You have a friend calle Jakob.`);
}


// CODING CHALLENGE #2 (Fundamentals-2)

//OLD CODE to calculate tip
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`tip amount = ${tip}`);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);



const calcTip = (billAmount) => {

return billAmount >= 50 && billAmount <= 300 ? billAmount * 0.15 : billAmount * 0.20;
}

//Another way to write calcTip function
const calcTip1 = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

console.log(calcTip1(100));

const bills = [125, 555, 44];
const tips = new Array();

tips.push(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);


// Defining an Object. 
//This is known as OBJECT LITERAL SYNTAX. 
//Order of the entries does not matter here. So, this can be used for un-ordered data. And array can be used for ordered data. 
const arkesh = {
    firstName: 'Arkesh',
    lastName: 'Sharma',
    job: 'Programmer',
    age: 2050 - 1984,
    friends: ['Jakob', 'Tobias', 'Quinn']
};
console.log(arkesh);

console.log(arkesh.lastName);
console.log(arkesh['lastName']);

const nameKey = 'Name';
console.log(arkesh['first' + nameKey]);
console.log(arkesh['last' + nameKey]); // square brackets can take any expression inside but the dot operator cannot. 

//this will not work
// console.log(arkesh.'last' + nameKey);

const interestedIn = prompt('What do you want to know about Arkesh? choose one from: firstName, lastName, job, age, friends');
//console.log(interestedIn);

// this will not work as arkesh does not have any property defined called 'interestedIn'
//console.log(arkesh.interestedIn);

//console.log(arkesh[interestedIn]);

if (arkesh[interestedIn]) {
    console.log(arkesh[interestedIn]);
} else {
    console.log('Wrong Request! choose one from: firstName, lastName, job, age, friends');
}

arkesh.location = 'Denmark';
arkesh['Instagram'] = 'arkesh_sharma';

console.log(arkesh);

//Mini Challenge 
//print - arkesh (dynamically) has 3 (count dynamically) friends and Jakob (first friend is the list) is his best friend. 
//console.log(arkesh.friends.length);
//console.log(arkesh.friends[0]);
console.log(`${arkesh.firstName} has ${arkesh.friends.length} friends and ${arkesh.friends[0]} is his best friend`);
*/

const arkesh = {
    firstName: 'Arkesh',
    lastName: 'Sharma',
    job: 'Programmer',
    birthYear: 1984,
    friends: ['Jakob', 'Tobias', 'Quinn'],
    hasDriversLicense: true,

    //calcAge: function (birthYear) {
    //   return 2050 - birthYear;
    //}

    //calcAge: function () {
    //    console.log(this);
    //    return 2060 - this.birthYear;
    //}

    calcAge: function () {
        //console.log(this);
        this.age = 2060 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
        return this.summary;
    }


};

//console.log(arkesh.calcAge(1984));
//console.log(arkesh['calcAge'](1984));
console.log(arkesh.calcAge());

console.log(arkesh.age);

// Mini Challenge to summarize the data for Arkesh
//returns string
// Arkesh is a 60-year old Programmer and he has a/no driver's license" 
console.log(arkesh.getSummary());




















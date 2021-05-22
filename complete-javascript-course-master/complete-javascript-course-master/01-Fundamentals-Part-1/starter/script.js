/*
let js = 'Amazing';
console.log(1 + 2 + 2 + 3 + 4 + 5);

let firstName = "Arkesh"
console.log(firstName);

let PI = 3.14;
let _name = "ArkyTechie";
console.log(_name);

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

console.log(myFirstJob);

let jsIsFun = true;
//console.log(jsIsFun);
console.log(typeof jsIsFun);
jsIsFun = "Yes!!!";
console.log(typeof jsIsFun);

let year;
console.log(year);
console.log(typeof year);
year = 1984;
console.log(year);
console.log(typeof year);
console.log(typeof null);


let lastName = "Sharma";
const birthYear = 1984;
console.log(birthYear);
var profession = "programmer";
profession = "Architect";


//Math Operators
const now = 2050;
const ageArkesh = now - 1984;
const ageLipsa = now - 1986;
console.log(ageArkesh, ageLipsa);
console.log(ageArkesh * 2, ageArkesh / 10, 2 ** 3);

const firstName = "Arkesh";
const lastName = "Sharma";
console.log(firstName + " " + lastName);

//Assignmernt Operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

//comparison operator
console.log(ageArkesh > ageLipsa);
console.log(ageLipsa >= 18);
const isFullAge = ageLipsa >= 18;
console.log(now - 1984 > now - 1986);


const now = 2050;
const ageArkesh = now - 1984;
const ageLipsa = now - 1986;
console.log(now - 1984 > now - 1986);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageArkesh + ageLipsa) / 2;
console.log(ageArkesh, ageLipsa, averageAge);

//Coding Challenge # 1
let markHeight = 1.69;
let markWeight = 78;
let johnHeight = 1.95;
let johnWeight = 92;
let markBMI = markWeight / (markHeight ** 2);
let johnBMI = johnWeight / (johnHeight ** 2);
console.log(markBMI, johnBMI);
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);


markHeight = 1.88;
markWeight = 95;
johnHeight = 1.76;
johnWeight = 85;
markBMI = markWeight / (markHeight ** 2);
johnBMI = johnWeight / (johnHeight ** 2);
console.log(markBMI, johnBMI);
markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

const firstName = "Arkesh";
const job = "Programmer";
const birthYear = 1984;
const year = 2050;

const arkesh = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(arkesh);

const arkeshNew = `I'm ${firstName}, a ${(year - birthYear)} year old ${job}!`;
console.log(arkeshNew);

console.log('String with \n\
multiple \n\
lines \n\
');

console.log(`String
multiple
lines
`);


const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log(`Sarah can start her driving license 🚗`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait for another ${yearsLeft} years :)`);

}

const birthYear = 1984;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

//Coding Challenge # 2 (challenge # 1 continued)
let markHeight = 1.69;
let markWeight = 78;
let johnHeight = 1.95;
let johnWeight = 92;
let markBMI = markWeight / (markHeight ** 2);
let johnBMI = johnWeight / (johnHeight ** 2);
console.log(markBMI, johnBMI);
//let markHigherBMI = markBMI > johnBMI;
//console.log(markHigherBMI);
if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
}
else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's! (${markBMI})`);
}


markHeight = 1.88;
markWeight = 95;
johnHeight = 1.76;
johnWeight = 85;
markBMI = markWeight / (markHeight ** 2);
johnBMI = johnWeight / (johnHeight ** 2);
console.log(markBMI, johnBMI);
//let markHigherBMI = markBMI > johnBMI;
//console.log(markHigherBMI);
if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}) !`);
}
else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI}) !`);
}


// type conversion
const inputYear = '1984';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 20);

console.log(Number('Arkesh'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coersion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '10');
console.log('23' / '10');
console.log('23' > '10');

let n = '1' + 1;
n = n - 1;
console.log(n);


// 5 FALSY VALUES - 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Arkesh'));
console.log(Boolean({}));

const money = 1000;
if (money) {
    console.log("Don't spend it all ;) ");
} else {
    console.log('You need to get a job! ');
}


const age = '18';
//strict comparison operator (===)
if (age === 18) console.log("You just became an adult :) (strict)");
//loose comparison operator (==) TRY TO AVOID IT FOR UNNECESSARY BUGS
if (age == 18) console.log("You just became an adult :) (loosely) ");


const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log(`Cool! ${favourite} is an amazing number!`);
} else if (favourite === 7) {
    console.log(`Cool! ${favourite} is an amazing number!`);
} else if (favourite === 9) {
    console.log(`Cool! ${favourite} is an amazing number!`);
} else {
    console.log(`The number is neither 23 or 7 or 9`);
}

if (favourite !== 23) console.log("Why not 23?");
*/
/*
//Boolean Operator
const hasDriversLicense = true; //variable A
const hasGoodVision = false; //variable B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
*/
/*
const shoulDrive = hasDriversLicense && hasGoodVision;
if (shoulDrive) {
    console.log("Sarah should be able to drive!");
} else {
    console.log("someone else should drive...");
}


const isTired = true; // variable C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah should be able to drive!");
} else {
    console.log("someone else should drive...");
}


// Coding Challenge # 3 (Fundamanetals)
const firstScoreDolphins = Number(prompt("Enter First Score for Dolphins"));
const secondScoreDolphins = Number(prompt("Enter Second Score for Dolphins"));
const thirdScoreDolphins = Number(prompt("Enter Third Score for Dolphins"));

const firstScoreKoalas = Number(prompt("Enter First Score for Koalas"));
const secondScoreKoalas = Number(prompt("Enter Second Score for Koalas"));
const thirdScoreKoalas = Number(prompt("Enter Third Score for Koalas"));

const averageScoreDolphins = (firstScoreDolphins + secondScoreDolphins + thirdScoreDolphins) / 3;
const averageScoreKoalas = (firstScoreKoalas + secondScoreKoalas + thirdScoreKoalas) / 3;
console.log(averageScoreDolphins, averageScoreKoalas);

const minScore = 100;

if ((averageScoreDolphins === averageScoreKoalas) && (averageScoreKoalas >= minScore) && (averageScoreKoalas >= minScore)) {
    console.log("Both Teams have same score and their average score are over 100 so its a draw :( ");
} else if ((averageScoreDolphins > averageScoreKoalas) && (averageScoreDolphins >= minScore)) {
    console.log("Dolphins have higher score and their score is greater than 100 so Dolphins win!");
} else if ((averageScoreDolphins < averageScoreKoalas) && (averageScoreKoalas >= minScore)) {
    console.log("Koalas have higher score and their average score is greater than 100 so Koalas win!!");
} else {
    console.log("No conditions were met so no Team wins the trophy!");
}

//SWITCH Statement
const day = 'Monday';

switch (day) {
    case 'Monday': //day === 'Monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'Tuesday':
        console.log('Prepare theory videos');
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('Write code examples');
        break;
    case 'Friday':
        console.log('Record Videos');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Enjoy your weekend!');
        break;
    default:
        console.log('Not a valid day!');
}


//SWITCH statement in IF-ELSE
const day = 'Monday';
if (day === 'Monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'Tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'Wednesday' || day === 'Thursday') {
    console.log('Prepare theory videos');
} else if (day === 'Friday') {
    console.log('Record Videos');
} else if (day === 'Saturday' || day === 'Sunday') {
    console.log('Enjoy your weekend!');
} else {
    console.log('Not a valid day!');
}


//TERNARY Operator
const age = 23;
//age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water!");

const drink = age >= 18 ? 'Wine 🍷' : 'Water 🥛';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'Wine 🍷';
} else {
    drink2 = 'Water 🥛';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'Wine 🍷' : 'Water 🥛'}`);
*/
//CODING CHALLENGE #4 (Fundamentals-1)
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`tip amount = ${tip}`);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);

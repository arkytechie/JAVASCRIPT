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
*/

// type conversion
const inputYear = '1984';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 20);

console.log(Number('Arkesh'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coersion

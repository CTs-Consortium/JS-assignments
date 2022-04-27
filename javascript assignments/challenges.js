"use strict";

// JS FUNDAMENTALS PT 1 //
//CODING CHALLENGE 1

// DATA 1
const markHeight = 1.69;
const markMass = 78;
const johnHeight = 1.95;
const johnMass = 92;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

// DATA 2
const markHeight2 = 1.88;
const markMass2 = 95;
const johnHeight2 = 1.76;
const johnMass2 = 85;

const markBMI2 = markMass2 / (markHeight2 * markHeight2);
const johnBMI2 = johnMass2 / (johnHeight2 * johnHeight2);
const markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markBMI2, johnBMI2, markHigherBMI2);

// CODING CHALLENGE 2

// DATA 1
if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than Johns's (${johnBMI}).`);
} else {
  console.log(`John's BMI(${johnBMI}) is higher than Mark's (${markBMI})`);
}

// DATA 2
if (markBMI2 > johnBMI2) {
  console.log(`Mark's BMI (${markBMI2}) is higher than Johns's (${johnBMI2}).`);
} else {
  console.log(`John's BMI(${johnBMI2}) is higher than Mark's (${markBMI2})`);
}

// CODING CHALLENGE 3

// DATA 1

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
  console.log(`The Dolphins win this round!`);
} else {
  console.log(`The Koalas with the upset!`);
}

// DATA 2

if (scoreKoalas > scoreDolphins && scoreKoalas > 100) {
  console.log(`The Koalas win with a score of ${scoreKoalas}!`);
} else if (scoreDolphins > scoreKoalas && scoreDolphins > 100) {
  console.log(`The Dolphins win it with a score of ${scoreDolphins}!`);
} else {
  console.log(`There was no winner this time.`);
}

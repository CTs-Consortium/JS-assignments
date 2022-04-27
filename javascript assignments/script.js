"use strict";
// // Lets declare some variables. You can use the following declarations, all of which are
// // useful in their own ways.

// // let
// // const
// // var

// // var is used in JS code constructed between 95 and 2015, while let and const were added
// // IN 2015 if you want to be sure that your code works in older browsers, you should
// // use var. Now lets move on.

// ///////  JAVASCRIPT FUNDAMENTALS PART ONE   ///////

// // LECTURE 1
// // Values and Variables

// // let country = "United States";
// // const continent = "North America";
// // var population = 371000000;

// // I used one of each of the declarations to show that they all Work. HOWEVER, they all
// // have their own specific uses

// // console.log(country, continent, population);

// // LECTURE 2
// // Data Types

// // let isIsland = false;
// let language;
// // if you arent going to declare the variable immediately, do NOT add an equals sign.
// // it will cause bugs in the code, LANGUAGE is currently undefined and will say the same
// // if yopu log it to the console.

// // console.log(isIsland, population, country, language);
// // console.log(
// //   typeof isIsland,
// //   typeof population,
// //   typeof country,
// //   typeof language
// // );

// // If you want to know what 'type of' value is stored in a variable, simply log it to the
// // console and check using the typeof operator!!! (LOOK ABOVE FOR EXAMPLES)

// // LECTURE 3
// // let, const, and var

// // language = "english";

// // when you come back to set values of empty variables, you do NOT need to use 'let' again.
// // for example
// // let language  <--- this is empty
// // now when i want to set the value i can simply type
// // language = 'english'

// // when done this way (correctly) you will get the desired results with no bugs in the code!
// // let can be changed, const cannot be changed. so keeping that in mind we
// // can rewrite some things

// const country = "United States";
// const continent = "North America";
// let population = 371000000;
// let isIsland = false;
// language = "english";

// console.log(country, continent, population, isIsland, language);

// console.log(
//   typeof country,
//   typeof continent,
//   typeof population,
//   typeof isIsland,
//   typeof language
// );

// // continent = "SOuth America";
// // i tried to change the value of continent which is declared with CONST and it gave an error

// population = 1;
// // i was successfully able to change the value of population because it was declared with LET
// // i then logged it to the console and it shows the updated value of ONE
// console.log(population);
// population = 372000000;
// console.log(population);

// // LECTURE 4
// // BASIC OPERATORS

// // Question 1
// // If the country split in half with equal population in both halves, how many people
// // would be on each side?

// let halfCountry = population / 2;
// console.log(halfCountry);

// //Question 2
// // Increase the population of your country by 1 and log the result to the console.

// let populationIncrease = population++;
// console.log(populationIncrease);

// // Question 3
// // Finland has a population of 6 million. Does your country have more people than Finland?

// let populationFinland = 6000000;
// console.log(population > populationFinland);

// // Question 4
// // The average country has 33 million people. Does your country have less people than
// // the average country?

// let countryAverage = 33000000;
// console.log(population < countryAverage);

// // Question 5
// // Based on the variables you created, create a new variable 'description' which contains
// // a string with this format: "Portugal is in Europe, and its 11 million people speak Portuguese"

// let description =
//   "United States is in North America, and its 372 million people speak english.";
// console.log(description);

// // LECTURE 5
// // STRINGS AND TEMPLATE LITERALS

// //  Recreate the 'description' variable from the last assignment, but use a template literal syntax

// console.log(
//   `${country} is in ${continent}, and its ${population} people speak ${language}.`
// );

// // my ++ from the last section, question 2, was added to the output when logged to
// // the console this time around.
// // To keep it simple, use a string UNLESS you have to add variables to the output.
// // In that case use a template literal.

// // LECTURE 6
// // TAKING DECISIONS: IF/ELSE STATEMENTS

// if (population > countryAverage) {
//   console.log(`${country}'s population is above average.`);
// } else {
//   console.log(`${country}'s population is below average.`);
// }

// // this concept is actually fairly simple to grasp. its as simple as
// // either/or, this/that.
// // If I change the value of 'population', then depending on the NEW value, whats logged
// // to the console may or may not change as well.

// // LECTURE 7
// // TYPE CONVERSION AND COERCION

// // '9'-'5'; SHOULD BE 4
// console.log("9" - "5");
// // '19'-'13'+'17'; I WAS EXPECTING 23, OUTPUT WAS 617...
// console.log("19" - "13" + "17");
// //'19'-'13'+17; NOW IM PRETTY SURE THIS IS 23 BASED ON THE LAST ANSWER
// console.log("19" - "13" + 17);
// // '123'< 57 ; THIS SHOULD BE FALSE. FOR OBVIOUS REASONS.
// console.log("123" < 57); // it came back false as expected
// // 5+6+'4'+9-4-2; SO..I SAID 103...
// console.log(5 + 6 + "4" + 9 - 4 - 2); //THE OUTPUT WAS 1143

// // OUT OF THE 5 EQUATIONS ABOVE, I GOT 2 WRONG. REVIEW THEM AND THEN GET SOME FEEDBACK.

// // LECTURE 8
// // EQUALITY OPERATORS: == VS ===

// //THIS WAS MY CODE, FOR SOME REASON IT DIDNT WORK AS EXPECTED.

// // let numNeighbors = "How many neighbor countries does your country have?";

// // if (numNeighbors == 1) {
// //   console.log("Only 1 border.");
// // } else if (numNeighbors > 1) {
// //   console.log("More than 1 border.");
// // } else numNeighbors == 0;
// // console.log("No neighbors!");

// // numNeighbors = 2;
// // console.log(numNeighbors);

// // THIS IS THE ANSWER CODE

// // const numNeighbors = prompt(
// //   "How many neighbor countries does your country have?"
// // );
// // // PROMPT makes the box pop up when the webpage is accessed in order to allow
// // // for visitor inputs. The result of input is logged to console as instructed below.
// // if (numNeighbors === 1) {
// //   console.log("Only 1 border!");
// // } else if (numNeighbors > 1) {
// //   console.log("More than 1 border.");
// // } else {
// //   console.log("No borders.");
// // }

// // LECTURE 9
// // LOGICAL OPERATORS

// if (population < 50000000 && language === "english" && !isIsland) {
//   console.log("You should live in USA!");
// } else {
//   console.log("USA does not meet your criteria.");
// }

// // FOR THE ABOVE PROBLEM, ALL THE CRITERA NEEDED TO BE MET TO RECOMMEND THE usa AS A PLACE
// // TO LIVE. TO MAKE THAT HAPPEN, I NEEDED && BETWEEN EACH CRITERIA. ALSO, DONT FORGET
// // IF I WANT TO SAY SOMETHING "IS NOT", I NEED TO PUT THE '!' SYMBOL BEFORE IT!

// // LECTURE 10
// // THE SWITCH STATEMENT

// // I DONT REMEMBER THIS SECTION....
// // SWITCH AND CASE GO HAND IN HAND. CANT HAVE A SWITCH WITHOUT A DEFINING CASE TO GO WITH.
// // SEE BELOW...

// // language = "arabic";
// // language = "chinese";
// // language = "afrikkan";
// // language = "hillbilly";

// switch (language) {
//   case "chinese":
//   case "mandarin":
//     console.log("most number of native speakers!");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("4th place");
//     break;
//   case "arabic":
//     console.log("5th most spoken language! Salam!");
//     break;
//   default:
//     console.log("Great language too :D");
// }

// // THE PATTERN FOR SWITCHES SEEMS TO BE: CASE, CONSOLE.LOG, BREAK. CASE, CON.LOG, BREAK
// // LETS BE MORE SPECIFIC:
// // SWITCH (VARIABLE){
// // CASE "INSERT CASE":
// // CONSOLE.LOG(WHATEVER OUTPUT GOES WITH CASE);
// // BREAK;
// // REPEAT AS NEEDED
// // }

// // LECTURE 11
// // THE CONDITIONAL (TERNARY) OPERATOR
// // (?)

// console.log(
//   `${country}'s population is ${
//     population > 33000000 ? "above" : "below"
//   } average`
// );

// TERNARY OPERATORS ARE LIKE SHORTHAND VERSIONS OF IF/ELSE STATEMENTS
// GET FAMILIAR WITH USING BOTH, BUT TRY TO FOCUS ON USING TERNARY MORE.
// WHEN YOU NEED AN IF/ESLE IF/ELSE, YOU WILL KNOW.

//// JAVASCRIPT FUNDAMENTALS PART TWO //////

// LECTURE 1
// FUNCTIONS

//BACK TO FUNCTIONS!
// THIS WASNT EASY, NOT HARD, JUST CONFUSING AT FIRST ATTEMPT.

// THIS IS A FUNCTION DECLARATION!!!!
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}
// SO FOR FUNCTIONS, THE RETURN IS WRITTEN AS A TEMP LITERAL.
// BUT PRIOR TO THE TEMP LITERAL, YOU NEED TO WRITE THE CODE FOR FUNCTION LINE...
// function functionName(parameter, parameter, parameter, etc.){
//   statement WRITTEN AS TEMP LITERAL
// }

// AFTER THIS, YOU THEN INPUT THE DATA YOU WANT BY MAKING A NEW VARIABLE AND
// CALLING THE FUNCTION NAME, THEN LISTING THE INPUT VALUES IN THE SAME ORDER AS THE
// PARAMETERS ARE LISTED. SEE BELOW THEN COMPARE TO ABOVE.

const desAmerica = describeCountry("United States", 372, "Washington DC");
const desCanada = describeCountry("Canada", 38, "Ottawa");
const desMexico = describeCountry("Mexico", 128.9, "Mexico City");

// these are variables above

console.log(desAmerica, desCanada, desMexico);

// LECTURE 2 - LEARN THIS!!!!!
// FUNCTION DECLARATIONS VS FUNCTION EXPRESSIONS

// THIS IS A FUNCTION DECLARATION
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

// THIS IS A FUNCTION EXPRESSION
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

// linked to declaration output
const percentCountry = percentageOfWorld1(2303);
// linked to expression output
const percChina1 = percentageOfWorld2(1441);

// declaration output
console.log(percentCountry);
// expression output
console.log(percChina1);

// LECTURE 3
// ARROW FUNCTIONS

const percentageOfWorld3 = (population) => (population / 7900) * 100;

const percUSA3 = percentageOfWorld3(332);
console.log(percUSA3);

// ***TO MAKE SURE I UNDERSTAND HOW FUNCTIONS WORK UP TO THIS POINT, ILL WRITE MY OWN ***
// AS A FUNCTION DECLARATION

function describeCars(make, model, year) {
  return `I drive a ${year} ${make} ${model}, and it's nice!`;
}

const sportsCar = describeCars("Toyota", "Corolla", 2008);
const SUV = describeCars("GMC", "Envoy", 2017);
const fullSizeCar = describeCars("Ford", "Fusion", 2020);

console.log(sportsCar, SUV, fullSizeCar);

// AS A FUNCTION EXPRESSION

const describeCars2 = function (make, model, year) {
  return `I drive a ${make} ${model}, built in ${year}...and its a POS! I need to upgrade.`;
};

const oldSchool = describeCars2("Chevy", "Caprice", 1988);
const oldSchool2 = describeCars2("Cadillac", "Deville", 1985);

console.log(oldSchool, oldSchool2);

// AS AN ARROW FUNCTION

const describeCars3 = (year, make, model) =>
  `I have a ${year} ${make} ${model} that belonged to my father.`;

const dadsCar = describeCars3(1991, "Mercury", "Capri");

console.log(dadsCar);

// LECTURE 4
// FUNCTIONS CALLING OTHER FUNCTIONS

function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
  console.log(description);
}

describePopulation("Portugal", 10);
describePopulation("USA", 332);
describePopulation("China", 1441);

// THIS IS SEMI CONFUSING. ILL COME BACK TO THIS AS NEEDED FOR REFERENCE MATERIAL.

// LECTURE 5
// INTRODUCTIONS TO ARRAYS

const populations = [10, 1331, 32, 83];
console.log(populations.length === 4);

// I USED THE FUNCTION 'PERCENTAGEoFwORLD1' TO COMPUTE PERCENTAGES HERE
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

// LECTURE 6
// BASIC ARRAY OPERATIONS (METHODS)

const neighbors = ["Canada", "Mexico", "Texas"];

neighbors.push("Utopia");
console.log(neighbors);

neighbors.pop();
console.log(neighbors);

if (!neighbors.includes("Germany")) {
  console.log("Probably not a central Eurpoean country :D");
}

neighbors[neighbors.indexOf("Canada")] = "That Snowy Country up North.";

console.log(neighbors);

// LECTURE 7
// INTRODUCTION TO OBJECTS
// THIS IS AN OBJECT
const myCountry = {
  country: "USA",
  capital: "Washington DC",
  language: "english",
  population: 332,
  neighbors: ["Canada", "Mexico"],
};
// TO WRITE IN A TEMP LITERAL, USE THE FOLLOWING:
// ${value.object}

// LECTURE 8
// DOT vs BRACKET NOTATION

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries, and a capital called ${myCountry.capital}.`
);

//THE FOLLOWING IS DOT NOTATION(ADDED 2 TO THE POPULATION VALUE)
myCountry.population += 2;
console.log(myCountry.population);

//THE FOLLOWING IS BRACKET NOTATION(MINUS 2 FROM THE POPULATION VALUE)
myCountry["population"] -= 2;
console.log(myCountry.population);

//LECTURE 9
// OBJECT METHODS
// JUST A FUNCTION INSIDE OF AN OBJECT? (VERIFY WITH lgc)

// 1. Add a method called 'describe' to the 'myCountry' object. This method
// will log a string to the console, similar to the string logged in the previous
// assignment, but this time using the 'this' keyword.
// 2. Call the 'describe' method
// 3. Add a method called 'checkIsland' to the 'myCountry' object. This
// method will set a new property on the object, called 'isIsland'.
// 'isIsland' will be true if there are no neighbouring countries, and false if
// there are. Use the ternary operator to set the property.

const myCountry2 = {
  country: "USA",
  capital: "Washington DC",
  language: "english",
  population: 332,
  neighbors: ["Canada", "Mexico"],

  describe: function () {
    console.log(
      `${myCountry2.country} has ${myCountry2.population} million ${myCountry2.language}-speaking people, ${myCountry2.neighbors.length} neighboring countries and a capital called ${myCountry2.capital}`
    );
  },

  checkIsland: function () {
    myCountry2.isIsland = myCountry2.neighbors.length === 0 ? true : false;
  },
};
myCountry2.describe();
myCountry2.checkIsland();
console.log(myCountry2);

// THE ABOVE DID not WORK AS EXPECTED. REVIEW WITH lgc

// LECTURE 10
// ITERATION: THE 'for' LOOP

for (let voter = 1; voter <= 50; voter++)
  console.log(`Voter number ${voter} is currently voting!`);

// LECTURE 11
// LOOPING ARRAYS, BREAKING, AND CONTINUING

// 1. Let's bring back the 'populations' array from a previous assignment
// 2. Use a for loop to compute an array called 'percentages2' containing the
// percentages of the world population for the 4 population values. Use the
// function 'percentageOfWorld1' that you created earlier
// 3. Confirm that 'percentages2' contains exactly the same values as the
// 'percentages' array that we created manually in the previous assignment,
// and reflect on how much better this solution is

const populations11 = [10, 1441, 332, 83];
const percentages2 = [];
for (let i = 0; i < populations11.length; i++) {
  const perc = percentageOfWorld1(populations11[i]);
  percentages2.push(perc);
}

console.log(percentages2);

// LECTURE 12
// LOOPING BACKWARDS AND LOOPS IN LOOPS

// 1. Store this array of arrays into a variable called 'listOfNeighbours'
// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
// 'Russia']];
// 2. Log only the neighbouring countries to the console, one by one, not the entire
// arrays. Log a string like 'Neighbour: Canada' for each country
// 3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
// worry if it's too difficult for you! But you can still try to figure this out anyway

const listOfNeighbors = [
  ["canada", "mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbors.length; i++)
  for (let y = 0; y < listOfNeighbors[i].length; y++)
    console.log(`Neighbor: ${listOfNeighbors[i][y]}`);

// LECTURE 13
// THE WHILE LOOP

// 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
// but this time using a while loop (call the array 'percentages3')
// 2. Reflect on what solution you like better for this task: the for loop or the while
// loop?

const percentages3 = [];
let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentages3.push(perc);
  i++;
}
console.log(percentages3);

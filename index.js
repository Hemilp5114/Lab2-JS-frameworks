import { ReturnCurrentAge,calculateAverage,reverseString,ReturnIntro } from "./utils.js";

// 1. Call the introduction function
const introduction = ReturnIntro("Vansh", "G@I College");
console.log(introduction);

console.log("--------------------");

// 2. Call the age calculation function
// (Using a birthday of May 10, 2000)
const age = ReturnCurrentAge(10, 5, 2000);
console.log(`The calculated age is: ${age}`);

console.log("--------------------");

// 3. Call the string reversal function
const originalString = "Node.js is fun";
const reversed = reverseString(originalString);
console.log(`'${originalString}' reversed is '${reversed}'`);

console.log("--------------------");

// 4. Call the average calculation function
const grades = [10, 45, 78, 15, 89];
const average = calculateAverage(grades);
console.log(`The average of the grades [${grades}] is: ${average}`);
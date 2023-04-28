/* Functions and Conditional Statments - Practice Exercise*/
/* Question - 1*/

//alert("your JS file is connected!!");

function myFirst() {
  console.log("Hello");
}
myFirst();

/**Question - 2 */

function mySec(a) {
  console.log(a);
}
mySec(2);

/**Question - 3 */
function myThird(b) {
  mySec(b);
}
myThird("Try Your Best");

/**Question - 4 */
// Write a function named myFourth that takes an array as a parameter and prints only the first
// value of the array on the console.

var Num = [1, 2, 3, 4];
function myFourth(x) {
  console.log(x[0]);
}
myFourth(Num);

/**Question - 5 */
// Write a function named myFifth that takes an array with two numbers in it as a parameter
// and prints the sum of the two numbers on console
function myFifth(c, d) {
  let y;
  y = c + d;
  console.log(y);
}
myFifth(4, 5);

/***********/

let m = [6, 7];
function myTest() {
  console.log(m[0] + m[1]);
}
myTest(m);

/**Question - 6 */
// Write a function that takes an integer minutes and converts it to seconds

function minToSec(min) {
  var z = min * 60;
  console.log(z);
}
minToSec(5);

// Question 7

// Create a function that takes a number as a parameter, increments the number by +1 and
// returns the result.

function increment(x) {
  //let x=0;
  let y = ++x;
  console.log(y);
}
increment(5);

// Question 8
// Write a function that takes the base and height of a triangle and returns its area

function areaTiangle(b, h) {
  var area = (b * h) / 2;
  //console.log(area)
  return area;
}
//areaTiangle(6.5, 7);

var total;
var x = 10;
var y = 10;

total = areaTiangle(x, y);
console.log(total);

// Question 9
//  Create a function that returns the total number of legs of all the animals. In this challenge, a
// farmer is asking you to tell him how many legs can be counted among all his animals. The
// farmer breeds three species (chickens = 2 legs, cows =, 4 legs, pigs = 4 legs). Remember:
// the farmer wants to know the total number of legs and not the total number of animals.

/*
1. Define a function that takes 3 arguments
2. check if the arguments are numbers , > 0 and no decimal.
2. define three vars that compute and store no. of  legs of each animals (multiply No of animals by its coresponding no. of legs)
3. add the results 
Total No of legs = No.ofChickens*2 + No.ofCows*4 + No.ofPigs*4
eg. 
*/
function animalsLeg(h, c, p) {
  if (typeof h != "number" || typeof c != "number" || typeof p != "number") {
    console.log("Please enter numbers only!");
    return;
  }
  if (h <= "0 " || c <= "0" || p <= "0") {
    console.log("number must be greater than zero");
    return;
  }
  if (!Number.isInteger(h) || !Number.isInteger(c) || !Number.isInteger(p)) {
    console.log("Number must be an integer");
    return;
  } else {
    var chickenLegs = h * 2;
    var cowLegs = c * 4;
    var pigLegs = p * 4;
    var totalLegs = chickenLegs + cowLegs + pigLegs;
    return totalLegs;
  }
}
animalsLeg(2, 1, 1);
var totalAnimalLegs;
totalAnimalLegs = animalsLeg(2, 2, 1);
console.log(totalAnimalLegs);

/*
Question 10 

 Create a function that takes an array containing only TWO numbers as a parameter and
 returns a value that is 3 times the first element of the array.
*/

/*
1. define a function that takes an array
check the length of the array
 Check isNaN

2. the function takes two numbers as parameter array=[4,5]
3. compute prod = 3 * array[0]
3. define a var to store a result
5. return the result
*/

var num = [y, 4];

function takesArray(num) {
  var result = 3 * x[0];
  return result;
}

takesArray(num[0]);

// var resultArray;
// resultArray = takesArray(3, 3);
// console.log(resultArray);

// function tripleoffirstarray(arr)
//
/*Question 11
 Create a function that returns true when num1 is equal to num2; otherwise return false.
 */
/*
- define a function that takes two parameters num1 and num2
- write if condition to check if the two no.s are equal or not
- if they are equal return True else False.

*/
function compareNum(num1, num2) {
  if (num1 === num2) {
    return true; // Boolean True if I say return "True" is it will print the string true.
  } else {
    return "False";
  }
}
var compareResult = compareNum(2, 2);
console.log(compareResult);

//Question 12
// Create a function that takes an integer and returns true if it's divisible by 100, otherwise
// return false.

function divisible(n) {
  if (n % 100 == 0) {
    return true;
  } else {
    return false;
  }
}
var result = divisible(70);
console.log(result);
console.log(divisible(150));
/*
Question 13
Create a function that takes a number as an argument and returns "even" for even numbers
and "odd" for odd numbers.

*/
/*
- define a function that takes a number argument
- if the number divided by 2  and the remainder is 0 = even  
- if the number divided by 2  and the remainder is 1 = odd
- return the result
*/

function numEvenOdd(num) {
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
var evenOrOdd = numEvenOdd(5);
console.log(evenOrOdd);

/*
Question 14
Create a function that returns
 ○ “Invalid score” if score is above 100 or score is a negative number
 ○ “Grade A” when score is between 90 and 100 (both 90 and 100 included)
 ○ “Grade B” when score is between 80 and 89 (both 80 and 89 included)
 ○ “Grade C” for any score below 79

*/

/* 
- define a function that takes a parameter
- create consitions to check the parameter entered
  - if param > 100 && param < 0 return "Invalid Score"
  - if 90  >= param >= 100 return "Grade A"
  - if 80  >= param >= 89 return "Grade A"
  - if  param < 79 return "Grade C"

*/

// function scoreGrade(score) {
//   if (score > 100 && score < 0) {
//     return "Invalid Score";
//   }
//   if (score >= 90 && score <= 100) {
//     return "Grade A";
//   }
//   if (score >= 80 && score <= 89) {
//     return "Grade B";
//   } else if (score < 79) {
//     return "Grade C";
//   }
// }

// var grade = scoreGrade(95);
// console.log(grade);

/* Using Switch */

// const score = 85;
// switch (true) {
//   case score > 100 || score < 0:
//     console.log("Invalid Score");
//     break;
//   case score >= 90 && score <= 100:
//     console.log("Grade A");
//     break;
//   case score >= 80 || score <= 89:
//     console.log("Grade B");
//     break;
//   case score < 79:
//     console.log("Grade c");
//     break;
//   default:
//     console.log("No Grade");
// }

function studentGrade(score) {
  switch (true) {
    case score > 100 || score < 0:
      console.log("Invalid Score");
      break;
    case score >= 90 && score <= 100:
      console.log("Grade A");
      break;
    case score >= 80 && score <= 89:
      console.log("Grade B");
      break;
    case score <= 79:
      console.log("Grade c");
      break;
    default:
      console.log("Error");
  }
}
studentGrade(79);

//console.log((x));

/** parseInt, parseFloat, NaN, Number,
 * parseFloat - parses a string argument and returns a floating point number
 * Return value 1. floating point number
 *              2. NaN (if the string can not be   converted to a number)
 *
 *
 *
 *
 *
 */

// const value = "300.678avbn";
// var result = parseFloat(value);
// var area = result * Math.PI;
// console.log(area);

// function circle(r) {
//   return parseFloat(r) * 2 * Math.PI;
// }
// console.log(circle("300.90ab"));

// console.log(parseFloat("He was 40")); // if the string starts with
// console.log(parseFloat("34 45 66")); //
// console.log(parseFloat("  3.14  ")); // Leading spaces in the argument are trimmed and ignored
// console.log(parseFloat("  0.0314E+2  "));

// consloe.log(Number("12"));

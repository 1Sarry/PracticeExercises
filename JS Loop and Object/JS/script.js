// Question 1
// Write a function that prints the first 10 integers on the console starting from the number 1 using
// the JavaScript for loop.

// function printInt() {
//   for (i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }
// printInt();

// Question 2
// Write a function that takes a single number as an argument and prints the next 5 numbers in the
// console. Note: each output should be displayed on a new line.
// ○ Test case: If you give 7 to the function, output should look like this:
// 8
// 9
// 10
// 11
// 12

// function nextFiveNumbers(a) {
//   for (i = a + 1; i <= a + 5; i++) 
//   console.log(i);
// }
// nextFiveNumbers(4);

// Question 3
// Write a function that takes a single number and prints the sum of the next 10 numbers after the
// given number.
// Test case: If you give 7 to the function, output should be: 125 - because (8 + 9 + 10+
// 11+ 12+ 13+ 14+ 15+ 16+ 17 = 125)

// function sumTenNumbers(a) {
//   let sum = 0;
//   for (i = a + 1; i <= a + 10; i++) {
//     sum += i;
//   }
//   console.log(sum);
// }
// sumTenNumbers(4);

// Question 4
// Write a function that takes an array as an argument and prints every element of the array on the
// console.
// Test case: given the array a = [1, "Hello", 8, 44], output should look like this:
// 1
// Hello
// 8
// 44

// function printArrayElement() {
//   let a = [1, "Hello", 8, 44];
//   for(i=0; i<a.length; i++){
//   console.log(a[i]) 
//   }
// }
// printArrayElement(printArrayElement);

/** 
 Question 5
Write a function that takes an array as an argument and prints the total number of elements
found in the array. Hint: use a property of the Array object to solve this question.
Test case 1: Given the array a = [1, "Hello", 8, 44], output should be: 4
Test case 2: Given the array a = ["world", 13], output should be: 2
 */
// var a =[1, "Hello", 8, 44]
// function arrayLength(a=[]){
//      console.log(a.length)
//  }
// arrayLength(a)
// Question 6
// ● Write a function that takes an array of numbers as a parameter and logs in the console the sum of
// all the numbers in the array.
// ○ Test case 1: If you give this array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 44
// ○ Test case 2: If you give this array, [3, 0], to the function, output should be: 3 because
// 3 + 0



//var a = [5, 6, 99, 8, 76, 4, 68, 44];
// var a =[3, 0];
// function sumArrayElements(a){
//   let sum=0;
//   for (i=0; i< a.length; i++){
//      sum=sum + a[i];
//   }
//   console.log(sum)
// }
// sumArrayElements(a)



// Question 7
// ● Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all
// odd numbers of the array from the total sum of all even numbers and logs the result in the
// console.
// ○ Test case: If you give these array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 102
// ■ Sum of odd numbers: 5 + 99 = 104
// ■ Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 = 206
// ■ Difference between total even and total odd numbers: 206 - 104 = 102

// var a =  [5, 6, 99, 8, 76, 4, 68, 44];
// function arrayOddSum(a){
//   let sumEven=0;
//   let sumOdd=0;
//   for (i=0; i<a.length; i++){
//     if (a[i] % 2 == 0){
//       sumEven=sumEven+a[i];
//     }
//     else if (a[i] % 2 !== 0){
//       sumOdd = sumOdd + a[i];
//     }   
//   }
//   var difference =  sumEven - sumOdd ;
//   console.log(difference);
// }
// arrayOddSum(a)

/**Question 8
● Write a function that takes an array as a parameter and logs in the console the elements that have
even indexes only. Notice: this question is not asking you to log elements with even value, but
elements that are located on even indexes)
○ Test case 1: If you give this array to the function [5, 6, 99, 8, 76, 4, 68, 44], toutput
should be:
5
99
76
68
○ Test case 2: If you give this array to the function [11, “Sam”, 3, 7, “car”], output should
be:
11
3
car */

// a= [5,6,99,8,76,4,68,44];
// function arrayEvenIndex(a){
//   for (i=0; i<a.length; i++){
//     if(i % 2 == 0){
//       console.log(a[i])
//     }
//   }
// }
// arrayEvenIndex(a)

// Questions 9 and 10 are dependent on the sampleArray provided below:
// let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];


// Question 9
// Write a function that takes the sampleArray as a parameter, removes the last element from the array,
// adds a new value of "32" to the array and prints the new array on the console. Hint: use an array method

// let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
// function arrayFunction (sampleArray){
//    sampleArray.pop();
//    sampleArray.push(32);
//   console.log(sampleArray)
// }
// arrayFunction(sampleArray)

// Question 10
// Write a function that takes the sampleArray as an argument, sorts the array in ascending order
// and prints the sorted array on the console
// Use the sort method. Make sure you understand just using the sort() method alphabetically.
// You should use this sorting syntax - sort(function(a, b){return a-b});

// let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
// function sortArray(sampleArray){
//   sampleArray.sort(function(a, b){return a-b});
//   console.log(sampleArray)
// }
// sortArray(sampleArray)


/*
The questions below ( questions 11 to 14) are based on the "evangadiClass" object provided below.
let evangadiClass = {
lengthOfCourse: "1 Month",
website: "https://www.evangadi.com/",
isChallenging: false,
topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
students: [
{
name: "Abebe",
age: 34,
sex: "M"
},
{
name: "Kebede",
age: 44,
sex: "M"
},
{
name: "Almaz",
age: 27,
sex: "F"
},
{
name: "Challa",
age: 22,
sex: "M"
},
{
name: "Chaltu",
age: 19,
sex: "F"
}
]
}
 */


/*
Question 11
● Change the lengthOfCourse property of the object to "5 Month" and print the new object on the
console
○ // Use the dot notation "." to call the property you want to change

*/


// let evangadiClass = {
//   lengthOfCourse: "1 Month",
//   website: "https://www.evangadi.com/",
//   isChallenging: false,
//   topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
//   students: [
//   {
//   name: "Abebe",
//   age: 34,
//   sex: "M"
//   },
//   {
//   name: "Kebede",
//   age: 44,
//   sex: "M"
//   },
//   {
//   name: "Almaz",
//   age: 27,
//   sex: "F"
//   },
//   {
//   name: "Challa",
//   age: 22,
//   sex: "M"
//   },
//   {
//   name: "Chaltu",
//   age: 19,
//   sex: "F"
//   }
//   ]
//   } 
//   evangadiClass.lengthOfCourse="5 Month";
//   evangadiClass.topicsCovered.push("bootstrap")
//   console.log(evangadiClass)

  /*
  Question 12
Add "Bootstrap" at the end of the topicsCovered property and print the new object on the
console
// Use an array method
  
  */

/*
Question 13
Write a function that takes the "evangadiClass" object as an argument and calculates the average
age of the class. Print the result on the console
*/

// let evangadiClass = {
//   lengthOfCourse: "1 Month",
//   website: "https://www.evangadi.com/",
//   isChallenging: false,
//   topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
//   students: [
//   {
//   name: "Abebe",
//   age: 34,
//   sex: "M"
//   },
//   {
//   name: "Kebede",
//   age: 44,
//   sex: "M"
//   },
//   {
//   name: "Almaz",
//   age: 27,
//   sex: "F"
//   },
//   {
//   name: "Challa",
//   age: 22,
//   sex: "M"
//   },
//   {
//   name: "Chaltu",
//   age: 19,
//   sex: "F"
//   }
//   ]
//   } 
//  function ageAverage(x){
//   var sum= 0;
//   for (i=0; i<x.students.length; i++){
//       sum+= x.students[i].age
//   }
//   var average= sum/x.students.length
//   console.log(sum)
//  }
//  ageAverage(evangadiClass)

 /*Question 14
● Write a function that takes the "evangadiClass" object as an argument and calculates the
percentage of male students in the class. Print the result on the console*/

// - create a function that takes an argument 
// - compute no of female students
// - compute no of male students
// - compute total no of students
// - compute percentage = (no of Male / Total)*100%


// total number of students = students.length
// total no of M = sum of students.sex === "M"
// total no of F = sum of students.sex === "F"

let evangadiClass = {
  lengthOfCourse: "1 Month",
  website: "https://www.evangadi.com/",
  isChallenging: false,
  topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
  students: [
  {
  name: "Abebe",
  age: 34,
  sex: "M"
  },
  {
  name: "Kebede",
  age: 44,
  sex: "M"
  },
  {
  name: "Almaz",
  age: 27,
  sex: "F"
  },
  {
  name: "Challa",
  age: 22,
  sex: "M"
  },
  {
  name: "Chaltu",
  age: 19,
  sex: "F"
  }
  ]
  } 


//  function malePercentage(x){
//        var totalF =0;
//        var totalM= 0;
//         for (i=0; i<x.studets.length; i++){
//           if(x.students.sex === "F"){
//             totalF = x.students.length;
//           }
//         }
//         console.log(totalF)
//  }
//  malePercentage(evangadiClass)
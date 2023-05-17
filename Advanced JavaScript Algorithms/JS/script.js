// alert("Js for Advanced JavaScript Algorithms is Connected!")


/* Question 1 

Given an array of numbers, write a function that prints in the console another array
which contains all the even numbers in the original array, which also have even indexes only.
○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
Functions and conditional statements/JS/scripts.js○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]

*/
// a function that takes an array patameter
// check if the number in the array with even index is even 


var arr = [1, 2, 3, 6, 4, 8];
function even(a){
  var ar = [];

  for (var i=0; i<a.length;i++){
    if( i % 2 == 0 && arr[i] % 2 == 0 )
    {
      ar.push(a[i]);
    }

  }

return ar;
}

console.log((even(arr))) ;


/* Question 2

Create a function that takes a two-digit number as a parameter and prints "Ok" in
the console if the given string is greater than its reversed digit version. If not, the
function will print "Not ok"
○ Test 1: reverseCompare(72) prints "ok" because 72 > 27
○ reverseCompare(23) prints "Not ok", because 23 is not greater than 32

*/

// a function that takes an argument
// the parameter must be two digit number 
// invalidation - input must be only 2 digit number.
// reverse the two digit argument and compare it with the original digits
// if reversed digit > the original digits = print "Ok" if not print "Not Ok"


  function reverseCompare(num){
    if (num.toString().length !== 2){
        console.log('Please enter a two digit number only!')
    }
    else if ((parseFloat(
        num
          .toString()    // converts the given number into a String
          .split('')    // converts the String into an Array of characters
          .reverse()   // reverses the order of the items in the array.
          .join('')   // reassembles the reversed characters into a String.
      ))  > num ){
        console.log("Ok")
  }
  else{
    console.log("Not Ok")
  }
}
  reverseCompare(51)

  // Using Arrow Function

/* Question 

Write a function that takes a positive integer and returns the factorial of the number.
Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The
factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is
4 * 3 * 2 * 1 = 24)
○ Test 1: returnFactorial(5) outputs 120
○ Test 2: returnFactorial(6) outputs 720
○ Test 3: returnFactorial(0) outputs 1*/

// create a function that takes +ve no. as an argument
// check if the argument entered is positiove or not
// compute the factorial
// store the factorial in a variable
// print the result


function factorialValue(a){
    if (a === 0 || a === 1){
       console.log(1) ;
    }
    for (i=a-1; i>=1; i--)  {
        a=a*i
    }
     console.log(a)
}
factorialValue(4)

// function factorialNum(x) {
//     return (x > 1) ? x * factorialNum(x-1) : 1;
//   }
  
//   console.log(factorialNum(4));


/*
Question 4 (Meera array)

A Meera array is defined to be an array containing only numbers as its elements and for
all n values in the array, the value n*2 is not in the array. So [3, 5, -2] is a Meera array
because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because
2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an
array of numbered elements and prints “I am a Meera array” in the console if its array
does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a
Meera array”
○ Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 *
2 is 10
○ Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
○ Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3
*2 is -6

*/

// write a function that takes an array as a parameter
//check every elements if there is more than one n*2 value
// array[i]*2

var test=[10, 4, 0, 5]
var test2=[7, 4, 9]
var test3=[1, -6, 4, -3]
function checkMeera(arr){
    if (arr.indexOf(arr[i] * 2) !== -1) {
        console.log("I am NOT a Meera array");
      }
      else{
        console.log("I am a Meera array");
      }
   
}
checkMeera(test)


/*Question 5 (Dual array)
Define a Dual array to be an array where every value occurs exactly twice. For example,
{1, 2, 1, 3, 3, 2} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5
occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two
times) Write a function named isDual that returns 1 if its array argument is a Dual array.
Otherwise it returns 0.

*/
// y=[2, 5, 2, 5, 5];
// function isDual(y){
//     for(i=0; i<y.length; i++){
//         if (y[i]==y[i+1]){
//             // return 1;
            
//     console.log(1)

//         }
//         else{
//             console.log(0)  
//         }
//     }
//     console.log(y)
// }
// isDual(y)

// z=[2, 2, 1, 4, 3];
// function containsDuplicates(array) {
//     if (array.length !== new Set(array).size) {
//       return 1;
//     }
//     else{
//       return 0;  
//     }
//   }
//   console.log(containsDuplicates(z)); 

//   function isDual(arr){
//     var count = {};
//     for (i=0; i<arr.length; i++){
//       if(count[arr[i]]){
//         count[arr[i]]+=1
//       }
//       else{
//         count[arr[i]]=1
//       }
//     }
//   }

var x=[2, 5, 4, 1];
function isDual(x) {
  var count = 0;
  if (x.length % 2 == 1) {
  return 0;
  } // according to the question if the length is not even then it is not dual
  
  for (j = 0; j < x.length; j++) {
   for (k = 0; k < x.length; k++) {
   if (x[j] == x[k]) {
  count++;
  }
  }
     if (count !== 2) { 
   return 0;
   }
    return 1;
  }
  } 
 console.log(isDual(x))

  /*Question 6 
Write a function that takes the number of seconds and returns the digital format clock
time as a string. Time should be counted from 00:00:00.
Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45
secs.
■ digitalClock(61201) as "17:00:01" No AM/PM. 24h format.
■ digitalClock(87000) as "00:10:00" It's 00:10 next day.
  
  */
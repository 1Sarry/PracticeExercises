// alert("We have just started DOM!")

// Question 1
// using getElementById_ to select individual element
//const elem = document.getElementById("sample1");
//console.log(elem)
//console.log(elem.innerHTML)
//console.log(elem.textContent)

// Question 2

// const companies = document.getElementById("techCompanies")
// console.log(companies)

// // using querySelector _ class name - select individual element
// const companies2 = document.querySelector(" .red")
// console.log(companies2)

// // How many tech companies are listed- count
// const companyCount = document.getElementById("#techCompanies");
// let count = 0;
// for (i=0; i<companyCount.length; i++){
//      count = count++;
// }
// console.log(count)

// Question 3

// Question 4

/* Question 4:
 A form with two text fields is provided under the section which says "For question 4".
 Write a JavaScript code which takes the values of the two fields, checks if they are
 number values and calculate the sum of the two numbers.
 1. Display the result on the console
 2. Display the result underneath the form
3. If any of the numbers provided is not a number, display a message that says
 "Please enter numerical values only" underneath the form */

/* Algorithms
  - check if inputs are only numbers var inputNumber 
  - 
 
 
 
 */
const sum = document.getElementById("sum");


function addNums() {
let fName = document.getElementsByName("first-value").value;
let sName = document.getElementsByName("second-name").value;
  if (isNaN(fName) && isNaN(sName)) {
    console.log("Please enter numerical values only");
  } else {
    console.log("Good");
  }
}
addNums("3", 4);

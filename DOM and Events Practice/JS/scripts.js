// alert("We have just started DOM!")

// Question 1
// using getElementById_ to select individual element
//const elem = document.getElementById("sample1");
//console.log(elem)
//console.log(elem.innerHTML)
//console.log(elem.textContent)

// Question 2

//2.1
// const companies = document.getElementById("techCompanies")
// console.log(companies)

//2.2
// const companies = document.querySelector("#techCompanies")
// console.log(companies)

// var companies = document.querySelectorAll("li")
// console.log(companies)

// const redClass = document.querySelectorAll(".red")
// console.log(redClass)

//2.3 
// const company = document.getElementById("techCompanies")
// const companies = company.querySelectorAll('ul li ');
// console.log(companies)


//2.4
const company = document.querySelectorAll('.red')
 //const classRed = company.getElementsByClassName(".red")
console.log(company)

const classRed = document.getElementsByClassName("red")
console.log(classRed)
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
// const sum = document.getElementById("sum");


// function addNums() {
// let fName = document.getElementsByName("first-value").value;
// let sName = document.getElementsByName("second-name").value;
//   if (isNaN(fName) && isNaN(sName)) {
//     console.log("Please enter numerical values only");
//   } else {
//     console.log("Good");
//   }
// }
// addNums("3", 4);


/*Question 1
    Add a list of radio buttons on the page containing different color options. When a user clicks on one of them, the background of the page should change to the selected color.
        - Two of the buttons that say "Night mode" and "Sunny Mode". When night mode is chosen, the background should change to black and the texts should change to white. When Sunny mode is chosen, the background should change to light blue and texts should be in black. */

        
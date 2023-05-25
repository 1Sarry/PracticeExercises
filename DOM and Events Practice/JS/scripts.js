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
// const company = document.querySelectorAll('.red')
//  //const classRed = company.getElementsByClassName(".red")
// console.log(company)

// const classRed = document.getElementsByClassName("red")
// console.log(classRed)





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
// 


// const myForm =getElementById("adder")
// const total = document.getElementById("sum")
// function addNums(a) {
//     a.preventDefault();
// const val1 = document.getElementsByName("first-value").value;
// const val2 = document.getElementsByName("second-name").value;



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
 

// if (val1 && val2 !==NaN) {
//     let result = val1 + val2;
//     total.value=result;
    
//   } else {
//     total.textContent("Please enter numerical values only");
//   }
  
//   }
//   myForm.addEventListener('click', () => {
//     addNums();
//   });



/* Question 1
    Add a list of 
    
        - Two of the buttons that say "Night mode" and "Sunny Mode". When night mode is chosen, the background should change to black and the texts should change to white. When Sunny mode is chosen, the background should change to light blue and texts should be in black.
 */



const changeColor =(el) =>{
  const selected = el.target.value;
  const textColor = selected ==='black'?'white':'black';
  document.body.style.backgroundColor=selected;
  document.body.style.color=textColor
}
const radBtn =document.querySelectorAll('input[type="radio"]');
  radBtn.forEach(radio=>{
    radio.addEventListener('click', changeColor);
  });



/*Question 2
    Create a two functions for each buttons to increase and decrease the value in the middle
        note: the number shouldn't go below 0 and above 20 */


   
const countDown = document.querySelector(".minus") 
const countUp = document.querySelector(".plus")
const countTotal = document.getElementById("number")

 countUp.addEventListener("click", ()=>{
    let count = parseInt(countTotal.innerText);
    if(count >=0 && count < 20){
      count++;
      countTotal.innerText=count;
    }
      //console.log(count)
 });

countDown.addEventListener("click", () =>{
  let count =parseInt(countTotal.innerText);

  if(count > 0){
    count--;
    countTotal.innerText=count;
  }
  //console.log(count)
} )

//count = (count >= 0 && count<= 20)? count++ : ""; 

/*Question 3
    Validate the Login form

    Change the background of the input boxes to pink if a user tries to submit empty form for each input box and if all the values are all fulfilled show a message on alert box saying "Form submitted" */

    const name = document.getElementById("name1")
    const password = document.getElementById("pass")
    const form = document.getElementById("form")

    form.addEventListener('submit', (el) => {
      el.preventDefault()
      if(name1.value === "" || password.value ==""){
       name1.style.borderColor="pink"
       password.style.borderColor="pink"
      }
      else{
        alert("Form Submitted")
      }
    })
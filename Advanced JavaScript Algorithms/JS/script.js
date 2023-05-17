// alert("Your JS file is Connected!");
// For each letter check if the letter is Uppercase of not.
// if uppercase let it down if not write the lowercase letter
// concat each lowercase letters
// 
// function isLowerCase(str){
//     for (i=0; i<=str.length-1; i++){
//         if(str[i]===)
//     }
// }



// Array Map Excercices

const nums=[1,2,3,4,5]
const squared = nums.map(a => a*a)
console.log(squared)

const names = ["alice", "bob", "charlie", "danielle"]
const uppercase = names.map((name)=> {
    //return `${name[0].toUpperCase()}${name.slice(1)}`  // alternative
    return name[0].toUpperCase() + name.slice(1)   // toUppperCase and slice are  string methods, 
})
console.log(uppercase)

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]

const wrapped =pokemon.map(mon =>{
    return `<p> ${mon} </p>`
})
console.log(wrapped)
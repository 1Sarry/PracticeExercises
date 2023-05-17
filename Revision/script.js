

var item = "Drink more water";
console.log(item.length);
 //o/p =  16 (using length property)

console.log(item.indexOf("water"));  // starting from 0
 // o/p = 11
 console.log(item.replace("water", "Coffee"))


 // Constructors

 class Company{   // templates to generate tesla and honda objects
    constructor(name, country){
       this.name = name;
       this.country = country
    }
    }
    const tesla = new Company("Tesla", "USA");
    const honda = new Company("Honda", "Japan");

    console.log(tesla.country);
    console.log(honda.name);


// String()

console.log('alphabet'.toUpperCase()); // 'ALPHABET'
var str1 = 'Hello';
var str2 = 'World';

console.log(str1.concat(str2));
// expected output: "HelloWorld"
 
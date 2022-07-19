// VAR, LET, CONST
// use const if you want people to know that the variable will not change, it makes the code more robust and easy to understand

var name = "Rafael Saraiva";
console.log(name);
name = "Roberta Almeida"
console.log(name); //change the variable name by overwritting it

//Let 
let name;
name = "Rafael Saraiva";
console.log(name);
name = "Roberta Almeida"
console.log(name);

//Const can not be reassigned ahd have to initialized with a value
const name = "Rafael Saraiva";
console.log(name);
name = "Roberta Almeida"
console.log(name);


const person = {
    name: "Rafael",
    age: 22
}

person.name = "Roberta";
person.age = "21";
console.log(person);

const numbers = [1,2,3,4,5]

numbers.push(6);
console.log(numbers);
// but i can reassign the values or add more to the array or the object 
// numbers = [3,4] cant do this


//initializing a variable with nothing in it
var greeting;
console.log(greeting);
greeting = "Hi";
console.log(greeting);

//variables name can only contain letters, numbers, _ and $
//it can start with a number

//Multi words variables
var firstName = "" //Camel case = Most used
var first_name = ""
var FirstName = ""
var firstname
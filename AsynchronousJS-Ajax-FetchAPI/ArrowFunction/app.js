const sayHello = function(){
    console.log('hi');
}

//Arrow function the written fucntion and swaps with a =>
const sayHello = () => {
    console.log('hi');
}

//One line arrow functions dont need {}
const sayHello = () => console.log('hi');

//This is returning something
const sayHello = () => 'hi';
//for this implemetation you have to run
console.log(sayHello());

//Return Object
const sayHello = () => ({msg: 'hi'});

//Single parameters don't need ()
const sayHello = name => console.log(`Hello ${name}`);
sayHello('Rafael');

// Multiple parameters need ()
const sayHello = (firstName, lastName) => console.log(`Hello ${firstName, lastName}`);
sayHello('Rafael', 'Saraiva');

//Arrays
const users = ['Rafael', 'Roberta', 'Paulo'];

//Normal function
const nameLengths = users.map(function(name) {
    return name.length;
});

//Arrow function shorter
const nameLengths = users.map((name) => {
    return name.length;
});

//Arrow function shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);

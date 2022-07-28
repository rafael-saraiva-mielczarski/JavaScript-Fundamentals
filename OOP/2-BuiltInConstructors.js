//BUILT IN CONSTRUCTORS 
//Strings

const name1 = 'Rafael';
const name2 = new String('Rafael');

console.log(name2);
console.log(typeof name2);

if(name2 === 'Rafael'){
    console.log('YES');
} else {
    console.log('NO');
}

//NUmber
const num1 = 5;
const num2 = new Number(5);

//Boolean
const bool1 = true;
const bool2 = new Boolean(true);

//Function
const getSum1 = function(x, y){
    return x+y;
}
const getSum2 = new Function('x', 'y', 'return 1 + 1');

//Object
const Rafael1 = {name: "Rafael"};
const Rafael2 = new Object({name: "Rafael"});
console.log(Rafael2);

//Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array[1, 2, 3, 4];

//Regular expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');
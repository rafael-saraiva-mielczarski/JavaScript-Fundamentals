//ARRAY and ARRAY METHODS

//Create some arrays
const numbers = [43, 56, 21, 47, 5, 70];
const numbers2 = new Array(43, 56, 21, 47, 5, 70);
const fruit = ["Apple", "Banana", "Mango", "Grape", "Orange"];
const mixed = [22, "hello", true, undefined, null, {a:1, b:1}, new Date()];

let val;

//Get array length
val = numbers.length;
//Check if is array
val = Array.isArray(numbers);
//Get single value
val = numbers[3];
val = numbers[0];
//Insert into array
numbers[2] = 100;
//Find index of a value
val = numbers.indexOf(43);

//MUTATING ARRAYS
// Add on to end
numbers.push(250);
// Add on to front
numbers.unshift(120);
//Take off from the end
numbers.pop();
//Take off form the front
numbers.shift();
//Splice values
numbers.splice(1,2);
//Reverse the array
numbers.reverse();

//Concatenate Array
val = numbers.concat(numbers2);

//Sorting arrays
val = fruit.sort();//alphabetical order
val = numbers.sort();//sorts by numerical order = 100, 2, 25, 35 ...

//Use the "compare function"
val = numbers.sort(function(x, y){ //sort by value = 2, 25, 35, 100...
    return x -y 
})
//reverse
val = numbers.sort(function(x, y){ //sort by value = 100, 35, 25, 2...
    return y- x 
})

//Find
function under50(num){
    return num < 50;
}

function over50(num){
    return num > 50;
}

val = numbers.find(under50);//it will find the first number in the array thats under 50

console.log(numbers);
console.log(val);
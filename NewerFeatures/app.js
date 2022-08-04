// //ITERATORS & GENERATORS

// //Iterator Example
// function nameIterator(){
//     let nextIndex = 0;

//     return{
//         next: function(){
//             return nextIndex < names.length ?
//             { value: names[nextIndex++], done: false} :
//             { done: true }
//         }
//     }
// }

// //Create an array of names
// const namesArr = ['Rafael', 'Roberta', 'Ana'];
// //Init iterator and pass in the names array
// const names = nameIterator(namesArr);

// console.log(names.next());

// //Generator Example
// function* sayNames(){
//     yield 'Rafael';
//     yield 'Roberta';
//     yield 'Ana';
// }

// const name = sayNames();

// console.log(name.next().value)
// console.log(name.next().value)
// console.log(name.next().value)
// console.log(name.next())

// //ID Creator
// function* createIds(){
//     let index = 0;

//     while(true) {
//         yield index++;
//     }
// }

// const generate = createIds();

// console.log(generate.next().value)
// console.log(generate.next().value)
// console.log(generate.next().value)
// console.log(generate.next().value)
// console.log(generate.next().value)
// console.log(generate.next().value)


// //SYMBOLS =======================================\
// // Create a symbol
// const symbol1 = Symbol();
// const symbol2 = Symbol('sym2')

// console.log(typeof sym2);

// console.log(Symbol('123') === Symbol('123'));
// console.log(`Hello ${symbol1.toString()}`);

// //Unique Object Keys
// const KEY1 = Symbol();
// const KEY2 = Symbol('symbol2');

// const myObj = {};

// myObj.KEY1 = 'Prop1';
// myObj[KEY1] = 'Prop1';
// myObj[KEY2] = 'Prop2';
// myObj.KEY3 = 'Prop3';
// myObj.KEY4 = 'Prop4';

// // console.log(myObj.KEY1);
// // console.log(myObj[KEY1]);

// //Symbols are not enumerable in for...in
// for(let i in myObj){
//     console.log(`${i}: ${myObj[i]}`)
// }

// //Symbols are ignored by JSON.stringify
// console.log(JSON.stringify({key: 'prop'}));
// console.log(JSON.stringify({[Symbol('symbol1')]: 'prop'}));

// //DESTRUCTURING

// //Destructurin Assignment
// let a, b;
// [a, b] = [100, 200];
// //Rest Pattern
// [a, b, ...rest] = [100, 200, 300, 400, 500];

// ({a, b} = {a: 100, b: 200, c: 300, d: 400, e: 500});
// ({a, b, ...rest} = {a: 100, b: 200, c: 300, d: 400, e: 500});

// console.log(rest);

// //Array Destructuring
// const people = ['Rafael', 'Roberta', 'Ana'];
// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);

// //Parse array returned from function
// function getPeople(){
//     return ['Rafael', 'Roberta', 'Ana'];
// }

// let person1, person2, person3;
// [person1, person2, person3] = getPeople();

// console.log(person1, person2, person3);

// //Object Destructuring
// const person = {
//     name: 'Rafael Saraiva',
//     age: 22,
//     gender: 'male',
//     city: 'Porto Alegre',
//     sayHello: function(){
//         console.log('Hello');
//     }
// }

// // //Old ES5
// // const name = person.name,
// //       age = person.age,
// //       city = person.city

// //New ES6 Destructuring
// const { name, age, city } = person;
// console.log(name, age, city);
// sayHello();

// //ES6 MAPS
// //Maps = key-value pairs - can use ANY type as key or value
// const map1 = new Map();

// //Set keys
// const key1 = 'some string';
// const key2 = {};
// const key3 = function(){}; 

// //Set map values by key
// map1.set(key1, 'Value of key1');
// map1.set(key2, 'Value of key2');
// map1.set(key3, 'Value of key3');

// //Get values by key
// console.log(map1.get(key1), map1.get(key2), map1.get(key3));
// //Count Values
// console.log(map1.size);

// //ITERATING MAPS

// //Loop using for...of to get keys and values
// for(let[key, value] of map1){
//     console.log(`${key} = ${value}`);
// }
// //Iterate keys only
// for(let key of map1.keys()){
//     console.log(key);
// }
// //Valeus only
// for(let value of map1.values()){
//     console.log(value);
// }
// //Loop with forEach
// map1.forEach(function(value, key){
//     console.log(`${key} = ${value}`);
// });

// //Convert to Arrays
// //Create an array of the key value pairs
// const KeyValArr = Array.from(map1);
// console.log(KeyValArr);

// //Create an array of the values
// const ValuesArr = Array.from(map1.values());
// console.log(ValuesArr);

// //Create an array of the keys
// const KeyArr = Array.from(map1.keys());
// console.log(KeyArr);


// //SETS ===========================================
// //Sets - Store unique values of any type
// const set1 = new Set();

// //Add values to set
// set1.add(100);
// set1.add('a string');
// set1.add({name: 'Rafael'});
// set1.add(true);
//Doesnt add cause it already exists, has to be unique values
// set1.add(100);
// //Another way to write it
// const set2 = new Set([1, true, 'string']);
// console.log(set2);

// console.log(set1);
// //Get count
// console.log(set1.size);
// //Check for values
// console.log(set1.has(100));//true
// console.log(set1.has(50+50));//true
// console.log(set1.has({name: 'Rafael'}));//false

// //Delete from set
// set1.delete(100);
// console.log(set1);

//Iterate through sets

// //for...of
// for(let item of set1){
//     console.log(item);
// }

// //ForEach loop
// set1.forEach((value) => {
//     console.log(value)
// })

// //Convert set to array
// const setArray = Array.from(set1);
// console.log(setArray);``
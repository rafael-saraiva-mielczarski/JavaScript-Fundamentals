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
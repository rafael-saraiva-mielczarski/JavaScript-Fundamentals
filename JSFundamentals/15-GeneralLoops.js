//GENERAL LOOPS

//FOR
for(let i = 0; i <= 10; i++){
    if(i === 2){
        console.log('2 is my favorite number');
        continue;//passes number 2, show the message and dont repeat it in the print
    }
    if(i === 9){
        break;//stops the loop at 9
    }
    console.log('Number ' + i);
}

//WHILE
let i = 0;

while(i <= 10){
    console.log('Number ' + i);
    i++
}

//DO WHILE it always runs once, even if it dont meet the parameters
let i = 0;

do {
    console.log('Number' + i);
    i++;

}while(i <=10);

//LOOP Trough array
const cars = ['Fit', 'Cayena', 'Kicks', 'Ka', 'Onix'];

for(let i = 0 ; i < cars.length; i++){//run trough the array by using the length
    console.log(cars[i]);//this print the cars names, (i) prints the index 
}

//ForEach runs trought the array and looks cleaner
cars.forEach(function(car, index, array){
    console.log(`${index} : ${car}`);
    // console.log(array);
});

//MAP
const users = [
    {id:1, name: 'Rafael'},
    {id:2, name: 'Roberta'},
    {id:3, name: 'Ana'},
];

const ids = users.map(function(user){
    return user.id;
});

console.log(ids)

//For in
const user = {
    firstName: 'Rafael',
    lastName: 'Saraiva',
    age: 22
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}
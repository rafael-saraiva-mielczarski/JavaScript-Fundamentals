//IF STATEMENTS & COMPARISON OPERATORS

const id = 100;

//Equal to
if(id == 100){
    console.log('Correct');
}else{
    console.log('Incorrect');
}

//NOT Equal to
if(id != 100){
    console.log('Correct');
}else{
    console.log('Incorrect');
}

//Equal to VALUE & TYPE
if(id === 100){
    console.log('Correct');
}else{
    console.log('Incorrect');
}

//NOT Equal to VALUE & TYPE
if(id !== 100){
    console.log('Correct');
}else{
    console.log('Incorrect');
}

if(typeof id !== undefined){ //check if the variable is defined
    console.log(`The ID is ${id}`);
} else{
    console.log('NO ID');
}

//Greater or less Than
if(id > 200){
    console.log('Correct');
}else {
    console.log('Incorrect');
}

const color = 'red';

if(color === 'red'){
    console.log('Color is red');
}else if(color === 'blues'){
    console.log('Color is blue');
}else{
    console.log('Color is not red or blues')
}

//LOgical Operators

const name = "Rafael";
const age = 22;

//And &&
if(age > 0 && age < 12){
    console.log(`${name} is a child`);
}else if(age >= 13 && age <=19){
    console.log(`${name} is a teen`);
}else{
    console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 && age > 65){
    console.log(`${name} can not run in race`);
}else{
    console.log(`${name} can run in the race`);
}

// Ternary Operator
console.log(id === 100 ? 'Correct' : 'Incorrect');

//Without {}
if(id === 100)
    console.log('Correct');
else
    console.log('Incorrect');

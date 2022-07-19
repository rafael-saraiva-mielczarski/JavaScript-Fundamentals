//BLOCK SCOPE WITH LET & CONST
//Global Scope
var a = 1; //function level scope
let b = 2; //block level scope
const c = 3; //block level scope

function test(){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function Scope: ', a, b, c);
}

test();

if(true){
    //Block Scope
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('If Scope: ', a, b, c);
}

for(var a = 0; a < 10; a++){
    console.log(`Loop: ${a}`);
}

console.log('Global Scope: ', a, b, c);
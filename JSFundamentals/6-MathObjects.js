//MATH OBJECT
const num1 = 100;
const num2 = 50;
let val;

//Simple Math
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

//Math object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);//round the number normal
val = Math.ceil(2.4);//round up, even if it should round down
val = Math.floor(2.4);// round down 
val = Math.sqrt(64);//Square root
val = Math.abs(-3);//abs means absolute, so the result will be 3
val = Math.pow(8,2);//pow means potencia
val = Math.max(2,54,23,-2,-20,453,6);//show us the highest value
val = Math.min(2,54,23,-2,-20,453,6);//show us the lowest value
val = Math.random();//give us a random number

val = Math.floor(Math.random() * 20 + 1);//gives us a random number from 1 to 20, rounded up

console.log(val);
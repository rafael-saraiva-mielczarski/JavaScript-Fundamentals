//DATA CONVERSION

let val;//because it will change

//Conversion to String, use x = String(i) or x = (i).toString() both work the same

//Number to string
val = String(555);
val = String(4+4);//it adds and show 8, and lenght == 1
//Bool to String
val = String(true);
//Date to String
val = String(new Date());//counts the wholhe phrase
//Array to String
val = String([1,2,3,4])//counts the , and each index

//toString()
val = (5).toString();
val = (true).toString();


//Conversion from String to Numbers
val = Number("5");
val = Number(true);// true == 1, false == 0, Null == 0
//both string and array will give an NaN(not a number) if written this way
val = Number("Hello");
val = Number([1,2,3]);

//to fix it we write
val = parseInt("100");
val = parseFloat("100.31");

//Output
console.log(val);
console.log(typeof val);
// console.log(val.length); //only works on strings
console.log(val.toFixed());//how many decimal cases you want after the .

const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2)

console.log(sum);
console.log(typeof sum);
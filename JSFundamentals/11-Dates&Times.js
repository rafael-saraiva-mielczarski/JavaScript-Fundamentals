//DATES & TIMES

let val;

const today = new Date();
let birthday = new Date('5-4-2000 16:40:00');//date and time
// birthday = new Date('May 4 2000');
// birthday = new Date('5/4/2000');

val = today.getMonth();
val = today.getDate();//month day
val = today.getDay();//week day
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(23);
birthday.setFullYear(1995);
birthday.setHours(3);

console.log(birthday);
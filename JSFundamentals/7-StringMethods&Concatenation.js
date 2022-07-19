//STRING METHODS and CONCATENATION 

const firstName = "Rafael";
const lastName = "Saraiva";

let val;
age = 22;

val = firstName + lastName

//Concatenation
val = firstName + " " + lastName;

//Append
val = "Rafael ";
val += "Saraiva";// += equals to Append, you add something to de variable

val = "Hello, my name is " + firstName + " and I am " + age;

//Escaping
val = "That's awesome, I can't wait"; 
val = 'That\'s awesome, I can\'t wait'; 

//Length
val = firstName.length;

//Concat
val = firstName.concat(" ", lastName);//same result as the val = firstName + " " + lastName;

//Change case
val = firstName.toUpperCase();
val = lastName.toLowerCase();

//indexOf()
val = firstName.indexOf("a");//give us the first index of the searched item it finds
val = firstName.lastIndexOf("a")//give us the last index it finds

//charAt()
val = firstName.charAt("2");//give us the character in the index selected
val = firstName.charAt(firstName.length - 1);//give us the last character

//substring()
val = firstName.substring(0,4)//gives the characters in the range specified, creating a substring

//slice()
val = firstName.slice(0,4);//almost the same as substring
val = firstName.slice(-3);//starts from the back and gives the last x characters

//split()
const intro = "Hello my name is Rafael";
const tags = "web dev, web design, coding";

val = intro.split(" ");//creates an array separating the words by space.
val = tags.split(",");

//replace()
val = intro.replace("Rafael", "Roberta");//replace one value for another

//includes()
val = intro.includes("Rafael");//check if x is in the variable

console.log(val);
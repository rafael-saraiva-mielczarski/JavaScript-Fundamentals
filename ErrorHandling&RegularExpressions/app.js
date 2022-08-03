////ERROR HANDLING WITH TRY CATCH
// const user = {email: 'saraiva_cmr@hotmail.com'}

// try{
//     ////Produce a ReferenceError
//     // myFunction();
//     ////Produce a TypeError
//     //null.myFunction();
//     ////Produce SyntaxError
//     // eval('Hello World');
//     ////Produce an URIError
//     // decodeURIComponent('%');
//     if(!user.name) {
//         // throw 'User has no name';
//         throw new SyntaxError('User has no name.');
//     }

// } catch(error) {
//     console.log(`User Error: ${error.message}`);
//     // console.log(error.message);
//     // console.log(error.name);
//     // console.log(error instanceof ReferenceError);
// } finally{
//     console.log('finally runs reguardless of result...')
// }

// console.log('Program continues...');

////REGULAR EXPRESSIONS ===============

////EVALUATION FUNCTIONS
// let re;
// re = /hello/
// re = /hello/i; //i == case insensitive
// re = /hello/g; //i == Global search

// console.log(re);
// console.log(re.source);

// //exec() - Return result in an array or null
// // //return the wordl hello, the index where it stars and the input text hello world
// const result = re.exec('hello world');
// ////return null because there is no hi
// // const result = re.exec('hi world');
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// //test() = returns True or False
// //if the /hello/ doesnt have an i after it will return false because in the test is Hello and in the var is hello 
// const result = re.test('Hello world');
// console.log(result);

// //match() - Return result in an array or null
// //almost the same as exec() but the sintax is different
// const str = 'Hello there';
// const result = str.match(re);
// console.log(result);

// //search() - Returns index of the firts match if not found returns -1
// const str = 'a Hello there';
// const result = str.search(re);
// console.log(result);

// // replace() - Return new string with some or all matches of a pattern
// const str = 'Hello there';
// const result = str.replace(re, 'hi');
// console.log(result);

// //METACHARACTER SYMBOLS

let re;
//Literal Characters
re = /hello/;
re = /hello/i;

//Metacharacter Symbols
re = /^h/i;     //^ = Must start with
re = /world$/i;     //$ = Must end with 
re = /^hello$/i;    //Must begin and end with
re = /h.llo/i;    //. = Matches any ONE, but only one, character
re = /h*llo/i;    //. = Matches any character 0 or more times
re = /gre?a?y/i     // ? = Optional Character
re = /gre?a?y\?/i     // ? = Optional Character


//BRACKETS [] - Character Sets
re = /gr[ae]y/i;    //Must be an a or e 
re = /[GF]ray/i;    //Must be an G or F
re = /[^GF]ray/i;    //Match anything execpt G or F
re = /^[GF]ray/i;    //Must star with a G or F
re = /[A-Z]ray/;    //Matchs any uppercase from A to Z
re = /[a-z]ray/;    //Matchs any lowercase from a to z
re = /[A-Za-z]ray/;    //Matchs any case from Aa to Zz
re = /[0-9]ray/;    //Matchs any digit in range


//BRACES {} - Quantifiers
re = /Hel{2}o/i;    //Must occur exactly {n} amount of times
re = /Hel{2,4}o/i;    //Must occur between {n,n} amount of times
re = /Hel{2,}o/i;    //Must occur at least {n,} amount of times with no limit


//PARENTHESES () - Grouping
re = /^([0-9]x){3}$/    //Matches any digit from 0 to 9 exactly 3 times


//SHORTHAND CHARACTER CLASSES
re = /\w/;  // /\w/ = Word character matches with any alphanumeric or _
re = /\w+/;  // + = matches with all alphanumeric or _ 
re = /\W/;  // /\W/ = matches with any Non-Word character 
re = /\d/;  // /\d/ = Matches any digit 
re = /\d+/;  // /\d/ = Matches any digit 0 or more times
re = /\D/;  // /\D/ = Matches anything thas is not 0 to 9
re = /\s/;  // /\s/ = Matches whitespace character
re = /\S/;  // /\S/ = Matches non-whitespace character
re = /Hell\b/i;     // b = word boundary


//ASSERTIONS
re = /x(?=y)/;  // Match x only if followed by y
re = /x(?!y)/;  // Match x only if NOT followed by y


// //String to match
// const str = 'hello world';
// const str = 'Gray';
// const str = 'Hello';
// const str = '1x2x3x';
// const str = 'Hello, welcome to Hell';
const str = 'asudifsgnxyjareiun'


//Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`)
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str);
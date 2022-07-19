// alert("Hello World");

//Log to console - DevTools ----------------------------------------------------------------------
console.log("hello world");
console.log(123);
console.log(true);
console.log([1,2,3,4]); //array
console.log({a:1, b:2}); //object
console.table({a:1, b:2}); //print as a table
console.error("This is an error"); //print an error
console.clear() //clear the console
console.warn("This is a warning"); //print a warning

console.time('Hello'); //set  a parameter and count the time a task takes
    console.log("hello world");
    console.log("hello world");
    console.log("hello world");
    console.log("hello world");
    console.log("hello world");
console.timeEnd('Hello');
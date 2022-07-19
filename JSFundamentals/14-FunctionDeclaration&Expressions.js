//FUNCTION DECLARATION & EXPRESSIONS

//if the parameter is not inserted in the function call the defalut is John Doe
function greet(firstName = 'John', lastName = 'Doe'){ 
    // console.log('Hello');
    return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet('rafael', 'saraiva'));

//Function Expressions
const square = function(x){
    return x*x;
};

console.log(square(8));

//Immidiatley Invokable Function Expressions - IIFEs

(function(){
    console.log('IIFE Ran...');
})();

(function(name){
    console.log('Hello '+ name);
})('Rafael');

const todo = {
    add: function(){
        console.log('Add todo...');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function(){
    console.log('Delete');
}

todo.add();
todo.edit(22);
todo.delete();
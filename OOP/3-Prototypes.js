//PROTOTYPES 
//Object.prototype
//Person.prototype

//Person constructor    
function Person(firstName, lastName, DoB){
    this.firstName = firstName;
    this.lastName = lastName
    this.birthday = new Date(DoB);
    // this.calculateAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

//Calculate age will be equal in every object we create, unlike firstName. So we put it in a prototype and it works just like it would inside the object
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getFullName = function(){
    return (`This is ${this.firstName} ${this.lastName} full name`)
}

//this function its able to change the object lastName 
Person.prototype.getsMarried = function(newName){
    this.lastName = newName;
}

const rafael = new Person('Rafael', 'Saraiva', '05-04-2000');
const roberta = new Person('Roberta', 'Almeida', '02-13-2001');

console.log(roberta);
console.log(roberta.calculateAge());
console.log(rafael.getFullName());

console.log(roberta.getsMarried('saraiva'));
console.log(roberta.getFullName());
console.log(roberta);

//for the firstName the response is true, the second is false cause getsMarried is not a part of the Person Property
console.log(rafael.hasOwnProperty('firstName'));
console.log(rafael.hasOwnProperty('getsMarried'));
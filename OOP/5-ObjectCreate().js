//OBJECT.CREATE() 
//Is just a different way to create the objects
const personPrototypes = {
    greeting: function(){
        return `Hello ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName){
        this.lastName = newLastName
    }
}

const rafael = Object.create(personPrototypes);
rafael.firstName = 'Rafael';
rafael.lastName = 'Saraiva';

rafael.getsMarried('almeida')

console.log(rafael.greeting());

const roberta = Object.create(personPrototypes, {
    firstName: {value: "Roberta"},
    lastName: {value: "Almeida"},
    age: {value: 21}
})

console.log(roberta);
console.log(roberta.greeting());
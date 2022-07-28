// ES6 CLASSES 
//Create a class
//This is the most commom way to write classes, is better to read and to understand
class Person{
    constructor(firstName, lastName, DoB){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birhtday = new Date(DoB);
    }

    greeting(){
        return `Hello ${this.firstName} ${this.lastName}`;
    }

    calculateAge(){
        const diff = Date.now() - this.birhtday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName){
        this.lastName = newLastName;
        return `Married name ${this.firstName} ${this.lastName}`;
    }

    static addNumbers(x, y){
        return x + y;
    }
}

const person1 = new Person('Rafael', 'Saraiva', '05-04-2000');
const person2 = new Person('Roberta', 'Almeida', '03-12-2001');

console.log(person1);
console.log(person1.greeting());
console.log(person1.calculateAge());
console.log(person2.getsMarried("Saraiva"));

//SUB CLASSES

class Person{
    constructor(firstName, lastName){  
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person{
    constructor(firstName, lastName, phone, address){
        super(firstName, lastName);

        this.phone = phone;
        this.address = address
    }

    getAddress(){
        return this.address;
    }
}

customer1 = new Customer('Rafael', 'Saraiva', '898129012', 'rua tal');
console.log(customer1);
console.log(customer1.greeting())
console.log(customer1.getAddress())
//Customer can get the method greeting(), but person can get method getAddress() because it was not extended
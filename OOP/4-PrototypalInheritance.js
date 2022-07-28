//PROTOTYPAL INHERITANCE
//Person Constructor
function Person(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName
}

//Greeting
Person.prototype.greeting = function(){
    return `Hello ${this.firstName} ${this.lastName}`
}

const rafael = new Person('Rafael', 'Saraiva');
console.log(rafael.greeting())

//Customer constructor
function Customer(firstName, lastName, phone, address){
    //call is used to inherite atributes from another object that already exists
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.address = address;
}

//Inherit the Person prototype methods, Object.create allow us to do that
Customer.prototype = Object.create(Person.prototype)

//Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

//Customer greeting
Customer.prototype.greeting = function(){
    return `Hello Customer ${this.firstName} ${this.lastName}`
}

//Costumer creator
const costumer1 = new Customer('roberta', 'almeida', 90284120, 'rua tal')
console.log(costumer1)
//you can inherit the person greeting via customer, but not the customer greeting as a person. Since there is a Customer.greeting created the call is to that function in costumer1.greeting() 
console.log(costumer1.greeting())
console.log(rafael.greeting())
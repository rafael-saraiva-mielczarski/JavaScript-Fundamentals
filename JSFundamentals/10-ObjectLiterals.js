//OBJECT LITERALS

const person = {
    firstName: "Rafael",
    lastName: "Saraiva",
    age: 22,
    email: "Rafael.Mielczarski@ibm.com",
    hobbies: ["videogames", "sports"],
    address:{
        city: "Porto Alegre",
        state: "RS"
    },
    getBirthYear: function(){
        return 2022 - this.age;//use this. to inform that is this object age
    }
}

let val;

val = person;

//Get specific value
val = person.firstName;
// val = person['firstName'];
val = person.lastName;
val = person.age;
val = person.hobbies[0];
val = person.address.state;
// val = person.address["city"];
val = person.getBirthYear();

console.log(val);

const people = [
    {name: "Rafael", age: 22},
    {name: "Ana", age: 58}
]

for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
}
//CONSTRUCTOR & THIS 
//Person constructor    
function Person(name, DoB){
    this.name = name;
    this.birthday = new Date(DoB);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    console.log(this);
}

// console.log(this);//in Global Scope show the window option
// this.alert();


const brad = new Person('Brad', '10-10-2000');
const john = new Person('John', '12-29-1994');
console.log(brad.calculateAge());

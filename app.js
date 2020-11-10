class AgedPerson {
    printAge(){
        console.log(this.age);
    }
}


class Person extends AgedPerson{
    name = 'Aleksandar';

constructor(){
    super();
    this.age = 27;
}

greet(){
    console.log(`Hello I am ${this.name} and I am ${this.age} years old.`);
}
}

// function Person(){
//     this.age = 27;
//     this.name = 'Aleksandar';
//     this.greet = function(){
//         console.log(`Hello I am ${this.name} and I am ${this.age} years old.`);
//     };
// }



const person = new Person();

person.greet();

console.log(person.__proto__);
// Classes, constructor and inheritance
class Person {
    name = 'DJ';
    constructor(){
        //super() // super(a,b) a and b are reference of the parent class which now can be used in the child class
        this.age = 20;
    }
    greet(){
        console.log(`My name is `+this.name+` and I'm `+this.age+` years old`);
    }
}

class AgedPerson extends Person{    
    getAge(){
        console.log(this.age);
    }
    constructor(){
        super();
        this.age=23;
    }
    name = 'DDJJ';
}

// // Constructor function everthing the constructor class has (except super()) can be used here
// function Person() {     // It is a convention to start this function with capital
//     this.age = 23;
//     this.name = 'DJ';
//     this.greet = function(){
//         console.log(`My name is `+this.name+` and I'm `+this.age+` years old`);
//     }
// }

Person.prototype.desc = function(){
    console.log('Describing...');
}

const ap = new AgedPerson();
const pr = new Person();

console.dir(ap);

//Getters and Setters for Prototype
//Getter Prototype
console.log(Object.getPrototypeOf(ap));

//Setter Prototype
//----!!!!!!!!DANGER!!!!!!----- This will overwrite all the existing prototype of the mentioned object so use it WISELY!!
Object.setPrototypeOf(ap,{
    ...Object.getPrototypeOf(ap),
    getName(){
        console.log(`Hi my name is `,this.name,` and I'm `,this.age,` years old!`);
    }
})
console.log(ap);
// console.dir(Person);

// // Prototypes
// const prot = new ap.__proto__.constructor();    // Can be used to get a constructor using proto if we are not able to access the orignal class
// console.log(`AP's proto: `,ap.__proto__);
// console.log('AgedPerson prototype constructor')
// console.dir(prot);

// console.log(pr);
// console.log(ap.getAge());
// pr.greet();
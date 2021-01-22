//lets define an object
//method 1
let person1 = {
    name: 'John Doe',
    age : 49,
    gender: 'Male',
    occupation: 'writer',
    greet: function (){
        return `${this.name} welcomes you to London !!`;
    }
};

//method 2
let person2 = new Object();
person2.name = 'Maya';
person2.age = 25;
person2.gender = 'Female';
person2.occupation = 'Waitress';

//changing the value of object attributes
person1.age = 50;
person2.occupation = 'Accountant';

//accessing the object properties
let intro1 = `${person1['name']} is a ${person1['occupation']}`;
let intro2 = `${person2.name} is a ${person2.age}, ${person2.gender} year old ${person2.occupation} !!`;
//console.log(intro1,intro2);

//deleting object property
delete person2.gender;
delete person1['age'];

//calling object methods
console.log(person1.greet());

//stingify method
let person11 = JSON.stringify(person1);
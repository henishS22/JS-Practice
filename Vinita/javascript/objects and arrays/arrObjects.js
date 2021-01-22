//creating array of objects to store many persons
let Persons = [
    {
        name: 'John Doe',
        age: 29,
        occupation: 'Painter'
    },
    {
        name: 'Jasmine',
        age : 35,
        occupation: 'Teacher'
    },
    {
        name: 'Sanskar',
        age: 15,
        occupation: 'Dancer'
    },
    {
        name: 'Yadya',
        age: 28,
        occupation: 'Chef'
    }
]

//accessing the Persons list
for(let i=0; i<Persons.length; i++ ){
    console.log(`Hi ${Persons[i].name}`);
}

//sum of all persons age's
let totalAge = 0;
for(let i=0; i<Persons.length; i++ ){
    totalAge += Persons[i].age;
}

console.log(totalAge);

//adding a new person to the Persons
const newPerson = {
    name: 'Agni',
    age: 17,
    occupation: 'Pilot'
}
Persons.push(newPerson);
//console.log(Persons);

//find and filter
let adults = Persons.filter(person=> person.age >= 18);
console.log(adults);
let teens = Person.find(person=> person.age>12 && person.age<20);
console.log(teens);
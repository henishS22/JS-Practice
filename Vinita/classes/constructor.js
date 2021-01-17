//constructor function
function Person(){
    this.age = 50;
    this.name = 'Jay';
    this.welcome = function(){
        return `Hi ! ${this.name} and a very happy ${this.age}th birthday`;
    }
}

//calling a constructor function
const person = new Person();
person.welcome();
//using constructor function
function Person(name,age,gender,language){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.language = language;
}
/*the following code is not allowed
Person.nationality = 'Indian';
 */
//using prototypes to add a new field in the constructor
Person.prototype.nationality = 'Indian';
//adding a prototype function
Person.prototype.intro = function(){
    return `Hi, I am ${this.name} and I am a ${this.age} year old ${this.nationality} ${this.gender} and I can speak ${this.language}`;
}

let radha = new Person('radha',20,'female','Malyali');
console.log(radha.intro());
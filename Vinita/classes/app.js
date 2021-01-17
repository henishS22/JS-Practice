//creating a person class
class person{
    maritalStatus = ' ';
    constructor(name,age,nationality,gender){
        this.name = name;
        this.age = age;
        this.nationality = nationality;
        this.gender = gender;
    }
    //class methods
    setMaritalStatus(str){
        this.maritalStatus = str;
    }
    getMaritalStatus(){
       return this.maritalStatus;
    }
    getGender(){
        return this.gender;
    }
    reassignAge(ageFactor){
        return this.age -= ageFactor;
    }
}

//creating an instance of the person class
const rachel = new person('Rachel', 25, 'American', 'female');
rachel.setMaritalStatus('Married');
console.log(rachel);
console.log(rachel.getMaritalStatus());

const radha = new person('Radha', 20, 'Indian', 'female');
console.log(radha.getGender());

const abdul = new person('Abdul', 31, 'Arabic', 'male');

const catana = new person('Catana', 19, 'Mexican', 'female');
catana.reassignAge(2);
console.log(catana);

const aamir = new person('Aamir', 37, 'Indian', 'male');
const Shweta = new person('Shweta', 14, 'Jamaican', 'female');

//instanceof operator
adbul instanceof  person;
//above statement returns true
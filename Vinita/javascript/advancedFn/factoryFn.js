//returns an object without new keyword
function createPerson(fname, lname){
    return {
        fname: fname,
        lname: lname,
        getfullname(){
            return `${this.fname} ${this.lname}`;
        }
    }
}

let meera = createPerson('Meera', 'Jayaram');
console.log(meera.getfullname());
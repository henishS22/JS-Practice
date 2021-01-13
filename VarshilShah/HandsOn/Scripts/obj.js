let x = 'age';
let obj = {
    id : 1,
    name : 'varshil',
    [x] : 21,
    greet : ()=>{
        console.log("hello varshil");
    }
}
obj.address = "paldi";
obj['last name'] = "shah";
console.log(obj);
delete obj.address;
console.log(obj);

// let str = " varshil shah ";
// console.log(str.trim());    

let obj1 = Object.assign({},obj);
obj.id = 2;
console.log(obj1);

console.log('name' in obj);     //check whether key presents in object or not.

function abc(){
    this.id = 5;
    console.log(obj.id);
}

abc.call(obj);
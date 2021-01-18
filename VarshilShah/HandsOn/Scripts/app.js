let arr = [1, 2, 3];
let temp = arr.map((value) => {
  return value;
});

let _arr = [
  {
    id: 1,
    name: "varshil"
  },
  {
    id:2,
    name:'smit'
  }
];

_arr.push({id:3,name:'kirtan',lname:'nagar'});
console.log(Object.keys(_arr[2]))

let x = "id";
let obj = {
  [x]: 1,
  name: "varshil",
  greet: function () {
    console.log(this.id);
  },
};

for (let i in obj) {
  console.log(obj[i]);
}
obj.greet();
//console.log(arr.indexOf(2));
//console.log(temp);

/* var name = "varshil";

if(name === "varshil"){
    var lname = "shah";
}

function hello(){
    var name = "xyz";
    console.log(name);
}

hello();
console.log(name,lname);


 */

/* let obj = {
    fname : 'varshil',
    lname : 'shah'   
}

for(let i in obj){
    console.log(obj[i]);
} */


function aa(str,...values){
    console.log(str + " " + values);
}
aa("str",1,2,3,4);

function pqr(callback,value){
    console.log("how are you" + " " + value);
    callback(5);
}
pqr((q)=>{
    console.log("hello" + " " + q);
},1000);


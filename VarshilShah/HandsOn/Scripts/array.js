let arr = [1, 2, 3];
console.log(arr);

let arr1 = new Array(1, 2, 3); // if pass only one argument then it consider length
console.log(arr1);

let arr2 = Array.from("hii"); //convert string into the array
console.log(arr2);

let arr3 = [1, 2, "hi"]; //mix type
console.log(arr3);

let arr4 = [
  [1, 2, 3],
  [4, 5, 6],
];

for (const value of arr4) {
  //looping multi dimension array
  for (const value1 of value) {
    console.log(value1);
  }
}

let arr5 = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

for (const value of arr5) {
  for (const obj in value) {
    console.log(value[obj]);
  }
}

//methods of array
let movies = ["KGF", "DDLJ"];
movies.push("KRISH"); //add in the last
movies.unshift("DHOOM"); //add in the front
console.log(movies);
const removed = movies.pop(); //remove last
console.log(removed);
console.log(movies);
movies.shift(); //remove first
console.log(movies);

// splice method
movies.splice(0, 2, "MAI HU NA", "BLACK"); //remove 0,1 element and add new two
//movies.splice(1);  delete all elements from 1'st index
console.log(movies);

//slice method
let a = [1, 2, 3, 4];
let b = a.slice(); //copy all elements from a to b
let c = a.slice(0, 2); //copy first two element from a to b
console.log(a, b, c);

//concate method
let d = a.concat(c);
console.log(d);

//indexof method
console.log(d.indexOf(1)); //not working with object
console.log(d.lastIndexOf(1));

//find method
let person = [{ name: "varshil" }, { name: "smit" }];
let p = person.find((pp, idx, persons) => {
  //if we change in p then it affects person also
  return pp.name === "varshil";
});
let pindex = person.findIndex((pp, idx, persons) => {
  return pp.name === "varshil";
});
console.log(p, pindex);

//included method
console.log(a.includes(2));

//foreach loop
const prices = [100, 22, 300, 41, 52];
const newprices = [];

prices.forEach((value, index, pricess) => {
  newprices.push(value * 1.5);
});
console.log(newprices);

// map

const newP = prices.map((price) => {
  return price * 2;
});
console.log(newP);

//sort
prices.sort((a, b) => {
  if (a > b) return 1;
  else if (b > a) return -1;
  else return 0;
});

console.log(prices);

//filter
let filter = prices.filter((value) => {
  return value > 50;
});
console.log(filter);

//split join method
let data = "hello,varshil,shah,10";
let arrr = data.split(",");
arrr[3] = parseInt(arrr[3]);
console.log(arrr);
console.log(a.join(","));

//min max
console.log(Math.min(...a));

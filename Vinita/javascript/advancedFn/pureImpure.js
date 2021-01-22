//pure function
//returns same output for the same input every time
function add(a, b){
    return a+b;
}
let subtract = (a, b)=> a-b;

add(5,7);
subtract(7,5);

//impure functions
//change the variables outside the function or return different output for the same input
let addRand = (a,b) => a + b + Math.random;
addRand(5,7);

arr = [1,2,3,4,5]
function changeArr(){
    for(let i =0; i<arr.length; i++){
        arr[i] -= 5; 
    }
}
changeArr();
console.log(arr)
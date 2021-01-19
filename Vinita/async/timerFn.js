//setTimeout(callback, time)
/*
    if the time = 0 , this doesn't mean that the code will execute immediately 
    but it is rather the minimum time it will take
    therefor depends upon the main thread, if it is available or not
*/ 

//snippet 1
console.log("I am 1");

setTimeout(()=>{
    console.log('I am 2');
},1000);

console.log("I am 3");


//snippet 2
console.log('1');

setTimeout(()=>{
    console.log('2');
},0);

console.log('3');

//the output of the above two codes snippets will be same

//timeout with arguments
let intro = (name)=>{
    console.log(`Hi ${name} ! How are you ?`);
}

setTimeout(intro, 1000, 'Adam');

//setInterval is similar to this just it will execute again and again at the specified interval
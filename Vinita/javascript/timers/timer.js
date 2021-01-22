//timer events
const sayHi = ()=>{
    console.log("I say hi !!");
}

//setTimeout
//executes after specified time
let x = setTimeout(sayHi, 3000);

//clearTimeout
//clears the time set by setTimeout
clearTimeout(x);

//setInterval
//executes after every specified time interval
let y = setInterval(sayHi, 10000);

//clearInterval
clearInterval(y);




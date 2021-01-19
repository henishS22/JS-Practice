//fetch is a promise
fetch("https://developer.mozilla.org/")
.then(function(){
    console.log("This is the first thing that executes after the api is fetched");
})
.then(function(){
    console.log("This is one executes after the first function completes execution successfully");
})
.catch(function(err){
    console.log(err);
    console.log("This executes if any of the then block fails");
});

/*
Promises are better than the callbacks because:
=> the code is more readable
=> catch is there to handle all the errors
=> saves the debugging time
=> saves from the famous callback hell or pyramid of doom
*/

//pizza order example
chooseToppings()
.then(function(toppings){
    console.log('Toppings choosed');
    return placeOrder(toppings);
})
.then(function(order){
    console.log("Order placed");
    return collectOrder(order);
})
.then(function(pizza){
    console.log("Order Collected");
    return eatPizza(pizza);
})
.catch(error=>{
    console.log(error);
})
.finally(function(){
    console.log("Pizzaa eating is done, Tummy is now happy happy !! ");
});
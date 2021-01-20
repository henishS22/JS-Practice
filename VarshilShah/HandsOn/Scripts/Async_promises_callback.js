navigator.geolocation.getCurrentPosition(
  //gives the current user location
  (success) => {
    //callback
    console.log(success);
  },
  (error) => {
    console.log.bind(error);
  }
);

setTimeout(() => {
  console.log("called after console.log");
}, 0); //called after console.log bec it called after the stack is empty

console.log("hello"); //this runs first bec this stores inside the stack

//promises

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done!");
  }, 3000);
});

promise
  .then(
    (value) => {
      console.log(value);
      return "hello"; //return the promise
    },
    (error) => {
      console.log(error);
    }
  )
  .then((data) => {
    //data contains hello
    console.log(data);
  });

//async await

function abc() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Done Hello");
    }, 4000);
  });
  return promise;
}

async function pqr() {
  const p = await abc();
  console.log(p);
  console.log("bb");        //this called after value of p received because of async await
}
pqr();

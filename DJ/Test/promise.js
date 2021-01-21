//Promises with callbacks

const promise = new Promise((resolve, reject) => {
  for (let i = 0; i < 5; i++) {
    if (i === 3) {
      console.log(i);
      setTimeout(() => {
        resolve(i);
      }, 2000);
    } else if (i === 4) {
      console.log(i);
      setTimeout(() => {
        reject(i);
      }, 2000);
    }
  }
});

promise
  .then(result => {
    console.log(
      "Value of i is: ",
      result,
      "\nSquare of i is: ",
      result * result
    );
  })
  .catch(error => {
    console.log(
      " Rejected Value of i is: ",
      error,
      "\nSquare of i is: ",
      error * error
    );
  });

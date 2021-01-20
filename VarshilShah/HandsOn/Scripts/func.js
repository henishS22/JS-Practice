const obj = {
  greet: function greet() {
    console.log("Hello");
  },
};

obj.greet();

//rest operator
const getSum = (showresult, ...values) => {
  let sum = 0;
  for (const value of values) {
    sum += value;
  }
  showresult(sum);
};

const displayresult = (sum) => {
  console.log(sum);
};

getSum(displayresult, 1, 2, 3);



//function factory

function abc(a){
  function pqr(b){
    return a*b;
  }
  return pqr;
}

const abc1 = abc(5);
console.log(abc1(6));
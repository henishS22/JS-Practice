// global variables
let firstvalue = 0;
let secondvalue = 0;
let finalans = 0;
let operator;

//reset the text box
function clear() {
  firstvalue = 0;
  secondvalue = 0;
  finalans = 0;
  box.value = "";
}

//print 1 into the text box
function Printone() {
  box.value += "1";
}
function Printtwo() {
  box.value += "2";
}
function Printthree() {
  box.value += "3";
}
function Printfour() {
  box.value += "4";
}
function Printfive() {
  box.value += "5";
}
function Printsix() {
  box.value += "6";
}
function Printseven() {
  box.value += "7";
}
function Printeight() {
  box.value += "8";
}
function Printnine() {
  box.value += "9";
}
function Printzero() {
  box.value += "0";
}

function operation(sign) {
  // get the value before entering the second value for operation
  firstvalue = parseInt(box.value);
  box.value = "";
  operator = sign; // store the sign(+,-,/,*) for the final calculation
}

function add() {
  operation("+");
}
function subtract() {
  operation("-");
}
function multi() {
  operation("*");
}
function division() {
  operation("/");
}

function equall() {
  // final calculation based on sign
  secondvalue = parseInt(box.value); // storing the second value
  if (operator === "+") {
    finalans = firstvalue + secondvalue;
  } else if (operator === "-") {
    finalans = firstvalue - secondvalue;
  } else if (operator === "*") {
    finalans = firstvalue * secondvalue;
  } else if (operator === "/") {
    finalans = firstvalue / secondvalue;
  } else {
    alert("Something went Wrong please Try again ");
    clear();
    return;
  }
  box.value = finalans;
}

one.addEventListener("click", Printone); //click event for one button
two.addEventListener("click", Printtwo);
three.addEventListener("click", Printthree);
four.addEventListener("click", Printfour);
five.addEventListener("click", Printfive);
six.addEventListener("click", Printsix);
seven.addEventListener("click", Printseven);
eight.addEventListener("click", Printeight);
nine.addEventListener("click", Printnine);
zero.addEventListener("click", Printzero);

plus.addEventListener("click", add);
minus.addEventListener("click", subtract);
multiplication.addEventListener("click", multi);
divide.addEventListener("click", division);

equal.addEventListener("click", equall);
del.addEventListener("click", clear);

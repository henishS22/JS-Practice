const setT = setTimeout(() => {
  console.log("Hello 1000");
  const date = new Date("07-21-2021");
  console.log(date);
}, 1000);

/* const setI = setInterval(() => {
  console.log("hello 3000");
}, 3000);
 */

document.getElementById("stopT").addEventListener("click", () => {
  clearTimeout(setT);
});
document.getElementById("stopI").addEventListener("click", () => {
  clearInterval(setI);
});
document.getElementById("monster").addEventListener("click", () => {
  location.href = "file:///V:/Solulab/JS/VarshilShah/Monster_Killer/index.html";
  // history.back()  back to previous page
  // history.previous()  back to next page
});

// regular expression
const userInput = "varshil@gmail.com";
//console.log(userInput.includes('@'));

let regX = /hello/;
console.log(regX.test("hi, hello")); //if string contains hello then returns true otherwise false

regX = /(h|H)ello/;
console.log(regX.test("hi, Hello")); //if string contains hello or Hello then returns true otherwise false

regX = new RegExp(/.ello/);
console.log(regX.test("Hello")); //if string contains last four characters ello and start with any characters  then returns true otherwise false


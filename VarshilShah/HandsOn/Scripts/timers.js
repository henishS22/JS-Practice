const setT = setTimeout(() => {
  console.log("Hello 1000");
  const date = new Date('07-21-2021');
  console.log(date);
}, 1000);

const setI = setInterval(() => {
  console.log("hello 3000");
}, 3000);

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

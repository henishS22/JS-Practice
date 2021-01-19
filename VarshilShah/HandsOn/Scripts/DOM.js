const h1 = document.querySelector("h1");
h1.textContent = "Hello varshil";
console.log(h1.textContent);

const text = document.querySelector("input");
text.setAttribute("value", "hello");
console.log(text.value);

const all = document.querySelectorAll("li");
for (const i of all) {
  i.textContent = "Abc";
  i.style.color = "red";
}

let ul = document.querySelector("ul");
console.log(ul.children[0].textContent);

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  if (h1.className == "h1") h1.className = "h";
  else h1.className = "h1";

  //ul.innerHTML+= "<li> hello </li>";
  ul.insertAdjacentHTML("afterbegin", "<li> hello </li>");
  const all = document.querySelectorAll("li");
  for (const i of all) {
    i.style.color = "red";
  }
});

const newli = document.createElement("li");
ul.appendChild(newli);
newli.textContent = "varshil";

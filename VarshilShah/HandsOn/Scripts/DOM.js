const h1 = document.querySelector("h1");
h1.textContent = "Hello varshil";
console.log(h1.textContent);

const text = document.querySelector("input");
text.setAttribute("value", "hello");
console.log(text.value);

const all = document.querySelectorAll('li');
for(const i of all){
    i.textContent = "Abc";
    i.style.color = "red";  
}

const ul = document.querySelector('ul');
console.log(ul.children[0].textContent);
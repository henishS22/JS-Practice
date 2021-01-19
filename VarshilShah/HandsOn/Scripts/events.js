function clickMe(event) {
  event.target.disabled = true;
  console.log(event);
}

const myButton = document.querySelector("button");
myButton.addEventListener("click", clickMe.bind(this));

setTimeout(() => {
  myButton.removeEventListener("click", clickMe);
}, 3000);

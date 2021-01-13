const add = document.getElementById("add-movie");
const cancel = document.getElementById("cancel");

let addblock = document.getElementById("add-modal");
let backdrop = document.getElementById("backdrop");

add.addEventListener("click", () => {
  if (addblock.className === "modal") {
    addblock.className = "modal visible";
    add.style.backgroundColor = "pink";
    backdrop.className = "backdrop visible";
  } else {
    addblock.className = "modal";
    add.style.backgroundColor = "orange";
    backdrop.className = "backdrop";
  }
});

cancel.addEventListener("click", () => {
  addblock.className = "modal";
  add.style.backgroundColor = "orange";
  backdrop.className = "backdrop";
});

// addblock.classList.toggle('visible');

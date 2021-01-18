class Person {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class RenderPerson {
  constructor(person) {
    this.person = person;
  }
  render() {
    const li = document.createElement("li");
    li.innerHTML = `
        <label>${this.person.id}</label>
        <label>${this.person.name}</label>
        <button id = "btn">Add</button>
    `;
    const btn = li.querySelector("button");
    btn.addEventListener('click',()=>{
        console.log(this.person);
    })
    return li;
  }
}

class PersonList {
  AllPerson = [
    new Person(1, "varshil"),
    new Person(2, "Smit"),
    new Person(3, "Kirtan"),
  ];
  render() {
    const app = document.getElementById("app");
    const ul = document.createElement("ul");

    for (let i of this.AllPerson) {
      const p = new RenderPerson(i);
      const li = p.render();
      ul.append(li);
    }
    app.append(ul);
  }
}

const personList = new PersonList();
personList.render();

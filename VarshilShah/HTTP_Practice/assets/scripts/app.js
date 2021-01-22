/* eslint-disable no-undef */
// const templatee = document.getElementById("additem");
// const display = document.querySelector(".posts");
// const submitBtn = document.getElementById("submit");
// const title = document.getElementById("title");
// const content = document.getElementById("content");
// const form = document.querySelector("form");
// const ul = document.querySelector("ul");
// const fetchitems = document.getElementById("fetch");

// function sendHTTPRequest(method, url, data) {
//     /* const promise = new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.responseType = "json";
//     xhr.setRequestHeader('content-type','application-json');
//     xhr.addEventListener("load", () => {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         const ObjArr = xhr.response;
//         resolve(ObjArr);
//       } else {
//         console.log(new Error("something went wrong"));
//       }
//     });
//     xhr.onerror = function () {
//       reject(new Error("Something went wrong"));
//     };

//     xhr.send(JSON.stringify(data));
//   });
//   return promise;
//  */
//   return fetch(url, {
//     method: method,
//     body: JSON.stringify(data),
//     headers:{
//       'content-type':'application/json'
//     }
//   }).then((data) => {
//     return data.json();
//   }).catch(error=>{
//     console.log(error);
//   });
// }

// async function fetchRequest() {
//   try {
//     const resultObj = await sendHTTPRequest(
//       "GET",
//       "http://jsonplaceholder.typicode.com/posts"
//     );
//     for (const item of resultObj) {
//       const postEl = document.importNode(templatee.content, true);
//       postEl.querySelector("h2").textContent = item.body;
//       postEl.querySelector("p").textContent = item.text;
//       postEl.querySelector("li").id = item.id;
//       /*   postEl.querySelector("button").addEventListener("click", async () => {
//       const deletResult = await sendHTTPRequest(
//         "DELETE",
//         `http://jsonplaceholder.typicode.com/posts/${item.id}`
//       );
//     });
//    */ display.append(
//         postEl
//       );
//     }
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// async function sendData(title, body) {
//   const userId = Math.random();
//   const PostObj = {
//     title: title,
//     body: body,
//     userId: userId,
//   };
//   const result = await sendHTTPRequest(
//     "POST",
//     "http://jsonplaceholder.typicode.com/posts",
//     PostObj
//   );
//   console.log(result);
// }

// fetchitems.addEventListener("click", fetchRequest);

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
// });

// submitBtn.addEventListener("click", () => {
//   if (title.value === "") {
//     alert("please enter the title");
//   } else if (content.value === "") {
//     alert("please enter the content");
//   } else {
//     sendData(title.value, content.value);
//   }
// });

// ul.addEventListener("click", (event) => {
//   if (event.target.tagName === "BUTTON") {
//     const id = event.target.closest("li").id;
//     const deletResult = sendHTTPRequest(
//       "DELETE",
//       `http://jsonplaceholder.typicode.com/posts/${parseInt(id)}`
//     );
//     ul.removeChild(event.target.closest("li"));
//   }
// });

//using axios

const templatee = document.getElementById("additem");
const display = document.querySelector(".posts");
const submitBtn = document.getElementById("submit");
const title = document.getElementById("title");
const content = document.getElementById("content");
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const fetchitems = document.getElementById("fetch");

async function fetchRequest() {
  try {
    // eslint-disable-next-line no-undef
    const resultObj = await axios.get(
      "http://jsonplaceholder.typicode.com/posts"
    );
    console.log(resultObj);
    for (const item of resultObj.data) {
      const postEl = document.importNode(templatee.content, true);
      postEl.querySelector("h2").textContent = item.body;
      postEl.querySelector("p").textContent = item.text;
      postEl.querySelector("li").id = item.id;
      /*   postEl.querySelector("button").addEventListener("click", async () => {
      const deletResult = await sendHTTPRequest(
        "DELETE",
        `http://jsonplaceholder.typicode.com/posts/${item.id}`
      );
    });
   */ display.append(
        postEl
      );
    }
  } catch (e) {
    console.log(e.message);
  }
}

async function sendData(title, body) {
  try {
    const userId = Math.random();
    const PostObj = {
      title: title,
      body: body,
      userId: userId,
    };
    const result = await axios.post(
      "http://jsonplaceholder.typicode.com/posts",
      PostObj
    );
    console.log(result);
  } catch (error) {
    console.log(error.response);
  }
}

fetchitems.addEventListener("click", fetchRequest);

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

submitBtn.addEventListener("click", () => {
  if (title.value === "") {
    alert("please enter the title");
  } else if (content.value === "") {
    alert("please enter the content");
  } else {
    sendData(title.value, content.value);
  }
});

ul.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const id = event.target.closest("li").id;
    axios.delete(`http://jsonplaceholder.typicode.com/posts/${parseInt(id)}`);
    ul.removeChild(event.target.closest("li"));
  }
});

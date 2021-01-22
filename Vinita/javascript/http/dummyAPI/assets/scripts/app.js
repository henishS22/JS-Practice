const listEl = document.querySelector('.posts');
const postTemplate = document.getElementsByTagName('template');


const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

xhr.onload = function(){
    const listOfPosts = JSON.parse(xhr.response);
    //console.log(listOfPosts);
    for (const post of listOfPosts){
        const postEl = document.importNode(postTemplate.content,true);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent = post.body;
        listEl.append(postEl);
    }

};

xhr.send();




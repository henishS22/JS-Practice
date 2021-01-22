const store = document.getElementById('store');
const retrieve = document.getElementById('retrieve');
let removeItem = document.getElementById('removeItem');
let clearAll = document.getElementById('clearAll');
removeItem.parentNode.removeChild(removeItem);
clearAll.parentNode.removeChild(clearAll);

//event listeners
store.addEventListener('click', ()=>{
    //set cookie
    const id = Math.floor(Math.random()*10);
    const data = `I am data no ${id}`;
    document.cookie = `${data}`;
});

retrieve.addEventListener('click', ()=>{
    console.log(document.cookie);
});
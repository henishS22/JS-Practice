/* const userId = '123';
localStorage.setItem('uid',userId);

const userObj = {
    name:"varshil",
    address:"paldi",
    contact:"9428712306"
}
localStorage.setItem('user',JSON.stringify(userObj));


console.log(localStorage.getItem('uid'));
console.log(JSON.parse(localStorage.getItem('user')));
 */

const game = 'monster';
document.cookie = `game=${game}; max-age=10`;

setTimeout(() => {
    console.log(document.cookie);    
},5000);
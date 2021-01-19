//callbacks can be used to write asynchronous non blocking code
btn.addEventListener('click', () => {
    alert('You clicked me!');
  
    let pElem = document.createElement('p');
    pElem.textContent = 'This is a newly-added paragraph.';
    document.body.appendChild(pElem);
  });

const gods = ['Apollo', 'Artemis', 'Ares', 'Zeus'];

gods.forEach(function (eachName, index){
  console.log(index + '. ' + eachName);
});
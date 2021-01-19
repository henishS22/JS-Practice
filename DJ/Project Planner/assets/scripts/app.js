
const addNewProjBtn = document.getElementById('add_project');
const ADD_MOVIE_MODAL_DIV = document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
const cancelMovieModalBtn = document.getElementById('modal_cancel');
const addMovieModalBtn = document.getElementById('modal_add');
const activeProjects = document.getElementById('active-projects');
//const moreInfoBtn = document.getElementsByClassName('alt');
const ul = activeProjects.querySelector('ul');
const finishBtn = ul.querySelectorAll('button.btn');
const FINISHED_PROJECTS = document.getElementById('finished-projects');
const activateUL = FINISHED_PROJECTS.querySelector('ul');
const activateBtn = activateUL.querySelectorAll('button.btn');


let addProjectTitle = document.getElementById('title');
let addProjectData = document.getElementById('data');

const toggleModal = () => {
    ADD_MOVIE_MODAL_DIV.classList.toggle('visible');
    backdrop.classList.toggle('visible');
}

const addProject = () => {

    const clone = activeProjects.querySelector('li');
    const li = clone.cloneNode(true);
    let title = addProjectTitle.value;
    let data = addProjectData.value;

    let h2 = li.querySelector('h2');
    let p = li.querySelector('p');
    let btn = li.lastChild;
    btn.addEventListener('click', () => {
        let ul = FINISHED_PROJECTS.querySelector('ul');
        ul.appendChild(li);
    })
    console.log();
    if (addProjectData.validity.valid && addProjectTitle.validity.valid) {
        h2.innerHTML = title;
        p.innerHTML = data;
        ul.appendChild(li);
        toggleModal();
    } else {
        alert('Both the feilds needs to be filled');
    }
}

const moreInfoDiv = () => {
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('card');
    alert('MORE INFO!!');

}

const finishProject = () => {
    for (const node of finishBtn) {
        if (node.innerHTML === 'Finish') {
            node.addEventListener('click', () => {
                let ul = FINISHED_PROJECTS.querySelector('ul');
                //    console.log('--------- ', node.parentNode);
                ul.appendChild(node.parentNode);
                node.innerHTML = 'Activate';
            });
        }
    }
}

const activateProject = ()=>{
    for (const node of activateBtn) {
        node.addEventListener('click', () => {
            let ul = activeProjects.querySelector('ul');
            //    console.log('--------- ', node.parentNode);
            ul.appendChild(node.parentNode);
            node.innerHTML = 'Finish';
        });
    }
}

addNewProjBtn.addEventListener('click', toggleModal);
cancelMovieModalBtn.addEventListener('click', toggleModal);
addMovieModalBtn.addEventListener('click', addProject);
finishProject();
activateProject();
//finishBtn.addEventListener('click',finishProject);


// //Adding another div in the end with the title
// moreInfoBtn.addEventListener('click',()=>{
//     alert('MORE INFO!!');
// });
// console.log(moreInfoBtn);




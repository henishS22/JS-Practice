const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('list');
const delBtn = document.getElementById('delBtn');

//add task to dom
addTaskDom = (task)=>{
    let newTask = `<li>
                    ${task}
                    <input type="checkbox" class="checkbox">
                </li>`;

    taskList.innerHTML += newTask;
}

//trim the task for adding to dom
addTaskHandler= ()=>{
    let task = document.getElementById('input').value.trim();
    if(task === ''){
        console.log('Please enter a valid task :');
    }
    else{
        addTaskDom(task);
    }
}

//delete all tasks handler
deleteTaskHandler = ()=>{
    taskList.innerHTML = '';
}

//call task handler on add button click
addBtn.addEventListener('click', addTaskHandler);
//delete all tasks event
delBtn.addEventListener('click', deleteTaskHandler);
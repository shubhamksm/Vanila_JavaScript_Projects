const form = document.querySelector('#task-form');
const taskInput = document.getElementById('task-input');
const filter = document.getElementById('filter');
const clearBtn = document.querySelector('.clear-task');
const taskList = document.querySelector('.collection');

//console.log(form, taskInput, filter, clearBtn);

//Load all Event Listners
loadAllEvent();

function loadAllEvent(){

    //Function to Load from Local Storage:
    document.addEventListener('DOMContentLoaded', loadContent);

    //Function to Add Task
    form.addEventListener('submit', addTask);

    //Function to Delete Task
    taskList.addEventListener('click', deleteTask);

    //Function Clear All
    clearBtn.addEventListener('click', clearTasks);

    //Function Filer task
    filter.addEventListener('keyup', filterTask);


}

//Load content if present in Local Storage:
function loadContent(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
        //Create New List item
        li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(task));
        //Add Anchor tag with Delete Icon
        anc = document.createElement('a');
        anc.className = 'delete-task secondary-item right'
        anc.innerHTML = '<i class="fa fa-minus-circle fa-lg"></i>'
        li.appendChild(anc);

        //We want to append li with ul
        taskList.append(li);
    })
}

//Function to Add new Task :
function addTask(e){

    text = taskInput.value;
    if(text === ''){
        alert('Please Add Task');
    }

    //Create New List item
    li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(text));
    //Add Anchor tag with Delete Icon
    anc = document.createElement('a');
    anc.className = 'delete-task secondary-item right'
    anc.innerHTML = '<i class="fa fa-minus-circle fa-lg"></i>'
    li.appendChild(anc);

    //We want to append li with ul
    taskList.append(li);

    addTaskToLocalStorage(taskInput.value);

    //Clear input after adding
    taskInput.value = '';
    //console.log(li);
    e.preventDefault();
}

//Function to Add task to Local Storgae:
function addTaskToLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Function to Delete Task
function deleteTask(e){
    if(e.target.parentElement.classList.contains('delete-task')){
        if(confirm('Are You Sure ?')){
            e.target.parentElement.parentElement.remove();

            //Call function to delete task from Local Storage:
            deleteTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

//Function to delete task from Local Storage:
function deleteTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    })

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Function to clear all tasks:
function clearTasks(e){

    //Simple but not efficient
    //taskList.innerHTML = '';

    //Faster
    while(taskList.firstChild){
        taskList.firstChild.remove();
    }

    clearAllTasksFromLocalStorage();
}

//Function to clear all tasks from local storage:
function clearAllTasksFromLocalStorage(){
    localStorage.clear();
}

//Filter Task:
function filterTask(e){
    text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none'
        }
    })
    //console.log(text);
}
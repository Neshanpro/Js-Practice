//UI Elements
let form = document.querySelector('#task_form');
let taskInput = document.querySelector('#new_task');
let filterTask = document.querySelector('#task_filter');
let taskList = document.querySelector('ul');
let clearTask = document.querySelector('#clear_task_btn');

//Event Listeners
form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
clearTask.addEventListener('click', clearBtn);
filterTask.addEventListener('keyup', taskFilter);
document.addEventListener('DOMContentLoaded', getTasks)

//Functions
function addTask(e) {
    if (taskInput.value === '') {
        alert("Please Input A Task!")
    } else {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + " "));
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = 'x';
        li.appendChild(link);
        taskList.appendChild(li);
        storeInLocalStorage(taskInput.value);
        taskInput.value = ' ';
    }
    e.preventDefault();
};

function removeTask(e) {
    if (e.target.hasAttribute("href")) {
        if (confirm("Are you Sure?")) {
            let ele = e.target.parentElement;
            ele.remove();
            removeFromLS(ele);
        }
    }
};

function clearBtn(e) {
    //taskList.innerHTML = ' ';
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    localStorage.clear();
};

function taskFilter(e) {
    let text = e.target.value.toLowerCase();
    document.querySelectorAll('li').forEach(task => {
        let item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })
};

function storeInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(task => {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(task + " "));
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = 'x';
        li.appendChild(link);
        taskList.appendChild(li);
    });
}

function removeFromLS(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    let li = taskItem;
    li.removeChild(li.lastChild);
    tasks.forEach((task, index) => {
        if (li.textContent.trim() === task) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
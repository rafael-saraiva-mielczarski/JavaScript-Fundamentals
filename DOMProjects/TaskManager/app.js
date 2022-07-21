// Define all the UI variables we are going to manipulate 
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  //Load previous tasks setted in local storage
  form.addEventListener('DOMContentLoaded', getTasks);
  // Add task event and store in LS, type submit and the function we created to run what we wish
  form.addEventListener('submit', addTask);
  //remove task/LS, type click, when the btn we decided is clicke it remove as the function wishes
  taskList.addEventListener('click', removeTask);
  //clear all tasks from UI and LS
  clearBtn.addEventListener('click', clearTask);
  //filter all tasks by word or letter
  filter.addEventListener('keyup',filterTasks);
}

//Get from local Storage existing tasks when you load in to the page
function getTasks(task){
  let tasks;
  if(localStorage.getItem('task') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('task'));
  }

  tasks.forEach(function(task){
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(task));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);
    // Append li to ul
    taskList.appendChild(li);
  })
}
// Add Task and stores it Local Storage
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add task has nothing to add');
  }
  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);
  // Append li to ul
  taskList.appendChild(li);
  
  //all the process above are used to create a element trough JS, we created a list item<li> add a class name to it<li class="collection-item" then append it(add) to an existing element in HTML. After this we set a new var link and created an <a>(anchor) elemente to it, then we added a class and an icon to it. 
  
  //Store data in Local Storage
  storeTaskInLocalStorage(taskInput.value);
  // Clear input
  taskInput.value = '';
  e.preventDefault();
}

//Store in local storage
function storeTaskInLocalStorage(task){
  let tasks;
  if(localStorage.getItem('task') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('task'));
  }
  
  tasks.push(task);
  localStorage.setItem('task', JSON.stringify(tasks));
}

//function to remove tasks from UI and Local Storage when the delete btn is clicked
function removeTask(e){
  //e.target aims at <i class> which is the icon, calling its parent <a class = delete-item> element and checking if it contains the x parameter. If TRUE, we delete the parent element <li class> of the parent element <a class> which is what we want to do. Delegation Method
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure you want to delete task?')){//pops an alert when deleted, if ok then it goes trough
      e.target.parentElement.parentElement.remove();
    }
  }
  //Remove from Local Storage
  removeFromLocalStorage(e.target.parentElement.parentElement);
}

//Function to remove from the local storage
function removeFromLocalStorage(taskItem){
  let tasks;
  if(localStorage.getItem('task') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('task'));
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      task.splice(index, 1);
    }
  })

  localStorage.setItem('tasks', JSON.stringify(tasks));
}


//Clear tasks
function clearTask(){
  // taskList.innerHTML = ''; this is one way to do it
  //faster way
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
  //Clear all tasks from Local Storage
  clearFromLocalStorage();
}

function clearFromLocalStorage(){
  localStorage.clear();
}


//Filter tasks by letter or word
function filterTasks(e){
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else{
      task.style.display = 'none';
    }
  })
}
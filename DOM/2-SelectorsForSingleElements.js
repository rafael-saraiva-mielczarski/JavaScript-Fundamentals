//DOM SELECTORS FOR SINGLE ELEMENTS

//document.getElementById()
//as is says, only select elements by their id

console.log(document.getElementById('task-title'));

//get things grom the element

console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');
//Change styling
taskTitle.style.background = '#000';
taskTitle.style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';


//Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My List';
taskTitle.innerHTML = '<span style="color:red">Task List</span>';

document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello';
document.querySelector('li:nth-child(even)').style.color = 'gray';
//the ways above only select the first element that appears, if there are more than one h5 only the first will change
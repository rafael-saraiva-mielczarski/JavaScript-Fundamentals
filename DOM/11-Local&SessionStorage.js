// LOCAL & SESSION STORAGE 
// Local storage only clears when you manually delete it, via program or going trough locally
// Session storage clears every time you leave the site ou that specific session

//set local storage item
localStorage.setItem('name', 'Rafael');
localStorage.setItem('age', '22');

//set session storage item
sessionStorage.setItem('name', 'Rafael');

//remove from local storage
localStorage.removeItem('name');

//get from local storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age')

//clear local storage
localStorage.clear();

console.log(name,age);

document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value;
  
  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
  
  alert('Task saved');

  e.preventDefault();
})

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task) {
  console.log(task);  
});
//KEYBOARD & INPUT EVENTS

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

//Clear input when one is inserted
taskInput.value = '';

form.addEventListener('submit', runEvent);

//Keydown when you 
taskInput.addEventListener('keydown', runEvent);
//Keyup when you release the btn the event triggers
taskInput.addEventListener('keyup', runEvent);
//Keypress
taskInput.addEventListener('keypress', runEvent);
//Focus
taskInput.addEventListener('focus', runEvent);
//Blur
taskInput.addEventListener('blur', runEvent);
taskInput.addEventListener('keyup', runEvent);
//Cut
taskInput.addEventListener('cut', runEvent);
//Paste
taskInput.addEventListener('paste', runEvent);
//Input everythin that happens counts as an event
taskInput.addEventListener('input', runEvent);
//Change only happens in <select> forms
select.addEventListener('change', runEvent);

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  console.log(e.target.value);

  heading.innerText = e.target.value;

  // //get inpute value
  console.log(taskInput.value);
  
  e.preventDefault();
}
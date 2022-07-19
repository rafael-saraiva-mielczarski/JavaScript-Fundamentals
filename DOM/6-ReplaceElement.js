//REPLACE ELEMENT
//Create an element
const newHeading = document.createElement('h2');
//add id
newHeading.id = 'task-title';
//new text node
newHeading.appendChild(document.createTextNode('Task List'));

//get the old heading we want to replace
const oldHeading = document.getElementById('task-title');
//Parent
const cardAction = document.querySelector('.card-action');

//Replace, use the parent element of the one you want to replace(child) as a guide
cardAction.replaceChild(newHeading, oldHeading);

// console.log(newHeading);

//REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//remove specififc list item
lis[0].remove();

//remove child element
list.removeChild(lis[3]);

//CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

//Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;

console.log(val);

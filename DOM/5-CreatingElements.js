//CREATING ELEMENTS 
//Create a element
const li = document.createElement('li');

//add class
li.className = 'collection-item';

//add id
li.id = 'new-item';

//add attribute
li.setAttribute('title', 'New Item');

//Create a text node and append it
li.appendChild(document.createTextNode('Hello World'));

//create a be link element
const link = document.createElement('a');
//add classes
link.className = 'delete-item secondary-content';
//add icon html
link.innerHTML = '<i class="fa fa-remove"></i>'

//append the link create above to the li below
li.appendChild(link);

//Append li as child to ul
document.querySelector('ul.collection').appendChild(li);
//we created a li equal to the html one just by using JavaScript

console.log(li);
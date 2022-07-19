// TRAVERSING THE DOM

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

//Get child nodes = returns the line break + the li
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// Node Types returns
// 1 - Element
// 2 - Attribute(deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

//Get children element nodes = returns only the li
val = list.children;
val = list.children[0];
val = list.children[0].textContent = 'Hello';

//Children of children
list.children[3].children[0].id = 'test-link'
val = list.children[3].children[0];

//first child
val = list.firstChild;
val = list.firstElementChild;

//last child
val = list.lastChild;
val = list.lastElementChild;

//count the child elements
val = list.childElementCount;

//Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;

//Get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);
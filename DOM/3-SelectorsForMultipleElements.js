//DOM SELECTORS FOR MULTIPLE ELEMENTS 

//document.getElementsByClassName

const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Hello';

//using the querySelector we can attach the selection to an specific section or item
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems);

//document.getElementsByTagName
const lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

//Convert HTML collection into array 
lisArr = Array.from(lis)

lisArr.reverse();

lisArr.forEach(function(li, index){
  console.log(li.className);
  li.textContent = `${index}:Hello`;
})

console.log(lis);

//document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
    item.textContent = `${index}:Hello`;
  })

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
  li.textContent = `${index}:Hello`;
  li.style.background = 'gray';
})

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = 'orange';
}

console.log(items);
console.log(liOdd);
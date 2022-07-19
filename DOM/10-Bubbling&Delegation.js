//EVENT BUBBLING & DELEGATION 

//BUBBLING
//when triggered the click in card title, all the bellow are triggered as well. Bubbling goes up the elements in HTML 
document.querySelector('.card-title').addEventListener('click',function(){
  console.log('card title');
})

document.querySelector('.card-content').addEventListener('click',function(){
  console.log('card content');
})

document.querySelector('.card').addEventListener('click',function(){
  console.log('card');
})

document.querySelector('.col').addEventListener('click',function(){
  console.log('col');
})

//DELEGATION
// same as the bubbling but it goes down the HTML elements. You target x class you want to work with by going trought its parent elements.

const delItem = document.querySelector('.delete-item');
//this way it only triggers the event when clicked the first delete item
delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e){
  if(e.target.parentElement.className === 'delete-item secondary-content'){
    console.log('delete item');
  }
  
  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
 //This is the best way to do it, even if we change something in the HTML class name it will still work if it contais 'delete-item'
}
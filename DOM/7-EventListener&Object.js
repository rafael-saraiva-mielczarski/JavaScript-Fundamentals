// EVENT LISTENER $ EVENT OBJECT 

document.querySelector('.clear-tasks').addEventListener('click', function(e){
  console.log('Hello World');
//normally de event would happen,like redirect to a page,but using the below it stops.
  e.preventDefault();
});

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  // console.log('Clicked');
  let val;

  val = e;

  e.preventDefault();
  
  //evente target element
  val = e.target;
  val = e.target.className;
  val = e.target.classList;

  e.target.innerText = 'Hello';

  //event type
  val = e.type;

  //Timestamp
  val = e.timeStamp;

  //Coordinates of the evente relative to window
  val = e.clientY;
  val = e.clientX;

  //Coordinates of the evente relative to element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}
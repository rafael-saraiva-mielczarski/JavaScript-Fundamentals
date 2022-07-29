//select the get-jokes btn in the html and add an event listener, that runs the getJokes function when clicked
document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    //selects the value thats inputed in the form number
    const number = document.querySelector('input[type="number"]').value;

    //Makes a call to the API
    const xhr = new XMLHttpRequest();

    //Get what we want from the API by typing a number and running the code above
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
    //
    xhr.onload = function(){
        if(this.status === 200){
            //JSON.parse transform the JSON file into Object, wich makes easier to manipulate
            const response = JSON.parse(this.responseText);
            console.log(response); 
            //The code above is to call the API and get a response
            //The code bellow is to return what we desire to the UI
            let output = '';
            if(response.type === 'success'){
                response.value.forEach(function(joke){
                    output += `<li>${joke.joke}</li>`;
                });
            } else {
                output += '<li>something went wrong</li>';
            }

            document.querySelector('.jokes').innerHTML = output;
        }
    }
    
    xhr.send()

    e.preventDefault();
}
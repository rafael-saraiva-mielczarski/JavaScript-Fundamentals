document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJSON);

document.getElementById('button3').addEventListener('click', getExternal);


//Get local text file data
function getText(){
    //fetch returns a promise(resolve, reject)
    fetch('test.txt')
        .then(response => response.text())
        .then(data =>{
            console.log(data);
            document.getElementById('output').innerHTML = data;
        })
        .catch(error => console.log(error))
}

//Get JSON data
function getJSON(){
    //fetch returns a promise(resolve, reject)
    fetch('posts.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let output = '';
            data.forEach(post => {
                output += `<li>${post.title}</li>`
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(error => console.log(error));
}

//Get EXTERNAL data
function getExternal(){
    //fetch returns a promise(resolve, reject)
    fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            //Since the data is an Array, we got to loop through it. In this case we want to return the user login, so we loop through each user data to return only the login
            let output = '';
            //the output is empty because we will get the forEach loop so it returns all users
            data.forEach(user => {
                output += `<li>${user.login}</li>`
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(error => console.log(error))
}
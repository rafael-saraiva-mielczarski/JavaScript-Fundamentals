const http = new EasyHTTP;

// //Get Users
// const users = http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

//Create user data
const data = {
    name: 'Rafael Saraiva',
    username: 'R_Saraiva',
    email: 'saraiva_cmr@hotmail.com'
}

//Create User(POST)
http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(error));

//Update User(PUT)
http.put('https://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(err => console.log(error));

//Delete User(PUT)
http.delete('https://jsonplaceholder.typicode.com/users/2', data)
.then(data => console.log(data))
.catch(err => console.log(error));

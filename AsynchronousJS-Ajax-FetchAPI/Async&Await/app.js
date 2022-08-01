// async function myFunction(){
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('hELLO'), 1000)
//     });

//     const error = true;

//     if(!error){
//         const response = await promise; 
//     } else {
//         await Promise.reject(new Error('Some error'));
//     }
// }

// myFunction()
//     .then(response => console.log(response))
//     .catch(error => console.log(error))

async function getUsers(){
    //await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');


    //Only proceed its promise is resolved
    const data = await response.json();

    //Only proceed once second promise is resolved
    return data;
}

getUsers().then(users => console.log(users));
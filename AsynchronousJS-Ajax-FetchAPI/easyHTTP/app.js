const http = new easyHTTP;

//GET posts
http.get('https://jsonplaceholder.typicode.com/posts', function(error, response){
    if(error){
        console.log(error)
    } else {
        console.log(response)
    }
});

//GET single post
http.get('https://jsonplaceholder.typicode.com/posts/1', function(error, post){
    if(error){
        console.log(error)
    } else {
        console.log(post)
    }
});

// Create data to send to API
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

//POST data(post)
//if you run in the console you can see that id has been added by the rest API
http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, post){
    if(error){
        console.log(error)
    } else {
        console.log(post)
    }
})

//PUT post
//selecet the the first id /1 in the url API to put the data
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(error, post){
    if(error){
        console.log(error)
    } else {
        console.log(post)
    }
})

//DELETE post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(error, response){
    if(error){
        console.log(error)
    } else {
        console.log(response)
    }
})
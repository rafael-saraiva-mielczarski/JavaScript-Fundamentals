// //WHIT NO CALLBACK FUNCTIONS
// const posts = [
//     {title: 'Post one', body: 'This is post one'},
//     {title: 'Post one', body: 'This is post one'}
// ];

// function createPost(post){
//     setTimeout(function(){
//         posts.push(post);
//     }, 2000);
// }

// function getPosts(){
//     setTimeout(function(){
//         let output = ''
//         posts.forEach(function(post) {
//             output += `<li>${post.title}</li>`;
//         });
//     },1000);
//     document.body.innerHTML = output;
// }

// createPost({title: 'Post Three', body: 'This is post three'});

// getPosts();

//WHIT CALLBACKS

const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post one', body: 'This is post one'}
];
//the callback parameter makes it easier to call a function within a function
// function createPost(post, callback){
//     setTimeout(function(){
//         posts.push(post);
//         callback();
//     }, 2000);
// }

// function getPosts(){
//     setTimeout(function(){
//         let output = ''
//         posts.forEach(function(post) {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     },1000);
// }

// createPost({title: 'Post Three', body: 'This is post three'}, getPosts);
//whit no callbacks, the "main" would have to call both function, resulting in not showing the createPost result because of the time out being bigger than the getPosts one

// ES6 PROMISES ===================================
function createPost(post){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post);
            const error = true;
            if(!error) {
                resolve();
            } else {
                reject('Something went wrong');
            }
        }, 2000);
    });
};

function getPosts(){
    setTimeout(function(){
        let output = ''
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}

createPost({title: 'Post Three', body: 'This is post three'}).then(getPosts).catch(function(error){
    console.log(error);
});

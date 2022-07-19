//TEMPLATE LITERALS

const name = "Rafael";
const age = 22;
const job = "SDE Inter";
const city = "Porto Alegre"

//Without template strings (es5)
html = '<ul><li>Name: ' +name+ '</li><li>Age: ' + age + '</li><li>Job: ' +job+ '</li><li>City: ' +city+ '</li></ul>';

html = '<ul>' +
            '<li>Name: ' +name+ '</li>' +
            '<li>Age: ' + age + '</li>' +
            '<li>Job: ' +job+ '</li>' +
            '<li>City: ' +city+ '</li>' +
        '</ul>';

//With Template string (es6)
function hello(){
    return "hello";
}
html = `
    <ul> 
        <li>Name: ${name} </li> 
        <li>Age: ${age} </li> 
        <li>Job: ${job} </li> 
        <li>City: ${city} </li>
        <li> ${2+2} </li> 
        <li> ${hello()} </li>
        <li> ${age > 20 ? "Over 20" : "Under 20"} </li>  
    </ul>
    `;

document.body.innerHTML = html;//DOM

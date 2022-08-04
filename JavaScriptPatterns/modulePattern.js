//MODULE & Revealing Module Pattern

//Basic Structure
(function() {
    //Declare private vars and functions

    return{
        //declare public var and functions
    }
})();

//Standard Module Patern
const UIControler = (function(){
    let text = 'Hello World';
    //This var and functions are not accessible outside
    const changeText = function(){
        const element = document.querySelector('h1');
        element.textContent = text;
    }
    //We return what we want to manipulate outside of the function scope
    return{
        callChangeText: function() {
            changeText();
            console.log(text);
        }
    }
})();

UIControler.callChangeText();

//Revealing Module Patern
const ItemCtrl = (function() {
    let data = [];

    function add(item) {
        data.push(item);
        console.log('Item Added...');
    }

    function get(id){
        return data.find(item =>{
            return item.id === id;
        });
    }

    return {
        add: add,
        get: get
    }
})();

ItemCtrl.add({id: 1, name: 'Rafael'});
ItemCtrl.add({id: 2, name: 'Ricardo'});
console.log(ItemCtrl.get(2))

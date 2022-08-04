//MEDIATOR PATTERN ===========================
const User = function(name) {
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function(message, to) {
        this.chatroom.send(message, this, to);
    },
    recieve: function(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`)
    }
}

const Chatroom = function() {
    let users = {};

    return{
        register: function(user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message, from, to) {
            if(to) {
                //Single user message
                to.recieve(message, from);
            } else {
                //Entire chatroom message
                for(key in users) {
                    if(users[key] !== from) {
                        users[key].recieve(message, from);
                    }
                }
            }
        }
    }
}

const rafael = new User('Rafael');
const ricardo = new User('Ricardo');
const ana = new User('Ana');

const chatroom = new Chatroom();

chatroom.register(rafael);
chatroom.register(ricardo);
chatroom.register(ana);

rafael.send('Hey ana', ana);
ricardo.send('Hello dev', rafael);



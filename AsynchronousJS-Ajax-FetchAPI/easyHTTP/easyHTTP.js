function easyHTTP(){
    this.http = new XMLHttpRequest();
}

//Make an HTTP GET request
easyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);
    //self is used because inside the IF the this. is not declared and throws an error
    let self = this;
    this.http.onload = function() {
        if(self.http.status === 200){
            callback(null, self.http.responseText);
        } else {
            callback('Error: ' + self.http.status);
        }
    };
    this.http.send();
}

//Make an HTTP POST request
//data is parameter cause we want to post something, this is something has to be the data
easyHTTP.prototype.post = function(url, data, callback){
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function() {
        callback(null, self.http.responseText);
    };
    //send is different than in the get cause we are actually sending data to the API
    this.http.send(JSON.stringify(data));
}

//Make an HTTP PUT request
easyHTTP.prototype.put = function(url, data, callback){
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function() {
        callback(null, self.http.responseText);
    };
    //send is different than in the get cause we are actually sending data to the API
    this.http.send(JSON.stringify(data));
}

//Make an HTTP DELETE request
easyHTTP.prototype.delete = function(url, callback) {
    this.http.open('DELETE', url, true);
    //self is used because inside the IF the this. is not declared and throws an error
    let self = this;
    this.http.onload = function() {
        if(self.http.status === 200){
            callback(null, 'Post Deleted');
        } else {
            callback('Error: ' + self.http.status);
        }
    };
    this.http.send();
}
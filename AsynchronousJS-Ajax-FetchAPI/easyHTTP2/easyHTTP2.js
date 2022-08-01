/**
 * EASYHTTP Library
 * Library for making HTTP Requests
 * 
 * @version 2.0.0
 * @author Rafael Saraiva
 * @license MIT
 * 
 **/

class EasyHTTP {
    //Make an HTTP GET request
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    }

    //Make an HTTP POST request
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    }

    //Make an HTTP PUT request
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    }

    //Make an HTTP DELETE request
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
            })
                .then(response => response.json())
                .then(data => resolve("Deleted"))
                .catch(error => reject(error));
        });
    }
}

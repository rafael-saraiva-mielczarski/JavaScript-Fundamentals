class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book){
        const list = document.getElementById('book-list');
        
        //Create table row element
        const row = document.createElement('tr');
        
        //Insert cols into tr
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete-item">X</a></td>`
        ;

        list.appendChild(row);
    }

    showAlert(message, className){
        //Create a div
        const div = document.createElement('div');
        
        //Give a class name to the div
        div.className = `alert ${className}`;
        
        //Add a message to the div
        div.appendChild(document.createTextNode(message));
        
        //Get parent of div
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        
        //Grab the container element and insert alert = div, before the form
        container.insertBefore(div, form);
        
        //set timemout to disappear
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }

    clearFields(){
        document.getElementById('title').value = ' ';
        document.getElementById('author').value = ' ';
        document.getElementById('isbn').value = ' ';
    }
}

// Local Storage Class
class Store {
    static getBooks() {
      let books;
      if(localStorage.getItem('books') === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem('books'));
      }
  
      return books;
    }
  
    static displayBooks() {
      const books = Store.getBooks();
  
      books.forEach(function(book){
        const ui  = new UI;
  
        // Add book to UI
        ui.addBookToList(book);
      });
    }
  
    static addBook(book) {
      const books = Store.getBooks();
  
      books.push(book);
  
      localStorage.setItem('books', JSON.stringify(books));
    }
  
    static removeBook(isbn) {
      const books = Store.getBooks();
  
      books.forEach(function(book, index){
       if(book.isbn === isbn) {
        books.splice(index, 1);
       }
      });
  
      localStorage.setItem('books', JSON.stringify(books));
    }
  }
  
  // DOM Load Event
  document.addEventListener('DOMContentLoaded', Store.displayBooks);
  

//Event Listener for adding books
document.getElementById('book-form').addEventListener('submit', function(e){
    const title = document.getElementById('title').value,
          author= document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;
    
    //Instatiate new Book
    const book = new Book(title, author, isbn);
   
    //Instatiate UI
    const ui = new UI();

    //validate empty inputs
    if(title === ' ' || author === ' ' || isbn === ' ') {
        //Error alert
        ui.showAlert('Please insert all fields', 'error');
    } else {
        //Add book to list
        ui.addBookToList(book);
        //Show success alert
        ui.showAlert('Book added', 'success');
        //Clear Fields
        ui.clearFields();
    }

    e.preventDefault();
})

//Event Listener for deleting books
document.getElementById('book-list').addEventListener('click', function(e){
    
    //Instatiate UI
    const ui = new UI();

    ui.deleteBook(e.target);

    ui.showAlert('Book removed', 'success');
    
    e.preventDefault();
})
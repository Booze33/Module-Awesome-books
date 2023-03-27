import Book from './book.js';

class Library {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('MY-Library')) || [];
    this.section = document.querySelector('#book-list');
    this.form = document.querySelector('#form');
    this.title = document.querySelector('#title');
    this.author = document.querySelector('#author');
    this.addButton = document.getElementById('add-book-btn');

    this.addButton.addEventListener('click', () => this.addBook());
    this.getBooks();
  }

  addBook() {
    const bookTitle = this.title.value;
    const bookAuthor = this.author.value;
    const objBook = new Book(bookTitle, bookAuthor);
    this.books.push(objBook);
    this.saveToLocalStorage();
    this.getBooks();
    this.clearInputs();
  }

  removeBook(title, author) {
    this.books = this.books.filter(
      (objBook) => objBook.title !== title || objBook.author !== author,
    );
    this.saveToLocalStorage();
    this.getBooks();
  }

  // Local Storage
  saveToLocalStorage() {
    localStorage.setItem('MY-Library', JSON.stringify(this.books));
  }

  getBooks() {
    this.section.innerHTML = '';
    this.books.forEach((book) => {
      const div = document.createElement('div');
      const removeButton = document.createElement('button');
      removeButton.innerText = 'Remove';
      removeButton.className = 'btn remove-btn';
      removeButton.addEventListener('click', () => {
        this.removeBook(book.title, book.author);
      });
      div.textContent = `${book.title} by ${book.author}`;
      div.appendChild(removeButton);
      div.className = 'tr';
      this.section.appendChild(div);
    });
  }

  clearInputs() {
    this.title.value = '';
    this.author.value = '';
  }
}

export default Library;
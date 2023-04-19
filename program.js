/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const myLibrary = [];

function Book(title, author, nPages, read) {
  this.title = title;
  this.author = author;
  this.nPages = nPages;
  this.read = read;
}

function addBookToLibrary(book) {
  const card = document.createElement('div');

  const title = document.createElement('h3')
  title.textContent = book.title;

  const author = document.createElement('p');
  author.textContent = book.author;

  const nPages = document.createElement('p');
  nPages.textContent = book.nPages;

  const status = document.createElement('div') ;
  status.addEventListener('click', () => {
    status.classList.toggle('read');
  });

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(nPages);
  card.appendChild(status);

  myLibrary.push(card);
}

function displayBooks(library) {
  const container = document.querySelector('.container');
  library.forEach((book) => {
    container.appendChild(book);
  });
}

addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkien', 295, true));
addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkien', 295, true));
addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkien', 295, true));
addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkien', 295, true));
displayBooks(myLibrary);

function openForm() {
  document.querySelector('#form').style.display = 'block';
  console.log('there');
}

function closeForm() {
  document.querySelector('#form').style.display = 'none';
  console.log('here');
}

function submitForm() {
  
}
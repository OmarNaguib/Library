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

  const icons=document.createElement('div');
  icons.classList.add("icons")

  const readButton = document.createElement('button') ;
  readButton.classList.add("read")
  const pictureDiv=document.createElement('div')
  readButton.appendChild(pictureDiv)
  readButton.addEventListener('click', () => {
    readButton.classList.toggle('true');
  });

  const deleteButton = document.createElement('button') ;
  deleteButton.classList.add("delete")
  const pictureDiv2=document.createElement('div')
  deleteButton.appendChild(pictureDiv2)
  deleteButton.dataset.key=myLibrary.length
  deleteButton.addEventListener('click', (e) => {
    myLibrary.splice(e.target.dataset.key,1)
    displayBooks(myLibrary)
  });

  icons.appendChild(deleteButton);
  icons.appendChild(readButton);
  

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(nPages);
  card.appendChild(icons);

  myLibrary.push(card);
}

function displayBooks(library) {
  const container = document.querySelector('.container');
  container.innerHTML=""
  library.forEach((book) => {
    container.appendChild(book);
  });
}



function openForm() {
  document.querySelector('#form').classList.toggle("hidden");

}

function closeForm() {
  const form=document.querySelector('#form');
  form.style.display = 'none'
  form.reset();
  console.log('here');
}

function getValues() {
  const inputs = document.querySelectorAll("input");
  const [title,author,nPages] = [...inputs].map(input=> input.value).slice(0,-1);
  const read = document.querySelector("input[type='checkbox']").checked;
  return [title,author,nPages,read];
}

function submitForm(e) {
  e.preventDefault();
  const values=getValues();
  closeForm()
  const book = new Book(...values)
  addBookToLibrary(book)
  displayBooks(myLibrary) 
}






const submitButton=document.querySelector("button.new");
submitButton.addEventListener("submit",submitForm)

// const deleteButton=document.querySelector("button.delete");
// submitButton.addEventListener("click",deleteCard)


addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkien', 295, true));
addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkien', 295, true));
addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkien', 295, true));
addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkien', 295, true));
displayBooks(myLibrary);
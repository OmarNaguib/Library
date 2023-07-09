import firebase from "./firebase";

const myLibrary = [];

class Book {
  constructor(title, author, nPages, read) {
    this.title = title;
    this.author = author;
    this.nPages = nPages;
    this.read = read;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function createDivs(book) {
  const title = document.createElement("h3");
  title.textContent = book.title;

  const author = document.createElement("p");
  author.textContent = book.author;

  const nPages = document.createElement("p");
  nPages.textContent = book.nPages;

  const icons = document.createElement("div");
  icons.classList.add("icons");

  return [title, author, nPages, icons];
}

function createReadButton(index) {
  const readButton = document.createElement("button");
  readButton.classList.add("read");
  const pictureDiv = document.createElement("div");
  readButton.appendChild(pictureDiv);
  if (myLibrary[index].read) {
    readButton.classList.add("true");
  }
  readButton.addEventListener("click", () => {
    myLibrary[index].read = !myLibrary[index].read;
    readButton.classList.toggle("true");
  });
  return readButton;
}

function createDeleteButton(index) {
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  const pictureDiv2 = document.createElement("div");
  deleteButton.appendChild(pictureDiv2);
  deleteButton.dataset.key = index;
  deleteButton.addEventListener("click", (e) => {
    myLibrary.splice(e.target.dataset.key, 1);
    displayBooks(myLibrary);
  });
  return deleteButton;
}

function createCard(book, index) {
  const card = document.createElement("div");
  const [title, author, nPages, icons] = createDivs(book);
  const readButton = createReadButton(index);
  const deleteButton = createDeleteButton(index);

  icons.appendChild(deleteButton);
  icons.appendChild(readButton);

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(nPages);
  card.appendChild(icons);

  return card;
}

function displayBooks(library) {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  let counter = 0;
  library.forEach((book) => {
    container.appendChild(createCard(book, counter));
    counter += 1;
  });
}

function openForm() {
  document.querySelector("#form").classList.toggle("hidden");
}

function closeForm() {
  const form = document.querySelector("#form");
  form.reset();
  form.classList.toggle("hidden");
}

function getValues() {
  const inputs = document.querySelectorAll("input");
  const [title, author, nPages] = [...inputs]
    .map((input) => input.value)
    .slice(0, -1);
  const read = document.querySelector("input[type='checkbox']").checked;
  return [title, author, nPages, read];
}

function submitForm(e) {
  e.preventDefault();
  const values = getValues();
  closeForm();
  const book = new Book(...values);
  addBookToLibrary(book);
  displayBooks(myLibrary);
}

const form = document.querySelector("form");
form.addEventListener("submit", submitForm);

const newButton = document.querySelector("button.new-button");
newButton.addEventListener("click", openForm);

const cancelButton = document.querySelector("button.cancel");
cancelButton.addEventListener("click", closeForm);

displayBooks(myLibrary);

let myLibrary = [];

function Book(title,author,nPages,read) {
    this.title=title;
    this.author=author;
    this.nPages=nPages;
    this.read=read
    this.info = () => `${this.title} by ${this.author}, ${this.nPages} pages, ${read}`

}

function addBookToLibrary() {
    // do stuff here
}

let book= new Book("The Hobbit","J.R.R. Tolkien",295,"not read yet")
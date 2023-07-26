let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.haveRead = function () {
  if (this.read) {
    return "read";
  } else {
    return "not read yet";
  }
};

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${
    this.pages
  } pages, ${this.haveRead()}`;
};

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const rhythmOfWar = new Book("Rhythm of War", "Brandon Sanderson", 1232, false);

// Test adding books to library
myLibrary.push(theHobbit);
myLibrary.push(rhythmOfWar);

// for (let books in myLibrary) {
//   for (let keys in Object.keys(myLibrary[books])) {
//     console.log(Object.values(myLibrary[books])[keys]);
//   }
// }

function addBookToLibrary() {}

function displayBooks() {
  const table = document.querySelector("table");
  for (let books in myLibrary) {
    const row = document.createElement("tr");
    table.appendChild(row);
    for (let keys in Object.keys(myLibrary[books])) {
      const data = document.createElement("td");

      row.appendChild(data).textContent = Object.values(myLibrary[books])[keys];
    }
  }
}

displayBooks();

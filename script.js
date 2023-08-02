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

// Add book to the library when user clicks the submit button
const submit = document.querySelector(".submit");
submit.addEventListener("click", event => {
  event.preventDefault();
  addBookToLibrary();
});

function addBookToLibrary() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  const book = new Book(title, author, pages, read);
  myLibrary.push(book);

  displayBooks();
}

const table = document.querySelector("tbody");

function displayBooks() {
  table.textContent = "";
  for (let books in myLibrary) {
    const row = document.createElement("tr");
    // Give each book unique id to help with removing them later
    row.setAttribute("id", books);
    table.appendChild(row);
    for (let keys in Object.keys(myLibrary[books])) {
      const data = document.createElement("td");
      row.appendChild(data).textContent = Object.values(myLibrary[books])[keys];
      if (Object.keys(myLibrary[books])[keys] === "read") {
        data.setAttribute("class", "status");
      }
    }
  }
}

displayBooks();

// When table is clicked, if it's in the 'Status' column, toggle text
table.addEventListener("click", e => {
  console.log(e.target.textContent);
  if (e.target.className === "status") {
    e.target.textContent === "true"
      ? (e.target.textContent = "false")
      : (e.target.textContent = "true");
  }
});

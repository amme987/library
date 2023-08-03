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
    const data = document.createElement("td");
    const input = document.createElement("input");
    input.setAttribute("type", "image");
    input.setAttribute("src", "delete.png");
    // Give each book unique id to help with removing them later
    row.setAttribute("id", books);
    table.appendChild(row);
    // Put book info in row
    for (let keys in Object.keys(myLibrary[books])) {
      const data = document.createElement("td");
      row.appendChild(data).textContent = Object.values(myLibrary[books])[keys];
      if (Object.keys(myLibrary[books])[keys] === "read") {
        data.setAttribute("class", "status");
      }
    }
    // 'Delete' column
    row.appendChild(data).appendChild(input);
    // image.setAttribute("class", "delete");
  }
}

displayBooks();

// Change table elements
table.addEventListener("click", e => {
  let id;
  // If clicked in the 'Status' column, toggle status by changing it in myLibrary[]
  if (e.target.className === "status") {
    id = e.target.parentElement.id;
    if (e.target.textContent === "true") {
      myLibrary[id].read = false;
    } else {
      myLibrary[id].read = true;
    }
  }
  // If clicked in the 'Delete' column, delete row by deleting book from myLibrary[]
  if (e.target.type === "image") {
    id = e.target.parentElement.parentElement.id;
    myLibrary.splice(id, 1);
    console.log(id);
  }
  displayBooks();
});

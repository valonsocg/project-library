// take user’s input and store the new book objects into an array.

const myLibrary = [
  new Book("The Hobbit", "J.R.R. Tolkien", 295, "not"),
  new Book("The Hobbit2", "J.R.R. Tolkien2", 296, "yes"),
];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, read ? ${this.isRead}`;
  };
}

function addBookToLibrary(title, author, pages, isRead) {
  let newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
  displayBooks();
}

function displayBooks() {
  const books = document.querySelector(".books");
  books.textContent = "";

  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    const newBook = document.createElement("div");
    bookCard.classList.add("book-card");
    newBook.classList.add("new-book");
    newBook.textContent = book.info();
    books.appendChild(bookCard);
    bookCard.appendChild(newBook);
  });
}

displayBooks();

// Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages

const addNewBookBtn = document.querySelector("#addNewBook");
const newBookDialog = document.querySelector("#dialog");
const outputBox = document.querySelector("output");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");

const confirmBtn = document.querySelector("#confirmBtn");

//show dialog
addNewBookBtn.addEventListener("click", () => {
  newBookDialog.showModal();
});

//cancel button
// newBookDialog.addEventListener("close", (e) => {
//   outputBox.value =
//     newBookDialog.returnValue === "default"
//       ? "no return value"
//       : `ReturnValue: ${newBookDialog.returnValue}`;
// });

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const selectedRadio = document.querySelector(
    '#radio-read input[type="radio"]:checked'
  );
  addBookToLibrary(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    selectedRadio ? selectedRadio.value : "not"
  );
  newBookDialog.close();
});

// take user’s input and store the new book objects into an array.

const myLibrary = [
  new Book("The Hobbit", "J.R.R. Tolkien", 295, "no"),
  new Book("The Lord of the Rings", "J.R.R. Tolkien", 596, "yes"),
];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, did you read it ? ${this.isRead}`;
  };
}

Book.prototype.toggleReadStatus = function () {
  this.isRead = this.isRead === "yes" ? "no" : "yes";
};

function addBookToLibrary(title, author, pages, isRead) {
  let newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
  displayBooks();
}

function displayBooks() {
  const books = document.querySelector(".books");
  books.textContent = "";

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    const newBook = document.createElement("div");
    const deleteBookBtn = document.createElement("button");
    const toggleRead = document.createElement("button");

    deleteBookBtn.classList.add("delete-book-btn");
    toggleRead.classList.add("toggle-status");

    toggleRead.setAttribute("data-toggle-index", index);
    deleteBookBtn.setAttribute("data-index", index);

    bookCard.classList.add("book-card");
    newBook.classList.add("new-book");

    toggleRead.textContent =
      book.isRead === "yes" ? "Mark as Not Read" : "Mark as Read";
    if (toggleRead.textContent === "Mark as Not Read") {
      toggleRead.classList.add("gray-toggle");
    } else {
      toggleRead.classList.remove("gray-toggle");
    }
    deleteBookBtn.textContent = "X";
    newBook.textContent = book.info();

    books.appendChild(bookCard);
    bookCard.appendChild(newBook);
    bookCard.appendChild(deleteBookBtn);
    bookCard.appendChild(toggleRead);
  });

  const deleteBookBtns = document.querySelectorAll(".delete-book-btn");
  deleteBookBtns.forEach((button) => {
    button.addEventListener("click", () => {
      const index = button.getAttribute("data-index");
      deleteBook(index);
      displayBooks();
    });
  });

  const toggleReadBtns = document.querySelectorAll(".toggle-status");
  toggleReadBtns.forEach((button) => {
    button.addEventListener("click", () => {
      const toggleIndex = button.getAttribute("data-toggle-index");
      const bookToToggle = myLibrary[toggleIndex];
      bookToToggle.toggleReadStatus();
      displayBooks();
    });
  });
}

function deleteBook(index) {
  myLibrary.splice(index, 1);
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
const cancelBtn = document.querySelector("#cancelBtn");

//show dialog
addNewBookBtn.addEventListener("click", () => {
  newBookDialog.showModal();
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (newBookDialog.querySelector("form").reportValidity()) {
    const selectedRadio = document.querySelector(
      '#radio-read input[type="radio"]:checked'
    );
    addBookToLibrary(
      titleInput.value,
      authorInput.value,
      pagesInput.value,
      selectedRadio ? selectedRadio.value : "no"
    );
    newBookDialog.querySelector("form").reset();
    newBookDialog.close();
  }
});

cancelBtn.addEventListener("click", () => {
  newBookDialog.querySelector("form").reset();
  newBookDialog.close();
});

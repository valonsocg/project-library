# 📚 Library Management System Assignment

## 📋 Assignment Overview

In this assignment, you'll build a simple library management system that allows users to add, display, and manage books. The system will be implemented using HTML, CSS, and JavaScript. Below are the steps and requirements for the assignment.

---

## 🛠️ Requirements

1. **Setup Project**

   - Create a project with skeleton HTML, CSS, and JavaScript files.
   - Ensure that your project structure is organized and ready for development.

2. **Book Object Storage**

   - Create a `Book` constructor function.
   - Initialize an array to store book objects.
   - Implement a function `addBookToLibrary` that adds a new book to this array based on user input.

3. **Display Books**

   - Implement a function to loop through the array and display each book on the page.
   - Use a visually appealing format such as cards or a table to present the book details.

4. **Add New Book Form**

   - Include a “NEW BOOK” button that opens a form for users to input book details: title, author, number of pages, and read status.
   - Use a modal or dialog to display this form. Ensure to handle form submission with `event.preventDefault()` to prevent default form behavior.

5. **Remove Book**

   - Add a button on each book’s display to remove the book from the library.
   - Use data attributes to associate DOM elements with book objects for easy manipulation.

6. **Toggle Read Status**
   - Implement a function to toggle the read status of a book.
   - Add a button to each book card that changes its read status between “Read” and “Not Read.”

---

## 🖼️ Example Layout

### 📖 Book Card

- **Title**: The book's title
- **Author**: The author's name
- **Pages**: Number of pages
- **Status**: Read/Not Read

### 🛠️ Features

- **Add New Book**: Button to open the form
- **Remove Book**: Button to delete a book
- **Toggle Read Status**: Button to change read status

---

## 💡 Tips

- **Form Handling**: Use `event.preventDefault()` in the form submission handler to prevent the default form submission.
- **Dynamic Updates**: Ensure that changes to the book list are reflected immediately on the page without requiring a page refresh.
- **Styling**: Use CSS to create a modern and visually appealing design for the book cards and buttons.

---

## 📚 Deliverables

- **HTML File**: Basic structure of the page.
- **CSS File**: Styling for the book cards and form.
- **JavaScript File**: Functionality for managing books and handling form interactions.

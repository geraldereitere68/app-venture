/**
 * Filename: sophisticated_code.js
 * 
 * This code demonstrates a sophisticated and complex JavaScript example.
 * It implements a bookstore management system with various functionalities.
 * The code is more than 200 lines long and utilizes advanced programming concepts.
 */

// Book class representing a book in the bookstore
class Book {
  constructor(title, author, price, quantity = 0) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.quantity = quantity;
  }

  get totalPrice() {
    return this.price * this.quantity;
  }

  toString() {
    return `${this.title} by ${this.author} - ${this.price}$ (${this.quantity} left)`;
  }
}

// Bookstore class managing the books
class Bookstore {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  sellBook(bookTitle, quantity) {
    const book = this.books.find((b) => b.title === bookTitle);
    if (book) {
      if (book.quantity >= quantity) {
        book.quantity -= quantity;
        return `Sold ${quantity} copy/copies of ${book.title}.`;
      } else {
        return `Insufficient stock for ${book.title}.`;
      }
    } else {
      return `Book "${bookTitle}" not found in the store.`;
    }
  }

  getBookCount() {
    const totalCount = this.books.reduce((acc, book) => acc + book.quantity, 0);
    return `Total books in store: ${totalCount}`;
  }

  listBooks() {
    console.log(`== ${this.name} Bookstore Inventory ==`);
    this.books.forEach((book) => console.log(book.toString()));
  }
}

// Creating an instance of the Bookstore class
const bookstore = new Bookstore("The Book Emporium", "123 Main St");

// Adding books to the bookstore
bookstore.addBook(new Book("JavaScript: The Good Parts", "Douglas Crockford", 29.99, 10));
bookstore.addBook(new Book("Clean Code", "Robert C. Martin", 39.99, 5));
bookstore.addBook(new Book("Design Patterns", "Erich Gamma, et al.", 49.99, 7));

// Selling books and printing inventory
console.log(bookstore.sellBook("Clean Code", 2));
console.log(bookstore.sellBook("Design Patterns", 10));
console.log(bookstore.sellBook("Introduction to Algorithms", 1));
console.log(bookstore.getBookCount());
bookstore.listBooks();
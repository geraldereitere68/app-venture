/*
   Filename: ComplexCode.js
   Description: This code is an elaborate and complex implementation that showcases various advanced JavaScript features.
   It demonstrates a simulated online shopping cart system with full CRUD operations for managing items, calculating prices, and tracking inventory.

   Author: AI Assistant
   Date: September 2023
*/

// Define a class representing an item in the shopping cart
class CartItem {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.price * this.quantity;
  }
}

// Define a class representing the shopping cart
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, quantity) {
    const item = new CartItem(name, price, quantity);
    this.items.push(item);
  }

  removeItemByName(name) {
    this.items = this.items.filter((item) => item.name !== name);
  }

  updateQuantityByName(name, quantity) {
    this.items.forEach((item) => {
      if (item.name === name) {
        item.quantity = quantity;
      }
    });
  }

  clearCart() {
    this.items = [];
  }

  getTotalItemCount() {
    let count = 0;
    this.items.forEach((item) => {
      count += item.quantity;
    });
    return count;
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.items.forEach((item) => {
      totalPrice += item.getTotalPrice();
    });
    return totalPrice;
  }

  displayCart() {
    console.log('---------- Shopping Cart ----------');
    this.items.forEach((item) => {
      console.log(`Item: ${item.name}`);
      console.log(`Price: $${item.price} | Quantity: ${item.quantity}`);
      console.log(`Total Price: $${item.getTotalPrice()}`);
      console.log('-----------------------------------');
    });
    console.log(`Total Items: ${this.getTotalItemCount()}`);
    console.log(`Total Price: $${this.getTotalPrice()}`);
  }
}

// Create a shopping cart instance
const cart = new ShoppingCart();

// Add some items to the cart
cart.addItem('Shirt', 25, 2);
cart.addItem('Pants', 40, 1);
cart.addItem('Shoes', 80, 1);

// Update quantity of an item
cart.updateQuantityByName('Shirt', 3);

// Remove an item from the cart
cart.removeItemByName('Pants');

// Display the final cart
cart.displayCart();

// Perform CRUD operations on the shopping cart
cart.addItem('Hat', 15, 2);
cart.updateQuantityByName('Shoes', 2);
cart.displayCart();
cart.clearCart();
cart.displayCart();
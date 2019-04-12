/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var numRowsInTable = table.rows.length;
  for (var i  = 0; i < numRowsInTable.length; i++){
    table.deleteRow(i);
  } 
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  var tableBody = table.getElementsByTagName('tbody')[0];

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  var items = cart.items;
  for(var i = 0; i < items.length; i++){
    console.log(items[i]);
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.innerHTML  = '<a href="#"> X </a>';
    trEl.appendChild(tdEl);
    tdEl = document.createElement('td');
    tdEl.textContent = `${items[i].product}`;
    trEl.appendChild(tdEl);
    tdEl = document.createElement('td');
    tdEl.textContent  = `${items[i].quantity}`;
    trEl.appendChild(tdEl);
    tableBody.appendChild(trEl);
  }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table


}

// This will initialize the page and draw the cart on screen
renderCart();

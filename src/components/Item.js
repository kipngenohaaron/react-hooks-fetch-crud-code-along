import React from "react";

function Item({ item, onToggleCart, onDeleteItem }) {
  // Function to handle the "Add to Cart" or "Remove from Cart" button click
  function handleToggleCartClick() {
    onToggleCart(item.id);
  }

  // Function to handle the "Delete" button click
  function handleDeleteItemClick() {
    onDeleteItem(item.id);
  }

  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button className={item.isInCart ? "remove" : "add"} onClick={handleToggleCartClick}>
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove" onClick={handleDeleteItemClick}>Delete</button>
    </li>
  );
}

export default Item;

import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [items, setItems] = useState([]);

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  // Function to handle adding a new item to the list
  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  // Function to handle updating the isInCart status of an item
  function handleToggleCart(itemId) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isInCart: !item.isInCart } : item
      )
    );
  }

  // Function to handle removing an item from the list
  function handleDeleteItem(itemId) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  // Filter the items based on the selected category
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onAddItem={handleAddItem} />
      <Filter
        category={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item
            key={item.id}
            item={item}
            onToggleCart={handleToggleCart}
            onDeleteItem={handleDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

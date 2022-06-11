import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import itemData from "../data/items";



function ShoppingList( ) {
  const [items, setItems] = useState(itemData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSear] = useState("")


  


  function onSearchChange(e){
   
    setSear(e.target.value)
    
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }


  function onItemFormSubmit(newItem){
    setItems([...items, newItem])
    
  }
  
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && item.name.includes(search)){
      return true;
    } else {

    return item.category === selectedCategory && item.name.includes(search);
    }
  });

  function renderitems(){
  const rendered = itemsToDisplay.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))
return rendered }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange = {onSearchChange} search = {search}/>
      <ul className="Items">
        {renderitems()}
      </ul>
    </div>
  );
}

export default ShoppingList;

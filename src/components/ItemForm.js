import React, { useState } from "react";
import { v4 as uuid } from "uuid";


function ItemForm({onItemFormSubmit}) {
  
const [formName, setFormName] = useState("")
const [formCategory, setFormCategory] = useState("Produce")


  function handleFormName(event){
    setFormName(event.target.value)
  }

  function handleFormCategory(event){
    setFormCategory(event.target.value)

  }


  function handleSubmit(){
    const newItem = {id:uuid(), name: formName, category: formCategory}
    return onItemFormSubmit(newItem);
  }

  return (
    <form className="NewItem" onSubmit = {handleSubmit}>
      <label>
        Name:
        <input type="text" name = "name" value={formName} onChange = {handleFormName}/>
      </label>

      <label>
        Category:
        <select name="category" value = {formCategory} onChange = {handleFormCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

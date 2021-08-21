import React, { useState, useContext } from 'react'
import { ItemsContext } from './ItemsContext'

const Inventory = () => {
 const [inventoryItems, setInventoryItems] = useState({
  inventory: [],
  cart: []
 })
 const [ items, setItems ] = useContext(ItemsContext)
 
 const handleClick = (item) => {
  setInventoryItems({ 
   inventory: removeItem(item),
   cart: [...inventoryItems.cart, item]
  })

  setItems({
   inventory: [...removeItem(item)],
   cart: [...items.cart, item]
  })
 }

 const removeItem = (item) => {
  const itemsArray = [...items.inventory]
  const newItemsArray = itemsArray.filter(value =>{
   return value !== item 
  })
  return newItemsArray
 }

 const renderItems = () => {
  return items.inventory.map(item => (
   <div key={item}>
    <p>
     {item} <button onClick={() => (handleClick(item))}>Add to Cart</button>
    </p>
   </div>
   ))}

 return (
  <div>
   <h1>Inventory</h1>
   {renderItems()}
  </div>
 )
}

export default Inventory
import React, { useState, useContext } from 'react'
import { ItemsContext } from './ItemsContext'

const Cart = () => {
 const [items, setItems] = useContext(ItemsContext)
 const [cartItems, setCartItems] = useState({
  cart: [],
  inventory: []
 })
 
 const handleClick = (item) => {
  setCartItems({ 
   cart: removeItem(item),
   inventory: [...cartItems.inventory, item]
  })

  setItems({
   cart: [...removeItem(item)],
   inventory: [...items.inventory, item]
  })
 }

 const removeItem = (item) => {
  const itemsArray = [...items.cart]
  const newItemsArray = itemsArray.filter(value =>{
   return value !== item 
  })
  return newItemsArray
 }

 const renderItems = () => {
  return items.cart.map(item => (
   <div key={item}>
    <p>
     {item} <button onClick={()=> (handleClick(item)) }>Remove from Cart</button>
    </p>
    <br />
   </div>
   ))}

 return (
  <div style={{marginTop: '100px', marginBottom: '100px'}}>
   <h1>Cart</h1>
   {renderItems()}
  </div>
 )
}

export default Cart
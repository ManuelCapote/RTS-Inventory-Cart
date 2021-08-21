import React, { useState, createContext } from 'react'

export const ItemsContext = createContext()

export const ItemsProvider = (props) => {
 const [items, setItems] = useState({
  inventory: ['Pants ', 'Shirts ', 'Shoes '],
  cart: []
 })

 return (
  <ItemsContext.Provider value={[items, setItems]}>
   {props.children}
  </ItemsContext.Provider>
 )
}
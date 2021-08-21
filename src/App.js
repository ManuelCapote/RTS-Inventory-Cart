import React from 'react'
import './App.css'
import Inventory from './Components/Inventory'
import Cart from './Components/Cart'
import { ItemsProvider } from './Components/ItemsContext'

function App() {
  return (
    <ItemsProvider>
      <div className='App'>
        <Inventory />
        <Cart />
      </div>
    </ItemsProvider>
  )
}

export default App
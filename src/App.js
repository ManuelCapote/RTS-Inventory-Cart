import React from 'react'
import './App.css'
import Inventory from './Components/Inventory'
import Cart from './Components/Cart'
import { ItemsProvider } from './Components/ItemsContext'
import SideNotes from './Components/SideNotes'

function App() {
  return (
    <ItemsProvider>
      <div className='App'>
        <Inventory />
        <Cart />
        <br />
                <SideNotes />
      </div>
    </ItemsProvider>
  )
}

export default App
import React from "react"
import "./App.css"
import "semantic-ui-css/semantic.min.css"
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ListaProductos/ItemListContainer"





function App() {
  
  return (
    <div>
    <Navbar />
    <div className="app">
     
      <ItemListContainer />
    </div>
    </div>
  )
}

export default App

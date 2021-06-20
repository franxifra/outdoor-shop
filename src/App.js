import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Navbar from "./components/Navbar/Navbar";
import Greetings from "./components/ListaProductos/ListaProductos";





function App() {
  
  return (
    <div>
    <Navbar />
    <div className="app">
     
      <Greetings />
    </div>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// css
import "semantic-ui-css/semantic.min.css";
import "./App.css";


// components
import Navbar from "./components/Navbar/Navbar";
import Cart from "./views/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ItemListContainer}/>
         
        <Route path="/categorias/:nombre" component={ItemListContainer}/>

        
        <Route path="/cart" component={Cart}/>
          
        <Route path="/item/:id" component={ItemDetailContainer}/>
         
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Navbar from './components/Navbar';
import Greetings from './components/Greetings';



function App() {
  return (
    <div className="app">
    <Navbar/>
    <Greetings saludos="Bienvenidos al sitio outdoor"/>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Navbar from "./components/Navbar/Navbar";
import Greetings from "./Greetings/Greetings";





function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Greetings />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import "./img.svg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Mesonero from "./components/Mesonero.jsx";
import Cocina from "./components/Cocina.jsx";
import Logo from './Logo-burgerQueen.png'

function App() {
  
  return (
    <div className="navbar">
    <div className ="buttonBar">
    <Router>      
      <button className="navButton">
        <Link to="/home">Home</Link>
      </button>
      <button className="navButton">
        <Link to="/mesonero">Mesonero</Link>
      </button>
      <button className="navButton">
        <Link to="/cocina">Cocina</Link>
      </button>     

      <Route exact path="/app" component={App} />
      <Route path="/cocina" component={Cocina} />
      <Route path="/mesonero" component={Mesonero} />

    </Router>
    </div>
    <div className="logo">
    <img src={Logo} alt='' ></img> 
    </div>

    </div>
  );
}

export default App;

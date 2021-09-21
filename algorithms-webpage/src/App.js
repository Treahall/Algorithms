import React from 'react';
import ReactiveDrawer from "./components/drawer.component"
import "fontsource-roboto";
import {BrowserRouter as Router, Route} from "react-router-dom"
import './App.css';
import AlgorithmList from "./components/algorithm-list.js";

function App() {
  return(
    <Router>
      <div className="container">
        <ReactiveDrawer />
      
      <Route path="/" component={AlgorithmList} />
      </div>
    </Router>
  );
}

export default App;

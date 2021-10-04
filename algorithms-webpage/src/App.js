import React from 'react';
import ReactiveDrawer from "./components/drawer.component.js"
import "fontsource-roboto";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import AlgorithmList from "./components/algorithm-list.js";
import InsertionSortComponent from "./components/insertion_sort.js";
import MergeSortComponent from "./components/merge_sort.js";
import QuickSortComponent from "./components/quick_sort.js";
import BubbleSortComponent from "./components/bubble_sort.js";

function App() {
  return(
    <Router>
      <div className="App">
        <ReactiveDrawer />
        <Switch>

          <Route path="/" exact component={AlgorithmList} />
          <Route path="/insertion_sort" component={InsertionSortComponent} />
          <Route path="/merge_sort" component={MergeSortComponent} />
          <Route path="/bubble_sort" component={BubbleSortComponent} />
          <Route path="/quick_sort" component={QuickSortComponent} />

        </Switch>

      </div>
    </Router>
  );
}

export default App;

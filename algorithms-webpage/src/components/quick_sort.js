import React, {Component, useState, useEffect} from 'react';
import "fontsource-roboto";
import axios from 'axios';
import VisualizerComponent from './visualizer.component';

function QuickSortComponent(props){
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  });

  function getData(){
    axios.get('http://localhost:5000/algorithms')
      .then(res => {
        setData(res.data[2]);
      })
  }


  return(
    <div>
      <div className = "container">
        <h3 style={{textAlign: "center"}}> Data Received: </h3>
        <ul>
          <li> {data.name} </li>
          <li> <p> {data.description} </p> </li>
          <li> {data.best_case} </li>
          <li> {data.average_case} </li>
          <li> {data.worst_case} </li>
         </ul>
      </div>
      <VisualizerComponent algorithm="quick-sort"/>
    </div>
  );
}

//TODO: connect graphics to insertion_sort function.
//Could use react spring for the animations.
//General method for connection:
//1. Start button on screen to signal animation start.
//2. Run operation of insertion_sort.
//  2a. Animation should show which element is being sorted (different color)
//  2b. Elements that are being compared to the element being sorted should be another color.
//  2c. Swap elements.
//3. Repeat until insertion_sort is done.

//To simplify things, we could just add in an animation, loop it, and explain
//what's happening. We would do this with small datasets.
//We will do the above method for large datasets (1000+ numbers);
//However, I'm predicting that we will run into lag issues. Not sure how we will fix that.


export default QuickSortComponent;

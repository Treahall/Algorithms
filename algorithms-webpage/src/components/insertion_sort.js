import React, {Component, useState, useEffect} from 'react';
import "fontsource-roboto";
import axios from 'axios';
import VisualizerComponent from './visualizer.component';

function InsertionSortComponent(props){
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  });

  function getData(){
    axios.get('https://learn-algorithms.herokuapp.com/algorithms')
      .then(res => {
        setData(res.data[1]);
      })
  }

<<<<<<< Updated upstream
  function insertion_sort(A){
    for(let i = 1; i < A.length; i++){
      let key = A[i];
      let j = i - 1;
      while(j >= 0 && A[j] > key){
        A[j + 1] = A[j];
        j = j - 1;
      }
      A[j + 1] = key
    }
  }
=======
>>>>>>> Stashed changes

  return(
    <div>
      <div>
        <h3 style={{textAlign: "center"}}> {data.name} </h3>
        <h4> Description: </h4>
        <p style={{textAlign: "center"}}> {data.description} </p>
        <h4> Time Complexity: </h4>
        <p> Best Case: {data.best_case} </p>
        <p> Average Case: {data.average_case} </p>
        <p> Worst Case: {data.worst_case} </p>
      </div>
      <VisualizerComponent algorithm="insertion-sort" />
      <div>
        <h3>Write your own insertion sort implementation below!</h3>
        <iframe src="https://trinket.io/embed/python/7826b47750?runOption=run" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
      </div>
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


export default InsertionSortComponent;

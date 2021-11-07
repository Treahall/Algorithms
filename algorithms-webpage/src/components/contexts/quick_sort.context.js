import React, { useState, useEffect } from 'react';
import "fontsource-roboto";
import axios from 'axios';
import Visualizer from '../visualizer.component'

function QuickSortContext(props){
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  });

  function getData(){
    axios.get('https://learn-algorithms.herokuapp.com/algorithms')
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
      <Visualizer algorithm="quick-sort"/>
      <div>
        <h3>Write your own quick sort implementation below!</h3>
        <iframe src="https://trinket.io/embed/python/f91fbc98bb?runOption=run" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
      </div>
    </div>

    //TODO: Add bottom drawer with trinket component
  );
}

export default QuickSortContext;

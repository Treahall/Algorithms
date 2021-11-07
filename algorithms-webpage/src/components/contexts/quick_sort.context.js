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
      <Visualizer algorithm="quick-sort"/>
    </div>

    //TODO: Add bottom drawer with trinket component
  );
}

export default QuickSortContext;

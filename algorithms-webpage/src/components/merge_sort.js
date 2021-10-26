import React, {Component, useState, useEffect} from 'react';
import "fontsource-roboto";
import axios from 'axios';
import VisualizerComponent from './visualizer.component';
import {Button} from '@mui/material';

function MergeSortComponent(props){
  const [data, setData] = useState([]);
  const [files, setFile] = useState([]);

  useEffect(() => {
    getData();
  });

  function getData(){
    axios.get('https://learn-algorithms.herokuapp.com/algorithms')
      .then(res => {
        setData(res.data[0]);
      })
  }

  const handleFileUpload = (event) => {
    setFile(files.push(event.target.files[0]));
    axios.put('localhost:5000/users/put/6176d936b4e24fb9ee53e5c3', {
        file: files
    })
      .then(res =>{
        console.log(res);
      })
      .catch(err =>{
        console.log(err);
      })
  };

  function handleFileDownload(){
    return;
  }

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
      <VisualizerComponent algorithm="merge-sort" />
      <div>
        <h3>Write your own merge sort implementation below!</h3>
        <input
        type="file"
        accept=".zip, .py"
        style={{ display: 'none' }}
        id="upload-button"
        onChange={handleFileUpload}
        />
        <label htmlFor="upload-button">
          <Button sx={{m: '0px', size: {xs: 'small'}}} component="span">
            Upload
            </Button>
        </label>
        <Button onClick={handleFileDownload} sx={{m: '0px', size: {xs: 'small'}}}>
            Download
        </Button>
        <iframe src="https://trinket.io/embed/python/1f094fdc0f?runOption=run?" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
      </div>
    </div>
  );
}


export default MergeSortComponent;

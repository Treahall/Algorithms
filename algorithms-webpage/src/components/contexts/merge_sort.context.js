import React, { useState, useEffect} from 'react';
import "fontsource-roboto";
import axios from 'axios';
import Visualizer from '../visualizer.component'
import {Button} from '@mui/material';

function MergeSortContext(props){
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  });

  function getData(){
    axios.get('https://learn-algorithms.herokuapp.com/algorithms')
      .then(res => {
        setData(res.data[0]);
      })
  }

  function uploadFile(paramFile){
    let user = document.getElementById("welcome_box").innerHTML.slice(9, -1);
    if (user == "") console.log("ERROR: no user logged in");
    else{
      axios.get('https://learn-algorithms.herokuapp.com/users')
      .then(res => {
        for(let i = 0; i < res.data.length; i++){
          if (res.data[i].username == user){
            axios.put(`https://learn-algorithms.herokuapp.com/users/put/${res.data[i]._id}`, {
              mergeFile: paramFile
            })
              .then(res => {
                console.log(res);
              });
          }
        }
      });
    }
  }

  const onChange = e => {
    const fileReader = new FileReader();
    fileReader.onload = function (){
      let fileName = e.target.files[0].name;
      uploadFile([fileReader.result, fileName]);
    }
    fileReader.readAsText(e.target.files[0]);
  };

  function handleFileDownload(){
    let user = document.getElementById("welcome_box").innerHTML.slice(9, -1);
    if (user == "") console.log("ERROR: no user logged in")
    else{
      axios.get('https://learn-algorithms.herokuapp.com/users')
      .then(res => {
        for(let i = 0; i < res.data.length; i++){
          if (res.data[i].username == user){
            let id = res.data[i]._id;
            axios.get(`https://learn-algorithms.herokuapp.com/users/${id}`)
              .then(res =>{
                console.log(res.data.mergeFile);
                const newFile = new Blob([res.data.mergeFile[0]], {type: "octet-stream"});
                const href = URL.createObjectURL(newFile);
                const a = Object.assign(document.createElement('a'),{
                  href, 
                  style:"display:none", 
                  download:`${res.data.mergeFile[1]}`,
                });
                document.body.appendChild(a);

                a.click();
                URL.revokeObjectURL(href);
                a.remove();
              });
          }
        }
      });
    }
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
      <Visualizer algorithm="merge-sort" />
      <div>
        <h3>Write your own merge sort implementation below!</h3>
        <input
          type="file"
          accept=".py"
          style={{ display: 'none' }}
          id="upload-button"
          onChange={onChange}
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

    //TODO: Add bottom drawer with trinket component
  );
}

export default MergeSortContext;

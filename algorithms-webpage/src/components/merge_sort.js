import React, { useState, useEffect} from 'react';
import "fontsource-roboto";
import axios from 'axios';
import VisualizerComponent from './visualizer.component';
import {Button} from '@mui/material';


function MergeSortComponent(props){
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

  function uploadFile(paramFile, sortName){
    let user = document.getElementById("welcome_box").innerHTML.slice(9, -1);
    if (user == "") console.log("ERROR: no user logged in");
    else{
      axios.get('https://learn-algorithms.herokuapp.com/users')
      .then(res => {
        for(let i = 0; i < res.data.length; i++){
          if (res.data[i].username == user){
            axios.put(`https://learn-algorithms.herokuapp.com/users/put/${res.data[i]._id}`, {
              file: [paramFile, sortName]
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
                const newFile = new Blob([res.data.file[0]], {type: "octet-stream"});
                const href = URL.createObjectURL(newFile);
                const a = Object.assign(document.createElement('a'),{
                  href, 
                  style:"display:none", 
                  download:`${res.data.file[1]}`,
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
  );
}


export default MergeSortComponent;

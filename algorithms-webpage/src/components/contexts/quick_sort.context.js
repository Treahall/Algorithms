import React, { useState, useEffect } from 'react';
import "fontsource-roboto";
import axios from 'axios';
import Visualizer from '../visualizer.component'
import {Box, Typography, Button} from '@mui/material';

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

  function uploadFile(paramFile){
    let user = document.getElementById("welcome_box").innerHTML.slice(9, -1);
    if (user == "") console.log("ERROR: no user logged in");
    else{
      axios.get('https://learn-algorithms.herokuapp.com/users')
      .then(res => {
        for(let i = 0; i < res.data.length; i++){
          if (res.data[i].username == user){
            axios.put(`https://learn-algorithms.herokuapp.com/users/put/${res.data[i]._id}`, {
              file: paramFile
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

  const AlgorithmInfo = (
    <Box>
      <Typography variant='h1' fontSize={50} color='#B7F0F9' marginBottom='.25em' >
        {data.name}
      </Typography>
      <Typography variant='subtitle' fontSize={20} color='#8FB0B5' >
        {data.description}
      </Typography>
      <Typography variant='h2' fontSize={30} paddingTop='.9em' paddingBottom='.9em' color='#A3D2D9'>
        Algorithm Analysis In Big O Notation
      </Typography>
      <Typography variant='h3' fontSize={20} paddingBottom='.25em' color='#8FB0B5' >
        Best Case: {data.best_case}
      </Typography>

      <Typography variant='h3' fontSize={20} paddingBottom='.25em' color='#8FB0B5' >
        Average Case: {data.average_case}
      </Typography>

      <Typography variant='h3' fontSize={20} paddingBottom='1em' color='#8FB0B5' >
        Worst Case: {data.worst_case}
      </Typography>
    </Box>
  )

  return(
    <Box>
      {AlgorithmInfo}

      <Visualizer algorithm="quick-sort"/>
      <div>
        <h3>Write your own quick sort implementation below!</h3>
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
        <iframe src="https://trinket.io/embed/python/f91fbc98bb?runOption=run" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
      </div>
    </Box>

    //TODO: Add bottom drawer with trinket component
  );
}

export default QuickSortContext;

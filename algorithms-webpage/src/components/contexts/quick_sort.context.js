import React, { useState, useEffect } from "react";
import "fontsource-roboto";
import axios from "axios";
import Visualizer from "../visualizer.component";
import { Box, Typography, Button } from "@mui/material";
import { currentUser } from "netlify-identity-widget";

const netlifyIdentity = window.netlifyIdentity;

function QuickSortContext(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  });

  //gets algorithm data
  function getData() {
    axios
      .get("https://learn-algorithms.herokuapp.com/algorithms")
      .then((res) => {
        setData(res.data[2]);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  function uploadFile(paramFile){
    let user = netlifyIdentity.currentUser();
    if (user == null) console.log("ERROR: no user logged in");
    else{
      axios.get('https://learn-algorithms.herokuapp.com/users')
      .then(res => {
        for(let i = 0; i < res.data.length; i++){
          if (res.data[i].username == user.user_metadata.full_name){
            axios.put(`https://learn-algorithms.herokuapp.com/users/put/${res.data[i]._id}`, {
              quickFile: paramFile
            })
              .then(res => {
                console.log(res);
              });
          }
        }
      });
    }
  }

  //Converts a file's contents to a string and calls uploadFile
  const onChange = (e) => {
    const fileReader = new FileReader();
    fileReader.onload = function () {
      let fileName = e.target.files[0].name;
      uploadFile([fileReader.result, fileName]);
    };
    fileReader.readAsText(e.target.files[0]);
  };

  //download a file if a user is logged in
  function handleFileDownload(){
    let user = netlifyIdentity.currentUser();
    if (user == null) console.log("ERROR: no user logged in")
    else{
      axios.get('https://learn-algorithms.herokuapp.com/users')
      .then(res => {
        for(let i = 0; i < res.data.length; i++){
          if (res.data[i].username == user.user_metadata.full_name){
            let id = res.data[i]._id;
            axios
              .get(`https://learn-algorithms.herokuapp.com/users/${id}`)
              .then((res) => {
                if (res.data.quickFile[0] == "")
                  console.log("ERROR: no file found");
                else {
                  const newFile = new Blob([res.data.quickFile[0]], {
                    type: "octet-stream",
                  });
                  const href = URL.createObjectURL(newFile);
                  const a = Object.assign(document.createElement("a"), {
                    href,
                    style: "display:none",
                    download: `${res.data.quickFile[1]}`,
                  });
                  document.body.appendChild(a);

                  a.click();
                  URL.revokeObjectURL(href);
                  a.remove();
                }
              });
          }
        }
      })
    }
  }

  const AlgorithmInfo = (
    <Box>
      <Typography
        variant="h1"
        fontSize={50}
        color="#B7F0F9"
        marginBottom=".25em"
      >
        {data.name}
      </Typography>
      <Typography variant="subtitle" fontSize={20} color="#8FB0B5">
        {data.description}
      </Typography>
      <Typography
        variant="h2"
        fontSize={30}
        paddingTop=".9em"
        paddingBottom=".9em"
        color="#A3D2D9"
      >
        Algorithm Analysis In Big O Notation
      </Typography>
      <Typography
        variant="h3"
        fontSize={20}
        paddingBottom=".25em"
        color="#8FB0B5"
      >
        Best Case: {data.best_case}
      </Typography>

      <Typography
        variant="h3"
        fontSize={20}
        paddingBottom=".25em"
        color="#8FB0B5"
      >
        Average Case: {data.average_case}
      </Typography>

      <Typography
        variant="h3"
        fontSize={20}
        paddingBottom="1em"
        color="#8FB0B5"
      >
        Worst Case: {data.worst_case}
      </Typography>
    </Box>
  );

  return (
    <Box>
      {AlgorithmInfo}

      <Visualizer algorithm="quick-sort" />
      <div>
        <Typography variant="h2" fontSize={30} color="#B7F0F9">
          Practice your own quick sort implementation below
        </Typography>
        <input
          type="file"
          accept=".py"
          style={{ display: "none" }}
          id="upload-button"
          onChange={onChange}
        />
        <label htmlFor="upload-button">
          <Button
            sx={{ m: "0px", size: { xs: "small" }, color: "#8FB0B5" }}
            component="span"
          >
            Upload
          </Button>
        </label>
        <Button
          onClick={handleFileDownload}
          sx={{ m: "0px", size: { xs: "small" }, color: "#8FB0B5" }}
        >
          Download
        </Button>
        <iframe
          src="https://trinket.io/embed/python/f91fbc98bb?runOption=run"
          width="100%"
          height="500"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          allowfullscreen
        ></iframe>
      </div>
    </Box>

    //TODO: Add bottom drawer with trinket component
  );
}

export default QuickSortContext;

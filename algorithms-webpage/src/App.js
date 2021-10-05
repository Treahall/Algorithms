import React from 'react';
import "fontsource-roboto";
<<<<<<< HEAD
import {BrowserRouter as Router, 
    Route, Switch, Link} from "react-router-dom"
import { Menu } from '@mui/material';
import { AppBar, Container, ThemeProvider, createTheme, Button,
   Typography, IconButton, Toolbar } from '@mui/material'; 
=======
import {BrowserRouter as Router} from "react-router-dom"
import {createTheme} from '@mui/material';
>>>>>>> drawer-routing
import { purple, yellow } from '@mui/material/colors';
import './App.css';
import ResponsiveDrawer from "./components/drawer.component";
import MainBody from './components/mainbody.component';

const theme = createTheme({
  typography: {
      h2: {
        fontSize: 36
      }
  },
  palette: {
    primary: {
      main: purple[400],
    },
    secondary: {
      main: yellow[200],
    }
  }
})

function App() {
  return (
<<<<<<< HEAD
    <ResponsiveDrawer>
          
    </ResponsiveDrawer>
=======
    <Router>
      <ResponsiveDrawer>
        <MainBody>

        </MainBody>
      </ResponsiveDrawer>
    </Router>
>>>>>>> drawer-routing
  );
}

export default App;
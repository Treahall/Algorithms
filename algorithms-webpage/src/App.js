import React from 'react';
import ReactiveDrawer from "./components/drawer.component.js"
import "fontsource-roboto";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { Menu } from '@mui/material';
import { AppBar, Container, ThemeProvider, createTheme, Button,
   Typography, IconButton, Toolbar } from '@mui/material';
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
    <Router>
      <ResponsiveDrawer>
        <MainBody>

        </MainBody>
      </ResponsiveDrawer>
    </Router>



  );
}

export default App;

import logo from './logo.svg';
import "fontsource-roboto";
import {BrowserRouter as Router, Route} from "react-router-dom"
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
    <ResponsiveDrawer>
      <MainBody>

      </MainBody>
    </ResponsiveDrawer>
      


   
  );
}

export default App;

import logo from './logo.svg';
import "fontsource-roboto";
import {BrowserRouter as Router, Route} from "react-router-dom"
import { Menu } from '@material-ui/icons';
import { AppBar, Container, ThemeProvider, createTheme, Button, Typography, IconButton, Toolbar } from '@material-ui/core';
import { purple, yellow } from '@material-ui/core/colors';
import './App.css';
import AlgorithmList from "./components/algorithm-list.component";

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
    <br/>
      <Route path="/" exact component={AlgorithmList} />
    </Router>

  );
}

export default App;
